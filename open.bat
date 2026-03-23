@echo off
:: 1. 自动获取当前 .bat 文件所在的目录并切换过去（这步是通用性的核心！）
cd /d "%~dp0"

:: 2. 启动前端服务（新开一个黑框框跑，防止脚本卡住）
start cmd /k "npm run dev"

:: 3. 暂停 3 秒，等服务器跑起来
timeout /t 3 /nobreak > NUL

:: 4. 自动打开浏览器
start http://localhost:3000