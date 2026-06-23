"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_BOUNCY } from "@/lib/animation"

export default function PolaroidCard() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playSound = async () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      try { await audioRef.current.play() } catch {}
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: 4 }}
      animate={{ opacity: 1, scale: 1, rotate: 4 }}
      transition={{ delay: 2.0, ...SPRING_BOUNCY }}
      style={{
        position: "absolute",
        bottom: "6%",
        right: "6%",
        width: "220px",
        zIndex: 5,
        animation: "float4 12s ease-in-out infinite",
        filter: "drop-shadow(0 12px 40px rgba(26,24,20,0.25))",
        pointerEvents: "auto",
        cursor: "none",
      }}
    >
      <audio ref={audioRef} src="/sounds/eject.mp3" preload="auto" />
      <div
        onMouseEnter={playSound}
        style={{ position: "relative", lineHeight: 0 }}
      >
        <motion.div
          initial={{ filter: "brightness(0.45) saturate(0.3) contrast(0.8)" }}
          whileHover={{ filter: "brightness(1) saturate(1) contrast(1)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src="/images/polaroid.png"
            alt="Polaroid"
            width={220}
            height={280}
            style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: [0.85, 0] }}
          transition={{ duration: 0.35 }}
          style={{
            position: "absolute",
            inset: 0,
            background: "#fff",
            pointerEvents: "none",
          }}
        />
      </div>
    </motion.div>
  )
}
