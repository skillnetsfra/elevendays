'use strict';
var server  = require('server');
server.get('GetRegistrationForm',function(req,res,next){
    var actionUrl = dw.web.URLUtils.url('BooksManagement-SubmitRegistration'); ​
    var bookRegistrationForm=server.forms.getForm("bookRegistration"); ​
    bookRegistrationForm.clear(); ​
    var formData = {
    actionUrl: actionUrl, ​
    bookRegistrationForm: bookRegistrationForm,
    httpMethod : "POST"
    }
    res.render('/book/registrationForm',formData);
    next();////
});

server.post('SubmitRegistration',function(req,res,next){
  var bookRegistrationForm=server.forms.getForm("bookRegistration"); ​
  var submittedData = {
      bookName: bookRegistrationForm.bookName.htmlValue, ​
      authorName: bookRegistrationForm.authorName.htmlValue,
      publicationYear : bookRegistrationForm.publicationYear.htmlValue,
      genre : bookRegistrationForm.genre.htmlValue
  }

  res.setViewData(submittedData);
  res.render('/book/registrationSuccess');
  next();

});
module.exports = server.exports();