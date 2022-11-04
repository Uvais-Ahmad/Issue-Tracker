const mongoose = require('mongoose');
console.log('Mongoose config ');

mongoose.connect('mongodb://localhost/issueTracker_developer');

const db = mongoose.connection;

db.on("error",console.error.bind(console,"Error occur while making mongoose connection"))

db.once('open',function(){
    console.log("Connection success to mongoose .");
});

module.exports = db;