"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  {
    name: "Focus Areas",
    href: "#focus-areas",
  },
  {
    name: "Global Reach",
    href: "#global-reach",
  },
  {
    name: "Technology",
    href: "#technology",
  },
]

export function NavMenu() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = React.useState<string>("")

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.href.slice(1),
        top: document.getElementById(item.href.slice(1))?.offsetTop || 0
      }))

      const currentSection = sections.reduce((acc, section) => {
        if (window.scrollY >= section.top - 100) {
          return section.id
        }
        return acc
      }, "")

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 hidden md:block">
      <div className="relative px-8 py-4">
        <Link 
          href="/" 
          className="absolute left-8 top-1/2 -translate-y-1/2 text-xl font-bold text-brand-dark dark:text-brand-light hover:text-brand-primary transition-colors"
        >
          Mentalic
        </Link>
        <nav className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 backdrop-blur-sm px-2 py-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium text-brand-text dark:text-brand-muted transition-colors hover:text-brand-dark dark:hover:text-brand-light",
                  activeSection === item.href.slice(1) &&
                    "text-brand-dark dark:text-brand-light"
                )}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-brand-light/10 dark:bg-brand-dark/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  )
} 