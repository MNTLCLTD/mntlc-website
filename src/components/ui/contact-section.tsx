"use client";

import { ContactDialog } from "@/components/ui/contact-dialog";

export function ContactSection() {
  return (
    <section className="py-32 relative">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent dark:via-black/[0.01]" />
      
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative flex flex-col items-center rounded-xl bg-gradient-to-b from-transparent via-brand-light/[0.02] to-transparent dark:via-brand-dark/[0.02] border border-brand-light/5 dark:border-brand-dark/5 p-8 text-center md:p-16 backdrop-blur-[2px]">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-brand-dark dark:text-brand-light">
              Have an Industry-Changing Idea?
            </h2>
            <p className="text-brand-text/80 dark:text-brand-muted/80 mb-8 lg:text-lg">
              We partner with domain experts who have innovative concepts but lack the technical resources to bring them to life. Join forces with our AI-first development team to transform your expertise into groundbreaking products while maintaining full ownership of your vision.
            </p>
            <ContactDialog />
          </div>
        </div>
      </div>
    </section>
  );
} 