const router = require('express').Router();

const { getAccessory } = require('../services/accessoryService');
const { getById } = require('../services/cubeServices');

router.get('/details/:cubeId', async (req, res) => {
    const id = req.params.cubeId;
    try {
        const cube = await getById(id).lean();
        const accessories = await getAccessory(id);
        console.log(accessories);
        cube.accessories = [1];
        res.render('details', {
            cube,
        })
    } catch (err) {
        console.log(err.message);
        res.redirect('/404')
    }

});

module.exports = router;