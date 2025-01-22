"use client";

import {
  BrainCircuitIcon,
  GlobeIcon,
  HeartHandshakeIcon,
  LightbulbIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const focusAreas = [
  {
    Icon: BrainCircuitIcon,
    name: "Mental Health Innovation",
    description: "Revolutionizing mental health support through AI-driven personalization and continuous learning adaptation.",
    href: "#mental-health",
    cta: "Explore our approach",
    background: <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />,
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    Icon: GlobeIcon,
    name: "Global Accessibility",
    description: "Breaking down language and cultural barriers to make mental health support universally accessible.",
    href: "#accessibility",
    cta: "Learn about our reach",
    background: <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: HeartHandshakeIcon,
    name: "Personalized Care",
    description: "Tailoring support to individual needs through advanced AI understanding and adaptation.",
    href: "#personalized-care",
    cta: "See how it works",
    background: <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: LightbulbIcon,
    name: "Research & Development",
    description: "Advancing the field through continuous innovation and collaboration with mental health experts.",
    href: "#research",
    cta: "View our research",
    background: <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />,
    className: "lg:col-span-2 lg:row-span-1",
  },
  {
    Icon: ShieldCheckIcon,
    name: "Privacy & Security",
    description: "Ensuring the highest standards of data protection and user privacy in mental health technology.",
    href: "#security",
    cta: "Our commitments",
    background: <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
];

export function FocusAreas() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent dark:via-black/[0.02]" />
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-brand-dark dark:text-brand-light">
            Our Focus Areas
          </h2>
          <BentoGrid className="lg:grid-rows-[repeat(2,minmax(0,1fr))] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
            {focusAreas.map((area) => (
              <BentoCard key={area.name} {...area} />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
} 