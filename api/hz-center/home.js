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
            for (let i = 1; i < 33; i++) {
                menuList.push({id: i})
            }
            return {
                code: 200,
                menuList
            }
        }
    }
}