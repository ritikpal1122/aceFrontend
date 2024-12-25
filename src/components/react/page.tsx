
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight } from 'lucide-react'

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { VideoCard } from "../video-cart"
import { Link } from "react-router-dom"

const topics = {
  easy: [
    {
      title: "JavaScript Fundamentals",
      content: [
        "Variables (var, let, const)",
        "Data Types",
        "Operators and Expressions",
        "Control Flow (if, switch, loops)",
        "Functions and Scope"
      ],
      videos: [
        {
          title: "JavaScript Crash Course for Beginners",
          link: "https://www.youtube.com/watch?v=hdI2bqOjy3c"
        }
      ],
      externalLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide"
    },
    {
      title: "React Basics",
      content: [
        "JSX and Elements",
        "Components and Props",
        "State and useState Hook",
        "Handling Events",
        "Conditional Rendering"
      ],
      videos: [
        {
          title: "React JS Crash Course",
          link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8"
        }
      ],
      externalLink: "https://reactjs.org/docs/getting-started.html"
    }
  ],
  medium: [
    {
      title: "Advanced JavaScript Concepts",
      content: [
        "Closures",
        "Prototypes and Inheritance",
        "Asynchronous JavaScript (Promises, Async/Await)",
        "Event Loop",
        "Modules and Namespaces"
      ],
      videos: [
        {
          title: "JavaScript: Understanding the Weird Parts",
          link: "https://www.youtube.com/watch?v=Bv_5Zv5c-Ts"
        }
      ],
      externalLink: "https://javascript.info/"
    },
    {
      title: "React Hooks and State Management",
      content: [
        "useEffect Hook",
        "useContext Hook",
        "useReducer Hook",
        "Custom Hooks",
        "State Management with Context API"
      ],
      videos: [
        {
          title: "React Hooks Tutorial",
          link: "https://www.youtube.com/watch?v=mxK8b99iJTg"
        }
      ],
      externalLink: "https://reactjs.org/docs/hooks-intro.html"
    }
  ],
  hard: [
    {
      title: "Advanced React Patterns",
      content: [
        "Higher-Order Components",
        "Render Props",
        "Compound Components",
        "State Reducers",
        "Control Props"
      ],
      videos: [
        {
          title: "Advanced React Patterns Explained",
          link: "https://www.youtube.com/watch?v=BcVAq3YFiuc"
        }
      ],
      externalLink: "https://reactpatterns.com/"
    },
    {
      title: "Performance Optimization",
      content: [
        "React.memo and useMemo",
        "useCallback for optimizing renders",
        "Code splitting with React.lazy",
        "Profiling with React DevTools",
        "Optimizing re-renders"
      ],
      videos: [
        {
          title: "React Performance Optimization Techniques",
          link: "https://www.youtube.com/watch?v=5fLW5Q5ODiE"
        }
      ],
      externalLink: "https://reactjs.org/docs/optimizing-performance.html"
    }
  ],
  machineCoding: [
    {
      title: "UI Components",
      content: [
        "Autocomplete",
        "Infinite Scroll",
        "Carousel/Image Slider",
        "Tabs Component",
        "Modal/Dialog"
      ],
      videos: [
        {
          title: "Building Complex UI Components in React",
          link: "https://www.youtube.com/watch?v=GGo3MVBFr1A"
        }
      ],
      externalLink: "https://reactjs.org/docs/thinking-in-react.html"
    },
    {
      title: "Application Features",
      content: [
        "Todo List",
        "Kanban Board",
        "Tic-Tac-Toe Game",
        "Calculator",
        "Form Builder"
      ],
      videos: [
        {
          title: "Building a Complex Application with React",
          link: "https://www.youtube.com/watch?v=m_mtV4YaI8c"
        }
      ],
      externalLink: "https://reactjs.org/tutorial/tutorial.html"
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

const difficultyColors = {
  easy: "bg-green-100 text-green-800",
  medium: "bg-yellow-100 text-yellow-800",
  hard: "bg-red-100 text-red-800",
  machineCoding: "bg-purple-100 text-purple-800"
}

export default function ReactJS() {
  return (
    <div className="min-h-screen bg-background">

      <main className="container px-4 py-12 md:px-6">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Frontend Development</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Master JavaScript, React, and essential frontend development skills with our comprehensive curriculum.
            </p>
          </motion.div>

          {/* <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-6">All Topics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(topics).map(([difficulty, topicList]) => (
                <Card key={difficulty} className="overflow-hidden">
                  <CardHeader className={`${difficultyColors[difficulty as keyof typeof difficultyColors]} py-3`}>
                    <CardTitle className="text-lg capitalize">{difficulty}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      {topicList.map((topic, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm">{topic.title}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div> */}

          <Tabs defaultValue="easy" className="space-y-4">
            <TabsList>
              <TabsTrigger value="easy">Easy</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="hard">Hard</TabsTrigger>
              <TabsTrigger value="machineCoding">Machine Coding</TabsTrigger>
            </TabsList>

            {(Object.keys(topics) as Array<keyof typeof topics>).map((section) => (
              <TabsContent key={section} value={section} className="space-y-8">
                {topics[section].map((topic, topicIndex) => (
                  <motion.div key={topicIndex} variants={itemVariants}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          <span className="flex items-center space-x-2">
                            {topic.title}
                            <Badge variant="outline" className={`ml-2 ${difficultyColors[section]}`}>
                              {section}
                            </Badge>
                          </span>
                          <Link 
                            to={topic.externalLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <ArrowRight className="h-5 w-5 text-orange-500" />
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
                              <span>{item}</span>
                              <Link 
                                to="#" 
                                className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
                              >
                                <ArrowRight className="h-4 w-4 text-orange-500" />
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                        <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                          Related Videos
                          <ArrowRight className="h-5 w-5 text-orange-500" />
                        </h3>
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


