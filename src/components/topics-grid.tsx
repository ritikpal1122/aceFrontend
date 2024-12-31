import { useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Cog, Layout, Chrome, Atom, Binary } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const topics = [
  {
    title: "JavaScript",
    description:
      "JavaScript internals, Hoisting, Scope, Prototypal inheritance, DOM Events, Polyfills etc.",
    icon: Code2,
    href: "/javascript-page",
  },
  {
    title: "Machine Coding",
    description:
      "Component & App Feature implementation like Modals, Accordions, Games etc.",
    icon: Cog,
    href: "/machine-coding",
  },
  {
    title: "Frontend System Design",
    description:
      "System Design Fundamentals, Component system design, Application system design etc.",
    icon: Layout,
    href: "/system-design",
  },
  {
    title: "UI Technologies",
    description:
      "Browser, Authentication, Security, Performance Optimization, Accessibility, i18n etc.",
    icon: Chrome,
    href: "/ui-ux",
  },
  {
    title: "React JS",
    description:
      "React Basics, Component Lifecycle, React Design Patterns, Hooks, Custom Hooks etc.",
    icon: Atom,
    href: "/react-js",
  },
  {
    title: "DSA For Frontend",
    description:
      "Big-O Complexity, Array, String, Tree & Graph Basics, Recursion, Sorting, Searching etc.",
    icon: Binary,
    href: "/dsa-frontend",
  },
];

export function TopicsGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100/5">
      <div className="container px-4 md:px-6" style={{ margin: "0 auto" }}>
        <div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          ref={ref}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-5xl"
            initial={{ x: -100, opacity: 0 }} // Start from the left
            animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }} // Animate to original position
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Prepare for All Frontend Interview Rounds
          </motion.h2>
          <motion.p
            className="max-w-[900px] text-orange-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400"
            initial={{ x: 100, opacity: 0 }} // Start from the right
            animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }} // Animate to original position
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            Prepare for all major Frontend Interview Rounds and showcase your
            in-depth and end-to-end Frontend knowledge.{" "}
            <span className="text-white">
              You got the power to add more resources relevant to the topics.
            </span>
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
        >
          {topics.map((topic, index) => (
            <motion.div
              key={topic.title}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
              initial="hidden"
              animate={
                hoveredCard === null || hoveredCard === index
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0.5, scale: 0.9, filter: "blur(4px)" }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div
                className="card-wrapper"
                whileHover={{ scale: 1.1, zIndex: 10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Card className="flex flex-col card-main-page relative max-h-cardLarge h-full p-2 rounded-16">
                  <CardHeader>
                    <topic.icon className="h-8 w-8 mb-2 text-orange-500" />
                    <CardTitle className="text-white">{topic.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-white dark:text-gray-400">
                      {topic.description}
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0 flex justify-end items-center">
                    <Link to={topic.href} className="group">
                      <motion.div
                        className="flex items-center text-orange-500 cursor-pointer"
                        whileHover={{ x: 8 }}
                      >
                        <span className="text-sm font-medium mr-2 group-hover:text-orange-600 transition">
                          Start Now
                        </span>
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </motion.svg>
                      </motion.div>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
