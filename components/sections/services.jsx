"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Code, Database, Globe, Smartphone, Palette, LineChart } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const [activeTab, setActiveTab] = useState("all")

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with the latest technologies.",
      icon: <Globe className="h-10 w-10" />,
      category: "development",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "CMS Integration"],
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="h-10 w-10" />,
      category: "development",
      features: ["Native iOS & Android", "Cross-platform Solutions", "App Store Optimization", "Push Notifications"],
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered design that creates intuitive and engaging digital experiences.",
      icon: <Palette className="h-10 w-10" />,
      category: "design",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and services for your business needs.",
      icon: <Database className="h-10 w-10" />,
      category: "infrastructure",
      features: ["AWS & Azure", "Cloud Migration", "Serverless Architecture", "DevOps"],
    },
    {
      id: 5,
      title: "Custom Software",
      description: "Tailored software solutions designed to address your specific business challenges.",
      icon: <Code className="h-10 w-10" />,
      category: "development",
      features: ["Enterprise Applications", "API Development", "Legacy System Integration", "Maintenance & Support"],
    },
    {
      id: 6,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your online presence and drive conversions.",
      icon: <LineChart className="h-10 w-10" />,
      category: "marketing",
      features: ["SEO & SEM", "Content Marketing", "Social Media", "Analytics & Reporting"],
    },
  ]

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.category === activeTab)

  const categories = [
    { value: "all", label: "All Services" },
    { value: "development", label: "Development" },
    { value: "design", label: "Design" },
    { value: "infrastructure", label: "Infrastructure" },
    { value: "marketing", label: "Marketing" },
  ]

  return (
    <section id="services" className="py-20 md:py-32">
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
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a comprehensive range of IT solutions to help your business thrive in the digital landscape.
            </p>
          </motion.div>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
  <div className="flex justify-center mb-8">
    <TabsList className="inline-flex h-auto p-1 bg-muted rounded-lg border shadow-sm">
      <div className="flex flex-wrap gap-1 max-w-4xl">
        {categories.map((category) => (
          <TabsTrigger 
            key={category.value} 
            value={category.value} 
            className="
              relative px-4 py-2.5 text-sm font-medium transition-all duration-200
              data-[state=active]:bg-background 
              data-[state=active]:text-foreground
              data-[state=active]:shadow-sm
              data-[state=inactive]:text-muted-foreground
              data-[state=inactive]:hover:text-foreground
              data-[state=inactive]:hover:bg-muted/60
              rounded-md border-0 whitespace-nowrap
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
              disabled:pointer-events-none disabled:opacity-50
            "
          >
            {category.label}
          </TabsTrigger>
        ))}
      </div>
    </TabsList>
  </div>

  {categories.map((category) => (
    <TabsContent 
      key={category.value}
      value={category.value}
      className="
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
        mt-0 data-[state=inactive]:hidden
      "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="wait">
          {(activeTab === category.value ? filteredServices : []).map((service, index) => (
            <motion.div
              key={`${service.id}-${activeTab}`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: { 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: [0.23, 1, 0.32, 1] // Custom easing for smoother animation
                }
              }}
              exit={{ 
                opacity: 0, 
                y: -10, 
                scale: 0.95,
                transition: { duration: 0.2 }
              }}
              layout
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </TabsContent>
  ))}
</Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">Need a custom solution for your business? We can help!</p>
          <Button asChild size="lg">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service }) {
  return (
    <Card className="h-full overflow-hidden group">
      <CardHeader className="pb-2">
        <div className="mb-4 text-primary">{service.icon}</div>
        <CardTitle className="text-xl">{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.map((feature, index) => (
            <Badge key={index} variant="outline" className="bg-primary/5">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="p-0 h-auto group-hover:text-primary transition-colors" asChild>
          <Link href={`/services#${service.category}`}>
            Learn more
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
