const { Schema, model, Types } = require('mongoose');

const accessorySchema = new Schema({
    name: { type: String, required: true },
    imageUrl: {
        type: String, required: true, validate: { validator: function (value) { value.startsWith('http://') || value.startsWith('https://') }, message: 'URL not valid!'} },
        description: { type: String, require: true, max: [100, 'The description can be maximum 100 characters.'] },
        cubes: [{ type: Types.ObjectId, default: [], ref: 'Cube' }]
    });

module.exports = model('Accessory', accessorySchema);