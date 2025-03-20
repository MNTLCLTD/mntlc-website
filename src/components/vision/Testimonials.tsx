import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialsProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

export const Testimonials = ({ fadeIn }: TestimonialsProps) => {
  return (
    <motion.section 
      id="testimonials"
      className="space-y-12"
      variants={fadeIn}
    >
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">What Our Stakeholders Are Saying</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Hear from education professionals, learning specialists, and industry experts about Mentalic's approach to personalized learning.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col h-full">
            <div className="h-10 w-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
              <Quote className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-4 flex-grow">
              "Mentalic's approach to personalized learning is revolutionary. By adapting to each individual's cognitive profile, 
              it addresses a fundamental gap in traditional education systems. This could transform how we think about learning effectiveness."
            </p>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Jane Rodriguez</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Education Technology Researcher</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col h-full">
            <div className="h-10 w-10 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-4">
              <Quote className="h-5 w-5 text-teal-600 dark:text-teal-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-4 flex-grow">
              "The knowledge mapping technology at Mentalic is unlike anything I've seen. It creates meaningful connections between 
              concepts that help learners see the bigger picture. This interconnected approach to knowledge is exactly what's been 
              missing in digital learning platforms."
            </p>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Michael Chen</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Cognitive Science Professor</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col h-full">
            <div className="h-10 w-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-4">
              <Quote className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-4 flex-grow">
              "As someone who works with diverse learning needs every day, I'm impressed by Mentalic's ability to adapt to different 
              cognitive styles. This platform could be a game-changer for learners who don't thrive in traditional educational settings."
            </p>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Sarah Johnson</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Special Education Specialist</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col h-full">
            <div className="h-10 w-10 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mb-4">
              <Quote className="h-5 w-5 text-rose-600 dark:text-rose-400" />
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-4 flex-grow">
              "The future of professional development lies in personalized learning paths. Mentalic's approach doesn't just teach 
              information—it builds a deeper understanding of how concepts connect across domains. This is exactly what companies 
              need to develop versatile, adaptable talent."
            </p>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">David Thompson</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Corporate Learning Director</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}; 