const express = require('express');
const routes = express.Router();
const auth = require('./functions/Auth');
const log = require('./functions/Log');

//Controllers
const LogController = require('./controllers/LogController');

routes.use(log);
routes.get('/log', LogController.index);

routes.get('/', (req, res) => {
    try {
        return res.json({ message: 'Hello World!' });
    }
    catch (err) {
        return res.status(400).json({ error: 'Bad request...' });
    }

});

routes.use(auth); //above - authorization only

module.exports = routes;