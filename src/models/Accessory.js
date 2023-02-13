const { Schema, model, Types } = require('mongoose');
const validator = require('node-mongoose-validator');

const accessorySchema = new Schema({
    name: { type: String, required: true },
    imageUrl: { type: String, required: true, validate: validator.isURL({ message: 'Must be a Valid URL', protocols: ['http', 'https'], require_tld: true, require_protocol: true }) },
    description: { type: String, require: true, max: [100, 'The description can be maximum 100 characters.'] },
    cubes: { type: [Types.ObjectId], default: [], rel: 'Cube' }
})