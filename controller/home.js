module.exports.home = function ( req , res ){
    res.render('layout');
}

module.exports.create = function( req , res ){
    console.log('req.body : ',req.body);
    res.redirect('/');
}