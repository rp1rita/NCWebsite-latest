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
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    // ---- CONFIG: tweak as needed ----
    const SPEED_PX_PER_SEC = 1000 // px per second — increase to go faster, decrease to slow down
    const RESUME_DELAY_MS = 200 // resume auto-scroll after this ms of inactivity
    // ---------------------------------

    // Duplicate logic relies on half of scrollWidth (we render logos twice)
    let rafId: number | null = null
    let lastTs = 0
    let logicalPos = el.scrollLeft // logical auto-scroll position (0..half)
    let isInteracting = false
    let resumeTimer: ReturnType<typeof setTimeout> | null = null
    let maxScroll = Math.max(1, el.scrollWidth / 2)
    let isVisible = true

    // Pointer drag helpers
    const pointer = {
      id: -1 as number,
      startX: 0,
      startScroll: 0,
    }

    // IntersectionObserver: pause when off-screen
    const io = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0]?.isIntersecting ?? true
        if (!isVisible) {
          isInteracting = true
        } else {
          scheduleResume()
        }
      },
      { threshold: 0.2 }
    )
    io.observe(el)

    // ensure we don't fight with CSS smooth scrolling
    const prevScrollBehavior = el.style.scrollBehavior
    el.style.scrollBehavior = "auto"

    const animate = (ts: number) => {
      if (!lastTs) lastTs = ts
      const dt = Math.min(100, ts - lastTs) // cap dt to avoid huge jumps
      lastTs = ts

      // update half-scroll in case resize changed sizes
      maxScroll = Math.max(1, el.scrollWidth / 2)

      if (!isInteracting && isVisible) {
        const deltaPx = (SPEED_PX_PER_SEC * dt) / 1000
        logicalPos += deltaPx
        if (logicalPos >= maxScroll) logicalPos -= maxScroll
        el.scrollLeft = logicalPos
      } else {
        // keep logical position in sync so resume is smooth
        logicalPos = el.scrollLeft % Math.max(1, maxScroll)
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    const startInteraction = () => {
      isInteracting = true
      if (resumeTimer) {
        clearTimeout(resumeTimer)
        resumeTimer = null
      }
    }

    const scheduleResume = () => {
      if (resumeTimer) clearTimeout(resumeTimer)
      resumeTimer = setTimeout(() => {
        isInteracting = false
        // sync logical position so auto-scroll resumes from user location
        logicalPos = el.scrollLeft % Math.max(1, maxScroll)
      }, RESUME_DELAY_MS)
    }

    // Pointer handlers (mouse + touch)
    const onPointerDown = (ev: PointerEvent) => {
      // Only primary button / touch
      if (ev.button && ev.button !== 0) return
      (ev.target as Element).setPointerCapture?.(ev.pointerId)
      pointer.id = ev.pointerId
      pointer.startX = ev.clientX
      pointer.startScroll = el.scrollLeft
      startInteraction()
      // prevent native image drag
      ev.preventDefault()
    }

    const onPointerMove = (ev: PointerEvent) => {
      if (pointer.id !== ev.pointerId) return
      const dx = ev.clientX - pointer.startX
      // invert: dragging right should move content left
      el.scrollLeft = pointer.startScroll - dx
      logicalPos = el.scrollLeft % Math.max(1, maxScroll)
    }

    const onPointerUp = (ev: PointerEvent) => {
      if (pointer.id !== ev.pointerId) return
      try {
        (ev.target as Element).releasePointerCapture?.(ev.pointerId)
      } catch {}
      pointer.id = -1
      scheduleResume()
    }

    // Wheel/trackpad interaction pauses and resumes
    const onWheel = () => {
      startInteraction()
      scheduleResume()
    }

    // Manual scrollbar or programmatic scroll
    const onScroll = () => {
      startInteraction()
      scheduleResume()
    }

    // Focus states (keyboard) considered interaction
    const onFocusIn = () => startInteraction()
    const onFocusOut = () => scheduleResume()

    // Attach
    el.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)
    el.addEventListener("wheel", onWheel, { passive: true })
    el.addEventListener("scroll", onScroll, { passive: true })
    el.addEventListener("focusin", onFocusIn)
    el.addEventListener("focusout", onFocusOut)

    // Cleanup
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      if (resumeTimer) clearTimeout(resumeTimer)
      io.disconnect()
      el.style.scrollBehavior = prevScrollBehavior
      el.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
      el.removeEventListener("wheel", onWheel)
      el.removeEventListener("scroll", onScroll)
      el.removeEventListener("focusin", onFocusIn)
      el.removeEventListener("focusout", onFocusOut)
    }
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
            // use overflow-x-auto to allow manual scrolling + keep keyboard accessibility
            className="flex gap-12 overflow-x-auto whitespace-nowrap cursor-grab active:cursor-grabbing"
            style={{ WebkitOverflowScrolling: "touch", userSelect: "none" }}
            role="region"
            aria-label="Client logos carousel"
            tabIndex={0}
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
                    draggable={false}
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
            {/* <a href="/industries">
              Explore Industries
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 inline" />
            </a> */}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
