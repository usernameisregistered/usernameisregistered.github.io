# passerby

（得鹿梦鱼）passerby是一个快速、简洁且高效的博客框架。passerby使用Markdown编写文档，并可以将转化为html,在gitlab和github上发布

## 使用

修改`data`目录下certificate.json的文件内容
修改`data`base.json的文件内容
执行命令`npm run general`生成静态页面
执行命令`npm run preview`预览静态页面

## git地址

+ [github](https://github.com/usernameisregistered/usernameisregistered.github.io.git)
+ [gitlab](https://gitlab.com/liming_longxi/liming_longxi.gitlab.io.git)
+ [gitee](https://gitee.com/usernameisregistered/usernameisregistered.gitee.io.git)

## page地址

+ [github](https://usernameisregistered.github.io/)
+ [gitee](https://liming_longxi.gitlab.io/)

## 新增node自动获取飞书的相关信息

+ [前端面试题]

### 安装sdk

`npm install @larksuiteoapi/node-sdk`

### 邮件发送

1. 修改`job/feishu/sendEmail.js`文件的`emailAddress`的内容
2. 执行命令 `npm run export` 获取最新的面试题记录
3. 执行命令 `node job/feishu/sendEmail.js`

注意：**代码无法自动获取token**
