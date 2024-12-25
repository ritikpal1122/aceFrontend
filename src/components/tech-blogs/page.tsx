'use client'

import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link } from 'react-router-dom'

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  { id: '1', title: "Understanding React Hooks", slug: "understanding-react-hooks", category: "React JS" },
  { id: '2', title: "Advanced TypeScript Techniques", slug: "advanced-typescript-techniques", category: "Frontend" },
  { id: '3', title: "Building Scalable Frontend Architectures", slug: "building-scalable-frontend-architectures", category: "Frontend" },
  { id: '4', title: "CSS-in-JS: Pros and Cons", slug: "css-in-js-pros-and-cons", category: "Web Development" },
  { id: '5', title: "Optimizing React Performance", slug: "optimizing-react-performance", category: "React JS" },
  { id: '6', title: "State Management in 2024", slug: "state-management-in-2024", category: "Frontend" },
  { id: '7', title: "Accessibility in Modern Web Applications", slug: "accessibility-in-modern-web-applications", category: "Web Development" },
  { id: '8', title: "Micro Frontends: A Practical Guide", slug: "micro-frontends-a-practical-guide", category: "Others" },
]

const categories = ["All", "Frontend", "Web Development", "React JS", "Others"]

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
  
      <main className="container px-4 py-12 md:px-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-8">Frontend Blog Posts</h1>
        <div className="mb-6">
          <Select onValueChange={setSelectedCategory} defaultValue="All">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <Link key={post.id} to={`/blogs/${post.slug}`}>
              <Card className="group transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <ArrowRight className="h-6 w-6 text-primary mr-4 transition-transform duration-300 group-hover:translate-x-1" />
                    <h2 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h2>
                  </div>
                  <span className="text-sm text-muted-foreground">{post.category}</span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

