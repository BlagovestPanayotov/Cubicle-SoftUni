const router = require('express').Router();

const { getById } = require('../services/cubeServices');

router.get('/details/:cubeId', async (req, res) => {
    const id = req.params.cubeId;
    const cube = await getById(id).lean();

    res.render('details',{
        cube
    })
});

module.exports = router;