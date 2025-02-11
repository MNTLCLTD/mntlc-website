"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRef, useState } from "react";

interface LegalDialogProps {
  type: 'terms' | 'privacy';
  trigger?: React.ReactNode;
}

export function LegalDialog({ type, trigger }: LegalDialogProps) {
  const [hasReadToBottom, setHasReadToBottom] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const content = contentRef.current;
    if (!content) return;

    const scrollPercentage = content.scrollTop / (content.scrollHeight - content.clientHeight);
    if (scrollPercentage >= 0.99 && !hasReadToBottom) {
      setHasReadToBottom(true);
    }
  };

  const handleDecline = () => {
    setIsShaking(true);
    // Add a subtle red background flash
    const dialog = document.querySelector('[role="dialog"]');
    if (dialog) {
      dialog.classList.add('animate-flash-red');
      setTimeout(() => {
        dialog.classList.remove('animate-flash-red');
      }, 500);
    }
    // Reset shake animation after it completes
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  const content = type === 'terms' ? termsContent : privacyContent;
  const title = type === 'terms' ? 'Terms of Service' : 'Privacy Policy';

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" className="text-brand-text/60 dark:text-brand-muted/60 transition-colors hover:text-brand-primary">
            {title}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className={`flex flex-col max-h-[85vh] bg-white text-gray-900 p-0 gap-0 sm:max-w-lg transition-all duration-200 ${
        isShaking ? 'animate-shake' : ''
      }`}>
        <style jsx global>{`
          @keyframes shake {
            0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
            25% { transform: translate(-50%, -50%) rotate(-0.5deg); }
            75% { transform: translate(-50%, -50%) rotate(0.5deg); }
          }
          
          @keyframes flash-red {
            0%, 100% { background-color: white; }
            50% { background-color: rgba(239, 68, 68, 0.05); }
          }

          .animate-shake {
            animation: shake 0.15s ease-in-out 0s 3;
          }

          .animate-flash-red {
            animation: flash-red 0.5s ease-in-out;
          }
        `}</style>

        {/* Header */}
        <div className="shrink-0 border-b border-gray-200/10">
          <DialogHeader className="px-8 py-6">
            <DialogTitle className="text-xl font-semibold">
              {title}
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Scrollable Content */}
        <div 
          ref={contentRef} 
          onScroll={handleScroll} 
          className="flex-1 overflow-y-auto px-8 py-6 min-h-0"
        >
          <DialogDescription asChild>
            <div className="space-y-6 text-gray-800">
              {content}
            </div>
          </DialogDescription>
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-gray-200/10 bg-white/80 px-8 py-6 backdrop-blur-xl">
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={handleDecline}
              className="min-w-[100px] rounded-full border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
            >
              Decline
            </Button>
            <DialogClose asChild>
              <Button
                type="button"
                disabled={!hasReadToBottom}
                className="min-w-[100px] rounded-full bg-brand-primary font-medium text-white hover:bg-brand-primary/90 transition-colors"
              >
                Accept
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const termsContent = (
  <>
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">1. Introduction</h3>
      <p className="leading-relaxed text-gray-700">
        These Terms of Service ("Terms") govern your use of services provided by Mentalic Group Ltd ("we," "our," or "the Company"), 
        a company registered in England and Wales (Company Number: 14674642).
      </p>
      <p className="leading-relaxed text-gray-700">
        By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, 
        you may not access our services.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">2. Services</h3>
      <p className="leading-relaxed text-gray-700">
        We provide AI-powered software development and consulting services. The specific scope, deliverables, and terms of 
        engagement will be detailed in separate service agreements.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">3. Intellectual Property</h3>
      <p className="leading-relaxed text-gray-700">
        Unless otherwise specified in writing, we retain all intellectual property rights for our services, methodologies, 
        and deliverables. Any pre-existing IP remains with its original owner.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">4. Confidentiality</h3>
      <p className="leading-relaxed text-gray-700">
        We maintain strict confidentiality regarding all client information and project details. Specific confidentiality 
        terms will be outlined in individual service agreements.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">5. Limitation of Liability</h3>
      <p className="leading-relaxed text-gray-700">
        Our liability is limited to the fees paid for the specific services in question. We are not liable for indirect, 
        consequential, or incidental damages.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">6. Governing Law</h3>
      <p className="leading-relaxed text-gray-700">
        These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive 
        jurisdiction of the courts of England and Wales.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">7. Modifications</h3>
      <p className="leading-relaxed text-gray-700">
        We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website.
      </p>
    </section>
  </>
);

const privacyContent = (
  <>
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">1. Data Collection</h3>
      <p className="leading-relaxed text-gray-700">
        We collect and process personal data in accordance with the UK Data Protection Act 2018 and the UK GDPR. 
        This includes:
      </p>
      <ul className="list-disc pl-6 space-y-2 leading-relaxed text-gray-700">
        <li>Contact information (name, email, phone number)</li>
        <li>Business information</li>
        <li>Project-related data</li>
        <li>Website usage data</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">2. Use of Data</h3>
      <p className="leading-relaxed text-gray-700">
        We use collected data to:
      </p>
      <ul className="list-disc pl-6 space-y-2 leading-relaxed text-gray-700">
        <li>Provide and improve our services</li>
        <li>Communicate with clients</li>
        <li>Comply with legal obligations</li>
        <li>Analyze and enhance our website performance</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">3. Data Protection</h3>
      <p className="leading-relaxed text-gray-700">
        We implement appropriate technical and organizational measures to ensure data security. Access to personal data 
        is strictly limited to authorized personnel.
      </p>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">4. Data Sharing</h3>
      <p className="leading-relaxed text-gray-700">
        We do not sell personal data. We may share data with:
      </p>
      <ul className="list-disc pl-6 space-y-2 leading-relaxed text-gray-700">
        <li>Service providers (under strict confidentiality agreements)</li>
        <li>Legal authorities when required by law</li>
        <li>Third parties with explicit consent</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">5. Your Rights</h3>
      <p className="leading-relaxed text-gray-700">
        Under UK data protection law, you have rights including:
      </p>
      <ul className="list-disc pl-6 space-y-2 leading-relaxed text-gray-700">
        <li>Access to your data</li>
        <li>Correction of inaccurate data</li>
        <li>Erasure of data</li>
        <li>Data portability</li>
        <li>Objection to processing</li>
      </ul>
    </section>

    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900">6. Contact</h3>
      <p className="leading-relaxed text-gray-700">
        For any data protection queries, please contact us at contact@mentalic.ltd
      </p>
    </section>
  </>
); 