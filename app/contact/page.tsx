"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, Globe, Clock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import MetaTags from "@/components/seo/meta-tags"
import { motion } from "framer-motion"
import WorldMap from "@/components/world-map"

const locations = {
  india: [
    {
      city: "Ranchi",
      country: "India",
      address: "213/C Road No.1, Ashok Nagar, Ranchi, Jharkhand 834002",
      phone: "+91 651 234 5678",
      email: "ranchi@nathcorp.com",
      timezone: "IST (UTC+5:30)",
      flag: "🇮🇳",
      gradient: "from-orange-500 to-green-600",
    },
  ],
  usa: [
    {
      city: "Irvine",
      country: "USA",
      address: "1 Park Plaza, Suite 930, Irvine, CA 92614",
      phone: "+1 949 555 0123",
      email: "irvine@nathcorp.com",
      timezone: "PST (UTC-8)",
      flag: "🇺🇸",
      gradient: "from-blue-600 to-red-600",
    },
  ],
  dubai: [
    {
      city: "Dubai",
      country: "UAE",
      address: "Dubai Internet City, Building 3, Office 201, Dubai, UAE",
      phone: "+971 4 123 4567",
      email: "dubai@nathcorp.com",
      timezone: "GST (UTC+4)",
      flag: "🇦🇪",
      gradient: "from-red-600 to-green-600",
    },
  ],
}

export default function ContactPage() {
  const { toast } = useToast()
  const searchParams = useSearchParams()
  const [selectedLocation, setSelectedLocation] = useState<string>("all")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    interest: "",
    preferredLocation: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const locationParam = searchParams?.get("location")
    if (locationParam && (locationParam === "india" || locationParam === "dubai" || locationParam === "usa")) {
      setSelectedLocation(locationParam)
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleLocationChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredLocation: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll be in touch soon!",
    })

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
      interest: "",
      preferredLocation: "",
    })

    setIsSubmitting(false)
  }

  const getDisplayedLocations = () => {
    if (selectedLocation === "all") {
      return [...locations.india, ...locations.usa, ...locations.dubai]
    }
    return locations[selectedLocation as keyof typeof locations] || []
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MetaTags
        title="Contact Us - Get in Touch with Our Global Team"
        description="Contact NathCorp offices in India, USA, and Dubai for digital transformation solutions, cloud migration services, and IT consulting. Our global team is ready to help."
        keywords="contact NathCorp, IT services contact India USA Dubai, technology consulting global, get in touch, request consultation"
        canonicalUrl="/contact"
      />

      <main className="min-h-screen">
        <Navbar />

        <PageHeader
          title="Contact Us"
          subtitle="Connect with our global team across USA, India, and UAE"
          backgroundImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop"
        />

        {/* World Map Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                Our Global Presence
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                NathCorp operates from 3 strategic locations worldwide to serve you better. Find your nearest office
                below.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <WorldMap />
            </motion.div>
          </div>
        </section>

        {/* Location Filter */}
        <section className="py-12 bg-gradient-to-r from-blue-50 to-gold-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <h3 className="text-xl font-semibold text-slate-800">Find Us In Your Vicinity:</h3>
              <div className="flex gap-4">
                <Button
                  onClick={() => setSelectedLocation("all")}
                  variant={selectedLocation === "all" ? "default" : "outline"}
                  className="rounded-full"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  All Locations
                </Button>
                <Button
                  onClick={() => setSelectedLocation("india")}
                  variant={selectedLocation === "india" ? "default" : "outline"}
                  className="rounded-full"
                >
                  🇮🇳 India
                </Button>
                <Button
                  onClick={() => setSelectedLocation("usa")}
                  variant={selectedLocation === "usa" ? "default" : "outline"}
                  className="rounded-full"
                >
                  🇺🇸 USA
                </Button>
                <Button
                  onClick={() => setSelectedLocation("dubai")}
                  variant={selectedLocation === "dubai" ? "default" : "outline"}
                  className="rounded-full"
                >
                  🇦🇪 UAE
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                Our Global Offices
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Choose your nearest office for personalized support and consultation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
              {getDisplayedLocations().map((location, index) => (
                <motion.div
                  key={`${location.city}-${location.country}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className={`h-3 bg-gradient-to-r ${location.gradient}`}></div>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-800 mb-1">{location.city}</h3>
                          <p className="text-slate-600 font-medium">{location.country}</p>
                        </div>
                        <div className="text-5xl">{location.flag}</div>
                      </div>

                      <div className="space-y-5">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-blue-600 mt-1 shrink-0" />
                          <p className="text-slate-700 leading-relaxed">{location.address}</p>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-green-600 shrink-0" />
                          <a
                            href={`tel:${location.phone}`}
                            className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
                          >
                            {location.phone}
                          </a>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-purple-600 shrink-0" />
                          <a
                            href={`mailto:${location.email}`}
                            className="text-slate-700 hover:text-blue-600 transition-colors"
                          >
                            {location.email}
                          </a>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-orange-600 shrink-0" />
                          <p className="text-slate-700">{location.timezone}</p>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-200">
                        <Button
                          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              preferredLocation: `${location.city}, ${location.country}`,
                            }))
                          }
                        >
                          Contact This Office
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2 bg-gradient-to-br from-blue-700 to-blue-900 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                    <p className="mb-8">Fill out the form and our team will get back to you within 24 hours.</p>

                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Globe className="h-6 w-6 mr-4 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Global Presence</h4>
                          <p className="text-blue-100">India, USA & UAE Operations</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Clock className="h-6 w-6 mr-4 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">24/7 Support</h4>
                          <p className="text-blue-100">Round-the-clock assistance</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Mail className="h-6 w-6 mr-4 shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold mb-1">Quick Response</h4>
                          <p className="text-blue-100">Response within 24 hours</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 p-8">
                    <h3 className="text-2xl font-bold mb-6 text-slate-800">Send Us a Message</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                            className="border-slate-300 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            required
                            className="border-slate-300 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 555 123 4567"
                            className="border-slate-300 focus:border-blue-500"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Inc."
                            className="border-slate-300 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="interest">I'm interested in</Label>
                          <Select value={formData.interest} onValueChange={handleSelectChange}>
                            <SelectTrigger className="border-slate-300 focus:border-blue-500">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="cloud-migration">Cloud Migration</SelectItem>
                              <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                              <SelectItem value="it-consulting">IT Consulting</SelectItem>
                              <SelectItem value="security-services">Security Services</SelectItem>
                              <SelectItem value="ai-services">AI Services</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="preferredLocation">Preferred Office</Label>
                          <Select value={formData.preferredLocation} onValueChange={handleLocationChange}>
                            <SelectTrigger className="border-slate-300 focus:border-blue-500">
                              <SelectValue placeholder="Select preferred office" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Ranchi, India">Ranchi, India</SelectItem>
                              <SelectItem value="Irvine, USA">Irvine, USA</SelectItem>
                              <SelectItem value="Dubai, UAE">Dubai, UAE</SelectItem>
                              <SelectItem value="Any">Any Office</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          required
                          className="border-slate-300 focus:border-blue-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Please provide details about your inquiry..."
                          rows={5}
                          required
                          className="border-slate-300 focus:border-blue-500"
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </ThemeProvider>
  )
}
