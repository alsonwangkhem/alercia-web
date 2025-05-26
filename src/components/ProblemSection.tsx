import AnimatedSection from "./AnimatedSection";
import { motion } from "motion/react";

export default function ProblemSection() {
  return (
    <AnimatedSection className="section-padding bg-gray-50" id="problem">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Waking up isn&apos;t the hard part.
            <br />
            <span className="text-alercia-primary">Staying awake is.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12">
            Traditional alarms let you snooze your way into failure. Alercia
            forces your brain to engage - by solving questions from your own
            notes. It&apos;s for students, learners, and productivity nerds who
            want to start their day sharp.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="gradient-card p-6"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">
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
              </div>
              <h3 className="text-xl font-semibold mb-2">No more snoozing</h3>
              <p className="text-gray-600">
                Solve or stay awake. Your brain needs to work to turn it off.
              </p>
            </motion.div>
            <motion.div
              className="gradient-card p-6"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">
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
                  className="lucide lucide-pencil-ruler-icon lucide-pencil-ruler"
                >
                  <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                  <path d="m8 6 2-2" />
                  <path d="m18 16 2-2" />
                  <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn while waking</h3>
              <p className="text-gray-600">
                Turn wasted morning time into productive study sessions.
              </p>
            </motion.div>

            <motion.div
              className="gradient-card p-6"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="feature-icon">
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
                  className="lucide lucide-book-open-check-icon lucide-book-open-check"
                >
                  <path d="M12 21V7" />
                  <path d="m16 12 2 2 4-4" />
                  <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Your own materials</h3>
              <p className="text-gray-600">
                Personalized questions from your own study notes.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
