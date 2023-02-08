const db = require('../config/database.json');

function getCubes(name = '', from = 1, to = 6) {
    return db.cubes.filter(x => x.name.includes(name))
        .filter(x => x.difficultyLevel >= from)
        .filter(x => x.difficultyLevel <= to);
}

module.exports = {
    getCubes
}