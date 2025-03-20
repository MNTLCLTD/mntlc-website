import { motion } from "framer-motion";
import { Fingerprint, Sparkles, Zap, Brain } from "lucide-react";

interface HowItWorksProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const HowItWorks = ({ fadeIn }: HowItWorksProps) => {
  return (
    <motion.section 
      id="how-it-works"
      className="space-y-12"
      variants={fadeIn}
    >
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">How It Works</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Mentalic uses advanced AI to create a personalized learning experience that adapts to your unique cognitive profile.
          Our platform makes learning more intuitive, engaging, and effective by understanding how you think and learn.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="h-16 w-16 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
              <Fingerprint className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">1. Create Your Profile</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Answer a few questions and interact with initial content so our AI can start building your cognitive profile.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="h-16 w-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
              <Brain className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">2. Explore Your Knowledge</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Discover your knowledge map and see how different concepts connect. Identify strengths and areas for growth.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="h-16 w-16 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">3. Learn & Grow</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Engage with personalized learning activities that adapt to your style. Watch your knowledge map expand as you learn.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">What Makes Us Different</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Fingerprint className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Truly Personalized</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Unlike one-size-fits-all platforms, Mentalic adapts to your unique cognitive profile and learning preferences.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Brain className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Cognitive Science Backed</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Built on proven cognitive science principles about how humans actually learn and retain information.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Zap className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Interconnected Learning</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                We connect concepts across different domains, creating a holistic understanding rather than isolated facts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="h-10 w-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white mb-1">Engaging Experience</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Learning feels natural and enjoyable, not like a chore, keeping you motivated and engaged long-term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}; 