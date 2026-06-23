"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import PhoneObject from "@/components/hero/objects/PhoneObject"
import { VinylPlayer } from "@/components/hero/objects/VinylPlayer"
import LaptopObject from "@/components/hero/objects/LaptopObject"
import PolaroidCard from "@/components/hero/objects/PolaroidCard"
import CamObject from "@/components/hero/objects/CamObject"
import HopeObject from "@/components/hero/objects/HopeObject"

interface HeroSectionProps {
  loaderDone: boolean
}

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
  },
}

export default function HeroSection({ loaderDone }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const scrollOpacity = useTransform(scrollY, [0, 120], [1, 0])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="section-hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: "120px 40px 80px",
      }}
    >
      {/* Objects — visible on all screens, scaled on mobile */}
      {loaderDone && (
        <div className="hero-objects-wrapper">
          <PhoneObject />
          <VinylPlayer />
          <LaptopObject />
          <PolaroidCard />
          <CamObject />
          <HopeObject />
        </div>
      )}

      {/* Text content — centered */}
      {loaderDone && (
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -55%)",
            zIndex: 10,
            maxWidth: "420px",
            width: "calc(100% - 64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "20px",
            pointerEvents: "none",
          }}
        >
          {/* Handwritten greeting */}
          <motion.p
            variants={lineVariants}
            style={{
              fontFamily: "var(--font-handwritten)",
              fontSize: "clamp(20px, 3vw, 26px)",
              color: "#B5654A",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            hey there
          </motion.p>

          {/* Lead sentence */}
          <motion.p
            variants={lineVariants}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "clamp(18px, 2.5vw, 24px)",
              color: "var(--color-text-primary)",
              lineHeight: 1.5,
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            Hi, I&apos;m Saurav — I turn ideas into things you click.
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={lineVariants}
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              fontSize: "clamp(14px, 1.5vw, 16px)",
              color: "var(--color-text-muted)",
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            student · developer · maker
          </motion.p>
        </motion.div>
      )}

      {/* Scroll indicator */}
      {loaderDone && (
        <motion.div
          variants={lineVariants}
          style={{
            position: "absolute",
            bottom: "8%",
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            zIndex: 10,
            opacity: scrollOpacity,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "13px",
              color: "var(--color-text-primary)",
              letterSpacing: "0.2em",
              opacity: 0.8,
            }}
          >
            ↓ scroll
          </span>
        </motion.div>
      )}
    </section>
  )
}
