const router = require('express').Router()
const {getFood} = require('../controllers/foodController')
const {getDvd} = require('../controllers/dvdController')
router.get('/food',getFood);
router.get('/dvd',getDvd);
module.exports = router