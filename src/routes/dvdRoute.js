const router = require('express').Router()

const {getDvd} = require('../controllers/dvdController')

router.get('/',getDvd);
module.exports = router