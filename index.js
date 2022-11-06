const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/mongoose');

app.use(express.urlencoded({ extended: true }));


app.use('/',require('./routers'))

//EJS setup 
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));



app.listen(8000,function(err){
    if(err){ console.log('Issue comes while creating server ', err)}
    console.log('Issue Tracker application is runnig on port 8000');
})