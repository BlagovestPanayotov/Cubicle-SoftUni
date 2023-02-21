const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    cubes: { type: [Types.ObjectId], default: [], ref: 'cubes' }
});

module.exports = model('User', userSchema);