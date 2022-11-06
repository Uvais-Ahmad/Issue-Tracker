const express = require('express');
const router = express.Router();

const viewCont = require('../controller/viewProject_Cont');

router.get('/:id',viewCont.view);
router.post('/add-issue',viewCont.addIssue);


module.exports = router;