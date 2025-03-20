import { motion } from "framer-motion";

interface VisionHeroProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setIsAuthenticated: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

export const VisionHero = ({
  isDarkMode,
  toggleDarkMode,
  setIsAuthenticated,
  scrollToSection,
}: VisionHeroProps) => {
  return (
    <>
      {/* Empty header space for consistent layout */}
      <div className="mb-16"></div>

      <motion.div 
        className="mb-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Mentalic
        </h1>
        <p className="text-xl text-brand-primary font-medium mb-8">
          Your Personal Knowledge Map
        </p>
        
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Mentalic is a continuous assessment tool that visualizes individual knowledge journeys across all domains. Unlike traditional learning platforms, we don't teach content—we map what you know, identify gaps, and build shareable cognitive profiles that highlight unique strengths in an AI-driven world.
        </p>
      </motion.div>

      {/* Quick navigation buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <button 
          onClick={() => scrollToSection('vision-statement')}
          className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
          tabIndex={0}
        >
          What We Do
        </button>
        <button 
          onClick={() => scrollToSection('solution')}
          className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
          tabIndex={0}
        >
          Our Solution
        </button>
        <button 
          onClick={() => scrollToSection('competitive-advantage')}
          className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
          tabIndex={0}
        >
          Why Mentalic
        </button>
        <button 
          onClick={() => scrollToSection('path-to-market')}
          className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
          tabIndex={0}
        >
          Path to Market
        </button>
        <button 
          onClick={() => scrollToSection('team')}
          className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
          tabIndex={0}
        >
          Team
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          className="px-5 py-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
          tabIndex={0}
        >
          Contact
        </button>
      </motion.div>
    </>
  );
}; 