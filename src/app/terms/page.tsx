"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Terms() {
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
            Terms of Service for Alercia
          </h1>

          <p className="text-gray-600 mb-8">Effective Date: May 2025</p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Welcome to Alercia! By joining our waitlist or using any part of
              our website, you agree to these terms.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                1. Waitlist Participation
              </h2>
              <p>
                By submitting your email, you agree to receive occasional
                updates and announcements about Alercia.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                2. No Guarantees
              </h2>
              <p>
                Alercia is a student-built, early-stage project. Features and
                timelines may change or be delayed.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                3. Intellectual Property
              </h2>
              <p>
                The content and branding of Alercia belong to the creators. You
                agree not to copy or misuse our materials.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                4. No Warranty
              </h2>
              <p>
                We provide all information &quot;as is&quot; without warranties
                of any kind.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                5. Changes to Terms
              </h2>
              <p>
                We may update these terms as the project evolves. Continued use
                of our site means you accept the latest version.
              </p>
            </div>

            <p>
              Contact us at{" "}
              <a
                href="mailto:alercia.app@gmail.com"
                className="text-blue-500 underline"
              >
                alercia.app@gmail.com
              </a>{" "}
              with any questions.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
