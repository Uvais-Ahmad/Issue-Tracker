const Project = require('../models/projects');

module.exports.view = function( req , res ){
    console.log('Params : ',req.params);
    Project.findById(req.params.id , function(err , data){
        if(err){ console.log('Error occur while deleting the project : ',err)}
        return res.render('viewProject',{
            project : data
        });
    })
}
