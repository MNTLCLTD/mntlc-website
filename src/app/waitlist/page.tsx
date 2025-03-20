"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function WaitlistPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    interest: 'individual',
  });

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('mentalic-theme') as 'light' | 'dark' | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      // Check system preference
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemPrefersDark ? 'dark' : 'light');
      if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('mentalic-theme', newTheme);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      // Reset form
      setFormData({
        email: '',
        name: '',
        interest: 'individual',
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex flex-col">
      {/* Theme toggle */}
      <div className="absolute top-6 right-6">
        <button 
          onClick={handleThemeToggle}
          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          tabIndex={0}
        >
          {theme === 'light' ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-md mx-auto w-full">
        {formState === 'success' ? (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-10 w-10 text-brand-primary" />
            </div>
            <h1 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
              You're on the list
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Thank you for your interest in Mentalic. We'll notify you when we're ready to welcome our first users.
            </p>
            <button
              onClick={() => setFormState('idle')}
              className="text-brand-primary font-medium text-sm"
            >
              Join with another email
            </button>
          </motion.div>
        ) : (
          <>
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-medium text-gray-900 dark:text-white mb-3">
                Join the Mentalic Beta
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Be among the first to experience our mobile app.
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border-0 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary/30 focus:outline-none"
                        required
                        aria-label="Email address"
                      />
                    </div>
                    
                    <button
                      onClick={handleNextStep}
                      disabled={!formData.email}
                      className="w-full py-3.5 px-6 bg-brand-primary text-white font-medium rounded-xl hover:bg-brand-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Continue to next step"
                      tabIndex={0}
                    >
                      <span>Continue</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full name"
                        className="w-full px-4 py-3 rounded-xl border-0 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary/30 focus:outline-none"
                        required
                        aria-label="Your full name"
                      />
                    </div>
                    
                    <button
                      onClick={handleNextStep}
                      disabled={!formData.name}
                      className="w-full py-3.5 px-6 bg-brand-primary text-white font-medium rounded-xl hover:bg-brand-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Continue to next step"
                      tabIndex={0}
                    >
                      <span>Continue</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                    
                    <button
                      onClick={handlePrevStep}
                      className="w-full py-3 text-gray-500 dark:text-gray-400 text-sm font-medium"
                      aria-label="Go back to previous step"
                      tabIndex={0}
                    >
                      Back
                    </button>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        I'm joining as
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-0 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary/30 focus:outline-none appearance-none"
                        aria-label="Your interest in Mentalic"
                      >
                        <option value="individual">Individual User</option>
                        <option value="educator">Educator</option>
                        <option value="employer">Employer</option>
                        <option value="investor">Investor</option>
                        <option value="partner">Potential Partner</option>
                      </select>
                    </div>
                    
                    <button
                      onClick={handleSubmit}
                      disabled={formState === 'submitting'}
                      className="w-full py-3.5 px-6 bg-brand-primary text-white font-medium rounded-xl hover:bg-brand-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Join the waitlist"
                      tabIndex={0}
                    >
                      {formState === 'submitting' ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Joining...</span>
                        </>
                      ) : (
                        <span>Join Waitlist</span>
                      )}
                    </button>
                    
                    <button
                      onClick={handlePrevStep}
                      className="w-full py-3 text-gray-500 dark:text-gray-400 text-sm font-medium"
                      aria-label="Go back to previous step"
                      tabIndex={0}
                    >
                      Back
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Progress indicator */}
            <div className="flex justify-center mt-10 gap-2">
              {[1, 2, 3].map((step) => (
                <div 
                  key={step}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step === currentStep 
                      ? 'w-8 bg-brand-primary' 
                      : step < currentStep 
                        ? 'w-8 bg-brand-primary/30' 
                        : 'w-2 bg-gray-200 dark:bg-gray-800'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="py-6 px-6 text-center">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Mentalic. All rights reserved.
        </p>
      </div>
    </div>
  );
} 