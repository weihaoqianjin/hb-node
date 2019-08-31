let gfunc = require('./gfunc.js')
module.exports = {
    'getOrderData': {
        id: 'getOrderData',
        type: 'json',
        forwardUrl: '/tctDoorApp?actn=checkDoorStatus',
        logger: true,
        enter (req, res) {
            // return {stop: true, result: {
            //     msg: 'something is worng ....'
            // }}
            return {'order': 'HB29347', 'age': 19}
        },
        output (req, res, next) {
            return {code: 304, msg: 'java.lang.NullPointerException'}
        }
    }
}