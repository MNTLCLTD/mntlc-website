import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface RevolutionaryApproachProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const RevolutionaryApproach = ({ fadeIn }: RevolutionaryApproachProps) => {
  return (
    <motion.section 
      className="space-y-6"
      variants={fadeIn}
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Revolutionary Development Approach</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Mentalic operates through autonomous production units empowered by advanced AI tools:
      </p>
      
      <ul className="space-y-5 mt-6">
        <li className="flex items-start gap-4 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm">
          <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
          <span className="text-gray-700 dark:text-gray-300">Elimination of middle management and bureaucracy</span>
        </li>
        <li className="flex items-start gap-4 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm">
          <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
          <span className="text-gray-700 dark:text-gray-300">Direct connection between vision and execution</span>
        </li>
        <li className="flex items-start gap-4 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm">
          <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
          <span className="text-gray-700 dark:text-gray-300">10×+ faster development cycles than traditional approaches</span>
        </li>
        <li className="flex items-start gap-4 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm">
          <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
          <span className="text-gray-700 dark:text-gray-300">Natural virality built into the product's sharing mechanics</span>
        </li>
      </ul>
    </motion.section>
  );
}; 