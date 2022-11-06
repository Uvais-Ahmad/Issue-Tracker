const Project = require('../models/projects');

module.exports.home = function ( req , res ){
    Project.find({} , function( err , projects ){
        
        res.render('layout',{
            projects : projects
        });
    });
}

module.exports.create = function( req , res ){
    Project.create( req.body , function(err , project){
        if(err){ console.log('Error occur while deleting the project : ',err)}
    })
    res.redirect('/');
}

module.exports.destroy = function( req , res ){
    Project.findByIdAndDelete(req.params.id , function(err , data){
        if(err){ console.log('Error occur while deleting the project : ',err)}
        console.log('Data deleted : ',data);
        return res.redirect('/');
    });
    
    
}


