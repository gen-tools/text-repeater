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

let dbPromise: Promise<IDBDatabase> | null = null

function getDB(): Promise<IDBDatabase> {
  if (!isBrowser() || !("indexedDB" in window)) {
    return Promise.reject(new Error("IndexedDB is not supported in this environment"))
  }

  if (dbPromise) {
    return dbPromise
  }

  dbPromise = new Promise((resolve, reject) => {
    try {
      const request = window.indexedDB.open(DB_NAME, DB_VERSION)

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME)
        }
      }

      request.onsuccess = (event) => {
        const db = (event.target as IDBOpenDBRequest).result
        db.onclose = () => {
          dbPromise = null
        }
        resolve(db)
      }

      request.onerror = (event) => {
        dbPromise = null
        reject((event.target as IDBOpenDBRequest).error)
      }

      request.onblocked = () => {
        dbPromise = null
        reject(new Error("IndexedDB database blocked"))
      }
    } catch (err) {
      dbPromise = null
      reject(err)
    }
  })

  return dbPromise
}

/**
 * Retrieve an item from IndexedDB, falling back to localStorage if IndexedDB fails.
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
          if (req.result !== undefined) {
            resolve(req.result as T)
          } else {
            // Fallback check in localStorage
            try {
              const localVal = window.localStorage.getItem(`tr_${key}`)
              if (localVal !== null) {
                resolve(JSON.parse(localVal) as T)
                return
              }
            } catch {
              // ignore localStorage errors
            }
            resolve(null)
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
 * Store an item in IndexedDB and localStorage (for fast synchronous backup).
 */
export async function setStoredItem<T>(key: string, value: T): Promise<void> {
  if (!isBrowser()) return

  // Backup in localStorage immediately
  try {
    window.localStorage.setItem(`tr_${key}`, JSON.stringify(value))
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
    // Graceful fallback to localStorage done above
  }
}

/**
 * Remove an item from IndexedDB and localStorage.
 */
export async function removeStoredItem(key: string): Promise<void> {
  if (!isBrowser()) return

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
    // Ignore
  }
  return null
}
