 module.exports.validadorLoginAuth = function (req, res, next) {

     let userId = req.session.userid

     if (!userId) {
         res.redirect('/login')
     }

     next()

 }