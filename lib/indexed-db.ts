/**
 * IndexedDB storage utility with localStorage fallback.
 * Allows storing and retrieving persistent user inputs, settings, and session state.
 */

const DB_NAME = "text_repeater_db"
const DB_VERSION = 1
const STORE_NAME = "user_state"

function isBrowser(): boolean {
  return typeof window !== "undefined"
}

// In-memory fallback map for environments where IndexedDB and localStorage are disabled or throw (e.g. strict Safari private mode)
const memoryFallbackMap = new Map<string, string>()
// In-memory write cache to prevent redundant writes
const writeCache = new Map<string, string>()

let dbPromise: Promise<IDBDatabase> | null = null

function getDB(): Promise<IDBDatabase> {
  if (!isBrowser()) {
    return Promise.reject(new Error("Not in browser"))
  }

  try {
    if (!window.indexedDB) {
      return Promise.reject(new Error("IndexedDB is not supported"))
    }
  } catch {
    return Promise.reject(new Error("IndexedDB access restricted"))
  }

  if (dbPromise) {
    return dbPromise
  }

  dbPromise = new Promise((resolve, reject) => {
    // 1-second timeout safeguard for Safari private mode hanging bug
    const timeoutId = setTimeout(() => {
      dbPromise = null
      reject(new Error("IndexedDB open timed out"))
    }, 1000)

    try {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION)

      request.onupgradeneeded = (event) => {
        try {
          const db = (event.target as IDBOpenDBRequest).result
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME)
          }
        } catch {
          // ignore upgrade errors
        }
      }

      request.onsuccess = (event) => {
        clearTimeout(timeoutId)
        const db = (event.target as IDBOpenDBRequest).result
        db.onclose = () => {
          dbPromise = null
        }
        resolve(db)
      }

      request.onerror = (event) => {
        clearTimeout(timeoutId)
        dbPromise = null
        reject((event.target as IDBOpenDBRequest).error)
      }

      request.onblocked = () => {
        clearTimeout(timeoutId)
        dbPromise = null
        reject(new Error("IndexedDB database blocked"))
      }
    } catch (err) {
      clearTimeout(timeoutId)
      dbPromise = null
      reject(err)
    }
  })

  return dbPromise
}

/**
 * Retrieve an item from IndexedDB, falling back to localStorage or memory fallback if IndexedDB fails.
 */
export async function getStoredItem<T>(key: string): Promise<T | null> {
  if (!isBrowser()) return null

  try {
    const db = await getDB()
    return await new Promise<T | null>((resolve) => {
      try {
        const tx = db.transaction(STORE_NAME, "readonly")
        const store = tx.objectStore(STORE_NAME)
        const req = store.get(key)

        req.onsuccess = () => {
          if (req.result !== undefined && req.result !== null) {
            resolve(req.result as T)
          } else {
            resolve(getLocalStorageFallback<T>(key))
          }
        }

        req.onerror = () => {
          resolve(getLocalStorageFallback<T>(key))
        }
      } catch {
        resolve(getLocalStorageFallback<T>(key))
      }
    })
  } catch {
    return getLocalStorageFallback<T>(key)
  }
}

/**
 * Store an item in IndexedDB, localStorage, and memory fallback.
 */
export async function setStoredItem<T>(key: string, value: T): Promise<void> {
  if (!isBrowser()) return

  let serialized: string
  try {
    serialized = JSON.stringify(value)
  } catch {
    return
  }

  // Update in-memory fallback
  memoryFallbackMap.set(key, serialized)

  // Deduplicate redundant writes: if the value hasn't changed, skip disk/db operations
  if (writeCache.get(key) === serialized) {
    return
  }
  writeCache.set(key, serialized)

  // Backup in localStorage immediately
  try {
    window.localStorage.setItem(`tr_${key}`, serialized)
  } catch {
    // Ignore quota or disabled errors
  }

  try {
    const db = await getDB()
    await new Promise<void>((resolve, reject) => {
      try {
        const tx = db.transaction(STORE_NAME, "readwrite")
        const store = tx.objectStore(STORE_NAME)
        const req = store.put(value, key)

        req.onsuccess = () => resolve()
        req.onerror = () => reject(req.error)
      } catch (err) {
        reject(err)
      }
    })
  } catch {
    // Graceful fallback to localStorage/memory done above
  }
}

/**
 * Remove an item from IndexedDB, localStorage, and memory fallback.
 */
export async function removeStoredItem(key: string): Promise<void> {
  if (!isBrowser()) return

  // Clear memory cache and fallback
  writeCache.delete(key)
  memoryFallbackMap.delete(key)

  try {
    window.localStorage.removeItem(`tr_${key}`)
  } catch {
    // Ignore
  }

  try {
    const db = await getDB()
    await new Promise<void>((resolve, reject) => {
      try {
        const tx = db.transaction(STORE_NAME, "readwrite")
        const store = tx.objectStore(STORE_NAME)
        const req = store.delete(key)

        req.onsuccess = () => resolve()
        req.onerror = () => reject(req.error)
      } catch (err) {
        reject(err)
      }
    })
  } catch {
    // Ignore
  }
}

function getLocalStorageFallback<T>(key: string): T | null {
  try {
    const item = window.localStorage.getItem(`tr_${key}`)
    if (item !== null) {
      return JSON.parse(item) as T
    }
  } catch {
    // Ignore localStorage errors
  }

  // Final fallback: in-memory map
  const memItem = memoryFallbackMap.get(key)
  if (memItem !== undefined) {
    try {
      return JSON.parse(memItem) as T
    } catch {
      return null
    }
  }

  return null
}
