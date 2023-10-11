const router = require('express').Router()

const {getDvd} = require('../controllers/dvdController')

router.get('/dvd/all/:location',getDvd);
module.exports = router