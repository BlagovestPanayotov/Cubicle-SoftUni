const User = require('../models/User')

async function checkUsernameAvailability(username) {
  return User.findOne({ username })
}

async function getUser(username) {
  return User.findOne({ username })
}

async function createUser(username, password) {
  const exist = await checkUsernameAvailability(username)
  try {
    if (!exist) {
      const user = await User.create({
        username,
        password,
      });
      return user;
    } else {
      throw new Error('User with that name already exist!')
    }
  } catch (err) {
    throw err
  }
}

module.exports = {
  getUser,
  createUser,
}
