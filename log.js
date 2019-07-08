let logConfig = require('./config').log
let log4js = require('log4js')

function getLogger (filename = 'main') {
  let configure = {
    appenders: {
      BASIC: {
        type: 'stdout',
        layout: {
          type: 'pattern',
          pattern: '%[[%c %d{yyyy-MM-dd hh:mm:ss} %p] [%X{project}] %m%n%]'
        }
      }
    },
    categories: {
        default: {
          appenders: ['BASIC'],
          level: 'info',
          enableCallStack: true
        }
    }
  }
  let PLConfig = {
    appenders: {
      type: 'datefile',
      filename: `${logConfig.dir}\\${filename}\\${filename}`,
      pattern: '.yyyy-MM-dd.log',
      alwaysIncludePattern: true,
      layout: {
          type: 'pattern',
          pattern: '[%d{yyyy-MM-dd hh:mm:ss} %p] [%X{project}] %m%n'
      }
    },
    categories: {
      appenders: [filename],
      level: 'info',
      enableCallStack: true
    }
  }
  configure.appenders[filename] = PLConfig.appenders
  configure.categories[filename] = PLConfig.categories
  log4js.configure(configure);
  const logger = log4js.getLogger(filename);
  logger.addContext('project', filename.toUpperCase())
  return logger
}

module.exports = getLogger