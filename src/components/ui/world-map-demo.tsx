"use client";
import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

export function WorldMapDemo() {
  return (
    <div className="py-20 w-full relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent dark:via-black/[0.02]" />
      <div className="max-w-7xl mx-auto text-center relative">
        <p className="font-bold text-xl md:text-4xl text-brand-dark dark:text-brand-light">
          Global{" "}
          <span className="text-brand-primary/60">
            {"Development".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-brand-text dark:text-brand-muted max-w-2xl mx-auto py-4">
          Leveraging AI to coordinate development across time zones. Building and deploying enterprise solutions with unprecedented speed and efficiency.
        </p>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-8 mb-16">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-brand-primary">10x</span>
            <span className="text-sm text-brand-text dark:text-brand-muted mt-2">Faster Development</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-brand-primary">&lt;10</span>
            <span className="text-sm text-brand-text dark:text-brand-muted mt-2">Team Members</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold text-brand-primary">24/7</span>
            <span className="text-sm text-brand-text dark:text-brand-muted mt-2">AI-Powered Operations</span>
          </div>
        </div>
      </div>
      <div className="mt-8 px-4 relative">
        <div className="bg-gradient-to-b from-transparent via-white/[0.02] to-transparent dark:via-black/[0.02] rounded-xl">
          <WorldMap
            dots={[
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
              },
              {
                start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
                end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              },
              {
                start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
                end: { lat: 51.5074, lng: -0.1278 }, // London
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 1.3521, lng: 103.8198 }, // Singapore
              },
              {
                start: { lat: 1.3521, lng: 103.8198 }, // Singapore
                end: { lat: -33.8688, lng: 151.2093 }, // Sydney
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
} 