let gfunc = require('./gfunc.js')
module.exports = {
    'login': {
        id: 'login',
        type: 'json',
        forwardUrl: '',
        logger: true,
        enter (req, res) {
            return {}
        },
        output (req, res, next) {
            let menuList = []
            for (let i = 1; i < 60; i++) {
                menuList.push(i)
            }
            return {
                code: 0,
                menuList
            }
        }
    }
}