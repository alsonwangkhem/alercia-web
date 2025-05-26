"use client";
import CTASection from "@/components/CTASection";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorks";
import ProblemSection from "@/components/ProblemSection";
// btn-cta and custom container
import { motion, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-alercia-bg">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-alercia-primary z-50 origin-left"
        style={{ scaleX: scaleX }}
      />
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-40 shadow-sm">
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

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#problem"
              className="text-gray-700 hover:text-alercia-primary transition-colors"
            >
              Problem
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 hover:text-alercia-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-gray-700 hover:text-alercia-primary transition-colors"
            >
              Features
            </Link>
          </nav>

          <Link href="#join">
            <motion.div
              className="btn-cta text-sm py-2 px-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
            </motion.div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <FeatureSection />
        <CTASection />
      </main>
      <Footer />
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-alercia-primary text-white flex items-center justify-center shadow-lg z-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-up-icon lucide-chevron-up"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>{" "}
      </motion.button>
    </div>
  );
}
