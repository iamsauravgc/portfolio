"use client"

import { type ReactNode } from "react"
import { useSmoothScroll } from "@/lib/use-smooth-scroll"
import { ScrollProvider } from "@/lib/scroll-context"

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useSmoothScroll()
  return <ScrollProvider>{children}</ScrollProvider>
}
