"use client"

import { useRef, useEffect, useCallback } from "react"

export function useSoundEffect(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(src)
    audio.preload = "auto"
    audioRef.current = audio
    return () => {
      audio.pause()
      audio.src = ""
    }
  }, [src])

  const play = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = 0
    try {
      await audio.play()
    } catch {}
  }, [])

  return play
}
