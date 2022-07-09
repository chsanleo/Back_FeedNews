const log4js = require("log4js");

log4js.configure({
  appenders: {  error: { type: "file", filename: "log/error.log", category:"error", maxLogSize: 20480, backups: 10 },
                debug: { type: "file", filename: "log/debug.log", category:"debug", maxLogSize: 20480, backups: 10 },
                info: { type: "file", filename: "log/info.log", category:"info", maxLogSize: 20480, backups: 10 },
                app: { type: "file", filename: "log/app.log", category:"app", maxLogSize: 20480, backups: 10 }},
  categories: { debug: {appenders: ["debug"], level:"debug" },
                info: {appenders: ["info"], level:"info" },
                error: { appenders: ["error"], level: "debug" },
                default: { appenders: ["app"], level: "info" }}
});


global.loggerinfo = log4js.getLogger('info');
global.loggererror = log4js.getLogger('error'); 
global.loggerdebug = log4js.getLogger('debug'); 
global.loggerapp = log4js.getLogger('app');

//global.loggerinfo.info('This is Information Logger');
//global.loggererror.error('This is Error Logger');
//global.loggerdebug.debug('This is Debugger');