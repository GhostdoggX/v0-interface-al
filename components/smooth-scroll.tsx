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
  const rafIdRef = useRef<number | null>(null)

  // Use requestAnimationFrame for smoother updates
  const raf = useCallback((time: number) => {
    lenisRef.current?.raf(time)
    rafIdRef.current = requestAnimationFrame(raf)
  }, [])

  useEffect(() => {
    // Defer initialization to not block main thread
    const initTimeout = setTimeout(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        smoothWheel: true,
        lerp: 0.1, // Smoother interpolation
      })

      lenisRef.current = lenis

      // Batch ScrollTrigger updates with RAF
      lenis.on("scroll", () => {
        requestAnimationFrame(() => ScrollTrigger.update())
      })

      // Start animation loop
      rafIdRef.current = requestAnimationFrame(raf)

      gsap.ticker.lagSmoothing(0)
    }, 0)

    return () => {
      clearTimeout(initTimeout)
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
      lenisRef.current?.destroy()
    }
  }, [raf])

  return <>{children}</>
}
