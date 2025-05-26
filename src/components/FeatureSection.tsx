import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function FeatureSection() {
  const smartStudyFeatures = [
    "Learn while you wake up",
    "Active recall + spaced repetition",
    "Questions get harder as you improve",
    "Wake up with intention",
  ];

  const physicalChallenges = [
    "Walk X steps",
    "Solve a math puzzle",
    "Type a sentence",
    "Scan a QR code",
  ];

  return (
    <AnimatedSection className="section-padding bg-gradient-soft" id="features">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Feature Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Designed to make your mornings productive and your learning
            effective.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-alercia-primary/10 text-alercia-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 3v16h16"></path>
                <path d="m5 19 6-6 2 2 6-6"></path>
                <path d="M19 9h-4v4"></path>
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              🧠 Smart Study Alarms
            </h3>

            <ul className="space-y-3">
              {smartStudyFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-alercia-primary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-alercia-primary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600">
                Perfect for students who want to make the most of their mornings
                and consistently retain information.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-alercia-secondary/10 text-alercia-secondary">
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
                className="lucide lucide-swords-icon lucide-swords"
              >
                <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
                <line x1="13" x2="19" y1="19" y2="13" />
                <line x1="16" x2="20" y1="16" y2="20" />
                <line x1="19" x2="21" y1="21" y2="19" />
                <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
                <line x1="5" x2="9" y1="14" y2="18" />
                <line x1="7" x2="4" y1="17" y2="20" />
                <line x1="3" x2="5" y1="19" y2="21" />
              </svg>{" "}
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              💪 Optional Physical Challenges
            </h3>

            <ul className="space-y-3">
              {physicalChallenges.map((challenge, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-alercia-secondary/10 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-alercia-secondary"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <span>{challenge}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600">
                For those who need an extra push to get out of bed and start
                their day with energy.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 p-6 md:p-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Who It&apos;s For
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Students prepping for exams, learners who want consistency, and
            anyone tired of snoozing their goals away.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
