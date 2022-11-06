const Project = require('../models/projects');
const Issue = require('../models/issues');

module.exports.view = async function( req , res ){

    try{
        let project = await Project.findById(req.params.id ).populate('issues');

        return res.render('viewProject',{
            project : project,
            issues : project.issues
        });
    }
    catch(err){
        console.log('Error while view : ',err);
    }
    
}

module.exports.addIssue = async function( req , res ){
    
    try{
        //find the project to add issue
        let project =await Project.findById(req.body.project);
        //Now add Issue in database
        await Issue.create(req.body ,async function( err , issue ){
            if(err){console.log('Error occur while adding Issue : ',err)}
            //add issue in ProjectSchema also
            await project.issues.push(issue);
            await project.save();

            return res.redirect('back');
        });
    }
    catch(err){
        console.log('Error while addIssue : ',err);
    }
}