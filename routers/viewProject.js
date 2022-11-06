const express = require('express');
const router = express.Router();

const viewCont = require('../controller/viewProject_Cont');

//Route for view the project
router.get('/:id',viewCont.view);

//to add issue on project
router.post('/add-issue',viewCont.addIssue);


module.exports = router;