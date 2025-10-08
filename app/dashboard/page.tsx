"use client"

import { Sidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { WidgetCard } from "@/components/dashboard/widget-card"
import { StatCard } from "@/components/dashboard/stat-card"
import { CircularProgress } from "@/components/dashboard/circular-progress"
import { Target, Gamepad2, Gift } from "lucide-react"

export default function DashboardPage() {
  return (
    <main className="min-h-dvh flex">
      <Sidebar />
      <section className="flex-1 min-w-0 p-4 md:p-6 lg:p-8 space-y-4">
        <DashboardHeader />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <WidgetCard title="Weekly Goal">
            <div className="flex items-center gap-3">
              <div className="rounded-lg p-2 glass">
                <Target className="size-5" />
              </div>
              <div className="text-sm">
                <div className="text-foreground/90 font-medium">5 sessions</div>
                <div className="text-muted-foreground">3 completed</div>
              </div>
            </div>
          </WidgetCard>
          <WidgetCard title="Matches Played">
            <div className="flex items-center gap-3">
              <div className="rounded-lg p-2 glass">
                <Gamepad2 className="size-5" />
              </div>
              <div className="text-sm">
                <div className="text-foreground/90 font-medium">28 this month</div>
                <div className="text-muted-foreground">↑ 12% vs last</div>
              </div>
            </div>
          </WidgetCard>
          <WidgetCard title="Rewards">
            <div className="flex items-center gap-3">
              <div className="rounded-lg p-2 glass">
                <Gift className="size-5" />
              </div>
              <div className="text-sm">
                <div className="text-foreground/90 font-medium">100 Pickles</div>
                <div className="text-muted-foreground">Redeemable</div>
              </div>
            </div>
          </WidgetCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-xl bg-neon-gradient p-4 md:p-6 glass neon-ring">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-lg md:text-xl font-semibold text-balance">Ping Pong League</h2>
                  <p className="text-sm text-muted-foreground">
                    Join weekly games, improve your skills, and earn rewards.
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm">
                  <span className="px-3 py-1 rounded-full glass">Quick Play</span>
                  <span className="px-3 py-1 rounded-full glass">Find Matches</span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                <StatCard title="Games" value="350" />
                <StatCard title="Win Rate" value="62%" />
                <StatCard title="Elo" value="1340" />
                <StatCard title="Pickles" value="100" ring />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <WidgetCard title="My Stats">
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-center justify-between">
                    <span>Matches this month</span>
                    <span>14</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Aces</span>
                    <span>23</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Longest Rally</span>
                    <span>32</span>
                  </li>
                </ul>
              </WidgetCard>

              <WidgetCard title="Skill Progress">
                <div className="flex items-center gap-6">
                  <CircularProgress value={72} label="Serving" />
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Backhand</span>
                      <span>64%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Footwork</span>
                      <span>58%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Consistency</span>
                      <span>81%</span>
                    </div>
                  </div>
                </div>
              </WidgetCard>
            </div>
          </div>
          <div className="space-y-4">
            <WidgetCard title="Weekly Leaderboard">
              <ul className="space-y-3 text-sm">
                {["Simone", "Thiago", "Harper", "Ava", "Mia"].map((p, i) => (
                  <li key={p} className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      {i + 1}. {p}
                    </span>
                    <span className="px-2 py-0.5 rounded glass">Elo {1400 - i * 12}</span>
                  </li>
                ))}
              </ul>
            </WidgetCard>
            <WidgetCard title="Upcoming Events">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center justify-between">
                  <span>Club Open</span>
                  <span>Fri</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Evening Ladder</span>
                  <span>Sun</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>City Tournament</span>
                  <span>Next Tue</span>
                </li>
              </ul>
            </WidgetCard>
            <WidgetCard title="Nearby Courts">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Maple Run Tennis Club</li>
                <li>Harbor Sports Center</li>
                <li>Bayview Courts</li>
              </ul>
            </WidgetCard>
          </div>
        </div>
      </section>
    </main>
  )
}
