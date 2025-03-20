import { motion } from "framer-motion";
import { LayoutDashboard, Network, Gamepad } from "lucide-react";

interface SolutionProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
  fadeInLeft: {
    initial: { opacity: number; x: number };
    animate: { opacity: number; x: number };
    transition: { duration: number };
  };
  fadeInRight: {
    initial: { opacity: number; x: number };
    animate: { opacity: number; x: number };
    transition: { duration: number };
  };
}

export const Solution = ({ fadeIn, fadeInLeft, fadeInRight }: SolutionProps) => {
  return (
    <motion.section 
      id="solution"
      className="space-y-12"
      variants={fadeIn}
    >
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Our Solution</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Mentalic provides a continuous assessment experience that makes learning and knowledge management feel natural and engaging.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <LayoutDashboard className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Personalized Knowledge Maps</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Your personalized knowledge map grows with you, adapting to your learning patterns and highlighting areas where you can grow or deepen your understanding. It provides a dynamic representation of your cognitive landscape across all domains.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="h-12 w-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Network className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Adaptive Cognitive Profiles</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Mentalic recognizes and adapts to your unique learning patterns, creating a comprehensive profile that showcases your individual cognitive strengths. This profile becomes increasingly valuable in an AI-driven world where unique human capabilities are at a premium.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="h-12 w-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Gamepad className="h-6 w-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Meta-Layer Integration</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Unlike traditional learning platforms, Mentalic functions as a meta-layer atop existing educational technology. We don't teach content—we map what you know, identify gaps, and help you showcase your unique knowledge profile regardless of how or where you acquired that knowledge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}; 