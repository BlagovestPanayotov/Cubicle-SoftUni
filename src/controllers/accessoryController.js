const { createAccessory } = require('../services/accessoryService');
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
    const cube = await getById(id).lean();
    res.render('attachAccessory', {
        title: 'Attach Accessory',
        cube
    });
})

module.exports = router;