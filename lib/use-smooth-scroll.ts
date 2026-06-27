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

    let lastScroll = Date.now()
    const onScroll = () => { lastScroll = Date.now() }
    window.addEventListener("scroll", onScroll, { passive: true })

    let rafId: number
    const raf = (time: number) => {
      if (Date.now() - lastScroll < 3000) {
        lenis.raf(time)
      }
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener("load", refresh)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      window.removeEventListener("load", refresh)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])
}
