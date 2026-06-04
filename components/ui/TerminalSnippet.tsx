"use client"

import { motion } from "framer-motion"
import { SPRING_SNAPPY, SPRING_BOUNCY } from "@/lib/animation"

export default function TerminalSnippet() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.7, ...SPRING_BOUNCY }}
      whileHover={{ scale: 1.03 }}
      style={{
        position: "absolute",
        bottom: "16%",
        right: "8%",
        rotate: "2deg",
        pointerEvents: "auto",
        cursor: "none",
        padding: "12px 16px",
        background: "rgba(245,240,232,0.8)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid var(--color-border)",
        borderRadius: "10px",
        width: "200px",
      }}
    >
      {/* macOS dots */}
      <div style={{ display: "flex", gap: "5px", marginBottom: "10px" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-nothing-red)", opacity: 0.6 }} />
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-text-muted)", opacity: 0.4 }} />
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-text-muted)", opacity: 0.4 }} />
      </div>

      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--color-nothing-blue)",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        $ ls interests/<br />
        <span style={{ color: "var(--color-text-secondary)" }}>
          → music &nbsp;AI &nbsp;photography
        </span>
      </p>
    </motion.div>
  )
}