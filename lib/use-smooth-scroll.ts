"use client"

import { useEffect } from "react"
import Lenis from "lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on("scroll", ScrollTrigger.update)

    let rafId: number | null = null

    const tick = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", refresh)

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      lenis.destroy()
      window.removeEventListener("load", refresh)
    }
  }, [])
}
