const router = require('express').Router();

const { getMissingAccessory } = require('../services/accessoryService');
const { getById, editById, deleteById } = require('../services/cubeServices');
const { isOwner } = require('../utils/authGuards');
const generateDifficultyLevel = require('../utils/generateDificultyLevels');

router.get('/:cubeId', async (req, res) => {
  const id = req.params.cubeId;
  try {
    const cube = await getById(id).lean();
    const missingAccessories = await getMissingAccessory(id).lean();
    cube.missingAccessories = missingAccessories;
    cube.isOwner = isOwner(cube, req.user._id);

    res.render('details', {
      cube,
    });
  } catch (err) {
    console.log(err.message);
    res.redirect('/404');
  }
});



router.get('/:cubeId/edit', async (req, res) => {
  const id = req.params.cubeId;
  try {
    const cube = await getById(id).lean();
    if (!isOwner(cube, req.user._id)) throw new Error('You are not the owner!');
    cube.difficulties = generateDifficultyLevel(cube.difficultyLevel);

    res.render('editCubePage', {
      cube
    });
  } catch (err) {
    console.log(err.message);
    res.redirect('/404');
  }
});

router.post('/:cubeId/edit', async (req, res) => {
  const cubeId = req.params.cubeId;
  const { name, description, imageUrl, difficultyLevel } = req.body;

  try {
    if (name == '' || description == '' || imageUrl == '' || difficultyLevel == '') throw new Error('All fields are required');
    await editById(cubeId, { name, description, imageUrl, difficultyLevel, owner: req.user._id });
    res.redirect('/details/' + cubeId);
  } catch (err) {
    res.render('create', {
      message: err.message
    });
  }
  try {
    await editById();
  } catch (err) {

  }
});

router.get('/:cubeId/delete', async (req, res) => {
  const id = req.params.cubeId;
  try {
    const cube = await getById(id).lean();
    if (!isOwner(cube, req.user._id)) throw new Error('You are not the owner!');
    cube.difficulties = generateDifficultyLevel(cube.difficultyLevel);

    res.render('deleteCubePage', {
      cube,
    });
  } catch (err) {
    console.log(err.message);
    res.redirect('/404');
  }
});

router.post('/:cubeId/delete', async (req, res) => {
  const cubeId = req.params.cubeId;

  try {
    await deleteById(cubeId);
    res.redirect('/');
  } catch (err) {
    res.redirect('/404');
  }
});

module.exports = router;
