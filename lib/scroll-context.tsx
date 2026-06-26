"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useScroll, type MotionValue } from "framer-motion"

interface ScrollContextType {
  scrollY: MotionValue<number>
}

const ScrollContext = createContext<ScrollContextType | null>(null)

export function ScrollProvider({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll()
  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  )
}

export function useScrollY(): MotionValue<number> {
  const ctx = useContext(ScrollContext)
  if (!ctx) {
    throw new Error("useScrollY must be used within a ScrollProvider")
  }
  return ctx.scrollY
}
