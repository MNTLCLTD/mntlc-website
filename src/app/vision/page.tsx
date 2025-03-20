"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

// Import components
import { PasswordProtection } from "@/components/vision/PasswordProtection";
import { VisionHero } from "@/components/vision/VisionHero";
import { VisionStatement } from "@/components/vision/VisionStatement";
import { Solution } from "@/components/vision/Solution";
import { TeamSection } from "@/components/vision/TeamSection";
import { PathToMarket } from "@/components/vision/PathToMarket";
import { ContactSection } from "@/components/vision/ContactSection";
import { BackgroundGrid } from "@/components/vision/BackgroundGrid";
import { CompetitiveAdvantage } from "@/components/vision/CompetitiveAdvantage";

export default function VisionPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Check if user is already authenticated (using localStorage)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authenticated = localStorage.getItem('mentalic-vision-authenticated') === 'true';
      setIsAuthenticated(authenticated);
    }
  }, []);
  
  // Check system preference on initial load and apply it
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
      
      // Listen for changes in system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        const newIsDark = e.matches;
        setIsDarkMode(newIsDark);
        document.documentElement.classList.toggle('dark', newIsDark);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Add scroll event listener to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Password protection screen
  if (!isAuthenticated) {
    return (
      <PasswordProtection 
        isDarkMode={isDarkMode} 
        toggleDarkMode={() => {}} 
        setIsAuthenticated={setIsAuthenticated} 
      />
    );
  }

  return (
    <div className="min-h-screen relative bg-[#fafafa] dark:bg-[#111111]">
      {/* Background Grid */}
      <BackgroundGrid />

      {/* Content */}
      <div className="relative z-10 pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Hero Section */}
          <VisionHero 
            isDarkMode={isDarkMode} 
            toggleDarkMode={() => {}} 
            setIsAuthenticated={setIsAuthenticated} 
            scrollToSection={scrollToSection} 
          />

          <motion.div 
            className="space-y-20"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {/* What We Do & Why It Matters */}
            <VisionStatement fadeIn={fadeIn} />

            {/* What It Looks Like */}
            <Solution fadeIn={fadeIn} fadeInLeft={fadeInLeft} fadeInRight={fadeInRight} />

            {/* Competitive Advantages */}
            <CompetitiveAdvantage fadeIn={fadeIn} />

            {/* Path to Market & Vision */}
            <PathToMarket fadeIn={fadeIn} />

            {/* Organizational Structure & Leadership */}
            <TeamSection fadeIn={fadeIn} />
            <ContactSection fadeIn={fadeIn} />
          </motion.div>
        </div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-brand-primary text-white shadow-lg hover:bg-brand-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            aria-label="Back to top"
            tabIndex={0}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
} 