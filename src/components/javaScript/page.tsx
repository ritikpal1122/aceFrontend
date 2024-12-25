

import { CheckCircle } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const topics = {
  basics: [
    {
      title: "Variables and Scoping",
      content: [
        "var vs let vs const",
        "Block scope vs Function scope",
        "Temporal Dead Zone",
        "Hoisting behavior",
        "Global object properties"
      ]
    },
    {
      title: "Functions and Closures",
      content: [
        "Function declarations vs expressions",
        "Arrow functions",
        "Closure scope chain",
        "Practical closure examples",
        "Memory considerations"
      ]
    }
  ],
  advanced: [
    {
      title: "Prototypes and Inheritance",
      content: [
        "Prototype chain",
        "Constructor functions",
        "Class syntax",
        "Instance methods vs prototype methods",
        "Multiple inheritance patterns"
      ]
    },
    {
      title: "Async Programming",
      content: [
        "Promises in depth",
        "async/await patterns",
        "Error handling",
        "Concurrent operations",
        "Race conditions"
      ]
    }
  ],
  interview: [
    {
      title: "Common Interview Questions",
      content: [
        "Implement debounce/throttle",
        "Create a Promise from scratch",
        "Event delegation examples",
        "Inheritance scenarios",
        "Async error handling"
      ]
    },
    {
      title: "Coding Challenges",
      content: [
        "Array manipulation",
        "Object deep clone",
        "Custom event emitter",
        "Async queue implementation",
        "Memoization patterns"
      ]
    }
  ]
}

export default function JavaScript() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container px-4 py-12 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">JavaScript Deep Dive</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Master JavaScript concepts from basics to advanced topics with practical examples and interview preparation materials.
            </p>
          </div>

          <Tabs defaultValue="basics" className="space-y-4">
            <TabsList>
              <TabsTrigger value="basics">Basics</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="interview">Interview Prep</TabsTrigger>
            </TabsList>

            {(Object.keys(topics) as Array<keyof typeof topics>).map((section) => (
              <TabsContent key={section} value={section} className="space-y-4">
                <div className="grid gap-6 md:grid-cols-2">
                  {topics[section].map((topic, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{topic.title}</CardTitle>
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
        </div>
      </main>
    </div>
  )
}

