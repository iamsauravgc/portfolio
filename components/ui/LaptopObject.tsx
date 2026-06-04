"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { SPRING_SMOOTH, SPRING_BOUNCY } from "@/lib/animation"

export default function LaptopObject() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), SPRING_SMOOTH)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), SPRING_SMOOTH)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      data-cursor="link"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, ...SPRING_BOUNCY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "absolute",
        top: "6%",
        right: "4%",
        rotate: "6deg",
        pointerEvents: "auto",
        cursor: "none",
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformPerspective: 800,
          transformStyle: "preserve-3d",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Screen */}
        <div
          style={{
            width: "160px",
            height: "104px",
            borderRadius: "8px 8px 0 0",
            border: `1px solid ${hovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)"}`,
            backgroundColor: "var(--color-bg-elevated)",
            padding: "8px",
            transition: "border-color 0.3s ease",
            boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.15)" : "none",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "4px",
              backgroundColor: "var(--color-bg-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid var(--color-border)",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "var(--color-nothing-blue)",
              }}
            >
              {hovered ? "> hello, world_" : "> npm run dev"}
            </span>
          </div>
        </div>

        {/* Hinge */}
        <div
          style={{
            width: "160px",
            height: "3px",
            backgroundColor: "var(--color-bg-subtle)",
            borderLeft: "1px solid var(--color-border)",
            borderRight: "1px solid var(--color-border)",
          }}
        />

        {/* Base */}
        <div
          style={{
            width: "160px",
            height: "8px",
            borderRadius: "0 0 6px 6px",
            backgroundColor: "var(--color-bg-elevated)",
            border: "1px solid var(--color-border)",
            borderTop: "none",
          }}
        />

        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "8px",
            color: "var(--color-text-muted)",
            letterSpacing: "0.2em",
            marginTop: "6px",
            textTransform: "uppercase",
          }}
        >
          Acer Nitro
        </span>
      </motion.div>
    </motion.div>
  )
}