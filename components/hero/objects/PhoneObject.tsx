"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_SNAPPY } from "@/lib/animation"

export default function PhoneObject() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playSound = async () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      try { await audioRef.current.play() } catch {}
    }
  }

  return (
    <motion.div
      className="floating-object"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.0, ...SPRING_SNAPPY }}
      style={{
        position: "absolute",
        top: "18%",
        left: "8%",
        rotate: "-10deg",
        width: "190px",
        animation: "float1 6s ease-in-out infinite",
        zIndex: 5,
        pointerEvents: "auto",
        cursor: "none",
      }}
    >
      <audio ref={audioRef} src="/sounds/oi.mp3" preload="auto" />
      <motion.div
        onMouseEnter={playSound}
        whileHover={{ x: [0, -8, 8, -6, 6, -4, 4, 0], rotate: [0, -5, 5, -3, 3, 0] }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src="/images/nothing.png"
          alt="Nothing Phone"
          width={190}
          height={380}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
          priority
        />
      </motion.div>
    </motion.div>
  )
}
