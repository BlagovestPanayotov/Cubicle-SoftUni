const router = require('express').Router();

router.all('/', (req, res) => {
    res.render('index', { title: 'Cubicle' });
});

router.all('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

module.exports = router;