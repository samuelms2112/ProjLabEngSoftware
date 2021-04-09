
@echo off
For /f "tokens=1-2 delims=/:" %%a in ("%TIME%") do (set mytime=%%a%%b)
For /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)
echo %mydate%_%mytime%
git add .
git commit -m "Commit %mydate%_%mytime%"
git push
pause