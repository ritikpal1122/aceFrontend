import { CheckCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import ArrowRightUpCross from "../../assets/svg/arrow-up.svg";

const topics = {
  basics: [
    {
      title: "Variables and Scoping",
      content: [
        {
          text: "var vs let vs const",
          url: "https://example.com/variables-and-scoping",
        },
        {
          text: "Block scope vs Function scope",
          url: "https://example.com/block-vs-function-scope",
        },
        {
          text: "Temporal Dead Zone",
          url: "https://example.com/temporal-dead-zone",
        },
        {
          text: "Hoisting behavior",
          url: "https://example.com/hoisting-behavior",
        },
        {
          text: "Global object properties",
          url: "https://example.com/global-object-properties",
        },
      ],
    },
    {
      title: "Functions and Closures",
      content: [
        {
          text: "Function declarations vs expressions",
          url: "https://example.com/function-declarations-vs-expressions"
        },
        {
          text: "Arrow functions",
          url: "https://example.com/arrow-functions"
        },
        {
          text: "Closure scope chain",
          url: "https://example.com/closure-scope-chain"
        },
        {
          text: "Practical closure examples",
          url: "https://example.com/practical-closure-examples"
        },
        {
          text: "Memory considerations",
          url: "https://example.com/memory-considerations"
        }
      ]
    },
  ],
  advanced: [
    {
      title: "Prototypes and Inheritance",
      content: [
        {
          text: "Prototype chain",
          url: "https://example.com/prototype-chain"
        },
        {
          text: "Constructor functions",
          url: "https://example.com/constructor-functions"
        },
        {
          text: "Class syntax",
          url: "https://example.com/class-syntax"
        },
        {
          text: "Instance methods vs prototype methods",
          url: "https://example.com/instance-vs-prototype-methods"
        },
        {
          text: "Multiple inheritance patterns",
          url: "https://example.com/multiple-inheritance-patterns"
        }
      ],
    },
    {
      title: "Async Programming",
      content: [
        {
          text: "Promises in depth",
          url: "https://example.com/promises-in-depth"
        },
        {
          text: "async/await patterns",
          url: "https://example.com/async-await-patterns"
        },
        {
          text: "Error handling",
          url: "https://example.com/error-handling"
        },
        {
          text: "Concurrent operations",
          url: "https://example.com/concurrent-operations"
        },
        {
          text: "Race conditions",
          url: "https://example.com/race-conditions"
        }
      ],
    },
  ],
  interview: [
    {
      title: "Common Interview Questions",
      content: [
        {
          text: "Implement debounce/throttle",
          url: "https://example.com/implement-debounce-throttle"
        },
        {
          text: "Create a Promise from scratch",
          url: "https://example.com/create-promise-from-scratch"
        },
        {
          text: "Event delegation examples",
          url: "https://example.com/event-delegation-examples"
        },
        {
          text: "Inheritance scenarios",
          url: "https://example.com/inheritance-scenarios"
        },
        {
          text: "Async error handling",
          url: "https://example.com/async-error-handling"
        }
      ],
    },
    {
      title: "Coding Challenges",
      content: [
        {
          text: "Array manipulation",
          url: "https://example.com/array-manipulation"
        },
        {
          text: "Object deep clone",
          url: "https://example.com/object-deep-clone"
        },
        {
          text: "Custom event emitter",
          url: "https://example.com/custom-event-emitter"
        },
        {
          text: "Async queue implementation",
          url: "https://example.com/async-queue-implementation"
        },
        {
          text: "Memoization patterns",
          url: "https://example.com/memoization-patterns"
        }
      ],
    },
  ],
};

export default function JavaScript() {
  return (
    <div className="min-h-screen">
      <main className="container px-4 py-12 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              JavaScript Deep Dive
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl dark:text-gray-400">
              Master JavaScript concepts from basics to advanced topics with
              practical examples and interview preparation materials.
            </p>
          </div>

          <Tabs defaultValue="basics" className="space-y-4">
            <TabsList>
              <TabsTrigger value="basics">Basics</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
              <TabsTrigger value="interview">Interview Prep</TabsTrigger>
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
                          <CardTitle className="text-indigo-600">
                            {topic.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {topic.content.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-center justify-between space-x-2 border-gray-50 card-topic"
                              >
                                <div className="flex items-center gap-2">
                                  {" "}
                                  <CheckCircle className="h-4 w-4 text-green-500 mb-2" />
                                  <span className="text-white mb-2">
                                    {typeof item === "string"
                                      ? item
                                      : item.text}
                                  </span>
                                </div>
                                {typeof item !== "string" && (
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-white"
                                    
                                  >
                                    <img src={ArrowRightUpCross} className="mb-2"/>{" "}
                                    {/* Wrapped in a link for navigation */}
                                  </a>
                                )}
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
        </div>
      </main>
    </div>
  );
}
