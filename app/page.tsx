import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { SideNav } from "@/components/side-nav"
import { DropdownMenuNav } from "@/components/dropdown-menu-nav"

// Dynamic imports for below-the-fold sections to reduce initial bundle
const SignalsSection = dynamic(() => import("@/components/signals-section").then(mod => ({ default: mod.SignalsSection })), {
  loading: () => <div className="min-h-screen" />,
})
const WorkSection = dynamic(() => import("@/components/work-section").then(mod => ({ default: mod.WorkSection })), {
  loading: () => <div className="min-h-screen" />,
})
const PrinciplesSection = dynamic(() => import("@/components/principles-section").then(mod => ({ default: mod.PrinciplesSection })), {
  loading: () => <div className="min-h-[50vh]" />,
})
const AboutSection = dynamic(() => import("@/components/about-section").then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-[50vh]" />,
})
const StorySection = dynamic(() => import("@/components/story-section").then(mod => ({ default: mod.StorySection })), {
  loading: () => <div className="min-h-[50vh]" />,
})
const ColophonSection = dynamic(() => import("@/components/colophon-section").then(mod => ({ default: mod.ColophonSection })), {
  loading: () => <div className="min-h-[30vh]" />,
})

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
      "email": "info@enquiries.wolfhoundtrace.com",
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
