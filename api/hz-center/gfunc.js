let getLogger = require('../../log.js')

module.exports = {
  log (req, model, type='in', level = 'info') {
    switch (type) {
      case 'in': 
        getLogger('hz-center').info('in====>', model.id, model.forwardUrl,'===>', JSON.stringify(req.body || req.query))
        break
      case 'out':
        if (req.code === 200) {
          getLogger('hz-center').info('out===>', model.id, model.forwardUrl,'===>', JSON.stringify(req))
        } else {
          getLogger('hz-center').error('out===>', model.id, model.forwardUrl,'===>', JSON.stringify(req))
        }
        break
      default:
        if (level === 'info') {
          getLogger('hz-center').info(req)
        } else if (level === 'error') {
          getLogger('hz-center').error(req)
        }
    }
  }
}