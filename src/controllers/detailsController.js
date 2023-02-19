const router = require('express').Router();

const { getMissingAccessory } = require('../services/accessoryService');
const { getById } = require('../services/cubeServices');

router.get('/:cubeId', async (req, res) => {
    const id = req.params.cubeId;
    try {
        const cube = await getById(id).lean();
        const missingAccessories = await getMissingAccessory(id).lean();
        cube.missingAccessories = missingAccessories;

        res.render('details', {
            cube,
        })
    } catch (err) {
        console.log(err.message);
        res.redirect('/404')
    }

});

module.exports = router;