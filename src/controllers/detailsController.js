const router = require('express').Router();

const { getById } = require('../services/cubeServices');

router.get('/details/:cubeId', (req, res) => {
    const id = req.params.cubeId;
    const cube = getById(id);

    res.render('details',{
        cube
    })
});

module.exports = router;