const db = require('../config/database.json');
const Cube = require('../models/Cube');
const fs = require('fs');
const path = require('path');

function getCubes(search, from, to) {
    if (!search) search = '';
    if (!from) from = 1;
    if (!to) to = 6;
    return db.cubes.filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
        .filter(x => x.difficultyLevel >= from)
        .filter(x => x.difficultyLevel <= to);
}

function getById(id) {
    return db.cubes.find(x => x.id == id);
}

function createCube({ name, description, imageUrl, difficultyLevel }) {
    const id = db.cubes[db.cubes.length - 1].id + 1;
    const cube = new Cube(id, name, description, imageUrl, difficultyLevel);

    db.cubes.push(cube);

    const jsonData = JSON.stringify(db, null, 2);

    fs.writeFileSync(path.resolve(__dirname, '../config/database.json'), jsonData);

}

module.exports = {
    getCubes,
    getById,
    createCube
}