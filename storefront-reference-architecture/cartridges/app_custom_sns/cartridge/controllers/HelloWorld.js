'use strict';
var server = require('server');


/**
 * HelloWorld-Welcome : The Account-Show endpoint will render the shopper's account page. Once a shopper logs in they will see is a dashboard that displays profile, address, payment and order information.
 * @name HelloWorld-Welcome
 * @function
 * 
 */
server.get('Hello', function (req, res, next) {
      
      
      
      Logger.getLogger('HelloWorld').debug("Inside Welcome method");
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