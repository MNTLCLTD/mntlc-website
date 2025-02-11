"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Send, User, Mail, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Enter your full name";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Enter a valid email address";
      case "message":
        return value.trim().length >= 10 ? "" : "Message must be at least 10 characters";
      default:
        return "";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFocusedField(null);
    setErrors(prev => ({ ...prev, [name]: validateField(name as keyof FormData, value) }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };

    if (Object.values(newErrors).some(error => error)) {
      setErrors(newErrors);
      // Focus the first field with an error
      const firstErrorField = Object.keys(newErrors).find(key => newErrors[key as keyof FormData]) as keyof FormData | undefined;
      if (firstErrorField) {
        const element = formRef.current?.querySelector(`[name="${firstErrorField}"]`) as HTMLElement | null;
        element?.focus();
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formDataToSend = new FormData(e.currentTarget);
      const response = await fetch("https://formspree.io/f/mzzdaewe", {
        method: "POST",
        body: formDataToSend,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormFilled = formData.name && formData.email && formData.message;

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 text-gray-900" noValidate>
      <div className="space-y-6">
        <motion.div 
          className="relative space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Full name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
              <User className="h-4 w-4" />
            </div>
            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={() => setFocusedField("name")}
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
              className={`h-11 pl-10 rounded-md bg-white text-gray-900 border-2 ${
                errors.name 
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600" 
                  : "border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-blue-600"
              } transition-colors`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
            )}
          </div>
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-600 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {errors.name}
            </p>
          )}
        </motion.div>

        <motion.div 
          className="relative space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-500">
              <Mail className="h-4 w-4" />
            </div>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={() => setFocusedField("email")}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
              className={`h-11 pl-10 rounded-md bg-white text-gray-900 border-2 ${
                errors.email 
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600" 
                  : "border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-blue-600"
              } transition-colors`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
            )}
          </div>
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {errors.email}
            </p>
          )}
        </motion.div>

        <motion.div 
          className="relative space-y-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-gray-900">
            Your message
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 flex items-start pointer-events-none text-gray-500">
              <MessageSquare className="h-4 w-4" />
            </div>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleBlur}
              onFocus={() => setFocusedField("message")}
              aria-describedby={errors.message ? "message-error" : undefined}
              aria-invalid={!!errors.message}
              className={`min-h-[140px] pl-10 rounded-md bg-white text-gray-900 border-2 ${
                errors.message 
                  ? "border-red-600 focus:border-red-600 focus:ring-red-600" 
                  : "border-gray-300 hover:border-gray-400 focus:border-blue-600 focus:ring-blue-600"
              } transition-colors resize-none`}
              placeholder="Enter your message"
            />
            {errors.message && (
              <div className="absolute top-3 right-3 flex items-start pr-3 pointer-events-none">
                <AlertCircle className="h-5 w-5 text-red-600" />
              </div>
            )}
          </div>
          {errors.message && (
            <p id="message-error" className="mt-2 text-sm text-red-600 flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              {errors.message}
            </p>
          )}
        </motion.div>
      </div>

      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          aria-live="polite"
          className={`
            relative w-full h-11 px-6 text-base font-medium rounded-md transition-all
            ${isSubmitting ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'}
            text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600
            disabled:opacity-50 disabled:cursor-not-allowed
          `}
        >
          <span className="relative flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Sending message...</span>
              </>
            ) : (
              <>
                <span>Send message</span>
                <Send className="h-5 w-5" />
              </>
            )}
          </span>
        </Button>

        <AnimatePresence mode="wait">
          {submitStatus === "success" && (
            <motion.div 
              role="alert"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="rounded-md bg-green-50 p-4 border-l-4 border-green-600"
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                <p className="text-green-800">
                  <strong className="font-semibold">Success:</strong> Thank you for your message. We'll get back to you soon.
                </p>
              </div>
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div 
              role="alert"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="rounded-md bg-red-50 p-4 border-l-4 border-red-600"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-red-800">
                  <strong className="font-semibold">Error:</strong> Something went wrong. Please try again later.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </form>
  );
} 