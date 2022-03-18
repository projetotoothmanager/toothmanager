const mainController ={
    index: (request, response) =>{
        response.render('login', {title: 'Express'})
    }
}

module.exports = mainController
