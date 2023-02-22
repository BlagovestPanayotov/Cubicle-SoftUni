function isOwner(cubeId, ownerCubes) {
    return ownerCubes.some(x => x == cubeId);
}

function isAdmin(roles) {
    return roles.some(x => x == 'admin');
}

module.exports = {
    isOwner,
    isAdmin
};