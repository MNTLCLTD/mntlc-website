"use client";

import {
  BrainCircuitIcon,
  RocketIcon,
  SparklesIcon,
  ZapIcon,
} from "lucide-react";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const focusAreas = [
  {
    Icon: RocketIcon,
    name: "10x Development Speed",
    description: "Revolutionizing software development through AI-powered automation and advanced agent orchestration. Building enterprise-grade solutions in record time.",
    href: "#speed",
    cta: "See our process",
    background: <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />,
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    Icon: SparklesIcon,
    name: "Context Engineering",
    description: "Creating frameworks that maximize AI potential through thoughtful context design and prompt engineering.",
    href: "#context",
    cta: "Learn our approach",
    background: <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: ZapIcon,
    name: "Cost Efficiency",
    description: "Achieving billion-pound impact with a lean, AI-augmented team. Redefining what's possible with minimal human resources.",
    href: "#efficiency",
    cta: "View metrics",
    background: <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />,
    className: "lg:col-span-1 lg:row-span-1",
  },
  {
    Icon: BrainCircuitIcon,
    name: "AI-First Architecture",
    description: "Building systems that leverage AI at every level, from development to deployment. Creating software that thinks and adapts.",
    href: "#architecture",
    cta: "Explore tech",
    background: <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 via-transparent to-transparent" />,
    className: "lg:col-span-2 lg:row-span-1",
  },
];

export function FocusAreas() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent dark:via-black/[0.02]" />
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* <h2 className="text-3xl font-bold mb-12 text-center text-brand-dark dark:text-brand-light">
            Redefining Software Development
          </h2> */}
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