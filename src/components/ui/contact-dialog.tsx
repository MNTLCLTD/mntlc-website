"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/ui/connect";

interface ContactDialogProps {
  trigger?: React.ReactNode;
}

export function ContactDialog({ trigger }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button 
            className="
              relative min-w-[200px] h-11 px-6 text-base font-medium 
              bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white 
              rounded-md shadow-sm transition-colors
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600
              disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center justify-center
            "
          >
            Get in touch
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 bg-white text-gray-900 border-none shadow-2xl rounded-md overflow-hidden">
        <DialogHeader className="relative px-8 py-6 border-b border-gray-200">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Contact us
          </DialogTitle>
          <DialogDescription className="mt-2 text-base text-gray-600">
            Share your vision with us, and let's explore how we can transform your expertise into groundbreaking products.
          </DialogDescription>
        </DialogHeader>
        <div className="relative px-8 py-6 bg-gray-50 text-gray-900">
          <ContactForm />
        </div>
      </DialogContent>
    </Dialog>
  );
} 