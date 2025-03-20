import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { ContactDialog } from "@/components/ui/contact-dialog";

interface ContactSectionProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const ContactSection = ({ fadeIn }: ContactSectionProps) => {
  return (
    <motion.section 
      id="contact"
      className="space-y-8 mt-24"
      variants={fadeIn}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Interested in learning more about Mentalic? Get in touch with our team or join our waitlist.
        </p>
      </div>
      
      <div className="flex justify-center">
        <Link 
          href="/waitlist" 
          className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-primary/90 transition-colors group"
        >
          <span>Join Waitlist</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      <div className="text-center mt-16 space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Information</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Mentalic Ltd.<br />
          Democratizing AI-Powered Productivity Through Vertical-Specific Solutions
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6">
          <a 
            href="mailto:contact@mentalic.ltd" 
            className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 transition-colors text-lg"
            tabIndex={0}
          >
            <Mail className="mr-2 h-5 w-5" />
            contact@mentalic.ltd
          </a>
          
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>
          
          <div className="flex justify-center">
            <ContactDialog />
          </div>
        </div>
        
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>For investor inquiries, please contact: <a href="mailto:investors@mentalic.ltd" className="text-brand-primary hover:underline">investors@mentalic.ltd</a></p>
        </div>
      </div>
    </motion.section>
  );
}; 