"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-alercia-bg">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="container-custom py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/alercia.svg"
                alt="Alercia logo"
                width={28}
                height={28}
              />
              <span className="font-semibold text-lg">Alercia</span>
            </motion.div>
          </Link>

          <Link
            href="/"
            className="text-gray-700 hover:text-alercia-primary transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container-custom py-16">
        <motion.div
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Disclaimer for Alercia
          </h1>

          <p className="text-gray-600 mb-8">Effective Date: May 2025</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Alercia is a productivity tool designed to enhance your morning
              routine and study habits. It is not intended as a medical device
              or therapeutic solution for sleep disorders or mental health
              concerns.
            </p>

            <p>
              Please do not rely on Alercia in situations where waking up on
              time is critical to safety, health, or emergency response.
            </p>

            <p className="font-medium">
              By using Alercia or joining the waitlist, you agree to use the app
              responsibly and at your own discretion. If you have medical or
              psychological concerns, consult a qualified professional.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
