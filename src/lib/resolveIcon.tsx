import * as Icons from "lucide-react"
import type { LucideIcon } from "lucide-react"
import type { JSX } from "react"

export function resolveIcon(name: string): JSX.Element | null {
  const Icon = name && (Icons as unknown as Record<string, LucideIcon>)[name]
  return Icon ? <Icon className="w-4 h-4" /> : null
}