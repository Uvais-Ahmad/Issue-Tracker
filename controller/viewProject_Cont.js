const Project = require('../models/projects');
const Issue = require('../models/issues');

module.exports.view = function( req , res ){
    
    Project.findById(req.params.id , function(err , data){
        if(err){ console.log('Error occur while deleting the project : ',err)}
        return res.render('viewProject',{
            project : data
        });
    })
}

module.exports.addIssue = function( req , res ){
    console.log('This is An Isue : ',req.body);

    Issue.create(req.body , function( err , issue ){
        if(err){console.log('Error occur while adding Issue : ',err)}
        console.log('iSSUE Created : ',issue);
        return res.redirect('back');
    })

    
}