import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="flex-shrink-0">
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
            <p className="text-sm text-gray-500 mt-2">
              &copy; {currentYear} Alercia. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-alercia-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-alercia-primary hover:underline"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="hover:text-alercia-primary hover:underline"
                  >
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-gray-800">Social</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="https://x.com/alercia_app"
                    className="hover:text-alercia-primary hover:underline flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117z" />
                    </svg>

                    <span>X</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/alerica.app/"
                    className="hover:text-alercia-primary hover:underline flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                    <span>Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          <p>
            &quot;Built by students who hate snoozing as much as you do.&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
