"use client"

import { useEffect, useState } from "react"
import { Paintbrush } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const showTimer = setTimeout(() => setHidden(true), 3000)
    if (document.readyState === "complete") setHidden(true)
    else window.addEventListener("load", () => setHidden(true), { once: true })
    return () => clearTimeout(showTimer)
  }, [])

  return (
    <div
      aria-hidden={hidden}
      className={cn(
        "fixed inset-0 z-50 grid place-items-center bg-background transition-opacity duration-500 preloader",
        hidden && "pointer-events-none opacity-0",
      )}
    >
      <div className="brush-wrap text-primary">
        {/* Stroke being drawn */}
        <svg width="320" height="90" viewBox="0 0 320 90" role="img" aria-label="Loading" className="block">
          <path
            className="brush-stroke"
            d="M10 60 C 70 20, 140 100, 200 60 S 300 40, 310 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Moving brush head */}
        <div className="brush-head" aria-hidden>
          <Paintbrush className="h-7 w-7" />
        </div>

        <p className="mt-4 text-sm text-foreground/70 text-center">Welcome to my portfolio…</p>
      </div>
    </div>
  )
}
