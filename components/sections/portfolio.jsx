"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState(null)
  const carouselRef = useRef(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      image: "/placeholder.svg",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      github: "#",
      longDescription:
        "This comprehensive e-commerce solution provides businesses with a scalable platform to sell products online. Features include product catalog management, user authentication, shopping cart functionality, secure checkout with Stripe integration, order management, and analytics dashboard.",
    },
    {
      id: 2,
      title: "Health & Fitness App",
      description:
        "Mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      image: "/placeholder.svg",
      category: "Mobile Development",
      technologies: ["React Native", "Firebase", "Redux", "HealthKit"],
      link: "#",
      github: "#",
      longDescription:
        "A cross-platform mobile application that helps users track their fitness journey. The app includes workout planning, nutrition tracking, progress visualization, integration with wearable devices, personalized recommendations based on user goals, and social sharing capabilities.",
    },
    {
      id: 3,
      title: "Real Estate Portal",
      description: "Property listing and management platform with advanced search, virtual tours, and agent dashboard.",
      image: "/placeholder.svg",
      category: "Web Development",
      technologies: ["Next.js", "PostgreSQL", "Google Maps API", "AWS"],
      link: "#",
      github: "#",
      longDescription:
        "A comprehensive real estate platform that connects property buyers, sellers, and agents. Features include property listings with advanced filtering, virtual property tours, mortgage calculator, agent profiles and ratings, appointment scheduling, and an admin dashboard for property management.",
    },
    {
      id: 4,
      title: "Financial Dashboard",
      description: "Interactive dashboard for financial data visualization and analysis with real-time updates.",
      image: "/placeholder.svg",
      category: "Web Development",
      technologies: ["Vue.js", "D3.js", "Express", "Socket.io"],
      link: "#",
      github: "#",
      longDescription:
        "An advanced financial analytics dashboard that provides real-time insights into market trends, portfolio performance, and investment opportunities. The platform includes interactive charts and graphs, customizable widgets, real-time data feeds, portfolio tracking, and automated reporting.",
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Educational platform with course creation, student management, and interactive learning tools.",
      image: "/placeholder.svg",
      category: "Web Development",
      technologies: ["Angular", "Django", "PostgreSQL", "WebRTC"],
      link: "#",
      github: "#",
      longDescription:
        "A comprehensive learning management system designed for educational institutions and corporate training. Features include course creation and management, student enrollment and progress tracking, interactive quizzes and assignments, video conferencing for live classes, discussion forums, and certification generation.",
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  const handleOpenProjectDetails = (project) => {
    setSelectedProject(project)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2 max-w-[800px]"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              Our <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Explore our recent projects and see how we've helped businesses achieve their digital goals.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div ref={carouselRef} className="overflow-hidden">
            <div className="flex items-center justify-center">
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 z-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={prevSlide}
                aria-label="Previous project"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <div className="w-full max-w-5xl mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div className="relative group overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                        <Button variant="secondary" onClick={() => handleOpenProjectDetails(projects[currentIndex])}>
                          View Details
                        </Button>
                      </div>
                      <Image
                        src={projects[currentIndex].image || "/placeholder.svg"}
                        alt={projects[currentIndex].title}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="text-left space-y-4">
                      <Badge className="mb-2">{projects[currentIndex].category}</Badge>
                      <h3 className="text-2xl font-bold">{projects[currentIndex].title}</h3>
                      <p className="text-muted-foreground">{projects[currentIndex].description}</p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {projects[currentIndex].technologies.map((tech, index) => (
                          <Badge key={index} variant="outline" className="bg-primary/5">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <Button variant="default" onClick={() => handleOpenProjectDetails(projects[currentIndex])}>
                          View Details
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={projects[currentIndex].link} target="_blank" rel="noopener noreferrer">
                            Live Demo
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 z-10 rounded-full bg-background/80 backdrop-blur-sm"
                onClick={nextSlide}
                aria-label="Next project"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">More Projects</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((_, idx) => idx !== currentIndex)
              .map((project) => (
                <Card key={project.id} className="cursor-pointer" onClick={() => handleOpenProjectDetails(project)}>
                  <CardContent className="p-4">
                    <div className="relative rounded-md overflow-hidden mb-4">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-auto object-cover rounded-md"
                      />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                    <p className="text-muted-foreground mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="bg-primary/5">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={closeProjectDetails}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.category}</DialogDescription>
              </DialogHeader>
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                width={600}
                height={300}
                className="w-full h-auto rounded-lg my-4 object-cover"
              />
              <p className="text-muted-foreground mb-4">{selectedProject.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="default" asChild>
                  <Link href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                    <Github className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
