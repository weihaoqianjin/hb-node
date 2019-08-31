let os = require('os')
module.exports = {
    port: 8008,
    debug: true,
    log: {
        dir: './log'
    },
    api: {
        dir: 'api'
    },
    isWindows () {
        return os.type().toLowerCase().includes('windows')
    }
}
