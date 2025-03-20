import { motion } from "framer-motion";
import { Building, Users, Layers, ArrowRight, Code, Lightbulb, Plus } from "lucide-react";

interface TeamSectionProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const TeamSection = ({ fadeIn }: TeamSectionProps) => {
  return (
    <motion.section 
      id="team"
      className="space-y-10"
      variants={fadeIn}
    >
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Leadership Team</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Our team combines expertise in AI, education, and business development to create a revolutionary approach to knowledge assessment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4 flex items-center justify-center">
            <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Charles Barlow</h3>
          <p className="text-brand-primary font-medium mb-3">Founder, Executive Chairman & CPO</p>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
            <li>• Built EduEase (AI-driven assessment platform)</li>
            <li>• Co-Founder of AI4 Style</li>
            <li>• First-class honors in Computing & Business (Goldsmiths)</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4 flex items-center justify-center">
            <Lightbulb className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Kate Shepherd</h3>
          <p className="text-brand-primary font-medium mb-3">Co-Founder, CEO</p>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
            <li>• Seasoned executive with extensive experience negotiating multi-million-pound contracts</li>
            <li>• Expert in large-scale project management</li>
            <li>• Extensive experience working within employment, coaching, mentoring media graduates</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="h-16 w-16 bg-teal-100 dark:bg-teal-900/30 rounded-full mb-4 flex items-center justify-center">
            <Code className="h-8 w-8 text-teal-600 dark:text-teal-400" />
          </div>
          <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">John Barlow</h3>
          <p className="text-brand-primary font-medium mb-3">Co-Founder, CTO & Product Owner</p>
          <ul className="text-gray-700 dark:text-gray-300 space-y-2 text-sm">
            <li>• Developer with over a decade of industry experience</li>
            <li>• Led business-critical projects at OnSecurity and Expansive Solutions</li>
            <li>• Expertise in AI integration with OpenAI and Anthropic APIs</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 mt-12">Organizational Structure</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Mentalic is the first product offered by MNTLC (Mental Tender Loving Care), our parent company designed for multi-vertical scalability:
        </p>
        <ul className="list-disc pl-5 mt-4 text-lg text-gray-700 dark:text-gray-300 space-y-2">
          <li>Autonomous teams for faster innovation</li>
          <li>Quality preservation across products</li>
          <li>Shared resources and expertise</li>
          <li>Additional verticals planned for Q3 2025 and Q1 2026</li>
        </ul>
      </div>

      {/* Organization Structure Diagram - More Compact */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
        {/* Parent Company */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 w-full max-w-md text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-10 w-10 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center">
                <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">MNTLC</h3>
            </div>
            <div className="flex justify-center gap-3 text-sm">
              <div className="px-2 py-1 bg-white dark:bg-gray-800 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">Charles Barlow</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Founder & Chairman</p>
              </div>
              <div className="px-2 py-1 bg-white dark:bg-gray-800 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">John Barlow</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Co-Founder & CTO</p>
              </div>
              <div className="px-2 py-1 bg-white dark:bg-gray-800 rounded-lg">
                <p className="font-medium text-gray-900 dark:text-white">Kate Shepherd</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Co-Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* Connecting Arrow */}
          <div className="h-8 w-px bg-blue-200 dark:bg-blue-700"></div>
          <div className="h-6 w-6 rounded-full border-2 border-blue-300 dark:border-blue-700 flex items-center justify-center mb-6">
            <ArrowRight className="h-3 w-3 text-blue-500 dark:text-blue-400" />
          </div>

          {/* Products Row */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
            {/* Current Product */}
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-8 w-8 bg-teal-100 dark:bg-teal-800/30 rounded-full flex items-center justify-center">
                  <Layers className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Mentalic</h3>
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <div className="px-2 py-1 bg-white dark:bg-gray-800 rounded-lg">
                  <p className="font-medium text-gray-900 dark:text-white">John Barlow</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Product Owner & CTO</p>
                </div>
                <div className="px-2 py-1 bg-white dark:bg-gray-800 rounded-lg">
                  <p className="font-medium text-gray-900 dark:text-white">Charles Barlow</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">CPO</p>
                </div>
              </div>
            </div>
            
            {/* Future Product */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2">
                <Plus className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Future Vertical</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Launching Q3 2024</p>
            </div>
            
            {/* Future Product */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 text-center border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
              <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-2">
                <Plus className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Future Vertical</p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">Launching Q1 2025</p>
            </div>
          </div>
        </div>

        {/* Scaling Explanation */}
        <div className="mt-8 p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-xl border border-blue-100 dark:border-blue-800/30">
          <h4 className="text-base font-medium text-gray-900 dark:text-white mb-2">Scalable Multi-Vertical Structure</h4>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Our organizational design allows us to launch new product verticals efficiently while maintaining the quality and focus of each product. 
            Each vertical operates with dedicated leadership while leveraging shared resources and expertise from MNTLC.
          </p>
        </div>
      </div>

      {/* Benefits of Structure - More Compact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">Autonomous Teams</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Each product operates with autonomy, allowing for faster innovation and focused development.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Building className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-1">Quality Preservation</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                This structure prevents quality decay by ensuring each team maintains focus while sharing resources.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}; 