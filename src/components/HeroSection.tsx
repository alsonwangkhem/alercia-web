import { motion } from "motion/react";
import WaitlistForm from "./WaitlistForm";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden relative">
      <div className="container-custom">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 rounded-full bg-alercia-secondary opacity-10 blur-[70px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-20 -left-20 w-96 h-96 rounded-full bg-alercia-primary opacity-10 blur-[70px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </div>
        <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl md:text-left font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="block">Wake up</span>
              <span className="bg-clip-text text-transparent bg-gradient-cta">
                smarter.
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:tex-2xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Alercia makes you solve your own study notes to silence the alarm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <WaitlistForm />
              <p className="text-sm text-gray-500 mt-3">
                Be the first to try out the most intentional alarm ever.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="md:col-span-5 relative m-12"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-soft rounded-3xl transform -rotate-2 scale-105" />
              <div className="relative bg-white p-5 rounded-2xl shadow-lg border border-gray-100 transform rotate-1">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-lg font-medium mb-2">
                        Alarm: Human Physiology
                      </p>
                      <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-100 mb-3">
                        <p className="font-medium text-sm">
                          Q: Main organ for blood filtration?
                        </p>
                      </div>
                      <div className="bg-white text-sm rounded-lg p-1 m-2 text-left pl-4">
                        A. Heart
                      </div>
                      <div className="bg-white text-sm rounded-lg p-1 m-2 text-left pl-4">
                        B. Lungs
                      </div>
                      <div className="bg-white text-sm rounded-lg p-1 m-2 text-left pl-4">
                        C. Kidneys
                      </div>
                      <div className="bg-white text-sm rounded-lg p-1 m-2 text-left pl-4">
                        D. Liver
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between px-4">
                  <motion.div
                    className="w-10 h-10 text-gray-700 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
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
                      className="lucide lucide-timer-icon lucide-timer"
                    >
                      <line x1="10" x2="14" y1="2" y2="2" />
                      <line x1="12" x2="15" y1="14" y2="11" />
                      <circle cx="12" cy="14" r="8" />
                    </svg>
                  </motion.div>
                  <motion.div className="w-10 h-10 bg-alercia-primary rounded-full flex items-center justify-center text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-bell-off-icon lucide-bell-off"
                    >
                      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                      <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" />
                      <path d="m2 2 20 20" />
                      <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
