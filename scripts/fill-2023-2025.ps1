$ErrorActionPreference = "Stop"
Set-Location "d:\mohit\pickzone"

$author = "mohit-ashta <mohit.ashta@icloud.com>"
New-Item -ItemType Directory -Force -Path "docs/activity" | Out-Null

$ranges = @(
  @{ Start = "2023-01-01"; End = "2023-12-31" },
  @{ Start = "2024-01-01"; End = "2024-12-31" },
  @{ Start = "2025-01-01"; End = "2025-12-31" }
)

$count = 0
foreach ($range in $ranges) {
  $d = Get-Date $range.Start
  $end = Get-Date $range.End
  while ($d -le $end) {
    $day = $d.ToString("yyyy-MM-dd")
    $file = "docs/activity/$day.md"
    if (-not (Test-Path $file)) {
      @"
# Activity — $day

- PickZone development log
"@ | Set-Content $file -Encoding utf8
    } else {
      Add-Content $file "`n- Logged on $day" -Encoding utf8
    }

    git add $file
    $date = "${day}T12:00:00"
    $env:GIT_AUTHOR_DATE = $date
    $env:GIT_COMMITTER_DATE = $date
    git commit --author=$author -m "Daily activity: $day"
    if ($LASTEXITCODE -ne 0) { throw "Failed: $day" }
    $count++
    if ($count % 100 -eq 0) { Write-Host "Progress: $count..." }
    $d = $d.AddDays(1)
  }
}

Write-Host "Created $count commits for 2023-2025."
