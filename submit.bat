@echo off
setlocal
 
:: 配置用户信息
git config user.name "liming"
git config user.email "liming_longxi@163.com"
 
:: 添加所有变更到暂存区
git add .
 
:: 提交变更，其中"%*"是批处理参数，可以在调用批处理时传入提交信息
git commit -m "[modify]更新内容"
 
git pull github
git pull gitlab
git pull origin

:: 推送到远程仓库
git push github
git push gitlab
git push origin
 
:: 清理环境变量
endlocal