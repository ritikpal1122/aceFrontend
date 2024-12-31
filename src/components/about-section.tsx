import { motion } from "framer-motion"
import { Code, Brain, Zap, Users } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
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

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

export function AboutSection() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/10">
        <div className="container px-4 md:px-6" style={{margin:"0 auto"}}>
          <motion.div
            className="flex flex-col items-center space-y-4 text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Who We Are & Why Choose Us
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Frontend Geek was developed by a team of experienced frontend developers, tech leads, and interviewers from top tech companies.
              Our mission is to bridge the gap between theoretical knowledge and practical interview scenarios.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 mt-8">
              <motion.div 
                className="flex flex-col items-center space-y-2 p-4 bg-background rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div variants={iconVariants}>
                  <Code className="h-10 w-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold">Comprehensive Curriculum</h3>
                <p className="text-sm text-muted-foreground text-center">Covers all aspects of frontend development and interview preparation</p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center space-y-2 p-4 bg-background rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div variants={iconVariants}>
                  <Brain className="h-10 w-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold">Expert-Curated Content</h3>
                <p className="text-sm text-muted-foreground text-center">Resources and questions vetted by industry professionals</p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center space-y-2 p-4 bg-background rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div variants={iconVariants}>
                  <Zap className="h-10 w-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold">Interactive Learning</h3>
                <p className="text-sm text-muted-foreground text-center">Engage with real-world coding challenges and quizzes</p>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center space-y-2 p-4 bg-background rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div variants={iconVariants}>
                  <Users className="h-10 w-10 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold">Community-Driven</h3>
                <p className="text-sm text-muted-foreground text-center">Learn from peers and contribute to a growing knowledge base</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }
  
