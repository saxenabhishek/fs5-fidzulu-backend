const router = require('express').Router()
const {getFood} = require('../controllers/foodController')

router.get('/food',getFood);
module.exports = router