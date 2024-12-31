
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from 'lucide-react'

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const roadmapSections = [
  {
    title: "Fundamentals",
    topics: [
      "Programming Languages (e.g., Python, Java, JavaScript)",
      "Version Control (Git)",
      "Basic Terminal Usage",
      "Data Structures and Algorithms",
      "HTTP/HTTPS and APIs"
    ]
  },
  {
    title: "Databases",
    topics: [
      "Relational Databases (e.g., MySQL, PostgreSQL)",
      "NoSQL Databases (e.g., MongoDB, Redis)",
      "ORM (Object-Relational Mapping)",
      "Database Design and Normalization",
      "SQL and Query Optimization"
    ]
  },
  {
    title: "Backend Frameworks",
    topics: [
      "Express.js (Node.js)",
      "Django or Flask (Python)",
      "Spring Boot (Java)",
      "Ruby on Rails (Ruby)",
      "ASP.NET Core (C#)"
    ]
  },
  {
    title: "API Development",
    topics: [
      "RESTful API Design",
      "GraphQL",
      "API Authentication and Authorization",
      "API Testing and Documentation",
      "WebSockets for Real-time Communication"
    ]
  },
  {
    title: "DevOps and Deployment",
    topics: [
      "CI/CD Pipelines",
      "Containerization (Docker)",
      "Container Orchestration (Kubernetes)",
      "Cloud Platforms (AWS, Azure, GCP)",
      "Serverless Architecture"
    ]
  },
  {
    title: "Security",
    topics: [
      "Authentication and Authorization",
      "OWASP Security Risks",
      "Encryption and Hashing",
      "HTTPS and SSL/TLS",
      "Security Best Practices"
    ]
  },
  {
    title: "Performance and Scalability",
    topics: [
      "Caching Strategies",
      "Load Balancing",
      "Database Indexing and Query Optimization",
      "Microservices Architecture",
      "Horizontal vs Vertical Scaling"
    ]
  },
  {
    title: "Advanced Concepts",
    topics: [
      "Message Queues (e.g., RabbitMQ, Kafka)",
      "WebSockets and Real-time Communication",
      "GraphQL and Advanced API Patterns",
      "Serverless Architecture",
      "Machine Learning Integration"
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

export default function BackendRoadmap() {
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Backend Development Roadmap</h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Master the essential skills and technologies for becoming a proficient backend developer. Follow this roadmap to guide your learning journey.
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
                  <ul className="space-y-2">
                    {section.topics.map((topic, topicIndex) => (
                      <motion.li
                        key={topicIndex}
                        className="flex items-center space-x-2"
                        variants={itemVariants}
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{topic}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div variants={itemVariants} className="text-center">
            <p className="text-muted-foreground">
              Remember, this roadmap is a guide. The order of learning can be flexible based on your projects and interests. Continuous learning and practice are key to becoming a successful backend developer.
            </p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

