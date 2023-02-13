const { createAccessory, getAccessory, getMissingAccessory } = require('../services/accessoryService');
const { getById } = require('../services/cubeServices');

const router = require('express').Router();

router.get('/create/accessory', (req, res) => {
    res.render('createAccessory');
});

router.post('/create/accessory', async (req, res) => {
    const { name, imageUrl, description } = req.body;
    try {
        await createAccessory(name, imageUrl, description);
        res.redirect('/create/accessory');
    } catch (err) {
        res.redirect('/404');
    }
});

router.get('/attach/accessory/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const cube = await getById(id).lean();
        const accessories = await getMissingAccessory(id).lean();
        cube.accessories = accessories;
        res.render('attachAccessory', {
            title: 'Attach Accessory',
            cube
        });
    } catch (err) {
        res.redirect('/404');
    }
});

router.post('/attach/accessory/:id', async (req, res) => {
    const id = req.params.id;
    try {
        console.log(req.body);
        res.redirect('/attach/accessory/' + id);
    } catch (err) {
        res.redirect('/404');
    }
})

module.exports = router;