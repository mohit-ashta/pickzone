"use client"

import { Input } from "@/components/ui/input"
import { Bell, Search } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">Good morning, John</h1>
        <p className="text-muted-foreground text-sm">8 streaks • Level Beginner</p>
      </div>
      <div className="flex items-center gap-2">
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input className="pl-9 glass-input" placeholder="Search" />
        </div>
        <button className="rounded-lg p-2 glass hover:neon-ring" aria-label="Notifications">
          <Bell className="size-5" />
        </button>
      </div>
    </header>
  )
}
