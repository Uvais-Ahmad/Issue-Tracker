const express = require('express');
const router = express.Router();

const viewCont = require('../controller/viewProject_Cont');

router.get('/:id',viewCont.view);


module.exports = router;