'use strict';

var csrfProtection = require('dw/web/CSRFProtection');
var CustomerMgr = require('dw/customer/CustomerMgr');
var URLUtils = require('dw/web/URLUtils');

var base = module.superModule;
server.extend(base);

/**
 * Middleware validating CSRF token
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next call in the middleware chain
 * @returns {void}
 */
function validateRequest(req, res, next) {
    if (!csrfProtection.validateRequest()) {
        CustomerMgr.logoutCustomer(false);
        res.redirect(URLUtils.url('CSRF-Fail'));
    }

    next();
}



module.exports = {
    validateRequest: validateRequest,
};
