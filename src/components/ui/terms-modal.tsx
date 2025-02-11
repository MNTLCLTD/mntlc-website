"use client";

import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'terms' | 'privacy';
}

export function LegalModal({ isOpen, onClose, type }: ModalProps) {
  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Ensure we're at the top when opening
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const content = type === 'terms' ? termsContent : privacyContent;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          
          {/* Modal Container - ensures vertical centering */}
          <div className="min-h-screen px-4 text-center">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative inline-block w-full max-w-3xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white/90 dark:bg-black/90 rounded-2xl shadow-2xl backdrop-blur-xl"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-brand-light/10 dark:border-brand-dark/10">
                <div className="px-8 py-6 flex items-center justify-between">
                  <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-brand-dark to-brand-primary dark:from-brand-light dark:to-brand-primary">
                    {type === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="rounded-full hover:bg-brand-dark/5 dark:hover:bg-brand-light/5"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="px-8 py-6 max-h-[60vh] overflow-y-auto space-y-8 text-brand-text/90 dark:text-brand-muted/90">
                  {content}
                </div>
                {/* Gradient overlays */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/80 to-transparent dark:from-black/80 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white/80 to-transparent dark:from-black/80 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

const termsContent = (
  <>
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">1. Introduction</h3>
      <p className="leading-relaxed">
        These Terms of Service ("Terms") govern your use of services provided by Mentalic Group Ltd ("we," "our," or "the Company"), 
        a company registered in England and Wales (Company Number: 14674642).
      </p>
      <p className="leading-relaxed">
        By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, 
        you may not access our services.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">2. Services</h3>
      <p className="leading-relaxed">
        We provide AI-powered software development and consulting services. The specific scope, deliverables, and terms of 
        engagement will be detailed in separate service agreements.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">3. Intellectual Property</h3>
      <p className="leading-relaxed">
        Unless otherwise specified in writing, we retain all intellectual property rights for our services, methodologies, 
        and deliverables. Any pre-existing IP remains with its original owner.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">4. Confidentiality</h3>
      <p className="leading-relaxed">
        We maintain strict confidentiality regarding all client information and project details. Specific confidentiality 
        terms will be outlined in individual service agreements.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">5. Limitation of Liability</h3>
      <p className="leading-relaxed">
        Our liability is limited to the fees paid for the specific services in question. We are not liable for indirect, 
        consequential, or incidental damages.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">6. Governing Law</h3>
      <p className="leading-relaxed">
        These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive 
        jurisdiction of the courts of England and Wales.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">7. Modifications</h3>
      <p className="leading-relaxed">
        We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website.
      </p>
    </section>
  </>
);

const privacyContent = (
  <>
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">1. Data Collection</h3>
      <p className="leading-relaxed">
        We collect and process personal data in accordance with the UK Data Protection Act 2018 and the UK GDPR. 
        This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 leading-relaxed">
        <li>Contact information (name, email, phone number)</li>
        <li>Business information</li>
        <li>Project-related data</li>
        <li>Website usage data</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">2. Use of Data</h3>
      <p className="leading-relaxed">
        We use collected data to:
      </p>
      <ul className="list-disc pl-6 space-y-2 leading-relaxed">
        <li>Provide and improve our services</li>
        <li>Communicate with clients</li>
        <li>Comply with legal obligations</li>
        <li>Analyze and enhance our website performance</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">3. Data Protection</h3>
      <p className="leading-relaxed">
        We implement appropriate technical and organizational measures to ensure data security. Access to personal data 
        is strictly limited to authorized personnel.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">4. Data Sharing</h3>
      <p className="leading-relaxed">
        We do not sell personal data. We may share data with:
      </p>
      <ul className="list-disc pl-6 space-y-2 leading-relaxed">
        <li>Service providers (under strict confidentiality agreements)</li>
        <li>Legal authorities when required by law</li>
        <li>Third parties with explicit consent</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">5. Your Rights</h3>
      <p className="leading-relaxed">
        Under UK data protection law, you have rights including:
      </p>
      <ul className="list-disc pl-6 space-y-2 leading-relaxed">
        <li>Access to your data</li>
        <li>Correction of inaccurate data</li>
        <li>Erasure of data</li>
        <li>Data portability</li>
        <li>Objection to processing</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-brand-dark dark:text-brand-light">6. Contact</h3>
      <p className="leading-relaxed">
        For any data protection queries, please contact us at contact@mentalic.ltd
      </p>
    </section>
  </>
); 