const jwt = require('jsonwebtoken');
const config = require('../config/Parameters');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader)
        return res.status(401).json({ error: 'No token provided' });

    const parts = authHeader.split(' ');

    if (parts.length !== 2)
        return res.status(401).json({ error: 'Token error' });

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).json({ error: 'Token malformatted' });

    jwt.verify(token, config.auth_secret, (err, decoded) => {
        if (err)
            return res.status(401).json({ error: 'Token invalid' });
        
        req.userId = decoded.id;
        req.userName = decoded.name;
        return next();
    })    
}