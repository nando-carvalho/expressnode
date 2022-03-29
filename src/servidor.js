require('dotenv').config();
const porta = 5000;
const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,    
  })
  .then(() => {
    app.emit('pronto');
  })
  .catch(e => console.log(e));

// const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
const csrf = require('csurf');
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./middlewares/middleware');
// const helmet = require('helmet'); // helmet começou a causar problemas no localhost por conta da falta de SSL
// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(middlewareGlobal);
app.use(routes);

app.listen(porta, (error) =>{
    console.log(`Servidor executando na porta ${porta}.`);
})