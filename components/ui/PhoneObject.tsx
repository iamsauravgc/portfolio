"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SPRING_SNAPPY, SPRING_BOUNCY } from "@/lib/animation"

const GLYPH_HEIGHTS = [14, 22, 10, 26, 16, 12]

export default function PhoneObject() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      data-cursor="default"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.3, ...SPRING_BOUNCY }}
      whileHover={{ rotate: -4, scale: 1.05 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: "absolute",
        top: "8%",
        left: "4%",
        rotate: "-8deg",
        pointerEvents: "auto",
        cursor: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {/* Phone body */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "110px",
          height: "220px",
          borderRadius: "24px",
          border: `1px solid ${hovered ? "rgba(59,139,235,0.8)" : "rgba(59,139,235,0.4)"}`,
          backgroundColor: "rgba(59,139,235,0.05)",
          backdropFilter: "blur(4px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          position: "relative",
          overflow: "hidden",
          transition: "border-color 0.4s ease, box-shadow 0.4s ease",
          boxShadow: hovered
            ? "0 0 32px rgba(59,139,235,0.3), inset 0 0 16px rgba(59,139,235,0.05)"
            : "0 0 16px rgba(59,139,235,0.1)",
        }}
      >
        {/* Camera ring */}
        <div style={{ position: "relative", width: "64px", height: "64px" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              border: `1px solid ${hovered ? "rgba(59,139,235,1)" : "rgba(59,139,235,0.6)"}`,
              boxShadow: hovered ? "0 0 12px rgba(59,139,235,0.8)" : "none",
              transition: "all 0.4s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: "8px",
              borderRadius: "50%",
              border: `1px solid ${hovered ? "rgba(59,139,235,0.7)" : "rgba(59,139,235,0.3)"}`,
              transition: "all 0.4s ease",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: hovered ? "#3B8BEB" : "rgba(59,139,235,0.8)",
              boxShadow: hovered
                ? "0 0 16px rgba(59,139,235,1)"
                : "0 0 6px rgba(59,139,235,0.6)",
              transition: "all 0.4s ease",
            }}
          />
        </div>

        {/* Glyph bars */}
        <div style={{ display: "flex", gap: "3px", alignItems: "flex-end" }}>
          {GLYPH_HEIGHTS.map((h, i) => (
            <motion.div
              key={i}
              animate={hovered ? { height: h + 6 } : { height: h }}
              transition={{ ...SPRING_BOUNCY, delay: i * 0.04 }}
              style={{
                width: "2px",
                borderRadius: "1px",
                backgroundColor: hovered ? "#3B8BEB" : "rgba(59,139,235,0.25)",
                boxShadow: hovered ? "0 0 6px rgba(59,139,235,0.8)" : "none",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Nothing wordmark */}
        <span
          style={{
            position: "absolute",
            bottom: "16px",
            fontFamily: "var(--font-mono)",
            fontSize: "7px",
            letterSpacing: "0.25em",
            color: hovered ? "rgba(59,139,235,0.9)" : "rgba(59,139,235,0.5)",
            transition: "color 0.3s ease",
          }}
        >
          NOTHING
        </span>
      </motion.div>
    </motion.div>
  )
}