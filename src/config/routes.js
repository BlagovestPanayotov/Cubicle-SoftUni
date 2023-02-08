const router = require('express').Router();

const homeController = require('../controllers/homeController');
const defaultController = require('../controllers/defaultController');

router.use(homeController);
router.use(defaultController);


module.exports = router;