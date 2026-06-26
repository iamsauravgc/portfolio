"use client"

import { useServiceWorker } from "@/lib/register-sw"

export function ServiceWorkerRegister() {
  useServiceWorker()
  return null
}
