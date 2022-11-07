'use strict';
var server = require('server');

/**
 * HelloWorld-Welcome : The Account-Show endpoint will render the shopper's account page. Once a shopper logs in they will see is a dashboard that displays profile, address, payment and order information.
 * @name Welcome-Message
 * @function
 * 
 */
server.get('Message', function (req, res, next) {
      res.setViewData({welcomeMessage :  " Welcome "+req.querystring.name +" !"});
      res.render('welcome/welcomeMessage');
      next(); // commenting next()
});
module.exports = server.exports();