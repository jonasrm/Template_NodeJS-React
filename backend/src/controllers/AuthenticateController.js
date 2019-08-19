const User = require('../models/User');
const bcrypt = require('bcryptjs');
const token = require('../functions/Token');

module.exports = {

    async authenticate(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email }).select('+password');
            if (!user) {
                return res.status(400).json({ error: 'User not found' });
            }

            if (! await bcrypt.compare(password, user.password)) {
                return res.status(400).json({ error: 'Authenticate failed' });
            }

            user.password = undefined; //hide password
            const tokenValue = await token.generateToken({
                id: user.id,
                name: user.name
            });

            return res.json({
                id: user.id,
                name: user.name,
                token: tokenValue
            });
        } catch (error) {
            return res.status(400).json({ error: 'Authenticate failed' });
        }
    }

};