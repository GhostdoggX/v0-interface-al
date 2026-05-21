"use client"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div style={{ 
          minHeight: "100vh", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#fafafa"
        }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              Something went wrong
            </h2>
            <button
              onClick={() => reset()}
              style={{
                padding: "0.75rem 1.5rem",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "#fafafa",
                cursor: "pointer"
              }}
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
