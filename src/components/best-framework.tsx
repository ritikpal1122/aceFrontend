import { motion } from "framer-motion"
import { Code, Zap, Server, Coffee } from 'lucide-react'

const frameworks = [
  { name: "React", type: "Frontend", description: "A JavaScript library for building user interfaces", icon: Code },
  { name: "Next.js", type: "Full-stack", description: "The React Framework for Production", icon: Zap },
  { name: "Express.js", type: "Backend", description: "Fast, unopinionated, minimalist web framework for Node.js", icon: Server },
  { name: "Django", type: "Backend", description: "The web framework for perfectionists with deadlines", icon: Coffee },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export function BestFrameworks() {
  return (
    <section className="container py-12 md:py-24 lg:py-32 " style={{margin:"0 auto"}}>
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Best Frameworks</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {frameworks.map((framework, index) => (
            <motion.div key={framework.name} variants={itemVariants} className="flex flex-col items-center text-center">
              <motion.div
                className="mb-4 p-4 bg-primary/10 rounded-full"
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
              >
                <framework.icon className="h-12 w-12 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{framework.name}</h3>
              <p className="text-sm font-medium text-primary mb-2">{framework.type}</p>
              <p className="text-sm text-muted-foreground">{framework.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

