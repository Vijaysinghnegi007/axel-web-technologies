
"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award, Clock, Users } from "lucide-react"

export default function About() {
  const sectionRef = useRef(null)
  const counterRef = useRef(null)
  const timelineRef = useRef(null)
  const isInView = useInView(counterRef, { once: true, margin: "0px 0px -100px 0px" })

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = timelineRef.current
    if (timeline) {
      ScrollTrigger.create({
        trigger: timeline,
        start: "top 80%",
        end: "bottom 20%",
        animation: gsap.from(".timeline-item", {
          opacity: 0,
          y: 50,
          stagger: 0.2,
          duration: 0.5,
        }),
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Data can be moved to a CMS or props for dynamic content
  const stats = [
    { icon: <Clock className="h-8 w-8" aria-hidden="true" />, value: 10, label: "Years Designing Homes", suffix: "+" },
    { icon: <Users className="h-8 w-8" aria-hidden="true" />, value: 200, label: "Satisfied Homeowners", suffix: "+" },
    { icon: <Award className="h-8 w-8" aria-hidden="true" />, value: 500, label: "Homes Designed", suffix: "+" },
  ]

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Architect",
      image: "https://via.placeholder.com/150", 
      initials: "AJ",
      bio: "Expert in creating stunning 3D home designs using tools like Planner 5D and SketchUp.",
    },
    {
      name: "Sarah Williams",
      role: "Interior Designer",
      image: "https://via.placeholder.com/150",
      initials: "SW",
      bio: "Specializes in crafting cozy, functional interiors with Homestyler.",
    },
    {
      name: "Michael Chen",
      role: "3D Model Specialist",
      image: "https://via.placeholder.com/150",
      initials: "MC",
      bio: "Masters 3D modeling for precise room visualizations using RoomSketcher.",
    },
    {
      name: "Emily Davis",
      role: "Landscape Designer",
      image: "https://via.placeholder.com/150",
      initials: "ED",
      bio: "Designs stunning outdoor spaces with tools like Floorplanner.",
    },
  ]

  const timelineEvents = [
    {
      year: "2014",
      title: "Studio Founded",
      description: "Started our journey to revolutionize home design with 3D modeling.",
    },
    {
      year: "2016",
      title: "First Custom Home",
      description: "Designed our first fully custom 3D-modeled home for a client.",
    },
    {
      year: "2018",
      title: "Expanded Services",
      description: "Added interior and landscape design to our offerings.",
    },
    {
      year: "2020",
      title: "Tech Integration",
      description: "Adopted advanced 3D tools like Planner 5D and Homestyler.",
    },
    {
      year: "2023",
      title: "Award-Winning Designs",
      description: "Received awards for innovative home designs and client satisfaction.",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2 max-w-[800px]"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              About <span className="text-gradient">Dream Home Studio</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              We are passionate about creating stunning, functional home designs using cutting-edge 3D modeling tools to
              bring your vision to life. Explore tools like Planner 5D to design your own home!
            </p>
            <a
              href="https://planner5d.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80"
              aria-label="Start designing with Planner 5D"
            >
              Start Designing
            </a>
          </motion.div>
        </div>

        {/* Story and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-primary/0 blur-xl opacity-50"></div>
              <Image
                src="https://via.placeholder.com/600x400" // Replace with a 3D home render
                alt="3D home design by Dream Home Studio"
                width={600}
                height={400}
                loading="lazy"
                className="rounded-xl relative z-10 w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Our Story</h3>
            <p className="text-muted-foreground">
              Founded in 2014, Dream Home Studio began with a mission to empower homeowners to design their dream homes
              using accessible 3D modeling tools like Planner 5D and Homestyler. From cozy apartments to sprawling estates,
              we craft every room with precision.
            </p>
            <p className="text-muted-foreground">
              Our approach combines creativity with technology, allowing you to visualize and customize every detail of
              your home, from kitchens to outdoor spaces, without needing a professional designer.
            </p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-2 max-w-[800px]"
              >
              <h3 className="text-2xl font-bold pt-4">Our Values</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Creativity</h4>
                    <p className="text-sm text-muted-foreground">We design unique homes tailored to you</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Precision</h4>
                    <p className="text-sm text-muted-foreground">Every detail is crafted with accuracy</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Accessibility</h4>
                    <p className="text-sm text-muted-foreground">User-friendly tools for all homeowners</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                    <span className="text-primary text-sm">04</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Collaboration</h4>
                    <p className="text-sm text-muted-foreground">We work with you to realize your vision</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Counter */}
       <div ref={counterRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-sm"
            >
              <div className="flex justify-center mb-4 text-primary">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">
                <CounterAnimation target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Team Members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Meet Our Design Team</h3>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Our experts specialize in creating 3D home designs that are both beautiful and functional.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    e.currentTarget.classList.toggle("group-hover")
                  }
                }}
                role="button"
                aria-label={`View details for ${member.name}`}
              >
                <Card className="overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="group relative perspective">
                      <div className="relative preserve-3d duration-500 group-hover:my-rotate-y-180 w-full h-full">
                        <div className="absolute backface-hidden w-full h-full">
                          <div className="p-6 text-center">
                            <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/20">
                              <AvatarImage src={member.image} alt={`Portrait of ${member.name}`} />
                              <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                            <h4 className="font-bold text-lg">{member.name}</h4>
                            <p className="text-muted-foreground">{member.role}</p>
                          </div>
                        </div>
                        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-primary/10 rounded-xl">
                          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                            <h4 className="font-bold text-lg mb-2">{member.name}</h4>
                            <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                            <div className="flex space-x-3">
                              <a
                                href="#"
                                className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center"
                                aria-label={`LinkedIn profile for ${member.name}`}
                              >
                                <span className="text-primary text-sm">in</span>
                              </a>
                              <a
                                href="#"
                                className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center"
                                aria-label={`Twitter profile for ${member.name}`}
                              >
                                <span className="text-primary text-sm">t</span>
                              </a>
                              <a
                                href="#"
                                className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center"
                                aria-label={`Facebook profile for ${member.name}`}
                              >
                                <span className="text-primary text-sm">f</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Timeline */}
        <div ref={timelineRef} className="relative">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Design Journey</h3>
              <p className="text-muted-foreground max-w-[600px] mx-auto">
                A timeline of our growth in creating innovative home designs.
              </p>
            </motion.div>
          </div>

          <div className="relative mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`timeline-item relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                    <div className="bg-card p-6 rounded-xl shadow-sm">
                      <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                      <p className="text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm z-10">
                      {event.year}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CounterAnimation({ target, suffix = "" }) {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true, margin: "0px 0px -100px 0px" })

  useEffect(() => {
    let animationFrameId
    const duration = 2000

    const step = (timestamp) => {
      const start = performance.now()
      const progress = Math.min((timestamp - start) / duration, 1)
      const currentCount = Math.floor(progress * target)

      setCount(currentCount)

      if (currentCount < target) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    if (isInView) {
      animationFrameId = requestAnimationFrame(step)
    }

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [target, isInView])

  return (
    <span ref={nodeRef} aria-live="polite">
      {count}
      {suffix}
    </span>
  )
}
