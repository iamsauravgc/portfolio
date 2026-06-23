"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { SPRING_SNAPPY } from "@/lib/animation"

export default function CamObject() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playShutter = async () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      try { await audioRef.current.play() } catch {}
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2, ...SPRING_SNAPPY }}
      style={{
        position: "absolute",
        bottom: "0%",
        left: "20%",
        zIndex: 6,
      }}
    >
      <div
        style={{
          rotate: "-8deg",
          width: "150px",
          animation: "float3 8s ease-in-out infinite",
        }}
      >
        <motion.div
          onMouseEnter={playShutter}
          whileHover={{ x: 8, y: -6, rotate: -90, scale: 1.06 }}
          style={{
            pointerEvents: "auto",
            cursor: "none",
          }}
        >
          <audio ref={audioRef} src="/sounds/camera-click.mp3" preload="auto" />
          <Image
            src="/images/cam.png"
            alt="Nikon Coolpix"
            width={150}
            height={190}
            style={{ width: "100%", height: "auto", objectFit: "contain", display: "block" }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
