const router = require('express').Router()

const homeController = require('../controllers/homeController')
const detailsController = require('../controllers/detailsController')
const createController = require('../controllers/createController')
const defaultController = require('../controllers/defaultController')
const accessoryController = require('../controllers/accessoryController')
const userController = require('../controllers/userController')
const { isAuthenticated } = require('../middlewares/authMiddleware')

router.use(homeController)
router.use('/details', detailsController)
router.use('/accessory', accessoryController)
router.use('/create', isAuthenticated, createController)
router.use('/user', userController)

router.use('*', defaultController)

module.exports = router
