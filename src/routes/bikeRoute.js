const router = require('express').Router()
const {getBikes} = require('../controllers/bikeController')

router.get('/bikes',getBikes);
module.exports = router