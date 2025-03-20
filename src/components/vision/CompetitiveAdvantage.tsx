import { motion } from "framer-motion";
import { Clock, Brain, Network, Globe } from "lucide-react";

interface CompetitiveAdvantageProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const CompetitiveAdvantage = ({ fadeIn }: CompetitiveAdvantageProps) => {
  return (
    <motion.section 
      className="space-y-6"
      variants={fadeIn}
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Competitive Advantages</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Unlike platforms focused on content delivery or static credentials, Mentalic delivers:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
              <Clock className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="text-xl font-semibold text-gray-900 dark:text-white">Continuous Assessment</div>
          </div>
          <div className="text-gray-700 dark:text-gray-300">Ongoing evaluation that builds a comprehensive picture of knowledge over time, unlike traditional end-of-term exams.</div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
              <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-xl font-semibold text-gray-900 dark:text-white">Cognitive Science Foundation</div>
          </div>
          <div className="text-gray-700 dark:text-gray-300">Built on years of research in AI-driven pedagogy, recognizing and adapting to unique learning patterns.</div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
              <Network className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <div className="text-xl font-semibold text-gray-900 dark:text-white">Knowledge Visualization</div>
          </div>
          <div className="text-gray-700 dark:text-gray-300">Creates intuitive, interconnected knowledge maps showing how concepts relate across domains.</div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
              <Globe className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="text-xl font-semibold text-gray-900 dark:text-white">Global Accessibility</div>
          </div>
          <div className="text-gray-700 dark:text-gray-300">Built with localization from day one, initially supporting English, Russian, Spanish, and Mandarin, with AI-powered expansion to all major languages.</div>
        </div>
      </div>
    </motion.section>
  );
}; 