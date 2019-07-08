let config = require('./config')
let getLogger = require('./log')
module.exports = (req, res, next) => {
    let baseUrl = req.baseUrl
    let apiDir = __dirname + baseUrl.substr(0, baseUrl.lastIndexOf('/')).replace(/\//g, '\\')
    let apiId = baseUrl.substr(baseUrl.lastIndexOf('/') + 1)
    if (config.debug) delete require.cache[require.resolve(apiDir)]
    let logger = getLogger('main')
    logger.info('I am main ...')
    console.log('apiDir:', apiDir)
    let apiModel = require(apiDir)
    let api = apiModel[apiId]
    let enter = api.enter(req, res)
    let out = api.output(req, res)
    res.send(JSON.stringify(out))
}