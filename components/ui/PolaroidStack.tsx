"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_BOUNCY, SPRING_SNAPPY } from "@/lib/animation"

const PHOTOS = [
  { src: "/images/sunset.jpg",     label: "Nagarkot",      rotate: -9, top: "6%",  left: "6%",  width: 110 },
  { src: "/images/nature.jpg",     label: "Monsoon hills", rotate: 6,  top: "4%",  left: "44%", width: 108 },
  { src: "/images/streets.jpg",    label: "New Road, KTM", rotate: -5, top: "36%", left: "3%",  width: 105 },
  { src: "/images/weather.jpg",    label: "Jacaranda",     rotate: 7,  top: "33%", left: "43%", width: 110 },
  { src: "/images/flower.jpg",     label: "Saayapatri",    rotate: -7, top: "64%", left: "7%",  width: 102 },
  { src: "/images/art.jpg",        label: "Taragaon",      rotate: 5,  top: "62%", left: "45%", width: 106 },
]

export default function PolaroidCard() {
  const [hovered, setHovered] = useState<number | null>(null)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
      animate={{ opacity: 1, scale: 1, rotate: 4 }}
      transition={{ delay: 1.6, ...SPRING_BOUNCY }}
      whileHover={{ scale: 1.02, rotate: 2 }}
      style={{
        position: "absolute",
        bottom: "2%",
        right: "2%",
        width: "300px",
        height: "390px",
        pointerEvents: "auto",
        animation: "float4 12s ease-in-out infinite",
        backgroundColor: "#C4A882",
        backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px),repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(0,0,0,0.02) 2px,rgba(0,0,0,0.02) 4px)`,
        borderRadius: "2px",
        padding: "14px",
        boxShadow: "0 12px 48px rgba(26,24,20,0.25), inset 0 1px 0 rgba(255,255,255,0.15)",
        cursor: "none",
        zIndex: 5,
      }}
    >
      <p style={{
        position: "absolute", bottom: "12px", right: "16px",
        fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: "11px",
        color: "rgba(60,40,20,0.45)", zIndex: 1,
      }}>capture moments</p>

      {PHOTOS.map((photo, i) => (
        <motion.div
          key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          whileHover={{ scale: 1.12, zIndex: 30, rotate: 0 }}
          transition={SPRING_SNAPPY}
          style={{
            position: "absolute", top: photo.top, left: photo.left,
            width: `${photo.width}px`, rotate: `${photo.rotate}deg`,
            zIndex: hovered === i ? 30 : i + 2,
            backgroundColor: "#FEFCF7", padding: "5px 5px 20px 5px",
            boxShadow: hovered === i ? "0 10px 24px rgba(26,24,20,0.35)" : "0 4px 12px rgba(26,24,20,0.2)",
          }}
        >
          <div style={{ width: "100%", aspectRatio: "1/1", overflow: "hidden", position: "relative" }}>
            <Image src={photo.src} alt={photo.label} fill style={{ objectFit: "cover" }} sizes="110px" />
          </div>
          <p style={{
            fontFamily: "var(--font-mono)", fontSize: "7px", color: "rgba(60,40,20,0.55)",
            textAlign: "center", marginTop: "3px", letterSpacing: "0.04em",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}>{photo.label}</p>
        </motion.div>
      ))}
    </motion.div>
  )
}