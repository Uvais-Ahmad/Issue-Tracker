const Project = require('../models/projects');
const Issue = require('../models/issues');

module.exports.view = async function( req , res ){
    Project.findById(req.params.id , function(err , data){
        if(err){ console.log('Error occur while deleting the project : ',err)}
        return res.render('viewProject',{
            project : data,
            issue : undefined
        });
    })
}

module.exports.addIssue = async function( req , res ){
    console.log('This is An Isue : ',req.body);

    //find the project to add issue
    let project =await Project.findById(req.body.project);
    
    await Issue.create(req.body ,async function( err , issue ){
        if(err){console.log('Error occur while adding Issue : ',err)}

        await project.issues.push(issue);
        await project.save();

        console.log('iSSUE Created : ',issue);
        console.log('PROJECT : ',project);
        return res.redirect('back');
    })
}