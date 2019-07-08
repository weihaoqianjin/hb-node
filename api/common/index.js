let config = require('./config').log
let log4js = require('log4js');
log4js.configure({
    appenders: {
      BASIC: { type: 'stdout', layout: {
        type: 'pattern',
        pattern: '%[[%c %d{yyyy-MM-dd hh:mm:ss} %p] [%X{project}] %m%n%]'
      }},
      MAIN: {
        type: 'datefile',
        filename: config.path +　'/main/main',
        pattern: '.yyyy-MM-dd.log',
        alwaysIncludePattern: true,
        layout: {
            type: 'pattern',
            pattern: '[%d{yyyy-MM-dd hh:mm:ss} %p] [%X{project}] %m%n'
        }
      }
    },
    categories: {
        default: { appenders: ['BASIC'], level: 'info', enableCallStack: true },
        MAIN: {appenders: ['MAIN'], level: 'info', enableCallStack: true}
    }
  });
const logger = log4js.getLogger('MAIN');
logger.addContext('project', 'MAIN')