import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Wolfhound Trace",
  description: "Learn about WolfhoundTrace Investigations, founded by Michael, a Senior Corporate Security Officer with nearly two decades of experience.",
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />
      
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent transition-colors duration-200 mb-8"
          >
            <span className="rotate-180">→</span>
            Back to Home
          </Link>
          
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">About Us</span>
            <h1 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl tracking-tight">
              WOLFHOUND<span className="text-accent">TRACE</span>
            </h1>
            <h2 className="mt-2 font-[var(--font-bebas)] text-2xl md:text-3xl text-muted-foreground/60 tracking-wide">
              Investigations
            </h2>
          </div>
        </header>

        {/* Content */}
        <article className="max-w-3xl">
          {/* Greeting */}
          <section className="mb-16">
            <p className="font-mono text-lg md:text-xl text-foreground leading-relaxed mb-8">
              Hello, my name is <span className="text-accent">Michael</span> and I&apos;m founder of WolfhoundTrace Investigations.
            </p>
          </section>

          {/* Philosophy */}
          <section className="mb-16">
            <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6">
              OUR <span className="text-accent">PHILOSOPHY</span>
            </h3>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
              At WolfhoundTrace, we believe that true security isn&apos;t just about locks and firewalls—it&apos;s about the relentless pursuit of factual truth.
            </p>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
              As a Senior Corporate Security Officer with nearly two decades of experience blending physical defense with cyber innovation, I founded this platform on a singular principle: <span className="text-foreground font-medium">Integrity is non-negotiable.</span>
            </p>
          </section>

          {/* Mission */}
          <section className="mb-16">
            <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6">
              THE <span className="text-accent">WOLFHOUND</span> SPIRIT
            </h3>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
              In an era where threats often hide in plain sight, we embody the spirit of the Wolfhound—loyal to the flock, yet fierce in the face of deception.
            </p>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
              Our mission is to identify the &quot;wolves in sheep&apos;s clothing&quot; that compromise organizational safety. By fusing traditional protocols with advanced human engineering insights, we don&apos;t just react to threats; <span className="text-accent">we expose them.</span>
            </p>
          </section>

          {/* Commitment */}
          <section className="mb-16">
            <h3 className="font-[var(--font-bebas)] text-3xl md:text-4xl tracking-tight mb-6">
              OUR <span className="text-accent">COMMITMENT</span>
            </h3>
            <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
              We are committed to excellence, transparency, and the noble pursuit of a more secure, honest world.
            </p>
          </section>

          {/* Decorative divider */}
          <div className="h-[1px] bg-border w-full max-w-md mb-16" />

          {/* Contact CTA */}
          <section>
            <p className="font-mono text-sm text-muted-foreground mb-6">
              Ready to discuss your security needs?
            </p>
            <Link
              href="/#colophon"
              className="inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
            >
              Initiate Contact
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </section>
        </article>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-border/20">
          <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
            © 2025 Wolfhound Trace. All communications handled with discretion.
          </p>
        </footer>
      </div>
    </main>
  )
}
