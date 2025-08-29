"use client"

import { LucideArchive as BezierCurve, ImageIcon, Layers, Palette, PenTool, Shapes } from "lucide-react"

export default function FloatingGraphics() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle dotted grid that adapts to theme */}
      <div className="absolute inset-0 bg-dot-grid opacity-30 dark:opacity-20" />

      {/* Subtle floating icons, staggered timings; brand-aware via text-primary */}
      <PenTool
        className="absolute left-6 top-24 md:left-24 md:top-24 w-8 h-8 md:w-10 md:h-10 text-primary/40 animate-float-y"
        style={{ animationDuration: "12s", animationDelay: "0.4s" }}
      />
      <BezierCurve
        className="absolute right-8 top-36 md:right-24 md:top-36 w-8 h-8 md:w-10 md:h-10 text-foreground/20 animate-drift"
        style={{ animationDuration: "18s", animationDelay: "0.8s" }}
      />
      <Shapes
        className="absolute left-10 bottom-24 md:left-28 md:bottom-24 w-9 h-9 text-primary/30 animate-float-x"
        style={{ animationDuration: "16s", animationDelay: "0.2s" }}
      />
      <Layers
        className="absolute right-10 bottom-20 md:right-28 md:bottom-28 w-9 h-9 text-foreground/15 animate-float-y"
        style={{ animationDuration: "14s", animationDelay: "0.6s" }}
      />
      <ImageIcon
        className="absolute left-1/2 -translate-x-1/2 top-10 md:top-16 w-8 h-8 text-primary/25 animate-drift"
        style={{ animationDuration: "20s", animationDelay: "1s" }}
      />
      <Palette
        className="absolute left-1/3 bottom-10 w-8 h-8 text-foreground/15 animate-float-x"
        style={{ animationDuration: "17s", animationDelay: "0.3s" }}
      />
    </div>
  )
}
