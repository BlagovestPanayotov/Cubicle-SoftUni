function isOwner(cubeId, ownerCubes) {
    // console.log(cubeId);
    // console.log('-----------');
    // console.log(ownerCubes);
    return ownerCubes.some(x => x == cubeId);
}

function isAdmin(roles) {
    return roles.some(x => x == 'admin');
}

module.exports = {
    isOwner,
    isAdmin
};