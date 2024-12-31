'use client'

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Twitter } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { fetchTweets } from '@/utils/twitter'


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

export function TestimonialSection() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function loadTweets() {
      const tweets = await fetchTweets();
      setTestimonials(tweets);
    }
    loadTweets();
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/10">
      <div className="container px-4 md:px-6" style={{margin:"0 auto"}}>
        <motion.div
          className="flex flex-col items-center space-y-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
            What Our Users Say
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-background">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                    </div>
                    <Twitter className="h-5 w-5 text-primary" />
                  </div>
                  <p className="mt-4 text-sm text-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

