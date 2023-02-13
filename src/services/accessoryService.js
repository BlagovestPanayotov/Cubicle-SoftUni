const Accessory = require('../models/Accessory');

function getAccessory(id) {
    return Accessory.find({ _id: { $in: id } });
}

function getMissingAccessory(id){
    return Accessory.find({ _id: { $nin: id } });
}

function createAccessory(name, imageUrl, description) {
    return Accessory.create({ name, imageUrl, description });
}

module.exports = {
    getAccessory,
    createAccessory,
    getMissingAccessory
}