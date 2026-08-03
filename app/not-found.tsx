import Link from "next/link"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="mb-2 text-6xl font-extrabold tracking-tight text-primary">404</h1>
      <h2 className="mb-4 text-2xl font-bold tracking-tight">Page Not Found</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        We couldn't find the page you were looking for. It might have been moved, deleted, or never existed in the first place.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors shadow-sm"
      >
        <Home className="h-4 w-4" />
        Back to Home
      </Link>
    </div>
  )
}
