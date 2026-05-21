"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <h2 className="font-[var(--font-bebas)] text-3xl text-foreground">
          Something went wrong
        </h2>
        <p className="font-mono text-sm text-muted-foreground">
          {error.message || "An unexpected error occurred"}
        </p>
        <button
          onClick={() => reset()}
          className="font-mono text-xs uppercase tracking-widest border border-foreground/20 px-6 py-3 hover:border-accent hover:text-accent transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
