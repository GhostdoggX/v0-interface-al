import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { SignalsSection } from "@/components/signals-section"
import { WorkSection } from "@/components/work-section"
import { PrinciplesSection } from "@/components/principles-section"
import { AboutSection } from "@/components/about-section"
import { StorySection } from "@/components/story-section"
import { ColophonSection } from "@/components/colophon-section"
import { SideNav } from "@/components/side-nav"
import { DropdownMenuNav } from "@/components/dropdown-menu-nav"

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
  ],
  openGraph: {
    title: 'Wolfhound Trace | Professional OSINT & Investigation Services',
    description: 'Expert Physical Security Specialist, Corporate Investigation Services, and HUMINT Services with discretion and precision.',
    url: 'https://wolfhoundtrace.com',
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
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Wolfhound Trace",
  "url": "https://wolfhoundtrace.com",
  "logo": "https://wolfhoundtrace.com/images/wolfhound-logo.png",
  "description": "Professional OSINT Investigation, Corporate Investigation Services, Physical Security Specialist solutions, HUMINT Services, and Physical and Cyber Security Fusion.",
  "serviceType": [
    "OSINT Investigation",
    "Corporate Investigation Services",
    "Physical Security Specialist",
    "HUMINT Services",
    "Digital Forensics",
    "Executive Protection",
    "Cryptocurrency Tracing",
    "Due Diligence"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IE"
  }
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative min-h-screen">
        <SideNav />
        <DropdownMenuNav />
        <div className="grid-bg fixed inset-0 opacity-30" aria-hidden="true" />

      <div className="relative z-10">
        <HeroSection />
        <SignalsSection />
        <WorkSection />
        <PrinciplesSection />
        <AboutSection />
        <StorySection />
        <ColophonSection />
      </div>
    </main>
    </>
  )
}
