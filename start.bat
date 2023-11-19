chcp 65001
@echo off
call gulp general
call gulp parse
cd ./frontend
call npm run build
cd ../
call gulp move 
cd ./frontend
call npm run preview
pause