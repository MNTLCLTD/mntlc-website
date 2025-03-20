import { motion } from "framer-motion";

interface MarketOpportunityProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const MarketOpportunity = ({ fadeIn }: MarketOpportunityProps) => {
  return (
    <motion.section 
      className="space-y-6"
      variants={fadeIn}
    >
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">The Market Opportunity</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        The traditional credentials economy is collapsing. With 67% of hiring managers now prioritizing demonstrated skills over degrees, we're addressing a $92 billion direct-to-consumer learning market growing at 18% annually. LinkedIn's outdated approach to professional identity creates a perfect disruption opportunity.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
          <div className="text-4xl font-bold text-brand-primary mb-3">67%</div>
          <div className="text-gray-700 dark:text-gray-300">Hiring managers prioritize skills over degrees</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
          <div className="text-4xl font-bold text-brand-primary mb-3">$92B</div>
          <div className="text-gray-700 dark:text-gray-300">Direct-to-consumer learning market</div>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm">
          <div className="text-4xl font-bold text-brand-primary mb-3">18%</div>
          <div className="text-gray-700 dark:text-gray-300">Annual market growth rate</div>
        </div>
      </div>
    </motion.section>
  );
}; 