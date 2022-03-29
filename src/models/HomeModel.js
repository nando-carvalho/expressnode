const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },    
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

//Provisório:

module.exports = HomeModel;

//ideal:
// class Home {

// }

// module.exports = Home;