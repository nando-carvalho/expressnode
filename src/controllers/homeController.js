const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'Coleção de sucesso',
    descricao: 'Persista, que você irá conseguir!.'
})
    .then(dados =>  console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {    
        res.render('index');
};

exports.trataPost = (req, res) => {
    res.send('Hey, sou sua nova rota de post');
};