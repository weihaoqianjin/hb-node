let express = require('express')
let app = express()
let config = require('./config')
let callback = require('./callback')
let bodyParser = require('body-parser');

app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据

app.use('/static', express.static('static'))

app.use('/api/*', callback)
// app.get('/index', function (req, res) {
//     res.redirect('https://api.test.52ywy.com/?shelfCode=HB00002054&code=01145Qzi18XPIv0D9gyi1H5Rzi145Qz6&state=123')
// })

// app.get('/render', function (req, res) {
//     let html = '<h1>标题</h1>'
//     res.render(html)
// })

// app.get('/sendFile', function (req, res) {
//     res.sendFile(__dirname + '/static/info.txt')
// })
app.listen(config.port, () => {
    console.log(`listen at port ${config.port}`)
})