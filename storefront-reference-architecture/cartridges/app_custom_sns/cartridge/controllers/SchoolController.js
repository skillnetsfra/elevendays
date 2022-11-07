'use strict';
var server  = require('server');
server.get('RegisterStudent',function(req,res,next){
    var actionUrl = dw.web.URLUtils.url('SchoolController-CreateStudent'); ​
    var studentRegistrationForm =server.forms.getForm("studentRegistration"); 
    ​
    studentRegistrationForm.clear(); ​
    var formData = {
        actionUrl: actionUrl, ​
        studentRegistrationForm: studentRegistrationForm,
        httpMethod : "POST"
        

    }
    res.render('/school/registerStudent',formData);
    next();////
});

server.post('CreateStudent',function(req,res,next){
    
    var studentRegistrationForm =server.forms.getForm("studentRegistration"); ​
    res.render('/school/studentRegistrationSuccess',studentRegistrationForm);
    next();////
});

module.exports = server.exports();