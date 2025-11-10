"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Award, CheckCircle, Clock, Users, Shield, Zap } from "lucide-react"
import MetaTags from "@/components/seo/meta-tags"
import Breadcrumbs from "@/components/seo/breadcrumbs"
import { OrganizationSchema } from "@/components/seo/schema-markup"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


const timeline = [
  {
    year: "2005",
    title: "The Beginning",
    description:
      "NathCorp was founded with a vision to revolutionize how businesses approach digital transformation. What started as a small team of passionate innovators has grown into a global technology leader.",
  },
  {
    year: "2010",
    title: "First Office",
    description:
      "Opened our first international office in London, expanding our global reach and capabilities to serve clients across Europe.",
  },
  {
    year: "2015",
    title: "Industry Partner",
    description:
      "Became a certified partner with leading technology providers, strengthening our ability to deliver comprehensive solutions to our clients.",
  },
  {
    year: "2020",
    title: "Global Expansion",
    description:
      "Expanded to 12 countries with over 1,500 employees worldwide, serving Fortune 500 companies and emerging startups alike.",
  },
  {
    year: "Today",
    title: "Industry Pioneer",
    description:
      "NathCorp stands as a beacon of excellence in the technology sector, trusted by organizations worldwide to deliver transformative solutions that drive growth and create lasting value.",
  },
]

const leadershipTeam = [
  {
    name: "Raj Nath",
    title: "Founder & CEO",
    bio: "Visionary leader with over 20 years of experience in technology and business transformation. Raj founded NathCorp with a mission to help organizations navigate the complexities of digital evolution.",
    image: "/images/raj-nath.png",
  },
  {
    name: "XYZ",
    title: "CTO",
    bio: "Technology innovator with expertise in cloud architecture, AI, and emerging technologies. Sarah leads our technical strategy and ensures we remain at the cutting edge of innovation.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: ".........",
    title: "Chief Solutions Architect",
    bio: "Enterprise architecture expert specializing in complex system integration and cloud migration. Raj oversees our solution design and ensures technical excellence across all projects.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: ".....",
    title: "VP of Operations",
    bio: "Operational excellence leader with a background in process optimization and organizational efficiency. Grace ensures our internal operations run smoothly to deliver exceptional client service.",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const certifications = [
  {
    name: "AWS Partner",
    icon: Cloud,
    description: "Certified Amazon Web Services Partner with advanced specializations",
  },
  {
    name: "Microsoft Gold Partner",
    icon: Windows,
    description: "Microsoft Gold Partner with cloud platform competency",
  },
  {
    name: "ISO 27001",
    icon: Shield,
    description: "Certified for information security management systems",
  },
  {
    name: "CMMI Level 5",
    icon: Award,
    description: "Highest maturity level for process improvement",
  },
]

export default function AboutPage() {
  const storyRef = useRef(null)
  const missionRef = useRef(null)
  const historyRef = useRef(null)
  const teamRef = useRef(null)
  const certRef = useRef(null)
  const founderRef = useRef(null)

  const storyInView = useInView(storyRef, { once: true, amount: 0.2 })
  const missionInView = useInView(missionRef, { once: true, amount: 0.2 })
  const historyInView = useInView(historyRef, { once: true, amount: 0.2 })
  const teamInView = useInView(teamRef, { once: true, amount: 0.2 })
  const certInView = useInView(certRef, { once: true, amount: 0.2 })
  const founderInView = useInView(founderRef, { once: true, amount: 0.2 })

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="About Us - Our Story & Values"
        description="Learn about NathCorp's journey, our mission to revolutionize digital transformation, and the core values that drive our success since 2005."
        keywords="about NathCorp, IT company history, digital transformation company, technology innovation, IT services"
        canonicalUrl="/about"
      />

      <OrganizationSchema
        name="NathCorp"
        url="https://nathcorp.com"
        logo="https://nathcorp.com/logo.png"
        description="Leading provider of digital transformation and IT solutions since 2005"
        sameAs={[
          "https://twitter.com/nathcorp",
          "https://linkedin.com/company/nathcorp",
          "https://facebook.com/nathcorp",
        ]}
      />

      <main className="min-h-screen">
        <Navbar />

        {/* <div className="container mx-auto px-4 pt-24">
          <Breadcrumbs items={[{ label: "About Us", href: "/about", isCurrent: true }]} />
        </div> */}

      <PageHeader
            title="About Us"
              backgroundImage="/images/About.png"
            />
        {/* Mission & Vision */}
     
{/* Mission & Vision */}
<section className="py-20 bg-white relative" ref={missionRef}>
  <div className="container mx-auto px-4 relative z-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* ─── Text Column ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">
          Our Mission & Vision
        </Badge>

        <h2 className="text-3xl font-bold mb-6 text-slate-900">
          Driving Digital Excellence
        </h2>

        {/* force plain background, no gradient, full opacity, no transitions */}
        <div className="space-y-4">
          <p className="text-slate-800 bg-none transition-none opacity-100">
            <span className="font-semibold">Our Mission:</span> To empower organizations to achieve their full
            potential through innovative technology solutions that drive efficiency, security, and growth.
          </p>
          <p className="text-slate-800 bg-none transition-none opacity-100">
            <span className="font-semibold">Our Vision:</span> To be the trusted technology partner of choice,
            recognized for our expertise in delivering transformative digital solutions that create lasting
            value for our clients.
          </p>
          <p className="text-slate-800 bg-none transition-none opacity-100">
            We believe that technology should be an enabler, not a barrier. Our approach combines technical
            excellence with deep industry knowledge to deliver solutions that address real business challenges
            and create meaningful outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Shield className="h-5 w-5 text-blue-700" />
            </div>
            <span className="font-medium">Trust & integrity</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Zap className="h-5 w-5 text-blue-700" />
            </div>
            <span className="font-medium">Innovation at core</span>
          </div>
        </div>
      </motion.div>

      {/* ─── Image Column (unchanged) ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={missionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-blue-100 rounded-lg"></div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-200 rounded-lg"></div>
          <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
            <Image
              src="/images/NC-Team.jpg?height=600&width=800"
              alt="Team meeting discussing digital transformation strategy"
              width={800}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>


        {/* About the Founder */}
        <section className="py-20 bg-slate-50" ref={founderRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={founderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-gradient-to-br from-blue-800 to-blue-900 p-8 flex flex-col items-center justify-center text-white">
                    {/* <div className="w-64 h-64 rounded-full border-4 border-white overflow-hidden mb-6 relative">
                      <Image
                        src="/images/raj-nath.png"
                        alt="Raj Nath - Founder of NathCorp"
                        fill
                        className="object-cover"
                      />
                    </div> */}
                    <div className="relative z-10 animate-float">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-nathcorp-400/30 to-nathcorp-600/30 blur-md"></div>
                  <div className="w-64 h-64 rounded-full overflow-hidden relative shadow-2xl border-2 border-nathcorp-400/20">
                    <img 
                      src="/images/raj-nath.png" 
                      alt="Raj Nath"
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
                    <h3 className="text-3xl font-bold text-center">RAJ NATH</h3>
                    <p className="text-blue-200 text-center mt-2">Founder & Visionary</p>
                  </div>

                  <div className="p-8">
                    <h2 className="text-2xl font-bold text-blue-700 mb-6 border-b pb-2">ABOUT THE FOUNDER</h2>

                    <div className="space-y-4 text-slate-700">
                      <p>
                        Raj is a leading technology visionary with a strong industry-pedigree; among his key
                        accomplishments are the <span className="text-blue-600 font-medium">original architecture</span>{" "}
                        surrounding
                        <span className="text-blue-600 font-medium"> Active Directory</span>, and the subsequent
                        revisions of the tool, allowing it to evolve with the marketplace needs and remain a key
                        component of identity management today.
                      </p>

                      <p>
                        His ability to identify and predict key technology trends and apply them to real business
                        problems enables us to deliver simple, reliable, low cost technology solutions delivering
                        business results quickly.
                      </p>

                      <p>
                        His vision and strategy efforts are supported by an able team of industry experts including
                        System Analysts, Software Architects, Windows Programmers, Web Programmers, Database experts and
                        QA; teams are led by highly qualified professionals having more than 20 years of industry
                        experience.
                      </p>

                      <p>
                        <span className="text-blue-600 font-medium">We are fully ISO 9001 certified</span>, ensuring
                        quality management across our entire delivery chain and driving a continual focus on quality and
                        on-going improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white" ref={storyRef}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-100 rounded-lg"></div>
                  <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-blue-200 rounded-lg"></div>
                  <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src="/images/Story.png?height=600&width=800"
                      alt="NathCorp headquarters building with modern glass architecture"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="order-1 lg:order-2"
              >
                <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">Our Story</Badge>
                <h2 className="text-3xl font-bold mb-6 text-slate-800">From Startup to Industry Leader</h2>
                <div className="space-y-4 text-slate-600">
                  <p>
                    Founded in 2005, NathCorp began with a vision to revolutionize how businesses approach digital
                    transformation. What started as a small team of passionate innovators has grown into a global
                    technology leader with offices in 12 countries and over 1,500 employees worldwide.
                  </p>
                  <p>
                    Our journey has been defined by continuous innovation, strategic partnerships, and an unwavering
                    commitment to client success. Through economic shifts and technological revolutions, we've remained
                    at the forefront of the industry, helping organizations navigate the complexities of the digital
                    landscape.
                  </p>
                  <p>
                    Today, NathCorp stands as a beacon of excellence in the technology sector, trusted by Fortune 500
                    companies and emerging startups alike to deliver transformative solutions that drive growth and
                    create lasting value.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-20 bg-slate-50" ref={historyRef}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={historyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">Our History</Badge>
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Our Journey Through the Years</h2>
            <p className="text-lg text-slate-600">
              From our humble beginnings to becoming a global leader in digital transformation, our history reflects
              our commitment to innovation and excellence.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>
            {timeline.map((item, idx) => (
              <motion.div key={item.year} initial={{opacity:0,y:30}} animate={historyInView?{opacity:1,y:0}:{opacity:0,y:30}} transition={{duration:0.5, delay: idx*0.2}} className={`relative mb-12 flex ${idx%2===0?"justify-start":"justify-end"}`}>
                <div className={`${idx%2===0?"pr-8 text-right":"pl-8 text-left"} w-5/12`}>
                  <div className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl hover:shadow-2xl transition duration-300">
                    <div className="absolute -inset-1 bg-gradient-to-br from-blue-600/40 to-purple-600/40 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative p-6">
                      <div className="text-blue-600 font-bold text-xl mb-1">{item.year}</div>
                      <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-pink-500 border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

        {/* Stats */}
        <section className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-center mb-2">1,500+</div>
                <div className="text-center text-blue-100">Employees Worldwide</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-center mb-2">2,000+</div>
                <div className="text-center text-blue-100">Projects Completed</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-center mb-2">50+</div>
                <div className="text-center text-blue-100">Industry Awards</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-center mb-2">18+</div>
                <div className="text-center text-blue-100">Years of Excellence</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
      
        {/* Certifications */}
        <section className="py-20 bg-blue-900 text-white" ref={certRef}>
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={certInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-800 text-blue-100 hover:bg-blue-700 border-0">Our Certifications</Badge>
              <h2 className="text-3xl font-bold mb-4">Industry-Leading Certifications</h2>
              <p className="text-lg text-blue-100">
                We adhere to the highest industry standards with our global certifications and partnerships.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={certInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10 text-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-blue-100">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

    {/* Values */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-200 border-0">
        Our Core Values
      </Badge>
      <h2 className="text-3xl font-bold mb-4 text-slate-800 luxury-text-gradient">
        The Principles That Guide Us
      </h2>
      <p className="text-lg text-slate-600">
        These core values define our culture and guide every decision we make
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {[
        { title: "Innovation", desc: "We constantly push the boundaries of what's possible, embracing new technologies and approaches to solve complex challenges." },
        { title: "Excellence", desc: "We hold ourselves to the highest standards in everything we do, from code quality to client communication." },
        { title: "Integrity", desc: "We build relationships based on trust, transparency, and ethical business practices." },
        { title: "Collaboration", desc: "We believe in the power of diverse perspectives and work together to achieve common goals." },
        { title: "Client Focus", desc: "We measure our success by the success of our clients, putting their needs at the center of everything we do." },
        { title: "Adaptability", desc: "We embrace change and continuously evolve to stay ahead in a rapidly transforming digital landscape." },
      ].map((value, idx) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="group relative"
        >
          {/* Gradient glow background */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-pink-600/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <Card className="relative bg-white/10 backdrop-blur-lg border-transparent transition-shadow duration-500 group-hover:shadow-2xl h-full">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-slate-700">
                {value.desc}
              </p>
              {/* Gradient underline on hover */}
              <div className="mt-6 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        <Footer />
      </main>
    </ThemeProvider>
  )
}

function Cloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  )
}

function Windows(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 5 7-2v16l-7-2V5z" />
      <path d="M11 3h10v18H11V3z" />
    </svg>
  )
}
