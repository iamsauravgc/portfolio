"use client"

import { motion } from "framer-motion"
import { scaleInVariants } from "@/lib/animation"

interface BentoCardProps {
  colSpan?: 1 | 2 | 3
  children: React.ReactNode
  style?: React.CSSProperties
}

export default function BentoCard({ colSpan = 1, children, style }: BentoCardProps) {
  return (
    <motion.div
      variants={scaleInVariants}
      style={{
        gridColumn: `span ${colSpan}`,
        border: "1px solid var(--color-border)",
        borderRadius: "16px",
        padding: "24px",
        background: "var(--color-bg)",
        boxShadow: "0 1px 4px rgba(43, 37, 33, 0.05), 0 2px 8px rgba(43, 37, 33, 0.04)",
        position: "relative",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        ...style,
      }}
      whileHover={{
        boxShadow: "0 8px 28px rgba(43, 37, 33, 0.10), 0 2px 6px rgba(43, 37, 33, 0.06)",
        y: -3,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
    >
      {children}
    </motion.div>
  )
}
