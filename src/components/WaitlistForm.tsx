"use client";

import { useState, useTransition } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { joinWaitlist } from "@/app/actions/waitlist";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await joinWaitlist(formData);
      if (result.error) {
        toast.error(result.error);
      } else if (result.message) {
        toast.success(result.message);
        setEmail("");
      }
    });
  };

  return (
    <div className="">
      <Toaster position="bottom-left" closeButton richColors />
      <form
        action={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto md:mx-0"
      >
        <input
          type="email"
          name="email" // Required for formData.get("email")
          placeholder="Drop your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-alercia-primary/30 focus:border-alercia-primary"
        />
        <motion.button
          type="submit"
          className="btn-cta whitespace-nowrap"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={isPending}
        >
          {isPending ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              <span>Joining...</span>
            </div>
          ) : (
            "Join Waitlist"
          )}
        </motion.button>
      </form>
    </div>
  );
}