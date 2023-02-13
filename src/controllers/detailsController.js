const router = require('express').Router();

const { getById } = require('../services/cubeServices');

router.get('/details/:cubeId', async (req, res) => {
    const id = req.params.cubeId;
    try {
        const cube = await getById(id).lean();
        cube.accessories = [1];
        res.render('details', {
            cube,
        })
    } catch (err) {
        res.redirect('/404')
    }

});

module.exports = router;