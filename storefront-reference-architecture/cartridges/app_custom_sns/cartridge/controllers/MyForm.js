'use strict';

/**
 * @namespace Home
 */

var server = require('server');
var URLUtils = require('dw/web/URLUtils');
var CustomObjectMgr = require('dw/object/CustomObjectMgr');

server.get('Load',function(req,res,next){
    var SFRAForm = server.forms.getForm("SFRAFormDef");
    SFRAForm.clear();
    var actionUrl = URLUtils.url('MyForm-Submit');
    var formData = {
        actionUrl:actionUrl
    }
    res.render('sample/myForm',formData);
    next();
});

server.post('Submit',function(req,res,next){
    var SFRAForm = server.forms.getForm("SFRAFormDef");
    var student =  CustomObjectMgr.createCustomObject("Student","ABCD_1");
         
    

    var name = req.form.nickname;
    var nickName = SFRAForm.nickname.value;
    res.render('sample/renderResult',{nickName: name});
    next();
});
module.exports = server.exports();