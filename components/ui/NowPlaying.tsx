"use client"

import { motion } from "framer-motion"
import { SPRING_SNAPPY } from "@/lib/animation"
import { SOCIAL } from "@/lib/constants"

const BAR_HEIGHTS = [8, 16, 6, 20, 12]

export default function NowPlaying() {
  return (
    <motion.a
      href={SOCIAL.spotify}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="listen"
      whileHover={{ scale: 1.04 }}
      transition={SPRING_SNAPPY}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
        padding: "10px 16px",
        background: "rgba(245,240,232,0.8)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid var(--color-border)",
        borderRadius: "100px",
        textDecoration: "none",
        cursor: "none",
      }}
    >
      {/* Equalizer bars */}
      <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "20px" }}>
        {BAR_HEIGHTS.map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: [`${h}px`, `${h * 1.8}px`, `${h * 0.6}px`, `${h}px`] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
            style={{
              width: "2px",
              borderRadius: "1px",
              backgroundColor: "var(--color-nothing-blue)",
              boxShadow: "0 0 4px rgba(59,139,235,0.5)",
            }}
          />
        ))}
      </div>

      {/* Text */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "9px",
            color: "var(--color-text-muted)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          now playing
        </span>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--color-text-primary)",
            lineHeight: 1,
          }}
        >
          Godspeed — Frank Ocean
        </span>
      </div>
    </motion.a>
  )
}