"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"


const portfolioItems = [
  {
    id: "1",
    title: "E-Commerce Platform",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "A modern e-commerce platform built with Next.js and Stripe integration.",
    client: "RetailTech Inc.",
    date: "June 2023",
    technologies: ["Next.js", "React", "Stripe", "Tailwind CSS", "Vercel"],
    link: "https://example.com/ecommerce",
  },
  {
    id: "2",
    title: "Health & Fitness App",
    category: "mobile",
    image: "/placeholder.svg?height=600&width=800",
    description: "A comprehensive health and fitness mobile application.",
    client: "FitLife Solutions",
    date: "April 2023",
    technologies: ["React Native", "Firebase", "Redux", "Node.js"],
    link: "https://example.com/fitapp",
  },
  {
    id: "3",
    title: "Corporate Brand Redesign",
    category: "design",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete brand identity redesign for a financial company.",
    client: "Global Finance Group",
    date: "March 2023",
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
  },
  {
    id: "4",
    title: "Cloud Migration Solution",
    category: "cloud",
    image: "/placeholder.svg?height=600&width=800",
    description: "Migrated legacy systems to a scalable cloud infrastructure.",
    client: "TechSolutions Corp",
    date: "February 2023",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    link: "https://example.com/cloud-case-study",
  },
  {
    id: "5",
    title: "Digital Marketing Campaign",
    category: "marketing",
    image: "/placeholder.svg?height=600&width=800",
    description: "Digital marketing campaign that boosted leads by 150%.",
    client: "GrowthBoost Startups",
    date: "January 2023",
    technologies: ["Google Analytics", "SEO", "Content Marketing", "Social Media"],
    link: "https://example.com/marketing-case",
  },
  {
    id: "6",
    title: "Enterprise CRM System",
    category: "web",
    image: "/placeholder.svg?height=600&width=800",
    description: "Custom CRM solution with automation features.",
    client: "Enterprise Solutions Ltd",
    date: "December 2022",
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "AWS"],
    link: "https://example.com/crm-system",
  },
]

export default function PortfolioGrid() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const [filteredItems, setFilteredItems] = useState(portfolioItems)
  const [selectedItem, setSelectedItem] = useState(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    if (categoryParam && categoryParam !== "all") {
      setFilteredItems(portfolioItems.filter((item) => item.category === categoryParam))
    } else {
      setFilteredItems(portfolioItems)
    }
  }, [categoryParam])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((project) => (
            <motion.div key={project.id} variants={item} className="group">
              <div className="bg-background rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedItem(project)
                        setIsDialogOpen(true)
                      }}
                      className="flex items-center gap-1"
                    >
                      View Details <ArrowRight className="h-4 w-4" />
                    </Button>
                    {project.link && (
                      <Button variant="ghost" size="sm" asChild>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1"
                        >
                          Visit <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No projects found in this category</h3>
            <p className="text-muted-foreground mb-6">Try selecting a different category or check back later.</p>
            <Button onClick={() => window.history.pushState({}, "", "/portfolio")}>View All Projects</Button>
          </motion.div>
        )}

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-[90vw] md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedItem && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedItem.title}</DialogTitle>
                  <DialogDescription>{selectedItem.description}</DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="relative w-full h-64 md:h-full rounded overflow-hidden">
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Client</h4>
                      <p className="text-muted-foreground">{selectedItem.client}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Date</h4>
                      <p className="text-muted-foreground">{selectedItem.date}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedItem.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    {selectedItem.link && (
                      <Button asChild>
                        <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                          Visit Project <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
