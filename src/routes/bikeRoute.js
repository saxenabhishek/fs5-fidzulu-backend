const router = require('express').Router()
const {getBikes} = require('../controllers/bikeController')

router.get('/',getBikes);
module.exports = router