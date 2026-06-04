"use client"

import { motion } from "framer-motion"
import { SPRING_BOUNCY } from "@/lib/animation"

export default function PolaroidStack() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.6, ...SPRING_BOUNCY }}
      whileHover="hovered"
      style={{
        position: "absolute",
        top: "26%",
        right: "5%",
        pointerEvents: "auto",
        cursor: "none",
        width: "100px",
        height: "120px",
      }}
    >
      {/* Back polaroid */}
      <motion.div
        variants={{
          hovered: {
            rotate: -14,
            x: -12,
            y: 6,
            transition: SPRING_BOUNCY,
          },
        }}
        style={{
          position: "absolute",
          width: "90px",
          height: "110px",
          backgroundColor: "rgba(245,240,232,0.9)",
          padding: "8px",
          paddingBottom: "24px",
          boxShadow: "0 4px 16px rgba(26,24,20,0.15)",
          rotate: "-6deg",
          translateX: "8px",
          translateY: "8px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "var(--color-bg-subtle)",
          }}
        />
      </motion.div>

      {/* Front polaroid */}
      <motion.div
        variants={{
          hovered: {
            rotate: 1,
            y: -8,
            transition: SPRING_BOUNCY,
          },
        }}
        style={{
          position: "absolute",
          width: "90px",
          height: "110px",
          backgroundColor: "rgba(245,240,232,0.95)",
          padding: "8px",
          paddingBottom: "24px",
          boxShadow: "0 6px 24px rgba(26,24,20,0.2)",
          rotate: "3deg",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "var(--color-bg-subtle)",
          }}
        />
      </motion.div>
    </motion.div>
  )
}