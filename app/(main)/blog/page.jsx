import { Suspense } from "react"
import BlogHero from "@/components/pages/blog/blog-hero"
import BlogCategories from "@/components/pages/blog/blog-categories"
import BlogGrid from "@/components/pages/blog/blog-grid"
import BlogNewsletter from "@/components/pages/blog/blog-newsletter"

function BlogContent() {
  return (
    <>
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <BlogNewsletter />
    </>
  )
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen">
          <div className="h-96 bg-muted animate-pulse" />
          <div className="container py-16 space-y-8">
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-10 w-32 bg-muted animate-pulse rounded-md" />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-64 bg-muted animate-pulse rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  )
}
