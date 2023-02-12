const router = require('express').Router();
const { getCubes } = require('../services/cubeServices');

router.get('/', async (req, res) => {
    // const { search, from, to } = req.query;
    const cubes = await getCubes();
    res.render('index', {
        cubes,
        // search, from, to
    });
});

router.all('/about', (req, res) => {
    res.render('about', { title: 'About Page' });
});

module.exports = router;