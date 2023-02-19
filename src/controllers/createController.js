const router = require('express').Router();

const { createCube } = require('../services/cubeServices');

router.get('/', (req, res) => {
    res.render('create', { title: 'Create Cube Page' })
});

router.post('/', async (req, res) => {
    try {
        const cube = await createCube(req.body);
        await cube.save();
        res.redirect('/');
    } catch (err) {
        res.redirect('/404');
    }
})

module.exports = router