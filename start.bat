chcp 65001
@echo off
call gulp general
call gulp parseBook
call gulp parseBlog
cd ./frontend
call npm run build
cd ../
call gulp move 
cd ./frontend
call npm run preview
pause