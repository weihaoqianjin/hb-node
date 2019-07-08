 let api = {
    getHomeData: {
        type: 'json',
        forwardUrl: '/tctDoorApp?actn=checkDoorStatus',
        enter (req, res) {
            return {'name': 'code', 'age': 19}
        },
        output (req, res) {
            return {'name': 'dick', 'age': 1551}
        }
    }
 }
module.exports = api