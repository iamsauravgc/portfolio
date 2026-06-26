"use client"

import { useRef, useCallback } from "react"

export function useSoundEffect(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const loadedRef = useRef(false)

  const play = useCallback(async () => {
    if (src.includes("..") || !src.startsWith("/sounds/")) {
      return
    }
    if (!audioRef.current) {
      const audio = new Audio(src)
      audio.preload = "none"
      audioRef.current = audio
    }
    const audio = audioRef.current
    if (!loadedRef.current) {
      audio.load()
      loadedRef.current = true
    }
    audio.currentTime = 0
    try {
      await audio.play()
    } catch {}
  }, [src])

  return play
}
