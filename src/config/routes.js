const router = require('express').Router();

router.all('/', (req, res) => {
    res.render('index')
})


module.exports = router;