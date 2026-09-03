import Image from "next/image"
import { cn } from "@/lib/utils"

export function BrandIcon({ className }: { className?: string }) {
  return (
    <Image
      src="/brand-logo-56.png"
      alt="My Text Repeater"
      width={28}
      height={28}
      className={cn("shrink-0", className)}
      priority
    />
  )
}
