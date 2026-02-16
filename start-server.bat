@echo off
cd /d "%~dp0"
echo Serving at http://localhost:8888
echo Press Ctrl+C to stop.
echo.
python -m http.server 8888
pause
