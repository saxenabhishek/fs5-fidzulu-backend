const router = require('express').Router()
const { getLaptop } = require('../controllers/laptopController')

router.get('/laptop', getLaptop);
module.exports = router;