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
const { middlewareGlobal } = require('./middlewares/middleware');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(middlewareGlobal);
app.use(routes);

app.listen(porta, (error) =>{
    console.log(`Servidor executando na porta ${porta}.`);
})