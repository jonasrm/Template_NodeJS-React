const { audit } = require('../config/Parameters')
const Log = require('../models/LogModel');

module.exports = (req, res, next) => {

    if (!audit) return next();

    try {
        Log.create({
            Description: 'Audit',
            Detail: [
                {
                    IP: req.connection.remoteAddress,
                    header: req.headers
                }
            ]
        });
    } catch (e) {
        console.error(e);
    } finally {
        return next();
    }
}