const Project = require('../models/projects');

module.exports.home = function ( req , res ){
    res.render('layout');
}

module.exports.create = function( req , res ){
    console.log('req.body : ',req.body);
    Project.create( req.body , function(err , project){
         console.log("This is Proj : ",project);
    })
    res.redirect('/');
}