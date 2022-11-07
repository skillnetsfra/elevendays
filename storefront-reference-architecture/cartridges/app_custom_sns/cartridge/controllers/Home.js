'use strict';

/**
 * @namespace Home
 */

var server = require('server');

var base = module.superModule;
server.extend(base);

server.prepend('Message', function (req, res, next) {
    res.setViewData({name: "SOHAM" , lastName: "PRAMOD PINGLE"});
    
    var keys =[];

    for(let i = 1; i <= 100; i++){
        keys[i]=i;
    }
    res.setViewData({key_set : keys});
    res.json({key_set : keys});
    next();
});
 //server.append('Show',function(req,res,next){
   // res.setViewData({name: "Madhuri" , lastName: "Soham Pingle"});
    //res.render('home/testHome_v1');
    //next();
//});
module.exports = server.exports();