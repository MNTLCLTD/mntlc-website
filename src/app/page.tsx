import Image from "next/image";
import { HomeIcon, Lightbulb, BookOpen, Send } from 'lucide-react';
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Hero } from "@/components/ui/animated-hero";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { Footerdemo } from "@/components/ui/footer-section";
import { WorldMapDemo } from "@/components/ui/world-map-demo";
import { FocusAreas } from "@/components/ui/focus-areas";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { NavMenu } from "@/components/ui/nav-menu";
import { MobileNav } from "@/components/ui/mobile-nav";

// Tech stack for the IconCloud
const techSlugs = [
  "typescript",
  "nextdotjs",
  "react",
  "nodedotjs",
  "prisma",
  "postgresql",
  "python",
  "tensorflow",
  "pytorch",
  "openai",
  "amazonaws",
  "vercel",
  "docker",
  "kubernetes",
  "git",
  "github",
];

export default function HomePage() {
  return (
    <div className="min-h-screen relative">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FlickeringGrid
          className="w-full h-full"
          squareSize={6}
          gridGap={8}
          color="rgb(0, 119, 255)"
          maxOpacity={0.1}
          flickerChance={0.05}
        />
      </div>

      {/* Navigation */}
      <NavMenu />
      <MobileNav />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* Focus Areas Section */}
        <div className="mt-20 scroll-mt-20" id="focus-areas">
          <FocusAreas />
        </div>

        {/* Global Reach Section */}
        <div className="mt-20 scroll-mt-20" id="global-reach">
          <WorldMapDemo />
        </div>

        {/* Technology Section */}
        <section className="mt-20 scroll-mt-20 pb-40 px-4 bg-gradient-to-b from-transparent via-brand-dark/[0.2] to-transparent dark:via-brand-dark/[0.4]" id="technology">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="group">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-brand-primary/80 mb-4">
                  <span className="rounded-full bg-brand-primary/10 px-3 py-1">Tech Stack</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-brand-dark dark:text-brand-light">
                  Built with Cutting-Edge Technology
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-brand-text dark:text-brand-muted">
                    At Mentalic, we push boundaries by combining state-of-the-art tech and AI-focused practices to deliver robust, scalable solutions at unprecedented speed.
                  </p>
                  <div className="grid gap-4">
                    <div className="group rounded-lg border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 p-4 transition-all duration-300 hover:border-brand-primary/20 hover:bg-brand-primary/[0.02] hover:translate-x-1">
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary/20 transition-colors">✓</span>
                        <div>
                          <h3 className="font-semibold text-brand-dark dark:text-brand-light group-hover:text-brand-primary transition-colors">AI-Powered Development Pipeline</h3>
                          <p className="text-sm text-brand-text dark:text-brand-muted">Achieve 10x faster iteration through intelligent automation and AI assistance</p>
                        </div>
                      </div>
                    </div>
                    <div className="group rounded-lg border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 p-4 transition-all duration-300 hover:border-brand-primary/20 hover:bg-brand-primary/[0.02] hover:translate-x-1">
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary/20 transition-colors">✓</span>
                        <div>
                          <h3 className="font-semibold text-brand-dark dark:text-brand-light group-hover:text-brand-primary transition-colors">Context-Aware Architecture</h3>
                          <p className="text-sm text-brand-text dark:text-brand-muted">Maximize AI potential with intelligent context management and processing</p>
                        </div>
                      </div>
                    </div>
                    <div className="group rounded-lg border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 p-4 transition-all duration-300 hover:border-brand-primary/20 hover:bg-brand-primary/[0.02] hover:translate-x-1">
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary/20 transition-colors">✓</span>
                        <div>
                          <h3 className="font-semibold text-brand-dark dark:text-brand-light group-hover:text-brand-primary transition-colors">Advanced Agent Orchestration</h3>
                          <p className="text-sm text-brand-text dark:text-brand-muted">Seamlessly coordinate AI agents for complex automated workflows</p>
                        </div>
                      </div>
                    </div>
                    <div className="group rounded-lg border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 p-4 transition-all duration-300 hover:border-brand-primary/20 hover:bg-brand-primary/[0.02] hover:translate-x-1">
                      <div className="flex items-start gap-3">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary/20 transition-colors">✓</span>
                        <div>
                          <h3 className="font-semibold text-brand-dark dark:text-brand-light group-hover:text-brand-primary transition-colors">Rapid Prototyping Pipeline</h3>
                          <p className="text-sm text-brand-text dark:text-brand-muted">From concept to production with unprecedented speed and reliability</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] rounded-xl border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 backdrop-blur-sm p-4 transition-all duration-300 hover:border-brand-primary/20 hover:bg-brand-primary/[0.02] group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                <IconCloud iconSlugs={techSlugs} />
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footerdemo />

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  );
}
