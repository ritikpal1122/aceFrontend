import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Youtube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoCard } from "../video-cart";

const topics = {
  basics: [
    {
      title: "Big-O Notation",
      content: [
        "Time Complexity",
        "Space Complexity",
        "Best, Average, and Worst Cases",
        "Common Complexities (O(1), O(n), O(log n), etc.)",
        "Analyzing Nested Loops and Recursion",
      ],
    },
    {
      title: "Data Structures",
      content: [
        "Arrays and Objects",
        "Linked Lists",
        "Stacks and Queues",
        "Trees and Graphs",
        "Hash Tables",
      ],
    },
  ],
  algorithms: [
    {
      title: "Searching and Sorting",
      content: [
        "Binary Search",
        "Bubble Sort",
        "Merge Sort",
        "Quick Sort",
        "Heap Sort",
      ],
    },
    {
      title: "Common Algorithms",
      content: [
        "Two Pointer Technique",
        "Sliding Window",
        "Depth-First Search (DFS)",
        "Breadth-First Search (BFS)",
        "Dynamic Programming Basics",
      ],
    },
  ],
};

const resources = [
  {
    type: "article",
    title: "Big-O Notation for Frontend Developers",
    url: "#",
  },
  {
    type: "video",
    title: "Data Structures You Need to Know",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    type: "article",
    title: "Implementing Common Algorithms in JavaScript",
    url: "#",
  },
  {
    type: "video",
    title: "Solving LeetCode Problems for Frontend Interviews",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const relatedVideos = [
  {
    title: "Understanding Big-O Notation",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Data Structures for Frontend Developers",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Sorting Algorithms Explained",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    title: "Solving Frontend Coding Challenges",
    imageUrl: "/placeholder.svg?height=180&width=320",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

export default function DSAFrontend() {
  return (
    <div className="min-h-screen ">
      <main className="container px-4 py-12 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              DSA For Frontend
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Master Data Structures and Algorithms essential for frontend
              development. Learn how to approach and solve common coding
              challenges in frontend interviews.
            </p>
          </div>

          <Tabs defaultValue="basics" className="space-y-4">
            <TabsList>
              <TabsTrigger value="basics">Fundamentals</TabsTrigger>
              <TabsTrigger value="algorithms">Algorithms</TabsTrigger>
            </TabsList>

            {(Object.keys(topics) as Array<keyof typeof topics>).map(
              (section) => (
                <TabsContent
                  key={section}
                  value={section}
                  className="space-y-4"
                >
                  <div className="grid gap-6 md:grid-cols-2">
                    {topics[section].map((topic, index) => (
                      <Card key={index} className="card-main-page w-[600px]">
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between">
                            {topic.title}
                            <Link
                              to={`#${topic.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                            >
                              <ArrowRight className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {topic.content.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-white">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              )
            )}
          </Tabs>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index} className="flex items-center space-x-2">
                  {resource.type === "video" && (
                    <Youtube className="h-4 w-4 text-red-500" />
                  )}
                  <Link
                    to={resource.url}
                    className="text-blue-500 hover:underline"
                  >
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Related Videos
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {relatedVideos.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
