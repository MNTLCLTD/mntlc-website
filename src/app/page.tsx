import Image from "next/image";
import { HomeIcon, Lightbulb, BookOpen, Send } from 'lucide-react';
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Hero } from "@/components/ui/animated-hero";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { Footerdemo } from "@/components/ui/footer-section";
// Commented out sections
// import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
// import { WorldMapDemo } from "@/components/ui/world-map-demo";
// import { FocusAreas } from "@/components/ui/focus-areas";

// Keeping tech slugs for future use
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

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* Spacer to push footer down */}
        <div className="h-[0vh]" />

        {/* Commented out sections */}
        {/* Global Reach Section
        <WorldMapDemo />

        Focus Areas Section
        <FocusAreas />

        Features Section
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold mb-12 text-center text-brand-dark dark:text-brand-light">
              Why Choose Mentalic
            </h2>
            <FeaturesSectionWithHoverEffects />
          </div>
        </section>

        Technology Section
        <section className="pb-80 pt-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-brand-dark dark:text-brand-light">
                  Built with Cutting-Edge Technology
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-brand-text dark:text-brand-muted">
                    At Mentalic, we push boundaries by combining state-of-the-art tech and AI-focused practices to deliver robust, scalable solutions.
                  </p>
                  <ul className="space-y-4 text-brand-text dark:text-brand-muted">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-success">✓</span>
                      <span>AI-Powered Development Pipeline for rapid iteration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-success">✓</span>
                      <span>Cloud-Native Architecture ensuring reliability and effortless scalability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-success">✓</span>
                      <span>Advanced Machine Learning models for highly personalized experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-success">✓</span>
                      <span>Real-Time Data Processing providing immediate, actionable insights</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative h-[400px]">
                <IconCloud iconSlugs={techSlugs} />
              </div>
            </div>
          </div>
        </section> */}

        {/* Footer */}
        <Footerdemo />
      </div>
    </div>
  );
}
