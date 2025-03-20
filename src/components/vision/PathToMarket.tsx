import { motion } from "framer-motion";
import { Lightbulb, Rocket, Users, Target, Building, Briefcase, Globe } from "lucide-react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface PathToMarketProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const PathToMarket = ({ fadeIn }: PathToMarketProps) => {
  const [showVisionDetails, setShowVisionDetails] = useState(false);

  return (
    <motion.section 
      id="path-to-market"
      className="space-y-12"
      variants={fadeIn}
    >
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Market Approach</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          We're taking a strategic approach to building and launching Mentalic, focusing on creating a solid foundation 
          before scaling to reach a wider audience.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Initial Focus</h3>
        <div className="flex items-start gap-4 mb-6">
          <div className="h-12 w-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
            <Users className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Individual learners and professionals seeking to understand, develop, and showcase their knowledge
          </p>
        </div>
        
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Launch Timeline</h3>
        <div className="relative pl-8 space-y-8">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-4 left-3 w-px bg-gray-200 dark:bg-gray-700"></div>
          
          {/* Q3 2025 */}
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <Rocket className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Q3 2025</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Consumer product focus</p>
              </div>
            </div>
          </div>
          
          {/* Q4 2025 */}
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <Rocket className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white">Q4 2025</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Initial platform launch</p>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4 mt-8">Long-Term Vision</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Enterprise solutions for employee skills assessment and development
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Globe className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              Educational institution partnerships
            </p>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Briefcase className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              API platform for third-party developers
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Investment Opportunity</h2>
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Mentalic represents a fundamental shift in how individuals own and leverage their knowledge, creating a new standard for proving and sharing expertise in the digital age. We're positioned at the intersection of several growing markets:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Personalized learning</h4>
              <p className="text-sm text-brand-primary">£X by 2028</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Education 4.0</h4>
              <p className="text-sm text-brand-primary">£X by 2028</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Professional skills development</h4>
              <p className="text-sm text-brand-primary">£X by 2030</p>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300">For investor inquiries: <a href="mailto:investors@mentalic.lt" className="text-brand-primary hover:underline">investors@mentalic.lt</a></p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}; 