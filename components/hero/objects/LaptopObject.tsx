"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_BOUNCY } from "@/lib/animation"

export default function LaptopObject() {
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
      transition={{ delay: 1.6, ...SPRING_BOUNCY }}
      style={{
        position: "absolute",
        top: "5%",
        right: "6%",
        rotate: "-6deg",
        width: "280px",
        animation: "float1 13s ease-in-out infinite",
        zIndex: 6,
        pointerEvents: "auto",
        cursor: "none",
      }}
    >
      <audio ref={audioRef} src="/sounds/windows.mp3" preload="auto" />
      <motion.div
        onMouseEnter={playSound}
        whileHover={{
          filter: [
            "brightness(0.3)",
            "brightness(0.7)",
            "brightness(0.35)",
            "brightness(1.15) drop-shadow(0 0 30px rgba(255,220,160,0.7)) drop-shadow(0 0 60px rgba(255,200,120,0.35))",
          ],
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        initial={{ filter: "brightness(0.3)" }}
        style={{ lineHeight: 0 }}
      >
        <Image
          src="/images/laptop.png"
          alt="Sticker laptop"
          width={280}
          height={210}
          style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
        />
      </motion.div>
    </motion.div>
  )
}
