const router = require('express').Router()
const {getToys} = require('../controllers/toysController')

router.get('/',getToys);
module.exports = router