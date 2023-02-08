const router = require('express').Router();
const { getCubes } = require('../services/cubeServices');

router.all('/', (req, res) => {
    const cubes = getCubes();
    res.render('index', {
        title: 'Cubicle',
        cubes
    });
});

router.all('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

module.exports = router;