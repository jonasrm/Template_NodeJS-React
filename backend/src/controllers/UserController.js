const User = require('../models/User');
const token = require('../functions/Token');

module.exports = {

    async index(req, res) {
        try {
            const users = await User.find();
            return res.json(users);
        }
        catch (error) {
            return res.status(400).json({ error: 'Users not found' });
        }
    },
    async get(req, res) {
        try {
            const { id } = req.params;
            const user = await User.findById(id);
            if (!user) throw new Error();
            return res.json(user);
        } catch (error) {
            return res.status(400).json({ error: 'User not found' });
        }
    },
    async store(req, res) {
        try {
            const { email } = req.body;
            const userExists = await User.findOne({ email });
            if (userExists)
                return res.json(userExists);

            const user = await User.create(req.body);
            user.password = undefined; //hide password
            user.Token = await token.generateToken({ id: user.id });
            return res.json(user);
        }
        catch (error) {
            return res.status(400).json({ error: 'Registration failed' });
        }
    }

};