const { Schema, model } = require('mongoose');

const Log = new Schema({
    Description: String,
    Detail: []
}, {
        timestamps: true
    });

module.exports = model('Log', Log);