chcp 65001
@echo off
setlocal
title "开始提交github"
:: 配置用户信息
git config user.name "usernameisregistered"
git config user.email "liming_longxi@163.com"
 
:: 添加所有变更到暂存区
git add .
git commit -m "[modify]更新内容"
git push gitlab
title "开始提交gitlab"

git config user.name "liming"
git config user.email "liming_longxi@163.com"
:: 推送到远程仓库
git push origin
git push github
 
:: 清理环境变量git
endlocal