const router = require('express').Router();

const homeController = require('../controllers/homeController');

router.all('/', homeController);
router.all('/about', homeController);


module.exports = router;