const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser');
const Post = require("./models/Posts");
const Sequelize = require("sequelize");

//Config
  // Template Engine
  app.engine('handlebars', handlebars({defaultLayout:'main'}));
  app.set('view engine', 'handlebars');
  // Body-Parser
  app.use(bodyParser.urlencoded({extended: false}))
  app.use(bodyParser.json())
  // Conexão com o Banco de Dados
  const sequelize = new Sequelize('CADASTRO','root','Muspelheim@00',{
   host: 'localhost',
   dialect:'mysql'
   })

  // Rotas
  app.get('/cad', function(req,res){
  	  res.render(__dirname +'/views/layouts/formulario');
  })

  app.get('/',function(req,res){
        Post.findAll({order: [['id','DESC']]}).then(function(posts){
      res.render(__dirname +'/views/layouts/home',{posts: posts})
      })//.catch(erro)
  })
  app.post('/add', function(req,res){
    Post.create({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
    }).then(function(){
     // res.send("Post enviado com sucesso.")
     res.redirect('/')
    }).catch(function(erro){
      res.send("Post nao enviado. Erro: " + erro)
    })
  	//  res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo);
  })
    // Deletar
  app.get('/deletar/:id',function(req,res){
    Post.destroy({where: {'id':req.params.id}}).then(function(){
      res.send('Deletado com sucesso.')
    }).catch(function(erro){
      res.send('Deu erro amiguinho, não existe.')
    })
})

//Tem que ser sempre o último evento do arquivo
app.listen(8081, function(){
	console.log("Servidor rodando na url http://localhost:8081");
})