function isOwner(userId, cube) {
    return userId == cube.owner;
}

function isAdmin(roles) {
    return roles.some(x => x == 'admin');
}

module.exports = {
    isOwner,
    isAdmin
};