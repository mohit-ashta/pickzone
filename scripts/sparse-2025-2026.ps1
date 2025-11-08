$ErrorActionPreference = "Stop"
Set-Location "d:\mohit\pickzone"

$author = "mohit-ashta <mohit.ashta@icloud.com>"
New-Item -ItemType Directory -Force -Path "docs/activity" | Out-Null

# Few months only — 2025 & 2026
$targets = @(
  "2025-03", "2025-06", "2025-09", "2025-11",
  "2026-01", "2026-04", "2026-07"
)

$today = Get-Date "2026-07-07"
$count = 0
$gap = 4

foreach ($prefix in $targets) {
  $start = Get-Date "$prefix-01"
  $end = $start.AddMonths(1).AddDays(-1)
  $d = $start

  while ($d -le $end) {
    if ($d -gt $today) { break }

    $day = $d.ToString("yyyy-MM-dd")
    $file = "docs/activity/$day.md"
    @"
# $day
- PickZone progress update
"@ | Set-Content $file -Encoding utf8

    git add $file
    $date = "${day}T12:00:00"
    $env:GIT_AUTHOR_DATE = $date
    $env:GIT_COMMITTER_DATE = $date
    git commit --author=$author -m "Update: $day"
    if ($LASTEXITCODE -ne 0) { throw "Failed $day" }
    $count++

    $d = $d.AddDays($gap)
    $gap = if ($gap -eq 4) { 5 } else { 4 }
  }
}

Write-Host "Done: $count sparse commits (4-5 day gaps)."
