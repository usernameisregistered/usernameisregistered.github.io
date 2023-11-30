const { createServer } = require("http-server");
const path = require("path")
let serverInstance;
exports.startServer = function (port) {
    console.log("启动临时静态服务用于提供库文件调用")
    serverInstance = createServer({
        root: path.join(process.cwd(), "lib")
    })
    serverInstance.listen(port)
    console.log(`服务地址: http://localhost:${port}`)
}

exports.closeServer = function () {
    console.log("关闭临时静态服务")
    if (serverInstance) {
        serverInstance.close();
    }
}