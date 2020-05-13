const mongoose = require("mongoose");
// Configurando a conexão ao mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/node', {useNewUrlParser:true, useUnifiedTopology: true}).then(() => {
    console.log('MongoDB Conectado...')
}).catch((err) => {
    console.log('Houve um erro ao se conectar ao mongoDB '+err)
})

// Model

const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
     },
     sobrenome: {
         type: String,
         require: true
     },
     email: {
         type: String,
         require: false
     },
     idade: {
         type: Number,
         require: true
     },
     pais: {
         type: String,
         require: false
     }
})

// Collection
const NovoUsuario = mongoose.model('Usuarios',UsuarioSchema)
new NovoUsuario({
    nome: 'Zvonimir',
    sobrenome: 'Svetoslavic',
    email: 'chigrininz@mail.com',
    idade: 30,
    pais: 'Brasil'
}).save().then(function(){
    console.log("Registro salvo.")
}).catch(function(err){
    console.log("Falha ao salvar: " + err)
})