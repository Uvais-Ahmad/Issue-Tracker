const express = require('express');
const router = express.Router();

console.log('Router has been called ');

const homeCont = require('../controller/home');

router.get('/',homeCont.home);
router.post('/create-project',homeCont.create);
router.get('/view-project/:id',homeCont.view);
router.get('/destroy/:id',homeCont.destroy);

module.exports = router;