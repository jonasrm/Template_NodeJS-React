const mongoose = require('mongoose');
const config = require('../config/Parameters');

mongoose.connect(config.connectionString, {
    useCreateIndex: true,
    useNewUrlParser: true
}, function () {
    try {
        console.log('Start dropping...');
        mongoose.connection.db.dropDatabase();
    } catch (e) {
        console.error(e)
    }
    console.log('Finish :) and cancel program (Ctrl + C)');
    return;
});
