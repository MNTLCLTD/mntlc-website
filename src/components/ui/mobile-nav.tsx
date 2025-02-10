"use client"

import * as React from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

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
  const [hasScrolled, setHasScrolled] = React.useState(false)

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
      setHasScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
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
      <motion.div 
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
        animate={{
          backgroundColor: hasScrolled ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0)',
          backdropFilter: hasScrolled ? 'blur(10px)' : 'blur(0px)',
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex items-center justify-between p-4">
          <Link 
            href="/" 
            className="text-xl font-bold text-brand-dark dark:text-brand-light hover:text-brand-primary transition-colors"
          >
            Mentalic
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="relative z-50"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-light/80 dark:bg-brand-dark/80 backdrop-blur-sm pt-20"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-lg font-medium text-brand-text dark:text-brand-muted transition-colors hover:text-brand-dark dark:hover:text-brand-light",
                    activeSection === item.href.slice(1) &&
                      "text-brand-dark dark:text-brand-light"
                  )}
                  onClick={() => {
                    setIsOpen(false)
                    handleNavClick(item.href)
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
} 