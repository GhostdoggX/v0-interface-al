"use client"

import type React from "react"
import { useEffect, useRef, useCallback } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register plugin once at module level
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafRef = useRef<number | null>(null)

  const raf = useCallback((time: number) => {
    lenisRef.current?.raf(time)
    rafRef.current = requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    // Defer Lenis initialization to avoid blocking initial render
    const initLenis = () => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
      })

      lenisRef.current = lenis

      // Throttle ScrollTrigger updates
      let ticking = false
      lenis.on("scroll", () => {
        if (!ticking) {
          ticking = true
          requestAnimationFrame(() => {
            ScrollTrigger.update()
            ticking = false
          })
        }
      })

      // Use native RAF instead of GSAP ticker for better performance
      rafRef.current = requestAnimationFrame(raf)
    }

    // Use requestIdleCallback if available, otherwise setTimeout
    if ("requestIdleCallback" in window) {
      (window as any).requestIdleCallback(initLenis, { timeout: 100 })
    } else {
      setTimeout(initLenis, 0)
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
      lenisRef.current?.destroy()
    }
  }, [raf])

  return <>{children}</>
}
