const router = require('express').Router();

const homeController = require('../controllers/homeController');
const detailsController = require('../controllers/detailsController');
const createController = require('../controllers/createController');
const defaultController = require('../controllers/defaultController');

router.use(homeController);
router.use(detailsController);
router.use(createController);
router.use(defaultController);


module.exports = router;