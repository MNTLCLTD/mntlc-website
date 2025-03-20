import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface DataPrivacyProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const DataPrivacy = ({ fadeIn }: DataPrivacyProps) => {
  return (
    <motion.section 
      className="space-y-6"
      variants={fadeIn}
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Your Data, Your Control</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        At Mentalic, we believe your knowledge profile belongs to you, not us. Our approach to data privacy:
      </p>
      
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm mt-6">
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">User Ownership</h3>
              <p className="text-gray-700 dark:text-gray-300">Your knowledge profile belongs to you, with full export capabilities</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Transparent Data Usage</h3>
              <p className="text-gray-700 dark:text-gray-300">Clear explanations of how your data is used to improve your experience</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">Selective Sharing</h3>
              <p className="text-gray-700 dark:text-gray-300">You control exactly what parts of your profile are shared and with whom</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle className="h-6 w-6 text-brand-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white">No Data Selling</h3>
              <p className="text-gray-700 dark:text-gray-300">We never sell your personal data to third parties</p>
            </div>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}; 