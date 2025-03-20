import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

interface PasswordProtectionProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setIsAuthenticated: (value: boolean) => void;
}

export const PasswordProtection = ({
  isDarkMode,
  toggleDarkMode,
  setIsAuthenticated,
}: PasswordProtectionProps) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - you can replace this with your desired password
    if (password === "mntlc") {
      setIsAuthenticated(true);
      // Store authentication in localStorage to persist across refreshes
      localStorage.setItem('mentalic-vision-authenticated', 'true');
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen relative bg-[#fafafa] dark:bg-[#111111] flex items-center justify-center">
      {/* Background Grid with subtle gradient overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/[0.01] to-transparent"></div>
        <FlickeringGrid
          className="w-full h-full"
          squareSize={6}
          gridGap={8}
          color="rgb(0, 119, 255)"
          maxOpacity={0.05}
          flickerChance={0.03}
        />
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-md px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center shadow-md">
              <Image 
                src="/icon.svg" 
                alt="Mentalic Logo" 
                width={32} 
                height={32} 
                className="w-8 h-8"
              />
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-6">
            Protected Content
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 text-center mb-8">
            This page is password protected. Please enter the password to continue.
          </p>

          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-primary focus:border-transparent pr-10"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  tabIndex={0}
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {error && <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>}
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-primary/90 transition-colors flex items-center justify-center gap-2"
              tabIndex={0}
            >
              <span>Access Content</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}; 