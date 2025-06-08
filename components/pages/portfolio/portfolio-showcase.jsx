"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Award, Users, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PortfolioShowcase() {
  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform Revolution",
      description: "Complete digital transformation for a major retail chain with 300% increase in online sales.",
      image: "/placeholder.svg?height=400&width=600",
      category: "E-Commerce",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      metrics: {
        users: "50K+",
        growth: "300%",
        timeline: "6 months",
      },
      awards: ["Best E-Commerce Solution 2023"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Healthcare Management System",
      description: "Streamlined patient management system serving 10+ hospitals with real-time data synchronization.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Healthcare",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      metrics: {
        users: "10K+",
        growth: "250%",
        timeline: "8 months",
      },
      awards: ["Healthcare Innovation Award"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "FinTech Mobile Application",
      description: "Secure mobile banking solution with biometric authentication and real-time transactions.",
      image: "/placeholder.svg?height=400&width=600",
      category: "FinTech",
      technologies: ["React Native", "Node.js", "Redis", "Kubernetes"],
      metrics: {
        users: "100K+",
        growth: "400%",
        timeline: "10 months",
      },
      awards: ["Best Mobile App 2023", "Security Excellence"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "150+", icon: <Award className="h-6 w-6" /> },
    { label: "Happy Clients", value: "80+", icon: <Users className="h-6 w-6" /> },
    { label: "Years Experience", value: "8+", icon: <Calendar className="h-6 w-6" /> },
    { label: "Success Rate", value: "98%", icon: <TrendingUp className="h-6 w-6" /> },
  ]

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-[800px] mx-auto">
            Discover our most impactful projects that have transformed businesses and delivered exceptional results.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Project Image */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </div>

                  {/* Project Details */}
                  <CardContent
                    className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-muted-foreground text-lg">{project.description}</p>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{project.metrics.users}</div>
                          <div className="text-sm text-muted-foreground">Users</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{project.metrics.growth}</div>
                          <div className="text-sm text-muted-foreground">Growth</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{project.metrics.timeline}</div>
                          <div className="text-sm text-muted-foreground">Timeline</div>
                        </div>
                      </div>

                      {/* Awards */}
                      {project.awards.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-2">Awards & Recognition</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.awards.map((award, awardIndex) => (
                              <Badge
                                key={awardIndex}
                                className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              >
                                <Award className="h-3 w-3 mr-1" />
                                {award}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button asChild>
                          <Link href={project.liveUrl}>
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Live
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href={project.githubUrl}>
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and proven track record.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
