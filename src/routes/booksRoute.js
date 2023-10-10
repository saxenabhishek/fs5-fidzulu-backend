const router = require('express').Router()
const {getBook} = require('../controllers/bookController')

router.get('/book',getBook);
module.exports = router