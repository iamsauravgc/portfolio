"use client"

import { motion } from "framer-motion"

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  direction?: "left" | "right"
}

export default function Marquee({ children, speed = 30, direction = "left" }: MarqueeProps) {
  const duration = 50 / speed

  return (
    <div style={{ overflow: "hidden", width: "100%", maskImage: "linear-gradient(90deg, transparent 0%, #000 10%, #000 90%, transparent 100%)" }}>
      <motion.div
        style={{ display: "flex", gap: "48px", whiteSpace: "nowrap", width: "fit-content" }}
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
