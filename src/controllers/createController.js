const router = require('express').Router();

const { createCube } = require('../services/cubeServices');

router.get('/', (req, res) => {
  res.render('create', { title: 'Create Cube Page' });
});

router.post('/', async (req, res) => {
  const { name, description, imageUrl, difficultyLevel } = req.body;

  try {
    if (name == '' || description == '' || imageUrl == '' || difficultyLevel == '') throw new Error('All fields are required');
    
    await createCube({ name, description, imageUrl, difficultyLevel, owner: req.user._id });
    res.redirect('/');
  } catch (err) {
    res.render('create', {
      message: err.message
    });
  }
});

module.exports = router;
