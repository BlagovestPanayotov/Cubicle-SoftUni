const Cube = require('../models/Cube');
const User = require('../models/User');
const { getAccessoryById } = require('./accessoryService');

function getCubes(search, from, to) {
    // if (!search) search = '';
    // if (!from) from = 1;
    // if (!to) to = 6;
    // return db.cubes.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
    //     .filter(x => x.difficultyLevel >= from)
    //     .filter(x => x.difficultyLevel <= to);

    return Cube.find({});
}

function getById(id) {
    return Cube.findById(id).populate('accessories');
}

function editById(id, cube) {
    return Cube.findByIdAndUpdate(id, cube, { runValidators: true });
}

function deleteById(id) {
    return Cube.findByIdAndDelete(id);
}

async function createCube({ name, description, imageUrl, difficultyLevel, owner }, userId) {
    const cube = await Cube.create({ name, description, imageUrl, difficultyLevel, owner });
    await User.findByIdAndUpdate(userId, { $push: { cubes: cube._id } });
    return cube;
}

async function attachAccessory(cubeId, accessoriesId) {
    const [cube, accessory] = await Promise.all([getById(cubeId), getAccessoryById(accessoriesId)]);
    cube.accessories.push(accessory);
    accessory.cubes.push(cube);
    return Promise.all([cube.save(), accessory.save()]);
}

module.exports = {
    getCubes,
    getById,
    createCube,
    attachAccessory,
    editById,
    deleteById
};