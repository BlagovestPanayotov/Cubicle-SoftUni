const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true, minLength: [6, 'Password must be at least 6 characters!'] },
    roles: { type: Array, default: ['user'] },
    cubes: { type: [Types.ObjectId], default: [], ref: 'cubes' }
});

module.exports = model('User', userSchema);