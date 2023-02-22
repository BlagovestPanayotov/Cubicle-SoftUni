const jwt = require('../lib/jsonwebtoken')
const { createUser, getUser } = require('../services/userService')
const bcrypt = require('bcrypt')
const secret = require('../config/config').SECRET

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

    const user = await getUser(username)
    if (!user) throw new Error('Wrong username or password!')

    const hashCheck = await bcrypt.compare(password, user.password)
    if (!hashCheck) throw new Error('Wrong username or password!')

    const token = await jwt.sign(
      {
        user: user.username,
        userId: user._id,
      },
      secret,
      {
        expiresIn: '30min',
      },
    )

    res.cookie('token', token, { httpOnly: true })

    res.redirect('/')
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
    const user = await createUser(username, hash)

    const token = jwt.sign({ user: user.name }, secret, { expiresIn: '30min' })

    res.cookie('token', token, { httpOnly: true })
    res.redirect('/')
  } catch (err) {
    return res.render('registerPage', {
      message: await err.message,
    })
  }
})

router.get('/logout', (rec, res) => {
  res.clearCookie('token')
  res.redirect('/')
})

module.exports = router
