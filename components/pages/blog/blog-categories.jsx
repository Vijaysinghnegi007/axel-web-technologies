"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Suspense } from "react"

function BlogCategoriesContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [activeCategory, setActiveCategory] = useState(searchParams.get("category") || "all")

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "web-development", name: "Web Development", count: 8 },
    { id: "mobile-apps", name: "Mobile Apps", count: 6 },
    { id: "cloud-computing", name: "Cloud Computing", count: 5 },
    { id: "ai-machine-learning", name: "AI & Machine Learning", count: 3 },
    { id: "cybersecurity", name: "Cybersecurity", count: 2 },
  ]

  useEffect(() => {
    if (activeCategory === "all") {
      router.push("/blog", { scroll: false })
    } else {
      router.push(`/blog?category=${activeCategory}`, { scroll: false })
    }
  }, [activeCategory, router])

  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "all")
  }, [searchParams])

  return (
    <section className="py-8 border-b">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className="flex items-center gap-2"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function BlogCategories() {
  return (
    <Suspense
      fallback={
        <section className="py-8 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-10 w-32 bg-muted animate-pulse rounded-md" />
              ))}
            </div>
          </div>
        </section>
      }
    >
      <BlogCategoriesContent />
    </Suspense>
  )
}
