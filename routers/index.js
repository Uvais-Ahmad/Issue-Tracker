const express = require('express');
const router = express.Router();

console.log('Router has been called ');

const homeCont = require('../controller/home');

router.get('/',homeCont.home);
router.post('/create-project',homeCont.create)

module.exports = router;