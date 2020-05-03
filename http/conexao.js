const Sequelize = require('sequelize');
const sequelize = new Sequelize('CADASTRO','root','Muspelheim@00',{
	host: 'localhost',
	dialect:'mysql'
})

sequelize.authenticate().then(function(){
	console.log("Conectado com sucesso.")	
}).catch(function(erro){
	console.log("Falha ao tentar conectar: " + erro)
})

