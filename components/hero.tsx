"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

// Motion-enabled Button for hero animations
const MotionButton = motion(Button);

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  const [showClickAnimation, setShowClickAnimation] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => setIsVisible(true), []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setClickPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setShowClickAnimation(true);
    setTimeout(() => setShowClickAnimation(false), 700);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden text-white"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/Animatedglobe.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Semi-transparent overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Decorative motion shapes */}
      <div className="absolute inset-0 z-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05),_transparent_70%)] pointer-events-none" />
        {/* <motion.div
          className="absolute top-24 left-16 w-72 h-72 rounded-full bg-blue-300/20 blur-2xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          style={{ y: y1 }}
        /> */}
        <motion.div
          className="absolute bottom-24 right-16 w-96 h-96 rounded-full bg-white/10 blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          style={{ y: y2 }}
        />
      </div>

      {/* Hero content */}
      <motion.div
        className="container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center relative z-30"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-blue-300/30 text-blue-100 text-sm font-medium">
            Modern Deployment Solutions
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Transform Your Business with{' '}
          <span className="relative z-30">NathCorp</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl"
        >
          Cost effective, safe & personalized cloud migration and digital transformation solutions for the modern enterprise.
        </motion.p>

        {/* Animated Learn More button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <MotionButton
            size="lg"
            onClick={handleButtonClick}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            animate={{ y: [0, -6, 0], scale: [1, 1.04, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "mirror" }}
            className="group relative rounded-full bg-gradient-to-r from-blue-500 via-blue-900 to-white px-10 py-5 text-lg font-semibold text-white-200 shadow-xl ring-2 ring-transparent hover:ring-white/40 transition-all duration-300 overflow-hidden"
          >
            <Link href="/services"
            className="relative z-20 flex items-center">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
            {showClickAnimation && (
              <motion.span
                className="absolute bg-white/30 rounded-full pointer-events-none"
                initial={{ opacity: 0.8, scale: 0 }}
                animate={{ opacity: 0, scale: 5 }}
                transition={{ duration: 0.7 }}
                style={{ left: clickPosition.x, top: clickPosition.y, width: "10px", height: "10px", transformOrigin: "center center" }}
              />
            )}
          </MotionButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-blue-200/70 hover:text-white transition-colors duration-300 z-30"
        >
          {/* <span className="text-sm mb-2">Scroll to explore</span> */}
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Gradient transition into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-800 to-transparent z-20" />
    </section>
  );
}
