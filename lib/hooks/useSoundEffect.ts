"use client"

import { useRef, useCallback } from "react"

export function useSoundEffect(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  if (!audioRef.current && typeof window !== "undefined") {
    const audio = new Audio(src)
    audio.preload = "auto"
    audio.load()
    audioRef.current = audio
  }

  const play = useCallback(async () => {
    if (src.includes("..") || !src.startsWith("/sounds/")) {
      return
    }
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = 0
    try {
      await audio.play()
    } catch {}
  }, [src])

  return play
}
