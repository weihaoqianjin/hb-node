// // node inspect debug.js   cont 继续执行  next 下一步 watch 监视变量 exec 在调试脚本的上下文中执行表达式 list 列出n行上下文的脚本源代码
// let a = 9
// a++
// let b = 'a'
// debugger
// b++
// let c = a + b
// console.log('a:', a, 'b:', b, 'c:', c)



let express = require('express')
let app = express()
let config = require('./config')
const http = require('http');

// 发出请求。
// app.use('/static', express.static('static'))
// app.use('/api/*', callback)
// app.get('/getHomeData', function (req, res) {
//     let a = 9
//     debugger
//     console.log(a)
//     res.send('hello')
// })
// app.get('/device_heart', function (req, res) {
//     let str = {
//         "deviceCode":"HB10003216",
//         "timeStamp":"1562032105121",
//         "deviceUUID":"P1QRMPI13Z",
//         "version":"1.0.0",
//         "sign":"EF209C9343CA8C715265781876657B19"
//     }
//     str = JSON.stringify(str)
// })
app.use('/device_heart', function (req, res) {
    res.jsonp({age: 19, name: 'coe'})
    // let data = ['HB00002054', 2]
    // const options = {
    //     hostname : '172.19.226.6',
    //     port : 5524,
    //     method : 'POST',
    //     path : '/scanningApp?actn=getAppIdByDevice',
    //     headers: {
    //         claz: '["java.lang.String","java.lang.Integer"]'
    //     }
    // };
    // let result =''
    // const $http = http.request(options, function(message){
    //     message.on("data",function(chunk){
    //         result = chunk
    //     });
    //     message.on("end", function(){
    //         console.log("data", result.toString());
    //         // message.end(result)
    //     });
    // })
    // $http.write(JSON.stringify(data))
    // $http.on('error', err => {
    //     console.log(err)
    // })
    // $http.end();
})
app.listen(config.port, () => {
    console.log(`listen at port ${config.port}`)
})