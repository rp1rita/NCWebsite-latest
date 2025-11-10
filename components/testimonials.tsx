"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    quote:
      "DocSync allows us to remove over 100 pounds of paper manuals from each of our aircraft saving fuel on every flight, and enables our pilots to dispose of their heavy flight bags; all while ensuring we remain in 100% compliance with FAA regulations regarding our flight manuals and the on-going updates required.",
    name: "Check Airman",
    title: "Major Airline",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Thanks for your team’s prompt and determined response to this issue.  It speaks well of NathCorp and its relationship with our airline.",
    name: "VP, Flight Operations",
    title: "Major Airline",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Nathcorp provided a very detail oriented project manager and project team to provide oversight and ensure that Nathcorp’s resources properly aligned with our internal IT resources.  Their collaborative approach allowed us to complete our pilot within scope and within the agreed upon timeframe.",
    name: "Terolyn Phinsee",
    title: "Technical Project Manager",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
    "I can say that all of my expectations were achieved and my compliments to the team at NathCorp for a professional engagement.",
    name: "David Damery",
    title: "Director of IT, Allergan",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-800">What Our Clients Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Trusted by leading organizations across industries</p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full p-1"
                >
                  <Card className="border-0 shadow-lg h-full bg-white hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="mb-4">
                        <svg
                          width="45"
                          height="36"
                          className="text-blue-600 mb-4"
                          viewBox="0 0 45 36"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M13.5 18H9C9 12.4772 13.4772 8 19 8V12C15.6863 12 13 14.6863 13 18V18.75C13 19.9926 14.0074 21 15.25 21H19.75C20.9926 21 22 19.9926 22 18.75V14.25C22 13.0074 20.9926 12 19.75 12H19V8H19.75C23.2018 8 26 10.7982 26 14.25V18.75C26 22.2018 23.2018 25 19.75 25H15.25C11.7982 25 9 22.2018 9 18.75V18H13.5Z" />
                          <path d="M31.5 18H27C27 12.4772 31.4772 8 37 8V12C33.6863 12 31 14.6863 31 18V18.75C31 19.9926 32.0074 21 33.25 21H37.75C38.9926 21 40 19.9926 40 18.75V14.25C40 13.0074 38.9926 12 37.75 12H37V8H37.75C41.2018 8 44 10.7982 44 14.25V18.75C44 22.2018 41.2018 25 37.75 25H33.25C29.7982 25 27 22.2018 27 18.75V18H31.5Z" />
                        </svg>
                      </div>
                      <p className="text-slate-600 italic flex-grow mb-6">{testimonial.quote}</p>
                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                          <p className="text-sm text-slate-600">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="mr-2 static translate-y-0 bg-white hover:bg-blue-50 border-blue-200" />
            <CarouselNext className="ml-2 static translate-y-0 bg-white hover:bg-blue-50 border-blue-200" />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
