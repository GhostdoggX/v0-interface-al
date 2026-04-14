"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const navItems = [
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
    <div ref={menuRef} className="fixed top-6 right-6 md:top-8 md:right-8 z-50">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-3 border px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all duration-300",
          isOpen 
            ? "border-accent text-accent bg-background" 
            : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground bg-background/80 backdrop-blur-sm"
        )}
      >
        <span>Menu</span>
        <span className={cn(
          "transition-transform duration-300",
          isOpen ? "rotate-180" : ""
        )}>
          ↓
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={cn(
          "absolute top-full right-0 mt-2 border border-border bg-background/95 backdrop-blur-sm overflow-hidden transition-all duration-300 origin-top-right",
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="py-2">
          {navItems.map(({ id, label, number }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={cn(
                "w-full flex items-center gap-4 px-6 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-200 text-left",
                activeSection === id 
                  ? "text-accent bg-accent/5" 
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              )}
            >
              <span className="text-[10px] opacity-60">{number}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
