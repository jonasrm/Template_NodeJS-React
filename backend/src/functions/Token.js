const jwt = require('jsonwebtoken');
const config = require('../config/Parameters');

module.exports = {
    generateToken: function (params = {}) {
        return jwt.sign(params, config.auth_secret, {
            expiresIn: 86400 //seconds = 1 day
        });
    }
}