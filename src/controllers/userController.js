const { createUser, getUser } = require('../services/userService')
const bcrypt = require('bcrypt')

const router = require('express').Router()

router.get('/login', (req, res) => {
  res.render('loginPage')
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body

  try {
    if (username == '' || password == '') {
      throw new Error('All fields are required!')
    }

    const user = await getUser(username, password)

    if (!user) throw new Error('Wrong username or password!')

    const hashCheck = await bcrypt.compare(password, user.password)
    if (hashCheck) throw new Error('Wrong username or password!')
    res.render('loginPage')
  } catch (err) {
    return res.render('loginPage', {
      message: err.message,
    })
  }
})

router.get('/register', (req, res) => {
  res.render('registerPage')
})

router.post('/register', async (req, res) => {
  const { username, password, repeatPassword } = req.body

  if (username == '' || password == '' || repeatPassword == '') {
    return res.render('registerPage', {
      message: 'All fields are required!',
    })
  }

  if (password !== repeatPassword) {
    return res.render('registerPage', {
      message: "Passwords don't match!",
    })
  }

  try {
    const hash = await bcrypt.hash(password, 10)
    console.log('here')
    await createUser(username, hash)

    res.redirect('/')
  } catch (err) {
    return res.render('registerPage', {
      message: await err.message,
    })
  }
})

module.exports = router
