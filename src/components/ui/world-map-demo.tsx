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
            {"Accessibility".split("").map((word, idx) => (
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
          Breaking language barriers with our advanced localization capabilities. Making mental health support accessible to everyone, everywhere.
        </p>
      </div>
      <div className="mt-8 px-4 relative">
        <div className="bg-gradient-to-b from-transparent via-white/[0.02] to-transparent dark:via-black/[0.02] rounded-xl">
          <WorldMap
            dots={[
              {
                start: {
                  lat: 64.2008,
                  lng: -149.4937,
                }, // Alaska (Fairbanks)
                end: {
                  lat: 34.0522,
                  lng: -118.2437,
                }, // Los Angeles
              },
              {
                start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              },
              {
                start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
              },
              {
                start: { lat: 51.5074, lng: -0.1278 }, // London
                end: { lat: 28.6139, lng: 77.209 }, // New Delhi
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
              },
              {
                start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
} 