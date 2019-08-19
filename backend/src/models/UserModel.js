const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const User = new Schema({
    name: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        index: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    }
}, {
        timestamps: true
    });

User.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
});

module.exports = model('User', User);