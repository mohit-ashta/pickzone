import { APP_NAME } from "@/lib/constants"

export function DashboardFooter() {
  return (
    <footer className="text-center text-xs text-muted-foreground py-4">
      {APP_NAME} &copy; {new Date().getFullYear()}
    </footer>
  )
}
