const router = require('express').Router()
const {getBook} = require('../controllers/bookController')
const {getTeam} = require('../controllers/teamController')
router.get('/book/teams',getTeam);
module.exports = router