// "use client"

// import { useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { ArrowRight } from "lucide-react"
// import Image from "next/image"

// const portfolioItems = [
//   {
//     title: "Cloud Migration",
//     description: "Seamless transition to cloud infrastructure with zero downtime",
//     image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
//   },
//   {
//     title: "Security Implementation",
//     description: "Enterprise-grade security solutions for critical systems",
//     image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
//   },
//   {
//     title: "Digital Transformation",
//     description: "Complete business process modernization and optimization",
//     image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
//   },
// ]

// export default function Portfolio() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })

//   return (
//     <section className="py-20 bg-slate-50" ref={ref}>
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
//             Pro-Work Portfolio
//           </span>
//           <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800">Our Success Stories</h2>
//           <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
//             We designed our Pro-Work portfolio to allow you to achieve two key business objectives: growth and
//             efficiency
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//           {portfolioItems.map((item, index) => (
//             <motion.div
//               key={item.title}
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               whileHover={{ y: -10 }}
//               className="group"
//             >
//               <div className="relative overflow-hidden rounded-xl shadow-lg">
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
//                 <Image
//                   src={item.image || "/placeholder.svg"}
//                   alt={item.title}
//                   width={400}
//                   height={300}
//                   className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
//                   <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
//                   <p className="text-blue-100 mb-4">{item.description}</p>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     className="rounded-full border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white group-hover:bg-white group-hover:text-blue-700 transition-all duration-300"
//                   >
//                     View Case Study
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="flex justify-center"
//         >
//           <Button
//             size="lg"
//             className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-6 text-lg group"
//           >
//             LEARN MORE ABOUT PRO-WORK PORTFOLIO
//             <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const clientLogos = [
  { name: "3M", logo: "/images/3m-logo.png", width: 120, height: 60 },
  { name: "Hawaiian Airlines", logo: "/images/hawaiian-airlines-logo.png", width: 140, height: 60 },
  { name: "Technicolor", logo: "/images/technicolor-logo.png", width: 160, height: 60 },
  { name: "Toyota", logo: "/images/toyota-logo.png", width: 120, height: 60 },
  { name: "Allergan", logo: "/images/allergan-logo.png", width: 140, height: 60 },
  { name: "Intuit", logo: "/images/intuit-logo.png", width: 120, height: 60 },
  { name: "Hanson Spirits", logo: "/images/hanson-spirits-logo.png", width: 100, height: 60 },
  { name: "Sharp", logo: "/images/sharp-logo.png", width: 120, height: 60 },
  { name: "Universal Music Group", logo: "/images/universal-music-group-logo.png", width: 160, height: 60 },
  { name: "Zions Bank", logo: "/images/zions-bank-logo.png", width: 140, height: 60 },
  { name: "First Hawaiian Bank", logo: "/images/first-hawaiian-bank-logo.png", width: 160, height: 60 },
  { name: "Edwards", logo: "/images/edwards-logo.png", width: 120, height: 60 },
  { name: "Western Digital", logo: "/images/western-digital-logo.png", width: 160, height: 60 },
  { name: "AAA", logo: "/images/aaa-logo.png", width: 100, height: 60 },
  { name: "OCLC", logo: "/images/oclc-logo.png", width: 120, height: 60 },
]

export default function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      scrollPosition += scrollSpeed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) scrollPosition = 0
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block py-2 px-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Who We Do It For
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4">Our Clients</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We partner with global enterprises, industry leaders, and innovative organizations to deliver technology
            excellence and drive digital transformation.
          </p>
        </motion.div>

        {/* Scrolling Logos */}
        <div className="relative mt-12">
          {/* Gradient Fade */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex gap-12 overflow-hidden whitespace-nowrap"
            style={{ scrollBehavior: "auto", WebkitOverflowScrolling: "touch" }}
          >
            {duplicatedLogos.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-20 px-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative group">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={client.width}
                    height={client.height}
                    className="object-contain opacity-70 hover:opacity-100 transition-all duration-300"
                    priority={index < 5}
                  />
                  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                    {client.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-6 text-lg group"
            asChild
          >
            <a href="/industries">
              Explore Industries
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 inline" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
