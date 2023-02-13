const router = require('express').Router();

router.get('/create/accessory', (req, res) => {
    res.render('createAccessory');
});

router.post('/create/accessory', (req, res) => {
    console.log(req.body);
    res.redirect('/create/accessory');
})

module.exports = router;