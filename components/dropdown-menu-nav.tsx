"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "hero", label: "Home", number: "00" },
  { id: "signals", label: "Intel", number: "01" },
  { id: "work", label: "Services", number: "02" },
  { id: "principles", label: "Approach", number: "03" },
  { id: "about", label: "About", number: "04" },
  { id: "story", label: "Story", number: "05" },
  { id: "colophon", label: "Contact", number: "06" },
]

export function DropdownMenuNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    navItems.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <div ref={menuRef} className="fixed top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-[100]">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Escape' && isOpen) {
            setIsOpen(false)
          }
        }}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Navigation menu"
        className={cn(
          "flex items-center gap-2 sm:gap-4 border-2 px-4 py-2 sm:px-8 sm:py-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300",
          isOpen 
            ? "border-[#f97316] text-[#f97316] bg-[#0a0a0a]" 
            : "border-[#f97316] text-white hover:text-[#f97316] bg-[#0a0a0a]"
        )}
        style={{
          animation: isOpen ? 'none' : 'pulseGlow 2s ease-in-out infinite',
          boxShadow: '0 0 20px rgba(249, 115, 22, 0.5)'
        }}
      >
        <span>Menu</span>
        <span className={cn(
          "transition-transform duration-300",
          isOpen ? "rotate-180" : ""
        )} aria-hidden="true">
          ↓
        </span>
      </button>

      {/* Dropdown Menu */}
      <nav
        role="menu"
        aria-label="Site navigation"
        className={cn(
          "absolute top-full right-0 mt-2 border border-border bg-background/95 backdrop-blur-sm overflow-hidden transition-all duration-300 origin-top-right min-w-[160px]",
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="py-2">
          {navItems.map(({ id, label, number }) => (
            <button
              key={id}
              role="menuitem"
              onClick={() => scrollToSection(id)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setIsOpen(false)
                }
              }}
              className={cn(
                "w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-2 sm:py-3 font-mono text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-200 text-left",
                activeSection === id 
                  ? "text-accent bg-accent/5" 
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              )}
            >
              <span className="text-[9px] sm:text-[10px] opacity-60" aria-hidden="true">{number}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  )
}
