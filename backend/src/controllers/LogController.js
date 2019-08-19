const Log = require('../models/LogModel');

module.exports = {
    async index(req, res) {
        const logs = await Log.find().sort( { createdAt: -1 } );
        return res.json(logs);
    }
}