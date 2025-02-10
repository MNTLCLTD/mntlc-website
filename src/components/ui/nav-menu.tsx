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
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block">
      <div className="relative px-4 py-2 rounded-full border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 backdrop-blur-sm shadow-lg">
        <ul className="flex items-center gap-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm transition-colors",
                  activeSection === item.href.slice(1)
                    ? "text-brand-primary"
                    : "text-brand-text/60 dark:text-brand-muted/60 hover:text-brand-primary"
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full bg-brand-primary/10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
} 