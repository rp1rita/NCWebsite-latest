"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Cloud, Globe, Code, Database, Server, Link as LinkIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Cloud Migration",
    description: "Seamlessly move your infrastructure to the cloud with our expert migration services.",
    icon: Cloud,
    href: "/services/cloud-services",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Digital Transformation",
    description: "Transform your business with cutting-edge digital solutions and strategies.",
    icon: Globe,
    href: "/services/digital-transformation",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "IT Consulting",
    description: "Get expert advice on optimizing your IT infrastructure and processes.",
    icon: Code,
    href: "/services/technology-consulting",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Data Management",
    description: "Manage, protect, and leverage your data with our comprehensive solutions.",
    icon: Database,
    href: "/services/data-management",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "App Development",
    description: "Transform your ideas into seamless, innovative applications with our end-to-end app development expertise.",
    icon: Server,
    href: "/services/app-development",
    gradient: "from-indigo-500 to-blue-500",
  },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="relative pt-0" aria-label="Our Services">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-16 text-blue-800"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Background gradient + content wrapper */}
      <div className="pt-16 pb-32 bg-gradient-to-b from-blue-800 via-blue-700/40 to-slate-100">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our Services
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive solutions designed to help your business thrive in the digital age
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-800">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto text-blue-600 hover:text-blue-700 hover:bg-transparent group/btn"
                      asChild
                    >
                      <a href={service.href} className="flex items-center">
                        <span className="font-medium">Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4 text-blue-600 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:text-blue-700" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.5, delay: services.length * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full transition-all duration-300 hover:shadow-2xl border-0 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                <CardContent className="p-8 flex flex-col justify-center items-center text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <LinkIcon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Services</h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Explore our complete range of services and solutions
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-white hover:text-blue-200 hover:bg-transparent group/btn"
                    asChild
                  >
                    <a href="/services" className="flex items-center">
                      View All{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
