export function StatCard({ title, value, ring = false }: { title: string; value: string; ring?: boolean }) {
  return (
    <div className={`rounded-xl p-3 glass ${ring ? "neon-ring" : ""}`}>
      <div className="text-xs text-muted-foreground">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  )
}
