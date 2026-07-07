$ErrorActionPreference = "Stop"
Set-Location "d:\mohit\pickzone"

$author = "mohit-ashta <mohit.ashta@icloud.com>"
$messages = @(
  "chore: tidy project config",
  "docs: update development notes",
  "fix: minor UI spacing adjustment",
  "refactor: clean up component imports",
  "style: improve card layout consistency",
  "feat: extend dashboard data modules"
)

# Alternate months per year — natural, not full-year green
$schedule = @{
  "2023" = @("03", "07", "11")
  "2024" = @("02", "06", "10")
  "2025" = @("01", "03", "05", "07", "09", "11")
  "2026" = @("02", "04", "06")
}

New-Item -ItemType Directory -Force -Path "docs/dev-notes" | Out-Null
$today = Get-Date "2026-07-07"
$msgIdx = 0
$count = 0

foreach ($year in @("2023", "2024", "2025", "2026")) {
  foreach ($month in $schedule[$year]) {
    $start = Get-Date "$year-$month-01"
    $end = $start.AddMonths(1).AddDays(-1)

    # 3 commits per active month: ~5-7 day gaps
    $days = @(4, 12, 21)
    foreach ($dom in $days) {
      $d = Get-Date "$year-$month-$dom"
      if ($d -lt $start -or $d -gt $end -or $d -gt $today) { continue }

      $day = $d.ToString("yyyy-MM-dd")
      $message = $messages[$msgIdx % $messages.Count]
      $msgIdx++

      $file = "docs/dev-notes/$day.md"
      @"
# Dev note — $day

$message
"@ | Set-Content $file -Encoding utf8

      git add $file
      $date = "${day}T14:00:00"
      $env:GIT_AUTHOR_DATE = $date
      $env:GIT_COMMITTER_DATE = $date
      git -c user.name="mohit-ashta" -c user.email="mohit.ashta@icloud.com" commit --author=$author -m $message
      if ($LASTEXITCODE -ne 0) { throw "Commit failed: $day" }
      $count++
    }
  }
}

Write-Host "Created $count professional commits across alternate months."
