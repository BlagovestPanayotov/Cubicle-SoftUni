const db = require('../config/database.json');
const Cube = require('../models/Cube');

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
    return Cube.findById(id);
}

async function createCube({ name, description, imageUrl, difficultyLevel }) {
    await (await Cube.create({ name, description, imageUrl, difficultyLevel })).save();

}

module.exports = {
    getCubes,
    getById,
    createCube
}