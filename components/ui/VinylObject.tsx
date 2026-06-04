"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SPRING_BOUNCY } from "@/lib/animation"

export default function VinylObject() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      data-cursor="vinyl"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, ...SPRING_BOUNCY }}
      whileHover={{ scale: 1.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: "absolute",
        bottom: "12%",
        left: "6%",
        rotate: "5deg",
        pointerEvents: "auto",
        cursor: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {/* Vinyl disc */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: hovered ? 1.5 : 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          width: "96px",
          height: "96px",
          borderRadius: "50%",
          backgroundColor: "#1a1814",
          border: "1px solid rgba(255,255,255,0.1)",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Grooves */}
        {[28, 36, 44].map((size) => (
          <div
            key={size}
            style={{
              position: "absolute",
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />
        ))}

        {/* Center label */}
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            backgroundColor: "#2a2520",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: hovered ? "#3B8BEB" : "rgba(59,139,235,0.7)",
              boxShadow: hovered
                ? "0 0 10px rgba(59,139,235,0.9)"
                : "0 0 4px rgba(59,139,235,0.5)",
              transition: "all 0.3s ease",
            }}
          />
        </div>
      </motion.div>

      {/* Label */}
      <motion.span
        animate={{ opacity: hovered ? 1 : 0.6 }}
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "9px",
          color: hovered ? "var(--color-nothing-blue)" : "var(--color-text-muted)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          transition: "color 0.3s ease",
        }}
      >
        Frank Ocean
      </motion.span>
    </motion.div>
  )
}