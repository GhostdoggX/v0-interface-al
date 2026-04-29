import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: 'Wolfhound Trace - Professional OSINT & Corporate Investigation Services',
  description: 'Expert Physical Security Specialist, OSINT Investigation, Corporate Investigation Services, HUMINT Services, and Physical and Cyber Security Fusion. Secure, precise, and legally grounded investigative solutions.',
  keywords: [
    'Physical Security Specialist',
    'Corporate Investigation Services',
    'OSINT Investigation', 
    'Physical and Cyber Security Fusion',
    'Wolfhound Trace Investigation',
    'HUMINT Services',
    'Digital Forensics Ireland',
    'Corporate Due Diligence',
    'Cryptocurrency Tracing',
    'Executive Protection',
    'Open Source Intelligence',
    'Threat Assessment Services',
    'Missing Person Investigation',
    'Asset Discovery',
    'Brand Protection',
  ],
  openGraph: {
    title: 'Wolfhound Trace | Professional OSINT & Investigation Services',
    description: 'Expert Physical Security Specialist, Corporate Investigation Services, and HUMINT Services with discretion and precision.',
    url: 'https://wolfhoundtrace.com',
    siteName: 'Wolfhound Trace',
    type: 'website',
    locale: 'en_IE',
    images: [
      {
        url: '/images/wolfhound-logo.png',
        width: 1200,
        height: 630,
        alt: 'Wolfhound Trace - Professional OSINT & Digital Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wolfhound Trace | OSINT & Corporate Investigation',
    description: 'Expert Physical Security Specialist and HUMINT Services.',
    images: ['/images/wolfhound-logo.png'],
  },
  alternates: {
    canonical: 'https://wolfhoundtrace.com',
  },
}

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": "https://wolfhoundtrace.com/#organization",
    "name": "Wolfhound Trace",
    "alternateName": "WolfhoundTrace Investigations",
    "url": "https://wolfhoundtrace.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://wolfhoundtrace.com/images/wolfhound-logo.png",
      "width": 200,
      "height": 60
    },
    "description": "Professional OSINT, digital forensics, cryptocurrency tracing, corporate due diligence, and open-source intelligence services. Discreet, verified, and legally grounded.",
    "foundingDate": "2026",
    "founder": {
      "@type": "Person",
      "name": "Michael",
      "jobTitle": "Corporate & Physical Security Specialist"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Global"
    },
    "serviceType": [
      "Corporate Due Diligence",
      "Digital Forensics",
      "Cryptocurrency Tracing",
      "Open-Source Intelligence (OSINT)",
      "Asset Discovery",
      "Threat Assessment",
      "Missing Person Search",
      "Physical Asset Location",
      "Executive Protection",
      "Brand Protection"
    ],
    "knowsAbout": [
      "OSINT",
      "Digital Forensics",
      "Blockchain Analysis",
      "Cryptocurrency Tracing",
      "Corporate Investigations",
      "Dark Web Monitoring",
      "Due Diligence"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "enquiries@wolfhoundtrace.com",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": []
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://wolfhoundtrace.com/#website",
    "url": "https://wolfhoundtrace.com",
    "name": "Wolfhound Trace",
    "description": "Professional OSINT & Corporate Investigation Services",
    "publisher": {
      "@id": "https://wolfhoundtrace.com/#organization"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is OSINT and how does Wolfhound Trace use it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OSINT (Open-Source Intelligence) is the systematic collection and analysis of publicly available information. Wolfhound Trace uses OSINT to conduct corporate due diligence, locate missing persons, trace cryptocurrency transactions, and uncover digital threats, all through legally grounded, verified methods."
        }
      },
      {
        "@type": "Question",
        "name": "What types of investigations does Wolfhound Trace handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wolfhound Trace handles a wide range of investigations including corporate due diligence, digital forensics, cryptocurrency tracing, asset discovery, threat assessment, missing person searches, executive protection, and brand protection."
        }
      },
      {
        "@type": "Question",
        "name": "Is Wolfhound Trace compliant with GDPR and data protection laws?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All investigations conducted by Wolfhound Trace are carried out in full compliance with applicable laws and regulations, including GDPR and the Swiss Federal Act on Data Protection (nFADP). Methods are ethically sound and legally defensible in any jurisdiction."
        }
      },
      {
        "@type": "Question",
        "name": "How confidential are Wolfhound Trace's investigation services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Confidentiality is a core principle at Wolfhound Trace. All client communications are handled with absolute discretion. The firm uses encrypted communications and strict access controls to ensure sensitive information is protected throughout every engagement."
        }
      }
    ]
  }
]

const services = [
  { title: "Corporate Due Diligence", category: "Investigation", description: "Comprehensive background verification for business partners, vendors, and investment targets." },
  { title: "Digital Forensics", category: "Analysis", description: "Recovery and examination of digital evidence from devices and online sources." },
  { title: "Cryptocurrency Tracing", category: "Blockchain", description: "Tracking and mapping crypto transactions across wallets and exchanges." },
  { title: "Open-Source Intelligence", category: "OSINT", description: "Systematic collection and analysis of publicly available information." },
  { title: "Asset Discovery", category: "Research", description: "Identification and verification of undisclosed assets and holdings." },
  { title: "Threat Assessment", category: "Security", description: "Evaluation of digital footprints and potential exposure risks." },
  { title: "Missing Person Search", category: "Location", description: "Professional tracing and location services for missing individuals with discretion and care." },
  { title: "Physical Asset Location", category: "Recovery", description: "Identification and tracking of concealed or misappropriated assets across jurisdictions." },
  { title: "Executive Protection", category: "Security", description: "Comprehensive protection services and risk assessment for high-profile individuals." },
  { title: "Brand Protection", category: "Defense", description: "Monitoring and safeguarding brand integrity against counterfeiting and misuse." },
]

const methodology = [
  { date: "2025.06.10", title: "Crypto Forensics", note: "Enhanced blockchain analysis capabilities for cross-chain investigations." },
  { date: "2025.05.28", title: "Dark Web Monitoring", note: "Proactive threat detection across hidden networks and forums." },
  { date: "2025.05.15", title: "AI-Powered OSINT", note: "Machine learning integration for pattern recognition in large datasets." },
  { date: "2025.04.30", title: "Evidence Preservation", note: "Court-admissible documentation protocols for digital evidence." },
  { date: "2025.04.12", title: "Social Engineering Defense", note: "Vulnerability assessments for corporate information security." },
  { date: "2025.03.25", title: "Human Analysis", note: "Multi-perspective expert evaluation combining varied analytical approaches." },
]

const principles = [
  { number: "01", title: "Discreet Handling", highlight: "DISCREET", description: "Confidential handling of sensitive investigations and client communications." },
  { number: "02", title: "Verified Findings", highlight: "VERIFIED", description: "Every finding is validated before being delivered for decision-making or review." },
  { number: "03", title: "Targeted Precision", highlight: "PRECISION", description: "Focused intelligence work designed to answer specific questions with clarity." },
  { number: "04", title: "Legally Grounded", highlight: "GROUNDED", description: "Methods that are ethically sound and legally defensible in any jurisdiction." },
]

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-background">
        Skip to main content
      </a>

      {/* Navigation */}
      <Navigation />

      <main id="main-content" className="relative">
        {/* Grid Background */}
        <div className="grid-bg fixed inset-0 opacity-30 pointer-events-none" aria-hidden="true" />

        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServicesSection services={services} />

        {/* Methodology Section */}
        <MethodologySection methodology={methodology} />

        {/* Principles Section */}
        <PrinciplesSection principles={principles} />

        {/* About Section */}
        <AboutSection />

        {/* Story Section */}
        <StorySection />

        {/* Privacy Summary Section */}
        <PrivacySection />

        {/* Contact Section */}
        <ContactSection />
      </main>
    </>
  )
}

function Navigation() {
  return (
    <header className="fixed top-0 right-0 z-50 p-4 sm:p-6 md:p-8">
      <nav aria-label="Main navigation">
        <a
          href="#contact"
          className="flex items-center gap-2 sm:gap-4 border-2 border-accent px-4 py-2 sm:px-6 sm:py-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-foreground hover:bg-accent hover:text-background transition-colors duration-300 bg-background/95 backdrop-blur-sm"
        >
          <span>Contact</span>
          <span aria-hidden="true">→</span>
        </a>
      </nav>
    </header>
  )
}

function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-20" aria-labelledby="hero-heading">
      <div className="max-w-4xl">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-6">
          <Image
            src="/images/wolfhound-logo.png"
            alt="Wolfhound Trace Logo"
            width={80}
            height={80}
            className="opacity-60 hover:opacity-100 transition-opacity duration-300"
            priority
          />
        </div>

        {/* Main Heading */}
        <h1 id="hero-heading" className="font-[var(--font-bebas)] text-[clamp(3rem,12vw,10rem)] leading-[0.9] tracking-tight">
          <span className="block text-foreground">WOLFHOUND</span>
          <span className="block text-accent">TRACE</span>
        </h1>

        <p className="mt-6 font-[var(--font-bebas)] text-muted-foreground/60 text-[clamp(1rem,3vw,2rem)] tracking-wide">
          Expert OSINT & Digital Intelligence
        </p>

        <p className="mt-6 max-w-lg font-mono text-xs text-muted-foreground/80 leading-relaxed">
          We do not simply search. We trace. Every engagement is structured to reduce noise, verify evidence, and deliver findings that can be acted on with confidence.
        </p>

        <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          We help clients uncover, verify, and understand complex digital information with discretion, precision, and legally grounded methods.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
          <a
            href="#services"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            View Services
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
          <a
            href="mailto:enquiries@wolfhoundtrace.com?subject=Service%20initial%20consultation"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            Initiate Contact
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </div>

        {/* Info Tag */}
        <div className="mt-16 inline-block border border-border px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Wolfhound Trace / Digital Intelligence
        </div>
      </div>
    </section>
  )
}

function ServicesSection({ services }: { services: typeof import("./page").services }) {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20" aria-labelledby="services-heading">
      <header className="mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">02 / Services</span>
        <h2 id="services-heading" className="mt-4 font-[var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl tracking-tight">
          CAPABILITIES
        </h2>
        <p className="mt-4 max-w-md font-mono text-xs text-muted-foreground leading-relaxed">
          From corporate due diligence to digital forensics and open-source investigations.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group relative border border-border/40 p-5 transition-all duration-300 hover:border-accent/60 hover:bg-accent/5"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              {service.category}
            </span>
            <h3 className="mt-3 font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground group-hover:text-accent transition-colors duration-300">
              {service.title}
            </h3>
            <p className="mt-3 font-mono text-xs text-muted-foreground leading-relaxed">
              {service.description}
            </p>
            <span className="absolute bottom-4 right-4 font-mono text-[10px] text-muted-foreground/40 group-hover:text-accent transition-colors duration-300">
              {String(index + 1).padStart(2, "0")}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

function MethodologySection({ methodology }: { methodology: typeof import("./page").methodology }) {
  return (
    <section id="methodology" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20" aria-labelledby="methodology-heading">
      <header className="mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">01 / Intel</span>
        <h2 id="methodology-heading" className="mt-4 font-[var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl tracking-tight">
          ANALYSIS METHODOLOGY
        </h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {methodology.map((item, index) => (
          <article key={item.title} className="group border border-border/50 p-6 transition-all duration-300 hover:border-accent/50">
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                No. {String(index + 1).padStart(2, "0")}
              </span>
              <time className="font-mono text-[10px] text-muted-foreground/60">{item.date}</time>
            </div>
            <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-accent transition-colors duration-300">
              {item.title}
            </h3>
            <div className="h-px bg-accent/60 w-12 mb-4 group-hover:w-full transition-all duration-500" />
            <p className="font-mono text-xs text-muted-foreground leading-relaxed">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function PrinciplesSection({ principles }: { principles: typeof import("./page").principles }) {
  return (
    <section id="principles" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20" aria-labelledby="principles-heading">
      <header className="mb-16 md:mb-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">03 / Principles</span>
        <h2 id="principles-heading" className="mt-4 font-[var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl tracking-tight">
          OUR APPROACH
        </h2>
      </header>

      <div className="space-y-16 md:space-y-24">
        {principles.map((principle, index) => (
          <article
            key={principle.number}
            className={`flex flex-col ${index % 2 === 1 ? "items-end text-right" : "items-start text-left"}`}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {principle.number} / {principle.highlight}
            </span>
            <h3 className="font-[var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl tracking-tight leading-none">
              <span className="text-accent">{principle.highlight}</span>
              <span className="text-foreground"> {principle.title.replace(principle.highlight, "").toUpperCase()}</span>
            </h3>
            <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
              {principle.description}
            </p>
            <div className={`mt-8 h-px bg-border w-24 md:w-48`} />
          </article>
        ))}
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20" aria-labelledby="about-heading">
      <header className="mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">04 / About</span>
        <h2 id="about-heading" className="mt-4 font-[var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl tracking-tight">
          <span className="text-accent">WHO</span> WE ARE
        </h2>
      </header>

      <div className="max-w-3xl space-y-6">
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          WolfhoundTrace Investigations was founded to help businesses, institutions, and individuals uncover risk, verify facts, and respond to uncertainty with confidence.
        </p>

        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          We believe that effective security begins with <span className="text-foreground">evidence, sound judgement, and the discipline to look beyond appearances.</span>
        </p>

        <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground pt-6">Our Purpose</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          Our work is built around a clear mission: to bring clarity where uncertainty exists. Whether a client is facing suspicious behaviour, internal risk, online harm, or reputational concerns, we help assess the situation carefully, verify the facts, and provide clear, practical guidance.
        </p>
        <p className="font-mono text-sm md:text-base text-accent leading-relaxed">
          We do not rely on assumptions. We follow the evidence.
        </p>

        <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground pt-6">Evidence-Led Investigative Support</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          My name is Michael, and I am the founder of WolfhoundTrace Investigations. I am a security professional with nearly two decades of combined experience across corporate security, physical protection, and investigative work. I lead a team of analysts with experience from different parts of industry, united by the same mission: to support clients with <span className="text-foreground">integrity, discretion, and evidence-led analysis.</span>
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          WolfhoundTrace was built around one non-negotiable principle: <span className="text-accent">integrity comes first.</span>
        </p>

        <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground pt-6">OSINT Expertise in Practice</h3>
        <p className="font-mono text-sm md:text-base text-foreground leading-relaxed">
          We turn advanced OSINT into actionable intelligence.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          At WolfhoundTrace, our investigative methods are shaped by practical, high-pressure experience. Our team actively participates in international OSINT Capture the Flag challenges, working through complex scenarios involving digital footprint analysis, person tracing, social media intelligence, source verification, and missing-person search workflows.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          We recently secured <span className="text-accent">second place in the OSINT Shadows Conference CTF - Missing Persons track.</span> This achievement demonstrates our ability to identify, verify, and connect fragmented open-source data under competitive conditions.
        </p>

        <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground pt-6">Commitment to Digital Safety</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          Our mission extends beyond the corporate environment. We are deeply committed to protecting vulnerable individuals in digital spaces and promoting safer online communities.
        </p>
        <p className="font-mono text-sm md:text-base text-accent leading-relaxed">
          We believe that awareness, early action, and open communication are essential to protecting people from digital harm.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <a
            href="mailto:wolfhound_trace@pm.me?subject=Concern%20Report"
            className="group inline-flex items-center gap-3 border border-accent/50 px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-background transition-all duration-200"
          >
            Report a Concern
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
          <a
            href="mailto:enquiries@wolfhoundtrace.com?subject=Confidential%20Consultation%20Request"
            className="group inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            Request Consultation
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="mt-16 h-px bg-border w-full max-w-md" />
    </section>
  )
}

function StorySection() {
  return (
    <section id="story" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20" aria-labelledby="story-heading">
      <header className="mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">05 / Story</span>
        <h2 id="story-heading" className="mt-4 font-[var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl tracking-tight">
          THE <span className="text-accent">WOLFHOUND</span> SPIRIT
        </h2>
      </header>

      <div className="max-w-3xl space-y-6">
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          The Irish Wolfhound is a creature of profound duality - possessing both quiet nobility and an unyielding drive when on the hunt. It is a creature of purpose, bred for patience, precision, and loyalty.
        </p>

        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          When wolves moved unseen among the flock, it was the wolfhound who sensed the danger first. With an instinct sharpened over centuries, the wolfhound could identify the wolf hiding in sheep&apos;s clothing - the predator disguised among the innocent.
          <span className="text-accent"> Silent, steady, and relentless,</span> it tracked every trace until the truth revealed itself.
        </p>

        <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground pt-6">Our Mission</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          At Wolfhound Trace, we carry that same spirit into the digital world. Our mission is to uncover the hidden - the wolves in sheep&apos;s clothing moving quietly through networks, data trails, and online shadows. Like our namesake, we operate with focus, discipline, and integrity.
        </p>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          Every investigation we undertake - whether corporate, digital, or financial - receives the same level of dedication. We treat each client with equal importance and discretion, ensuring absolute confidentiality and pursuing every lead until fully verified.
        </p>

        <h3 className="font-[var(--font-bebas)] text-2xl md:text-3xl tracking-tight text-foreground pt-6">Our Philosophy</h3>
        <p className="font-mono text-sm md:text-base text-muted-foreground leading-relaxed">
          Our philosophy values accuracy over haste. Just as a wolfhound never loses the scent, we do not stop until every digital trace aligns with the truth. This isn&apos;t just our work - it&apos;s our instinct.
        </p>

        <p className="font-mono text-sm md:text-base text-foreground font-medium leading-relaxed pt-4">
          We do not simply search; we trace.
        </p>
        <p className="font-mono text-sm text-accent leading-relaxed">
          Relentless in pursuit. Silent in execution.
        </p>
      </div>

      <div className="mt-16 h-px bg-border w-full max-w-md" />
    </section>
  )
}

function PrivacySection() {
  return (
    <section id="privacy" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20" aria-labelledby="privacy-heading">
      <header className="mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">06 / Legal</span>
        <h2 id="privacy-heading" className="mt-4 font-[var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl tracking-tight">
          PRIVACY & <span className="text-accent">COMPLIANCE</span>
        </h2>
      </header>

      <div className="max-w-3xl space-y-8">
        <div>
          <h3 className="font-[var(--font-bebas)] text-xl md:text-2xl tracking-tight text-foreground mb-3">Data Protection</h3>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            We process personal data only where we have a valid legal basis. All investigations are conducted in compliance with applicable laws including GDPR and the Swiss Federal Act on Data Protection (nFADP). Methods are ethically sound and legally defensible in any jurisdiction.
          </p>
        </div>

        <div>
          <h3 className="font-[var(--font-bebas)] text-xl md:text-2xl tracking-tight text-foreground mb-3">Data Security</h3>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            We implement highest industry standard encryption protocols for data at rest and in transit. Our infrastructure is designed with strict access controls, ensuring that sensitive intelligence is only accessible to cleared personnel directly involved in the specific operation.
          </p>
        </div>

        <div>
          <h3 className="font-[var(--font-bebas)] text-xl md:text-2xl tracking-tight text-foreground mb-3">Your Rights</h3>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed">
            Subject to applicable law, you may have rights to access, rectify, erase, restrict, object to processing, and request data portability. Contact us at{" "}
            <a href="mailto:info@wolfhoundtrace.com" className="text-accent hover:underline">
              info@wolfhoundtrace.com
            </a>{" "}
            to exercise your rights.
          </p>
        </div>

        <div className="pt-4 border-t border-border/30">
          <p className="font-mono text-[10px] text-muted-foreground/70 leading-relaxed">
            Wolfhound Trace provides professional open-source intelligence (OSINT), digital investigation, and due diligence services. All investigations are conducted in compliance with applicable laws and regulations.
          </p>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-border/30" aria-labelledby="contact-heading">
      <header className="mb-12 md:mb-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">07 / Contact</span>
        <h2 id="contact-heading" className="mt-4 font-[var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl tracking-tight">
          GET IN TOUCH
        </h2>
        <p className="mt-6 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
          Ready to discuss your investigation needs?
        </p>
        <a
          href="mailto:enquiries@wolfhoundtrace.com?subject=Service%20initial%20consultation"
          className="mt-8 inline-flex items-center gap-3 border border-foreground/20 px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground hover:border-accent hover:text-accent transition-all duration-200"
        >
          Initiate Contact
          <span className="transition-transform duration-300 hover:translate-x-1" aria-hidden="true">→</span>
        </a>
      </header>

      {/* Multi-column layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
        {/* Services */}
        <div>
          <h3 className="inline-block border border-accent px-3 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground mb-4">Services</h3>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">OSINT</li>
            <li className="font-mono text-xs text-foreground/80">Missing Person Search</li>
            <li className="font-mono text-xs text-foreground/80">Physical Asset Location</li>
            <li className="font-mono text-xs text-foreground/80">Digital Forensics</li>
            <li className="font-mono text-xs text-foreground/80">Executive Protection</li>
            <li className="font-mono text-xs text-foreground/80">Brand Protection</li>
            <li className="font-mono text-xs text-foreground/80">Crypto Tracing</li>
            <li className="font-mono text-xs text-foreground/80">Due Diligence</li>
          </ul>
        </div>

        {/* Clients */}
        <div>
          <h3 className="inline-block border border-accent px-3 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground mb-4">Clients</h3>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Non Profit</li>
            <li className="font-mono text-xs text-foreground/80">Private Enquiries</li>
            <li className="font-mono text-xs text-foreground/80">Law Firms</li>
            <li className="font-mono text-xs text-foreground/80">Corporations</li>
            <li className="font-mono text-xs text-foreground/80">Private Equity</li>
          </ul>
        </div>

        {/* Coverage */}
        <div>
          <h3 className="inline-block border border-accent px-3 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground mb-4">Coverage</h3>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Global</li>
            <li className="font-mono text-xs text-foreground/80">Confidential</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="inline-block border border-accent px-3 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:wolfhound_trace@pm.me"
                className="font-mono text-xs text-accent hover:underline transition-colors duration-200"
              >
                Secure Email
              </a>
            </li>
            <li>
              <a
                href="mailto:enquiries@wolfhoundtrace.com?subject=Consultation%20Request"
                className="font-mono text-xs text-foreground/80 hover:text-accent transition-colors duration-200"
              >
                Consultation
              </a>
            </li>
          </ul>
        </div>

        {/* Security */}
        <div>
          <h3 className="inline-block border border-accent px-3 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-foreground mb-4">Security</h3>
          <ul className="space-y-2">
            <li className="font-mono text-xs text-foreground/80">Encrypted</li>
            <li className="font-mono text-xs text-foreground/80">Confidential</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-border/20">
        <p className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          © 2026 Wolfhound Trace. All communications handled with discretion.
        </p>
        <p className="mt-2 font-mono text-[10px] text-muted-foreground">
          Built for clarity, discretion, and verification.
        </p>
      </footer>
    </section>
  )
}
