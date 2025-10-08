"use client"

import { cn } from "@/lib/utils"
import { Home, Calendar, Trophy, User, Settings, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const items = [
  { href: "/dashboard", icon: Home, label: "Home" },
  { href: "#events", icon: Calendar, label: "Events" },
  { href: "#leaderboard", icon: Trophy, label: "Leaderboard" },
  { href: "#profile", icon: User, label: "Profile" },
  { href: "#settings", icon: Settings, label: "Settings" },
]

export function Sidebar() {
  const [expanded, setExpanded] = useState(true)
  return (
    <aside
      className={cn(
        "hidden sm:flex flex-col gap-2 p-3 border-r border-border transition-[width] duration-200",
        expanded ? "w-56" : "w-16",
      )}
    >
      <button
        aria-label="Toggle menu"
        className="rounded-lg p-2 glass hover:neon-ring flex items-center gap-3"
        onClick={() => setExpanded((v) => !v)}
      >
        <Menu className="size-5 shrink-0" />
        {expanded && <span className="text-sm font-medium">Picklezone</span>}
      </button>

      <nav className="flex-1 flex flex-col gap-1">
        {items.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={cn(
              "rounded-lg glass hover:neon-ring px-2 py-2 flex items-center gap-3",
              expanded ? "justify-start" : "justify-center",
            )}
            aria-label={label}
          >
            <Icon className="size-5 shrink-0" />
            {expanded && <span className="text-sm">{label}</span>}
          </Link>
        ))}
      </nav>

      <div className={cn("text-xs text-center text-muted-foreground", expanded ? "px-2" : "")}>
        {expanded ? "v0 Demo" : "v0"}
      </div>
    </aside>
  )
}
