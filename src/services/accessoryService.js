const Accessory = require('../models/Accessory');

function getAccessory(id) {
    return Accessory.find({ _id: { $in: id } });
}

function getAccessoryById(id) {
    return Accessory.findById(id);
}

function getMissingAccessory(id) {
    return Accessory.find({ cubes: { $nin: id } });
}

function createAccessory(name, imageUrl, description) {
    return Accessory.create({ name, imageUrl, description });
}


module.exports = {
    getAccessory,
    createAccessory,
    getMissingAccessory,
    getAccessoryById
}