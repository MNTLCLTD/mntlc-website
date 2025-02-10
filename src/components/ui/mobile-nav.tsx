"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

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

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)
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

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset'
  }

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    })
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 md:hidden h-10 w-10 rounded-full border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 backdrop-blur-sm"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={toggleMenu}
            />

            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-[280px] bg-brand-light/90 dark:bg-brand-dark/90 backdrop-blur-md md:hidden"
            >
              <nav className="flex h-full flex-col">
                <div className="flex-1 overflow-y-auto py-20 px-6">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <button
                          onClick={() => handleNavClick(item.href)}
                          className={`group relative w-full rounded-lg px-4 py-3 text-left text-sm transition-colors ${
                            activeSection === item.href.slice(1)
                              ? "text-brand-primary"
                              : "text-brand-text/60 dark:text-brand-muted/60"
                          }`}
                        >
                          {activeSection === item.href.slice(1) && (
                            <motion.div
                              layoutId="activeSection-mobile"
                              className="absolute inset-0 rounded-lg bg-brand-primary/10"
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              }}
                            />
                          )}
                          <span className="relative z-10">{item.name}</span>
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
} 