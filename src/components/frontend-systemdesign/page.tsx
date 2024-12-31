
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight } from 'lucide-react'

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { VideoCard } from "../video-cart"

const topics = {
  fundamentals: [
    {
      title: "System Design Basics",
      content: [
        "Requirements gathering",
        "Scalability considerations",
        "Performance optimization",
        "Security and authentication",
        "Data flow and state management"
      ],
      videos: [
        {
          title: "Introduction to Frontend System Design",
          imageUrl: "/placeholder.svg?height=180&width=320",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
          title: "Scalability in Frontend Applications",
          imageUrl: "/placeholder.svg?height=180&width=320",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      ],
      externalLink: "https://frontendmastery.com/posts/frontend-system-design/"
    },
    {
      title: "Component Architecture",
      content: [
        "Atomic design principles",
        "Composable components",
        "Component communication patterns",
        "Reusability and modularity",
        "Styling strategies (CSS-in-JS, CSS Modules)"
      ],
      videos: [
        {
          title: "Building a Scalable Component Architecture",
          imageUrl: "/placeholder.svg?height=180&width=320",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
          title: "Advanced Component Patterns in React",
          imageUrl: "/placeholder.svg?height=180&width=320",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      ],
      externalLink: "https://atomicdesign.bradfrost.com/"
    }
  ],
  advanced: [
    {
      title: "State Management at Scale",
      content: [
        "Flux architecture and Redux",
        "MobX and observable patterns",
        "Context API for global state",
        "Server state management (React Query, SWR)",
        "Optimistic UI updates"
      ],
      videos: [
        {
          title: "Mastering State Management in Large React Apps",
          imageUrl: "/placeholder.svg?height=180&width=320",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
          title: "Server State vs Client State in React Applications",
          imageUrl: "/placeholder.svg?height=180&width=320",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      ],
      externalLink: "https://redux.js.org/"
    },
    {
      title: "Performance and Optimization",
      content: [
        "Code splitting and lazy loading",
        "Memoization techniques",
        "Virtual list and windowing",
        "Web Workers for heavy computations",
        "Caching strategies"
      ],
      videos: [
        {
          title: "Advanced React Performance Optimization",
          imageUrl: "/placeholder.svg?height=180&width=320",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        },
        {
          title: "Implementing Infinite Scrolling in React",
          imageUrl: "/placeholder.svg?height=180&width=320",
          link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
      ],
      externalLink: "https://reactjs.org/docs/optimizing-performance.html"
    }
  ]
}

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
    opacity: 1
  }
}

export default function FrontendSystemDesign() {
  return (
    <div className="min-h-screen ">
      <main className="container px-4 py-12 md:px-6">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Frontend System Design</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Master the art of designing scalable, performant, and maintainable frontend systems. Learn best practices for architecture, state management, and optimization.
            </p>
          </motion.div>

          <Tabs defaultValue="fundamentals" className="space-y-4">
            <TabsList>
              <TabsTrigger value="fundamentals">Fundamentals</TabsTrigger>
              <TabsTrigger value="advanced">Advanced Concepts</TabsTrigger>
            </TabsList>

            {(Object.keys(topics) as Array<keyof typeof topics>).map((section) => (
              <TabsContent key={section} value={section} className="space-y-8">
                {topics[section].map((topic, topicIndex) => (
                  <motion.div key={topicIndex} variants={itemVariants}>
                    <Card  className="card-main-page">
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {topic.title}
                          <Link
                            to={topic.externalLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <ArrowRight className="h-5 w-5" />
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 mb-4">
                          {topic.content.map((item, itemIndex) => (
                            <motion.li
                              key={itemIndex}
                              className="flex items-center space-x-2"
                              variants={itemVariants}
                            >
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span className="text-white">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                        <h3 className="text-xl font-semibold mb-2">Related Videos</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                          {topic.videos.map((video, videoIndex) => (
                            <motion.div key={videoIndex} variants={itemVariants}>
                              <VideoCard {...video} />
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </main>
    </div>
  )
}

