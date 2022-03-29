exports.paginaInicial = (req, res) => {    
        res.render('index');
};

exports.trataPost = (req, res) => {
    res.send('Hey, sou sua nova rota de post');
};