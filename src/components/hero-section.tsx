import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import workingCat from "../assets/working-cat2.gif";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <motion.section
      className="w-full py-12 md:py-24 pt-0 lg:py-32 xl:py-48 bg-gradient-to-r from-gray-900 via-black to-gray-800 animate-gradient-dark main-hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="px-4 md:px-6 m-[0 auto] text-gray-200">
        <motion.div
          className="flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Master Frontend Interviews:{" "}
              <span className="text-orange-300">Your All-in-One Preparation Hub</span>
            </motion.h1>
            <Rocket className="mx-auto h-12 w-12 text-orange-400 animate-bounce" />
            <motion.p
              className="mx-auto max-w-[700px] text-gray-300 md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Save your time and find the best-curated resources & frontend interview questions for
              freshers & experienced professionals, structured for all interview rounds.
            </motion.p>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              asChild
              className="bg-orange-500 hover:bg-orange-600 animate-pulse transition duration-300"
            >
              <Link to="/start">Start Preparing Now</Link>
            </Button>
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <div className="flex justify-center space-x-2">
              <Link
                to="https://www.producthunt.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  src={workingCat}
                  alt="Product Hunt"
                  className="h-[200px] w-[200px] object-cover border border-gray-700 rounded-lg hover:scale-110 transition duration-300"
                  whileHover={{ rotate: [0, 10, -10, 0] }}
                />
              </Link>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  to="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <motion.svg
                    className="h-10 w-10 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ scale: 1.2 }}
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </motion.svg>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="mailto:contact@frontendgeek.com">
                  <motion.svg
                    className="h-5 w-5 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    whileHover={{ scale: 1.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </motion.svg>
                </Link>
              </Button>
            </div>
            <motion.div
              className="text-8xl font-bold shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              सब कुछ <span className="text-orange-500">यहीं मिलेगा</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
