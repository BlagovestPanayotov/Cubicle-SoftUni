const jwt = require('../lib/jsonwebtoken');
const { isAdmin } = require('../utils/authGuards');
const SECRET = require('../config/config').SECRET;

async function authMiddleware(req, res, next) {
  const token = req.cookies['token'];

  if (token) {
    try {
      const decodedToken = await jwt.verify(token, SECRET);
      req.user = decodedToken;
      req.isAuthenticated = true;
      req.ownedCubes = decodedToken.cubes;

      res.locals.isAdmin = isAdmin(decodedToken.roles);
      res.locals.user = decodedToken;
      res.locals.isAuthenticated = true;
    } catch (err) {
      console.log(err.message);

      res.clearCookie('token');
      return res.redirect('/user/login');
    }
  }

  next();
}

function isAuthenticated(req, res, next) {
  if (!req.isAuthenticated) return res.redirect('/user/login');

  next();
}

module.exports = {
  authMiddleware,
  isAuthenticated
};
