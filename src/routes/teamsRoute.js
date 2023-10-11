const router = require('express').Router()
const {getLaptop} = require('../controllers/laptopController');
const {getTeam} = require('../controllers/teamController');

router.get('/laptop/teams', getTeam);
module.exports = router;