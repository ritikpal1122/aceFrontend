

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from 'lucide-react'

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

const teamMembers = [
//   {
//     name: "Jane Doe",
//     role: "Lead Developer",
//     bio: "Jane is a seasoned frontend developer with 10+ years of experience. She's passionate about creating intuitive user interfaces and mentoring junior developers.",
//     avatar: "/placeholder.svg?height=200&width=200",
//     github: "https://github.com/janedoe",
//     linkedin: "https://linkedin.com/in/janedoe",
//     twitter: "https://twitter.com/janedoe"
//   },
  {
    name: "John Smith",
    role: "Content Curator",
    bio: "John has been a tech interviewer for top companies for over 5 years. He brings his expertise in crafting challenging yet fair interview questions to Frontend Geek.",
    avatar: "/placeholder.svg?height=200&width=200",
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith",
    twitter: "https://twitter.com/johnsmith"
  },
//   {
//     name: "Emily Chen",
//     role: "UX Designer",
//     bio: "Emily is an award-winning UX designer with a knack for creating engaging learning experiences. She ensures that Frontend Geek is not just informative, but also enjoyable to use.",
//     avatar: "/placeholder.svg?height=200&width=200",
//     github: "https://github.com/emilychen",
//     linkedin: "https://linkedin.com/in/emilychen",
//     twitter: "https://twitter.com/emilychen"
//   }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen  flex flex-col">
      
      <motion.main 
        className="flex-grow"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <section className="container py-12 md:py-24 lg:py-32" style={{margin:"0 auto"}}>
          <div className="container px-4 md:px-6">
            <motion.div variants={itemVariants} className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Meet the Team Behind Frontend Geek</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Our team of experienced developers, interviewers, and designers are passionate about helping you ace your frontend interviews.
              </p>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 justify-center "
            >
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-secondary/10">
                  <CardHeader>
                    <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                    <CardTitle className="text-center">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-primary font-semibold text-center mb-2">{member.role}</p>
                    <p className="text-sm text-muted-foreground text-center mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-4">
                      <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </section>
      </motion.main>
      
    </div>
  )
}

