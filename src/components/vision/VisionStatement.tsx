import { motion } from "framer-motion";
import { Sparkles, Target, Award, BookOpen, Brain, Network, Bot, LineChart, Zap, Lightbulb } from "lucide-react";

interface VisionStatementProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const VisionStatement = ({ fadeIn }: VisionStatementProps) => {
  return (
    <motion.section 
      id="vision-statement"
      className="space-y-12"
      variants={fadeIn}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Brain className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">The Problem</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Traditional education follows a one-size-fits-all approach that:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Fails to recognize individual learning differences</li>
                <li>Relies on infrequent testing rather than continuous assessment</li>
                <li>Rarely accounts for diverse ways people acquire knowledge</li>
                <li>Doesn't prepare learners for an AI-transformed future</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="h-12 w-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-6 w-6 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">Our Solution</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Mentalic provides a continuous assessment experience (similar to Duolingo, but for all knowledge domains) that:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-700 dark:text-gray-300 space-y-1">
                <li>Creates personalized knowledge maps that grow with users</li>
                <li>Adapts to individual cognitive profiles and learning patterns</li>
                <li>Builds shareable profiles highlighting unique strengths</li>
                <li>Functions as a meta-layer atop existing educational technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Our Groundbreaking Approach</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Brain className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Continuous Assessment</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Unlike traditional end-of-term exams, our platform provides ongoing assessment that builds a comprehensive picture of your knowledge over time.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Cognitive Science Backed</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Built on years of research in AI-driven pedagogy, our system recognizes and adapts to your unique cognitive profile and learning patterns.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Shareable Knowledge Profile</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Create a comprehensive, shareable visualization of your knowledge that highlights your strengths and identifies areas for growth.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Education 3.0 Ready</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Designed for the future of education where learning is personalized, continuous, and happens through social interactions and real-world experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Language Support */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Global Accessibility</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">
          Building with localization from day one, we're making Mentalic accessible to learners worldwide.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* English */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-8 w-8 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-medium">EN</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">English</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Launch Language</p>
          </div>

          {/* Russian */}
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-8 w-8 bg-red-100 dark:bg-red-800/30 rounded-full flex items-center justify-center">
                <span className="text-red-600 dark:text-red-400 font-medium">RU</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Russian</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Initial Support</p>
          </div>

          {/* Spanish */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-8 w-8 bg-yellow-100 dark:bg-yellow-800/30 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 dark:text-yellow-400 font-medium">ES</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Spanish</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Initial Support</p>
          </div>

          {/* Mandarin */}
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-8 w-8 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center">
                <span className="text-green-600 dark:text-green-400 font-medium">中文</span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Mandarin</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Initial Support</p>
          </div>
        </div>

        {/* AI-Powered Expansion */}
        <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-800/30">
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 bg-purple-100 dark:bg-purple-800/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-1">AI-Powered Language Expansion</h4>
              <p className="text-xs text-gray-700 dark:text-gray-300">
                Our AI-driven localization system will enable rapid expansion to support all major languages, making Mentalic truly accessible worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}; 