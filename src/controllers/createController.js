const router = require('express').Router();

const { createCube } = require('../services/cubeServices');

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Cube Page' })
});

router.post('/create', (req, res) => {
    createCube(req.body);
    res.redirect('/');
})

module.exports = router