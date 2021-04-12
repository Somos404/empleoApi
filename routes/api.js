const router = require('express').Router()
const apiUsers = require('./api/users')
const apiMail = require('./api/mail')
const apiCursosAndCategias = require('./api/cursosAndCategias')

//router.use('/otracosa', middlewares.checkToken, otraRuras)

router.use('/users', apiUsers);
router.use('/mail', apiMail);
router.use('/cursosAndCategias', apiCursosAndCategias);


module.exports = router