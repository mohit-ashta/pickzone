"use client"

import { Sidebar } from "@/components/dashboard/sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { WidgetCard } from "@/components/dashboard/widget-card"
import { StatCard } from "@/components/dashboard/stat-card"
import { CircularProgress } from "@/components/dashboard/circular-progress"
import { DashboardFooter } from "@/components/dashboard/footer"
import { Target, Gamepad2, Gift } from "lucide-react"
import { WEEKLY_LEADERBOARD } from "@/lib/leaderboard"
import { PLAYER_STATS, SKILL_PROGRESS } from "@/lib/stats"
import { UPCOMING_EVENTS } from "@/lib/events"

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
                <StatCard title="Games" value={String(PLAYER_STATS.gamesPlayed)} />
                <StatCard title="Win Rate" value={`${PLAYER_STATS.winRate}%`} />
                <StatCard title="Elo" value={String(PLAYER_STATS.elo)} />
                <StatCard title="Pickles" value={String(PLAYER_STATS.pickles)} ring />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <WidgetCard title="My Stats">
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-center justify-between">
                    <span>Matches this month</span>
                    <span>{PLAYER_STATS.matchesThisMonth}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Aces</span>
                    <span>{PLAYER_STATS.aces}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Longest Rally</span>
                    <span>{PLAYER_STATS.longestRally}</span>
                  </li>
                </ul>
              </WidgetCard>

              <WidgetCard title="Skill Progress">
                <div className="flex items-center gap-6">
                  <CircularProgress value={SKILL_PROGRESS.serving} label="Serving" />
                  <div className="grid gap-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Backhand</span>
                      <span>{SKILL_PROGRESS.backhand}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Footwork</span>
                      <span>{SKILL_PROGRESS.footwork}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Consistency</span>
                      <span>{SKILL_PROGRESS.consistency}%</span>
                    </div>
                  </div>
                </div>
              </WidgetCard>
            </div>
          </div>
          <div className="space-y-4">
            <WidgetCard title="Weekly Leaderboard">
              <ul className="space-y-3 text-sm">
                {WEEKLY_LEADERBOARD.map((p, i) => (
                  <li key={p.id} className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      {i + 1}. {p.name}
                    </span>
                    <span className="px-2 py-0.5 rounded glass">Elo {p.elo}</span>
                  </li>
                ))}
              </ul>
            </WidgetCard>
            <WidgetCard title="Upcoming Events">
              <ul className="space-y-3 text-sm text-muted-foreground">
                {UPCOMING_EVENTS.map((event) => (
                  <li key={event.name} className="flex items-center justify-between">
                    <span>{event.name}</span>
                    <span>{event.day}</span>
                  </li>
                ))}
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
        <DashboardFooter />
      </section>
    </main>
  )
}
