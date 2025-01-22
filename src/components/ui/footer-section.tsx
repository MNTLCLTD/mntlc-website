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
import { Linkedin, Send, Twitter } from "lucide-react"

function Footerdemo() {
  return (
    <footer className="relative border-t border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/50 dark:bg-brand-dark/50 backdrop-blur-sm text-brand-text dark:text-brand-light transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-brand-text dark:text-brand-muted">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm border-brand-primary/20"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-brand-primary text-white transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-brand-primary/10 blur-2xl" />
          </div>
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
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.linkedin.com/in/charlie-jsb/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full border-brand-primary/20 hover:bg-brand-primary/10">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-light/10 dark:border-brand-dark/10 pt-8 text-center md:flex-row">
          <div className="text-sm text-brand-text dark:text-brand-muted">
            <p>© 2024 Mentalic Group Ltd. All rights reserved.</p>
            <p className="mt-1">Company number: 14674642</p>
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-brand-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-brand-primary">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo } 