"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const verticals = useMemo(
    () => [
      "Healthcare",
      "Finance",
      "Legal Tech",
      "Enterprise",
      "Research"
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === verticals.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, verticals]);

  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="container mx-auto px-8 sm:px-12 md:px-16 lg:px-8">
        <div className="flex gap-8 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col">            
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-regular">
              <span className="text-brand-dark dark:text-brand-light">AI-Powered Solutions for</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {verticals.map((vertical, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-brand-primary"
                    initial={{ opacity: 0, y: "100" }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -100 : 100,
                            opacity: 0,
                          }
                    }
                  >
                    {vertical}
                  </motion.span>
                ))}
              </span>
            </h1>

            <div className="text-lg md:text-xl leading-relaxed tracking-tight text-brand-text dark:text-brand-muted max-w-3xl text-center">
              <p className="mb-4">
                Building intelligent systems that transform industries. We combine advanced AI with expert engineering to deliver robust, scalable solutions at unprecedented speed.
              </p>
              <p className="text-brand-text/80 dark:text-brand-muted/80">
                Our AI-first approach and deep industry expertise enable rapid development of sophisticated applications while maintaining enterprise-grade reliability.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Link href="https://wa.me/447598884033" target="_blank">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-brand-primary/20 hover:bg-brand-primary/10"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/company/93088706" target="_blank">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-brand-primary/20 hover:bg-brand-primary/10"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <a href="mailto:charlie@mentalic.ltd">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full border-brand-primary/20 hover:bg-brand-primary/10"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 