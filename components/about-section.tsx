"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import { HighlightText } from "@/components/highlight-text"
import { BitmapChevron } from "@/components/bitmap-chevron"
import { ScrambleTextOnHover } from "@/components/scramble-text"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current || !contentRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })

      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="relative py-32 pl-6 md:pl-28 pr-6 md:pr-12">
      {/* Section header */}
      <div ref={headerRef} className="mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">04 / About</span>
        <h2 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl tracking-tight">
          <HighlightText parallaxSpeed={0.6}>WHO</HighlightText> WE ARE
        </h2>
      </div>

      {/* Content */}
      <div ref={contentRef} className="max-w-3xl">
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
          Founded by Michael, a Senior Corporate Security Officer with nearly two decades of experience, 
          WolfhoundTrace Investigations operates on a singular principle: <span className="text-foreground">Integrity is non-negotiable.</span>
        </p>

        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
          In an era where threats often hide in plain sight, we embody the spirit of the Wolfhound—loyal to the flock, 
          yet fierce in the face of deception. Our mission is to identify the &quot;wolves in sheep&apos;s clothing&quot; that compromise organizational safety.
        </p>

        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-12">
          By fusing traditional protocols with advanced human engineering insights, we don&apos;t just react to threats; 
          <span className="text-accent"> we expose them.</span>
        </p>

        {/* CTA */}
        <Link
          href="/about"
          className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
        >
          <ScrambleTextOnHover text="Learn More" as="span" duration={0.6} />
          <BitmapChevron className="transition-transform duration-[400ms] ease-in-out group-hover:rotate-45" />
        </Link>
      </div>

      {/* Decorative line */}
      <div className="mt-16 h-[1px] bg-border w-full max-w-md" />
    </section>
  )
}
