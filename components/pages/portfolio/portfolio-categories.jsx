"use client"

import { useState, useEffect, Suspense } from "react"
import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Palette, Database, Code, LineChart } from "lucide-react"

function PortfolioCategoriesContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const [activeCategory, setActiveCategory] = useState(categoryParam || "all")

  const categories = [
    { id: "all", name: "All Projects", icon: <Globe className="h-5 w-5" /> },
    { id: "web", name: "Web Development", icon: <Code className="h-5 w-5" /> },
    { id: "mobile", name: "Mobile Apps", icon: <Smartphone className="h-5 w-5" /> },
    { id: "design", name: "UI/UX Design", icon: <Palette className="h-5 w-5" /> },
    { id: "cloud", name: "Cloud Solutions", icon: <Database className="h-5 w-5" /> },
    { id: "marketing", name: "Digital Marketing", icon: <LineChart className="h-5 w-5" /> },
  ]

  // Update URL when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      router.push("/portfolio", { scroll: false })
    } else {
      router.push(`/portfolio?category=${activeCategory}`, { scroll: false })
    }
  }, [activeCategory, router])

  // Update active category when URL changes
  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam)
    } else {
      setActiveCategory("all")
    }
  }, [categoryParam])

  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category.id ? "default" : "outline"}
              className="flex items-center gap-2"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default function PortfolioCategories() {
  return (
    <Suspense
      fallback={
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-10 w-32 bg-muted animate-pulse rounded-md" />
              ))}
            </div>
          </div>
        </section>
      }
    >
      <PortfolioCategoriesContent />
    </Suspense>
  )
}
