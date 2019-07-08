module.exports = {
    'getOrderData': {
        id: 'getOrderData',
        type: 'json',
        forwardUrl: '/tctDoorApp?actn=checkDoorStatus',
        enter (req, res, next) {
            next()
            return {'order': 'HB29347', 'age': 19}
        },
        output (req, res, next) {
            return {'order': 'HB90344', 'age': 23}
        }
    }
}