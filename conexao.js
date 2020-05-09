const Sequelize = require('sequelize');
const sequelize = new Sequelize('CADASTRO','root','Muspelheim@00',{
	host: 'localhost',
	dialect:'mysql'
})

// TESTAR A CONEXÃO DO BANCO
// sequelize.authenticate().then(function(){
//	console.log("Conectado com sucesso.")	
// }).catch(function(erro){
//	console.log("Falha ao tentar conectar: " + erro)
// })

/*
const Postagem = sequelize.define('POSTAGENS',{
	  titulo:{
	  	type: Sequelize.STRING

	  },
	  conteudo:{
	  	type: Sequelize.TEXT
	  }
})

//Postagem.sync({force:true})

Postagem.create({
	titulo: "Primeiro Titulo",
	conteudo: "Primeiro Conteudo"
})

//CREATE TABLE, {COLUMNS} 
const Usuario = sequelize.define('USUARIOS',{
	nome: {
		type: Sequelize.STRING
	},
	sobrenome: {
		type: Sequelize.STRING
	},
	idade: {
		type: Sequelize.INTEGER
	},
	email: {
		type: Sequelize.STRING
	}
})

// FORÇA A CRIAÇÃO DA TABELA
//Usuario.sync({force:true}) 

//INSERT INTO 
Usuario.create({
	nome: "Vinicius",
	sobrenome: "Freitas",
	idade: 30,
	email: "vinicius@email.com"
})

*/
