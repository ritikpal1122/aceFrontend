import { motion } from "framer-motion"
import { Layers, Feather, Box, Grid } from 'lucide-react'

const libraries = [
  { name: "Material-UI", description: "React components for faster and easier web development", icon: Layers },
  { name: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development", icon: Feather },
  { name: "Chakra UI", description: "Simple, modular and accessible component library for React", icon: Box },
  { name: "Ant Design", description: "A design system for enterprise-level products", icon: Grid },
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
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  }
}

export function UILibraries() {
  return (
    <section className="container py-12 md:py-24 lg:py-32" style={{margin:"0 auto"}}>
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Popular UI Libraries</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {libraries.map((library, index) => (
            <motion.div key={library.name} variants={itemVariants} className="flex flex-col items-center text-center">
              <motion.div
                className="mb-4 p-4 bg-primary/10 rounded-full"
                variants={iconVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <library.icon className="h-12 w-12 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{library.name}</h3>
              <p className="text-sm text-muted-foreground">{library.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
