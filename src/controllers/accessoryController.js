const { createAccessory, getMissingAccessory, getAccessory } = require('../services/accessoryService');
const { getById, attachAccessory } = require('../services/cubeServices');

const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('createAccessory');
});

router.post('/create', async (req, res) => {
    const { name, imageUrl, description } = req.body;
    try {
        await createAccessory(name, imageUrl, description);
        res.redirect('/create/accessory');
    } catch (err) {
        res.redirect('/404');
    }
});

router.get('/:cubeId/attachAccessory', async (req, res) => {
    const cubeId = req.params.cubeId;
    try {
        const cube = await getById(cubeId).lean();
        const missingAccessories = await getMissingAccessory(cubeId).lean();
        cube.missingAccessories = missingAccessories;
        res.render('attachAccessory', {
            title: 'Attach Accessory',
            cube
        });
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
});

router.post('/:cubeId/attachAccessory', async (req, res) => {
    const cubeId = req.params.cubeId;
    const accessoryId = req.body.accessory
    try {
        await attachAccessory(cubeId, accessoryId);
        res.redirect('/details/' + cubeId);
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
})

module.exports = router;