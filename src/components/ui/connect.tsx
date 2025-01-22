"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Brain, Globe, HeartHandshake, Lightbulb, ShieldCheck } from "lucide-react";
import { useAnimate } from "framer-motion";

import { Button, buttonVariants } from "@/components/ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";

export function Connect() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#ai-research", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#ai-research", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#mental-health", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#mental-health", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#accessibility", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#accessibility", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#privacy", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#privacy", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      },
    );
  }, [animate]);

  return (
    <section className="relative mx-auto mb-20 mt-6 max-w-5xl">
      <HighlightGroup className="group h-full">
        <div
          className="group/item h-full md:col-span-6 lg:col-span-12"
          data-aos="fade-down"
        >
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 backdrop-blur-sm">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                quantity={200}
                color={"#555555"}
                vy={-0.2}
              />
              <div className="flex justify-center">
                <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[300px] md:flex-row">
                  <div
                    className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                    ref={scope}
                  >
                    <Brain className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-brand-primary" />
                    <div
                      id="privacy"
                      className="absolute bottom-12 left-14 rounded-3xl border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 backdrop-blur-sm px-2 py-1.5 text-xs opacity-50"
                    >
                      Privacy & Security
                    </div>
                    <div
                      id="mental-health"
                      className="absolute left-2 top-20 rounded-3xl border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 backdrop-blur-sm px-2 py-1.5 text-xs opacity-50"
                    >
                      Mental Health
                    </div>
                    <div
                      id="accessibility"
                      className="absolute bottom-20 right-1 rounded-3xl border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 backdrop-blur-sm px-2 py-1.5 text-xs opacity-50"
                    >
                      Global Accessibility
                    </div>
                    <div
                      id="ai-research"
                      className="absolute right-12 top-10 rounded-3xl border border-brand-light/10 dark:border-brand-dark/10 bg-brand-light/5 dark:bg-brand-dark/5 backdrop-blur-sm px-2 py-1.5 text-xs opacity-50"
                    >
                      AI Research
                    </div>

                    <div id="pointer" className="absolute">
                      <svg
                        width="16.8"
                        height="18.2"
                        viewBox="0 0 12 13"
                        className="fill-brand-primary"
                        stroke="white"
                        strokeWidth="1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                        />
                      </svg>
                      <span className="bg-brand-primary relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-white">
                        Focus
                      </span>
                    </div>
                  </div>

                  <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                    <div className="flex flex-col items-center">
                      <h3 className="mt-6 pb-1 font-bold">
                        <span className="text-2xl md:text-4xl">
                          Want to learn more about Mentalic?
                        </span>
                      </h3>
                    </div>
                    <p className="mb-4 text-brand-text dark:text-brand-muted">
                      Get in touch with our team to discuss how we can help transform mental healthcare.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={"mailto:contact@mentalic.ai"}
                        target="_blank"
                      >
                        <Button>Contact Us</Button>
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/mentalic"
                        target="_blank"
                        className={cn(
                          buttonVariants({
                            variant: "outline",
                            size: "icon",
                          }),
                        )}
                      >
                        <span className="flex items-center gap-1">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </HighlighterItem>
        </div>
      </HighlightGroup>
    </section>
  );
} 