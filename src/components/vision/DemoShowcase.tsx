import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface DemoShowcaseProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const DemoShowcase = ({ fadeIn }: DemoShowcaseProps) => {
  return (
    <motion.section 
      id="demo"
      className="space-y-8"
      variants={fadeIn}
    >
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Try It Out</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Experience a preview of the Mentalic interface. This interactive demo shows how users navigate their knowledge journey.
        </p>
      </div>
      
      <div className="mt-8 flex flex-col items-center justify-center">
        {/* External link button */}
        <div className="flex justify-center">
          <a 
            href="https://preview--skill-soul-journey.lovable.app/profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2 px-4 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-primary/90 transition-colors"
            tabIndex={0}
          >
            <span>Open in new tab</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic text-center max-w-md">
          <p>This demo showcases the user profile experience, where you can explore your knowledge map and track progress across different domains.</p>
          <p className="mt-2">Note: This is a UX prototype designed to demonstrate the look and feel of the Mentalic mobile experience.</p>
        </div>
      </div>
    </motion.section>
  );
}; 