const express = require('express');
const app = express();

app.use('/',require('./routers'))


app.listen(8000,function(err){
    if(err){ console.log('Issue comes while creaeting server ', err)}
    console.log('Issue Tracker application is runnig on port 8000');
})