// components/ui/brush-stroke.tsx
import { cn } from "@/lib/utils"

export function BrushStroke({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 250 40"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none", className)}
      preserveAspectRatio="none"
    >
      <path
        d="M5 20 
           Q 40 5, 80 18 
           T 150 22 
           Q 190 35, 245 20
           L 245 35 
           Q 190 30, 150 35 
           T 80 28 
           Q 40 32, 5 35 Z"
        fill="currentColor"
        opacity="0.35"
      />
    </svg>
  )
}
