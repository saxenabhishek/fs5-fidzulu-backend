const router = require('express').Router()
const {getBook} = require('../controllers/bookController')

router.get('/',getBook);
module.exports = router