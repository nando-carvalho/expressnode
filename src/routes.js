const express = require('express');
const route = express.Router();
const HomeController = require('./controllers/homeController');
const ContatoController = require('./controllers/contatoController');

function meuMiddleware(request, response, next) {
    console.log();
    console.log('Como usar um middleware em uma rota especifica');
    console.log();
    next();
}

route.get('/inicio', meuMiddleware, HomeController.paginaInicial);
route.post('/tratapost', HomeController.trataPost);
route.get('/contato', ContatoController.paginaInicial);


module.exports = route;