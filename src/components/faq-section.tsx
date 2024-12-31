import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import { motion } from "framer-motion"
  
  const faqs = [
    {
      question: "What is Frontend Development?",
      answer: "Frontend development involves creating the user interface and user experience of a website or web application. It focuses on what users see and interact with in their browsers."
    },
    {
      question: "Which programming languages are essential for Frontend Development?",
      answer: "The core languages for frontend development are HTML, CSS, and JavaScript. Additionally, knowledge of frameworks like React, Vue, or Angular is highly valuable."
    },
    {
      question: "How can I prepare for a Frontend Developer interview?",
      answer: "To prepare, focus on strengthening your core skills in HTML, CSS, and JavaScript. Practice coding challenges, build projects, and familiarize yourself with popular frontend frameworks and libraries."
    },
    {
      question: "What are some important concepts in Frontend System Design?",
      answer: "Key concepts include component architecture, state management, performance optimization, responsive design, and API integration. Understanding these helps in designing scalable and efficient frontend systems."
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }
  
  export function FAQSection() {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32  flex justify-center" >
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Frequently Asked Questions</h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    )
  }
  
  