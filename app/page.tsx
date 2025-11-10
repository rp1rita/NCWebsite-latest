"use client"
import Image from "next/image"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import CostSaving from "@/components/cost-saving"
import Testimonials from "@/components/testimonials"
// import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import MetaTags from "@/components/seo/meta-tags"
import { motion} from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { OrganizationSchema } from "@/components/seo/schema-markup"
const LOCATIONS = [
  {
    name: "USA",
    imageSrc: "/images/USA.png",
    url: "/contact?location=usa",
  },
  {
    name: "India",
    imageSrc: "/images/India.png",
    url: "/contact?location=india",
  },
  {
    name: "UAE",
    imageSrc: "/images/UAE.png",
    url: "/contact?location=dubai",
  },
]
export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="NathCorp - Modern Deployment & Cloud Migration Solutions"
        description="NathCorp provides modern deployment solutions, cloud migration services, and IT consulting to help businesses thrive in the digital age. Cost effective, safe & personalized."
        keywords="modern deployment, cloud migration, EZ Migrate, Pro-Work Portfolio, cost saving, IT solutions"
        canonicalUrl="/"
      />

      <OrganizationSchema
        name="NathCorp"
        url="https://nathcorp.com"
        logo="https://nathcorp.com/logo.png"
        description="Leading provider of modern deployment and cloud migration solutions"
        sameAs={[
          "https://twitter.com/nathcorp",
          "https://linkedin.com/company/nathcorp",
          "https://facebook.com/nathcorp",
        ]}
      />

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <CostSaving />
        <Testimonials />
        {/* <CallToAction /> */}
        
 {/* Vicinity Selection Section */}
      <section className="py-24 relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 to-yellow-300 bg-clip-text text-transparent mb-6"
        >
          Find Us In Your Vicinity!
        </motion.h2>

        <p className="text-blue-100 max-w-2xl mx-auto text-lg mb-12">
          Our global presence helps us stay connected to your innovation journey.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {LOCATIONS.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={location.url} className="group relative block">
                <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md p-6 px-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-2xl transition">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/30 shadow-md">
                    <Image
                      src={location.imageSrc}
                      alt={`${location.name} flag`}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-white text-lg font-semibold tracking-wide group-hover:underline">
                    {location.name}
                  </div>
                  <div className="text-sm text-white/70">{location.subtext}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Link href="/contact">
            <button className="px-6 py-3 text-sm font-semibold text-black bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-full shadow-md hover:shadow-xl transition">
              View All Locations
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
        <Footer />
      </main>
    </ThemeProvider>
  )
}
