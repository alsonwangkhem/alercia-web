import { motion } from "framer-motion";
import WaitlistForm from "./WaitlistForm";
import AnimatedSection from "./AnimatedSection";

export default function CTASection() {
  return (
    <AnimatedSection className="section-padding bg-gray-50" id="join">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Mornings?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join thousands of students and professionals who are ready to wake
              up smarter.
            </motion.p>
          </div>

          {/* Main CTA Card */}
          <motion.div
            className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Side - Benefits */}
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                  Get Early Access & Exclusive Benefits
                </h3>

                <div className="space-y-4">
                  {[
                    { icon: "⚡", text: "Priority access when we launch" },
                    { icon: "📱", text: "Beta testing opportunities" },
                    {
                      icon: "💬",
                      text: "Direct feedback to our development team",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-8 h-8 bg-alercia-primary/10 rounded-lg flex items-center justify-center text-lg">
                        {benefit.icon}
                      </div>
                      <span className="text-gray-700">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="bg-gray-50 rounded-xl p-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="text-xl font-medium mb-4 text-center text-gray-900">
                    Join the Waitlist
                  </h4>
                  <div className="mb-4">
                    <WaitlistForm />
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    No spam, just updates on our progress. Unsubscribe anytime.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Stats */}
          <motion.div
            className="flex items-center justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {[
            //   { number: "500+", label: "Early signups" },
            //   { number: "95%", label: "Want notifications" },
              { number: "1 Sept 2025", label: "Expected launch" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-alercia-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
