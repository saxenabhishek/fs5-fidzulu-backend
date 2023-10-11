const router = require('express').Router()
const {getToys} = require('../controllers/toysController')

router.get('/toys',getToys);
module.exports = router