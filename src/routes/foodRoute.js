const { Router } = require('express')
const {getFoodDetails} = require('../controllers/foodController')
const router = Router();

router.get('/food/all/:location',getFoodDetails)
module.exports = router