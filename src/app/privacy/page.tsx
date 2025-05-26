"use client";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

export default function Privacy() {
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
            Privacy Policy for Alercia
          </h1>

          <p className="text-gray-600 mb-8">Effective Date: May 2025</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>Alercia respects your privacy.</p>

            <p>
              We only collect your email address when you voluntarily join our
              waitlist. This is used solely to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Notify you when the app is ready</li>
              <li>Send occasional updates about Alercia&apos;s progress</li>
            </ul>

            <p>We do not share, sell, or rent your email to anyone.</p>

            <p>
              You can unsubscribe at any time via the link in our emails, or
              request deletion by contacting{" "}
              <a
                href="mailto:alercia.app@gmail.com"
                className="text-blue-500 underline"
              >
                alercia.app@gmail.com
              </a>
              .
            </p>

            <p>
              We may update this policy in the future. If we do, we&apos;ll let
              you know via email or update this page.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
