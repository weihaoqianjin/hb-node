let config = require('./config')
let getLogger = require('./log')
let os = require('os')
module.exports = (req, res, next) => {
    let baseUrl = req.baseUrl
    let apiDir = ''
    let apiGfuncDir = ''
    if (os.type().toLowerCase().includes('windows')) {
        apiDir = __dirname + baseUrl.substr(0, baseUrl.lastIndexOf('/')).replace(/\//g, '\\')
        apiGfuncDir = apiDir.substring(0, apiDir.lastIndexOf('\\')) + '\\gfunc'
    } else {
        apiDir = __dirname + baseUrl.substr(0, baseUrl.lastIndexOf('/'))
        apiGfuncDir = apiDir.substring(0, apiDir.lastIndexOf('/')) + '/gfunc'
    }
    let apiId = baseUrl.substr(baseUrl.lastIndexOf('/') + 1)
    // 文件热更新
    if (config.debug) {
        delete require.cache[require.resolve(apiDir)]
        delete require.cache[require.resolve(apiGfuncDir)]
    }
    let apiModel = require(apiDir)
    let api = apiModel[apiId]
    // 获取项目公共函数
    let apiGfunc = require(apiGfuncDir)
    // 根据模块配置进行日志输出
    if (api.logger) {
        apiGfunc.log(req,api)
    }
    // node请求处理阶段
    let enter = api.enter(req, res)
    // node请求处理结束直接返回客户端
    if (enter.stop) {
        apiGfunc.log(enter,api,'out')
        return res.send(JSON.stringify(enter.result))
    }
    // 服务端请求结束处理，返回客户端
    let out = api.output(req, res)
    if (api.logger) {
        apiGfunc.log(out,api,'out')
    }
    res.send(JSON.stringify(out))
}