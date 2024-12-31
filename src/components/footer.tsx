import { Github, Twitter, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const footerLinks = [
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
  { title: 'Privacy Policy', href: '/privacy' },
  { title: 'Terms of Service', href: '/terms' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com' },
  { icon: Twitter, href: 'https://twitter.com' },
  { icon: Linkedin, href: 'https://linkedin.com' },
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
    opacity: 1
  }
}

export function Footer() {
  return (
    <motion.footer
      className="container py-12 border-t border-border"
      initial="hidden"
      animate="visible"
      style={{margin:"0 auto"}}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Frontend Geek</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop resource for mastering frontend development and acing interviews.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link key={index} to={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <link.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground"
          variants={itemVariants}
        >
          © {new Date().getFullYear()} Frontend Geek. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}

