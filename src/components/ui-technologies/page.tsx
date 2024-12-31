
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Youtube, ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom"
import { VideoCard } from "../video-cart"

const topics = {
  browser: [
    {
      title: "Browser Rendering",
      content: [
        "Critical Rendering Path",
        "DOM and CSSOM",
        "Reflow and Repaint",
        "Browser Storage Mechanisms",
        "Web Workers and Service Workers"
      ]
    },
    {
      title: "Network and Performance",
      content: [
        "HTTP/1.1 vs HTTP/2",
        "TCP vs UDP",
        "DNS Resolution",
        "CDNs and Edge Computing",
        "Caching Strategies"
      ]
    }
  ],
  security: [
    {
      title: "Web Security Fundamentals",
      content: [
        "Same-Origin Policy",
        "Cross-Site Scripting (XSS)",
        "Cross-Site Request Forgery (CSRF)",
        "Content Security Policy (CSP)",
        "HTTPS and TLS"
      ]
    },
    {
      title: "Authentication and Authorization",
      content: [
        "JWT and Session-based Auth",
        "OAuth 2.0 and OpenID Connect",
        "Single Sign-On (SSO)",
        "Multi-Factor Authentication (MFA)",
        "RBAC vs ABAC"
      ]
    }
  ]
}

const resources = [
  { type: "article", title: "Understanding the Critical Rendering Path", url: "#" },
  { type: "video", title: "Web Security Fundamentals", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  { type: "article", title: "Optimizing Frontend Performance", url: "#" },
  { type: "video", title: "Authentication Deep Dive", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
]

const relatedVideos = [
  {
    title: "Understanding the Browser Rendering Process",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Web Performance Optimization Techniques",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Web Security Best Practices",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Modern Authentication Patterns",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
]

export default function UITechnologies() {
  return (
    <div className="min-h-screen bg-background">

      <main className="container px-4 py-12 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">UI Technologies</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Dive deep into browser internals, security, performance optimization, and more. Master the underlying technologies that power modern web applications.
            </p>
          </div>

          <Tabs defaultValue="browser" className="space-y-4">
            <TabsList>
              <TabsTrigger value="browser">Browser & Performance</TabsTrigger>
              <TabsTrigger value="security">Security & Auth</TabsTrigger>
            </TabsList>

            {(Object.keys(topics) as Array<keyof typeof topics>).map((section) => (
              <TabsContent key={section} value={section} className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  {topics[section].map((topic, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {topic.title}
                          <Link to={`#${topic.title.toLowerCase().replace(/\s+/g, '-')}`}>
                            <ArrowRight className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {topic.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-center space-x-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {resource.type === 'video' && <Youtube className="h-4 w-4 text-red-500" />}
                  <Link to={resource.url} className="text-blue-500 hover:underline">
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Related Videos</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {relatedVideos.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

