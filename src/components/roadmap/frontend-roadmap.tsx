
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from 'lucide-react'

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const roadmapSections = [
  {
    title: "Fundamentals",
    topics: [
      {
        name: "HTML",
        items: [
          "Semantic HTML",
          "Forms and Validations",
          "Conventions and Best Practices",
          "Accessibility",
          "SEO Basics"
        ]
      },
      {
        name: "CSS",
        items: [
          "Selectors, Specificity",
          "Box Model",
          "Flexbox and Grid",
          "Responsive Design",
          "CSS Variables",
          "CSS Animations"
        ]
      },
      {
        name: "JavaScript",
        items: [
          "Syntax and Basic Constructs",
          "DOM Manipulation",
          "Fetch API / Ajax",
          "ES6+ Features",
          "Hoisting, Event Bubbling, Scope",
          "Closures and Prototypes"
        ]
      }
    ]
  },
  {
    title: "Frontend Frameworks",
    topics: [
      {
        name: "React",
        items: [
          "JSX",
          "Components and Props",
          "State and Lifecycle",
          "Hooks",
          "Context API",
          "React Router"
        ]
      },
      {
        name: "Vue.js",
        items: [
          "Vue CLI",
          "Components",
          "Directives",
          "Vue Router",
          "Vuex",
          "Composition API"
        ]
      },
      {
        name: "Angular",
        items: [
          "Components and Templates",
          "Dependency Injection",
          "Angular CLI",
          "RxJS",
          "NgRx",
          "Angular Universal"
        ]
      }
    ]
  },
  {
    title: "State Management",
    topics: [
      {
        name: "Redux",
        items: [
          "Actions and Reducers",
          "Store",
          "Middleware",
          "Redux Toolkit",
          "Async Actions (Thunk/Saga)"
        ]
      },
      {
        name: "MobX",
        items: [
          "Observables",
          "Computed Values",
          "Reactions",
          "Actions",
          "MobX State Tree"
        ]
      },
      {
        name: "Recoil",
        items: [
          "Atoms",
          "Selectors",
          "Async Queries",
          "Atom Effects",
          "Performance Optimizations"
        ]
      }
    ]
  },
  {
    title: "Build Tools",
    topics: [
      {
        name: "Package Managers",
        items: [
          "npm",
          "yarn",
          "pnpm"
        ]
      },
      {
        name: "Task Runners",
        items: [
          "npm scripts",
          "Gulp"
        ]
      },
      {
        name: "Module Bundlers",
        items: [
          "Webpack",
          "Rollup",
          "Parcel",
          "Vite"
        ]
      },
      {
        name: "Transpilers",
        items: [
          "Babel",
          "TypeScript",
          "SWC"
        ]
      }
    ]
  },
  {
    title: "CSS Frameworks and Methodologies",
    topics: [
      {
        name: "CSS Frameworks",
        items: [
          "Bootstrap",
          "Tailwind CSS",
          "Material-UI",
          "Styled Components"
        ]
      },
      {
        name: "CSS Methodologies",
        items: [
          "BEM",
          "OOCSS",
          "SMACSS",
          "Atomic CSS"
        ]
      },
      {
        name: "CSS-in-JS",
        items: [
          "Styled-components",
          "Emotion",
          "CSS Modules"
        ]
      }
    ]
  },
  {
    title: "Testing",
    topics: [
      {
        name: "Unit Testing",
        items: [
          "Jest",
          "Mocha",
          "Jasmine"
        ]
      },
      {
        name: "Integration Testing",
        items: [
          "React Testing Library",
          "Enzyme"
        ]
      },
      {
        name: "End-to-End Testing",
        items: [
          "Cypress",
          "Selenium",
          "Puppeteer"
        ]
      }
    ]
  },
  {
    title: "Performance Optimization",
    topics: [
      {
        name: "Core Web Vitals",
        items: [
          "Largest Contentful Paint (LCP)",
          "First Input Delay (FID)",
          "Cumulative Layout Shift (CLS)"
        ]
      },
      {
        name: "Optimization Techniques",
        items: [
          "Code Splitting",
          "Lazy Loading",
          "Tree Shaking",
          "Caching Strategies",
          "Image Optimization"
        ]
      },
      {
        name: "Performance Auditing",
        items: [
          "Lighthouse",
          "Chrome DevTools",
          "WebPageTest"
        ]
      }
    ]
  },
  {
    title: "Advanced Concepts",
    topics: [
      {
        name: "Progressive Web Apps (PWA)",
        items: [
          "Service Workers",
          "Web App Manifest",
          "Offline Support",
          "Push Notifications"
        ]
      },
      {
        name: "Server-Side Rendering (SSR)",
        items: [
          "Next.js",
          "Nuxt.js",
          "Angular Universal"
        ]
      },
      {
        name: "JAMstack",
        items: [
          "Static Site Generators (Gatsby, Hugo)",
          "Headless CMS",
          "API-first Development"
        ]
      },
      {
        name: "WebAssembly",
        items: [
          "Emscripten",
          "AssemblyScript",
          "Rust + Wasm"
        ]
      }
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

export default function FrontendRoadmap() {
  return (
    <div className="min-h-screen bg-background">

      <main className="container px-4 py-12 md:px-6">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Frontend Development Roadmap</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Master the essential skills and technologies for becoming a proficient frontend developer. This comprehensive roadmap covers basic, intermediate, and advanced topics to guide your learning journey.
            </p>
          </motion.div>

          {roadmapSections.map((section, sectionIndex) => (
            <motion.div key={section.title} variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {section.title}
                    <Link
                      to={`#${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {section.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="mb-4 last:mb-0">
                      <h3 className="font-semibold text-lg mb-2">{topic.name}</h3>
                      <ul className="space-y-2">
                        {topic.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            className="flex items-center space-x-2"
                            variants={itemVariants}
                          >
                            <CheckCircle className="h-4 w-4 text-primary" />
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div variants={itemVariants} className="text-center">
            <p className="text-muted-foreground">
              Remember, this roadmap is a guide. The order of learning can be flexible based on your projects and interests. Continuous learning and practice are key to becoming a successful frontend developer.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

