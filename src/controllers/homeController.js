const router = require('express').Router()
const { getCubes } = require('../services/cubeServices')

router.get('/', async (req, res) => {
  // const { search, from, to } = req.query;
  try {
    const cubes = await getCubes().lean()
    res.render('index', {
      cubes,
      // search, from, to
    })
  } catch (err) {
    res.redirect('/404')
  }
})

router.all('/about', (req, res) => {
  res.render('about', { title: 'About Page' })
})

module.exports = router
