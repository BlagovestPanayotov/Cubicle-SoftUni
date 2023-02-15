const { Schema, model, Types } = require('mongoose');
const validator = require('node-mongoose-validator');



const cubeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, max: [100, 'The description can be maximum 100 characters.'] },
    imageUrl: { type: String, required: true, validate: validator.isURL({ message: 'Must be a Valid URL', protocols: ['http', 'https'], require_tld: true, require_protocol: true }) },
    difficultyLevel: { type: Number, required: true },
    accessories: [{ type: Types.ObjectId, default: [], ref: 'Accessory' }]
});


// class Cube {
//     constructor(id, name, description, imageUrl, difficultyLevel) {
//         this.id = id;
//         this.name = name;
//         this.description = description;
//         this.imageUrl = imageUrl;
//         this.difficultyLevel = Number(difficultyLevel);
//     }
// }

module.exports = model('Cube', cubeSchema);