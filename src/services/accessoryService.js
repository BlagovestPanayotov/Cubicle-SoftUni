const Accessory = require('../models/Accessory');

function getAccessory(id) {
    return Accessory.find({});
}

module.exports = {
    getAccessory
}