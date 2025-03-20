import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle, Shield, Zap, Lightbulb } from "lucide-react";

interface FAQProps {
  fadeIn: {
    initial: { opacity: number; y: number };
    animate: { opacity: number; y: number };
    transition: { duration: number };
  };
}

interface FAQItem {
  question: string;
  answer: string;
  isOpen: boolean;
  category: string;
  icon: JSX.Element;
}

export const FAQ = ({ fadeIn }: FAQProps) => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "How does Mentalic personalize my learning experience?",
      answer: "Mentalic uses AI to analyze how you interact with content, identifying your unique cognitive patterns and learning preferences. It then adapts content presentation, pacing, and connections to match your personal learning style, making the experience more intuitive and effective.",
      isOpen: false,
      category: "General",
      icon: <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      question: "Is Mentalic only for academic subjects?",
      answer: "Not at all! Mentalic is designed for any type of knowledge, from academic subjects to professional skills, hobbies, and personal interests. The platform adapts to whatever you want to learn or showcase.",
      isOpen: false,
      category: "General",
      icon: <HelpCircle className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      question: "How accurate is the knowledge mapping?",
      answer: "Our knowledge mapping technology is built on advanced AI and cognitive science principles. While no system is perfect, our approach has shown high accuracy in identifying knowledge patterns and connections. The system also continuously improves as you use it more.",
      isOpen: false,
      category: "Technology",
      icon: <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    },
    {
      question: "What makes Mentalic different from other learning platforms?",
      answer: "Unlike most platforms that offer one-size-fits-all content, Mentalic adapts to your unique cognitive profile. We focus on how concepts connect across domains, creating a holistic understanding rather than isolated facts. Our approach is based on how the human brain naturally learns and retains information.",
      isOpen: false,
      category: "Technology",
      icon: <Zap className="h-5 w-5 text-amber-600 dark:text-amber-400" />,
    },
    {
      question: "How does Mentalic protect my data?",
      answer: "We take data privacy extremely seriously. Your personal information and learning data are encrypted and stored securely. We never sell your data to third parties, and you maintain ownership and control of your information at all times.",
      isOpen: false,
      category: "Data & Privacy",
      icon: <Shield className="h-5 w-5 text-teal-600 dark:text-teal-400" />,
    },
    {
      question: "Can I delete my data from Mentalic?",
      answer: "Absolutely. You have complete control over your data and can request deletion at any time through your account settings. When you delete your data, it's permanently removed from our systems.",
      isOpen: false,
      category: "Data & Privacy",
      icon: <Shield className="h-5 w-5 text-teal-600 dark:text-teal-400" />,
    },
    {
      question: "How does Mentalic use my learning data?",
      answer: "We use your learning data solely to improve your personal experience and the overall platform. This includes adapting content to your learning style, identifying knowledge gaps, and suggesting relevant learning paths. All data analysis is done with strict privacy controls.",
      isOpen: false,
      category: "Data & Privacy",
      icon: <Shield className="h-5 w-5 text-teal-600 dark:text-teal-400" />,
    },
    {
      question: "When will Mentalic be available?",
      answer: "We're planning to launch our initial version in Q4 2024. Join our waitlist to be among the first to experience Mentalic and receive updates on our progress.",
      isOpen: false,
      category: "Launch",
      icon: <Lightbulb className="h-5 w-5 text-rose-600 dark:text-rose-400" />,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, isOpen: !faq.isOpen };
        }
        return faq;
      })
    );
  };

  // Group FAQs by category
  const categories = Array.from(new Set(faqs.map(faq => faq.category)));

  return (
    <motion.section 
      id="faq"
      className="space-y-12"
      variants={fadeIn}
    >
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Find answers to common questions about Mentalic and how it can transform your learning experience.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">{category}</h3>
            <div className="space-y-4">
              {faqs
                .filter(faq => faq.category === category)
                .map((faq, index) => {
                  const actualIndex = faqs.findIndex(f => f === faq);
                  return (
                    <div 
                      key={index} 
                      className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                    >
                      <button
                        className="w-full flex items-center justify-between p-4 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors"
                        onClick={() => toggleFAQ(actualIndex)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                            {faq.icon}
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                        </div>
                        {faq.isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                        )}
                      </button>
                      {faq.isOpen && (
                        <div className="p-4 bg-white dark:bg-gray-900">
                          <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}; 