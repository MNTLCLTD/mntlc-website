"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Linkedin, Send, Mail } from "lucide-react"
import { LegalDialog } from "@/components/ui/legal-dialog"

function Footerdemo() {
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Here you would typically send this to your newsletter service
      console.log('Newsletter signup:', email)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setEmail("")
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
    
    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000)
  }

  return (
    <footer className="relative border-t border-brand-light/10 dark:border-brand-dark/10 bg-gradient-to-b from-transparent to-brand-dark/90 backdrop-blur-sm text-brand-text dark:text-brand-light transition-colors duration-300">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-8 py-16">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-brand-text dark:text-brand-muted">
              Join our newsletter for the latest updates and exclusive insights into AI innovation.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <div className="relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="pr-12 backdrop-blur-sm border-brand-primary/20 transition-all duration-300 focus:border-brand-primary/40"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className={`absolute right-1 top-1 h-8 w-8 rounded-full bg-brand-primary text-white transition-all duration-300 ${
                    isSubmitting ? 'opacity-70' : 'hover:scale-105 hover:bg-brand-primary/90'
                  }`}
                  disabled={isSubmitting}
                >
                  <Send className={`h-4 w-4 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  <span className="sr-only">Subscribe</span>
                </Button>
              </div>
              {submitStatus === 'success' && (
                <p className="absolute mt-2 text-sm text-green-500 flex items-center gap-1">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Thanks for subscribing!
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="absolute mt-2 text-sm text-red-500 flex items-center gap-1">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-brand-primary/10 blur-2xl" />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <address className="space-y-2 text-sm not-italic">
                <p className="font-medium">MENTALIC GROUP LTD</p>
                <p>85 Great Portland Street</p>
                <p>First Floor</p>
                <p>London, W1W 7LT</p>
                <p>United Kingdom</p>
              </address>
            </div>
            <div className="space-y-3">
              <a 
                href="mailto:contact@mentalic.ltd"
                className="inline-flex items-center text-sm text-brand-text dark:text-brand-muted hover:text-brand-primary transition-colors group"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-primary/20 bg-brand-light/5 dark:bg-brand-dark/5 group-hover:bg-brand-primary/10 transition-colors mr-2">
                  <Mail className="h-4 w-4" />
                </span>
                contact@mentalic.ltd
              </a>
              <br />
              <a 
                href="https://wa.me/447598884033"
                className="inline-flex items-center text-sm text-brand-text dark:text-brand-muted hover:text-brand-primary transition-colors group"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-primary/20 bg-brand-light/5 dark:bg-brand-dark/5 group-hover:bg-brand-primary/10 transition-colors mr-2">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </span>
                +44 759 888 4033
              </a>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <h3 className="mb-6 text-lg font-semibold">Connect With Us</h3>
            <div className="flex flex-col gap-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a 
                      href="https://www.linkedin.com/company/93088706" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-sm text-brand-text dark:text-brand-muted hover:text-brand-primary transition-colors"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/20 bg-brand-light/5 dark:bg-brand-dark/5 group-hover:bg-brand-primary/10 transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">LinkedIn</span>
                        <span className="text-xs text-brand-text/60 dark:text-brand-muted/60">Follow our company updates</span>
                      </div>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Stay updated with our latest news</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brand-light/10 dark:border-brand-dark/10 pt-8 text-center md:flex-row">
          <div className="text-sm text-brand-text dark:text-brand-muted">
            <p>© 2024 Mentalic Group Ltd. All rights reserved.</p>
            <p className="mt-1">Company number: 14674642</p>
          </div>
          <nav className="flex gap-6 text-sm">
            <LegalDialog 
              type="privacy" 
              trigger={
                <button className="text-brand-text/60 dark:text-brand-muted/60 transition-colors hover:text-brand-primary">
                  Privacy Policy
                </button>
              }
            />
            <LegalDialog 
              type="terms"
              trigger={
                <button className="text-brand-text/60 dark:text-brand-muted/60 transition-colors hover:text-brand-primary">
                  Terms of Service
                </button>
              }
            />
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo } 