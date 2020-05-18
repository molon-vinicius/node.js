// Carregando módulos
const express = require("express");
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const app = express();
const admin = require("./routes/admin.js");
const path = require("path");
const mongoose = require("mongoose");

// Configurações
    // Body Parser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    // Handlebars
    app.engine('handlebars', handlebars({defaultLayout:'main'}));
    app.set("view engine", "handlebars");

    // Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost/blogapp", {useNewUrlParser:true, useUnifiedTopology: true}).then(function(){
        console.log("Conectado ao MongoDB");
    }).catch(function(err){
        console.log("Erro " + err);
    })
    
    // Public
    app.use(express.static(path.join(__dirname,"public")));
    
// Rotas    
    app.use('/admin', admin);
// Outros
const PORT = 8081
app.listen(PORT, function(){
    console.log("Servidor online.");
})
