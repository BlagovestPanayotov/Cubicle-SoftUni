const Accessory = require('../models/Accessory');

function getAllAccessory() {
    return Accessory.find({});
}