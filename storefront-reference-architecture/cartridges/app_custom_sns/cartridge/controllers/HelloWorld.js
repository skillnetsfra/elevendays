'use strict';
var server = require('server');


/**
 * HelloWorld-Welcome : The Account-Show endpoint will render the shopper's account page. Once a shopper logs in they will see is a dashboard that displays profile, address, payment and order information.
 * @name HelloWorld-Hello
 * @function
 * 
 */

server.get('CheckLogLevels', function (req, res, next) {
      
      var Logger = require('dw/system/Logger');
      
      // use log category root

      Logger.getRootLogger().debug("Log For log level Debug and Category Root ");
      Logger.getRootLogger().info("Log For log level Info and Category Root");
      Logger.getRootLogger().warn("Log For log level Warn and Category Root");
      Logger.getRootLogger().error("Log For log level error and Category Root");
      Logger.getRootLogger().fatal("Log For log level fatal and Category Root");

      
      //  use log Category A
      Logger.getLogger('A').debug("Log For log level Debug and Category A");
      Logger.getLogger('A').info("Log For log level Info and Category A");
      Logger.getLogger('A').warn("Log For log level Warn and Category A");
      Logger.getLogger('A').error("Log For log level error and Category A");
      Logger.getLogger('A').fatal("Log For log level fatal and Category A");

      //  use log Category B

      
      Logger.getLogger('B').debug("Log For log level Debug and Category B");
      Logger.getLogger('B').info("Log For log level Info and Category B");
      Logger.getLogger('B').warn("Log For log level Warn and Category B");
      Logger.getLogger('B').error("Log For log level error and Category B");
      Logger.getLogger('B').fatal("Log For log level fatal and Category B");

      // create Custom Log File prefix for category A
      Logger.getLogger('MyLog','A').debug("Log For log level Debug and Category A");
      Logger.getLogger('MyLog','A').info("Log For log level Info and Category A");
      Logger.getLogger('MyLog','A').warn("Log For log level Warn and Category A");
      Logger.getLogger('MyLog','A').error("Log For log level error and Category A");
      Logger.getLogger('MyLog','A').fatal("Log For log level fatal and Category A");


      res.render('/home/logLevelCheck',{'name':'soham', 'lastName':'Pingle'});
      next(); // commenting next()
});

server.get('Hello', function (req, res, next) {
      
      var Logger = require('dw/system/Logger');
      Logger.getLogger('HelloWorld').debug("Inside Welcome method");
      res.render('/home/hello',{'name':'soham', 'lastName':'Pingle'});
      next(); // commenting next()
});

server.get('Ad-Book', function (req, res, next) {
      res.setViewData({welcomeMessage :  " Welcome "+req.querystring.name +" !"});
      if(req.querystring.decorateMe!=null && req.querystring.decorateMe == 'true'){
            res.setViewData({decorate : req.querystring.decorateMe});
      }
      res.render('register/welcomeMessage');
      next(); // commenting next()
});

module.exports = server.exports();