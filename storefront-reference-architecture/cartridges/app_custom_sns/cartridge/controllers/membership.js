'use strict';

var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.get('Show', server.middleware.https, function (req, res, next) {
    var actionUrl = URLUtils.url('membership-Submit');
    var membershipForm = server.forms.getForm('membershipform');
    membershipForm.clear();
    // membershipForm = {};
    // membershipForm.valid = true; //trying hardcore true
    res.render('membership/addMembership', {
        actionUrl: actionUrl,
        membershipForm: membershipForm
    });
next();
    // YV Note: For URL https://<server>/on/demandware.store/Sites-RefArch-Site/default/Membership-Show
});

server.post('Submit', function (req, res, next) {
    var firstname = req.form.firstname;
    var lastname = req.form.lastname;

    res.render('membership/membershipStatus', {
        firstname: firstname,
        lastname: lastname,
        email :  req.form.email
    });

    next();
});

module.exports = server.exports();
