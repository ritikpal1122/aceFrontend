
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Youtube, ArrowRight } from 'lucide-react'
import { Link } from "react-router-dom"
import { VideoCard } from "../video-cart"


const topics = [
  {
    title: "Modal Implementation",
    resources: [
      { type: "article", title: "Creating a Reusable Modal Component in React", url: "#" },
      { type: "video", title: "Build a Modal from Scratch", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { type: "challenge", title: "Implement a Modal with Animations", url: "#" },
    ]
  },
  {
    title: "Accordion Component",
    resources: [
      { type: "article", title: "Building an Accessible Accordion", url: "#" },
      { type: "video", title: "React Accordion Tutorial", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { type: "challenge", title: "Create a Multi-level Accordion", url: "#" },
    ]
  },
  {
    title: "Infinite Scroll",
    resources: [
      { type: "article", title: "Implementing Infinite Scroll in React", url: "#" },
      { type: "video", title: "Infinite Scroll Performance Optimization", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { type: "challenge", title: "Build an Infinite Scroll Image Gallery", url: "#" },
    ]
  },
  {
    title: "Drag and Drop",
    resources: [
      { type: "article", title: "Creating a Drag and Drop Interface", url: "#" },
      { type: "video", title: "React DnD Tutorial", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { type: "challenge", title: "Implement a Kanban Board with Drag and Drop", url: "#" },
    ]
  }
]

const relatedVideos = [
  {
    title: "Building a Modal from Scratch in React",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Mastering Accordion Components in React",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "Implementing Infinite Scroll in React",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  },
  {
    title: "React Drag and Drop Tutorial",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  }
]

export default function MachineCoding() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 py-12 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Machine Coding</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Master the art of implementing complex UI components and features. Practice real-world coding challenges frequently asked in frontend interviews.
            </p>
          </div>

          <Tabs defaultValue="topics" className="space-y-4">
            <TabsList>
              <TabsTrigger value="topics">Topics</TabsTrigger>
              <TabsTrigger value="challenges">Challenges</TabsTrigger>
            </TabsList>

            <TabsContent value="topics" className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                {topics.map((topic, index) => (
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
                        {topic.resources.map((resource, resourceIndex) => (
                          <li key={resourceIndex} className="flex items-center space-x-2">
                            {resource.type === 'video' && <Youtube className="h-4 w-4 text-red-500" />}
                            <Link to={resource.url} className="text-blue-500 hover:underline">
                              {resource.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="challenges" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Weekly Coding Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Test your skills with our weekly machine coding challenge. Implement a feature and get feedback from the community.</p>
                  <Button asChild>
                    <Link to="#">View This Week's Challenge</Link>
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

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

