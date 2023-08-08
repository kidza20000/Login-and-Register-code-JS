const express = require('express')
const contoller = require('../controllers/auth')
const router = express.Router ()

router.post('/login',  contoller.login)
router.post('/register',  contoller.register)



module.exports = router 