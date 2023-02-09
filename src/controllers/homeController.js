const router = require('express').Router();
const { getCubes } = require('../services/cubeServices');

router.get('/', (req, res) => {
    const { search, from, to } = req.query;
    const cubes = getCubes(search, from, to);
    res.render('index', {
        title: 'Cubicle',
        cubes,
        search, from, to
    });
});

router.all('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

module.exports = router;