const router = require('express').Router()
const {getBook} = require('../controllers/bookController')

router.get('/book/all/:location',getBook);
module.exports = router