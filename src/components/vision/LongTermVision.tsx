import { motion } from "framer-motion";

interface LongTermVisionProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const LongTermVision = ({ fadeIn }: LongTermVisionProps) => {
  return (
    <motion.section 
      className="space-y-6"
      variants={fadeIn}
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Long-Term Vision</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Mentalic aims to fundamentally alter how individuals own and leverage their data, eventually creating a Context Operating System that enables seamless information portability across platforms—challenging the extractive models of tech giants.
      </p>
    </motion.section>
  );
}; 