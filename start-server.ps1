# German Language Hub - Local server
# Double-click or run in PowerShell: .\start-server.ps1

$port = 8888
$root = $PSScriptRoot

Set-Location $root
Write-Host "Serving at http://localhost:$port" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop." -ForegroundColor Yellow
Write-Host ""
python -m http.server $port
