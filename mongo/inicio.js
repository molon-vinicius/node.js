const mongoose = require("mongoose");
// Configurando a conexão ao mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/node', {useNewUrlParser:true, useUnifiedTopology: true}).then(() => {
    console.log('MongoDB Conectado...')
}).catch((err) => {
    console.log('Houve um erro ao se conectar ao mongoDB '+err)
})