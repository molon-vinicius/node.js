const Sequelize = require('sequelize');
// Conexão com o banco de dados
const sequelize = new Sequelize('CADASTRO', 'root', 'Muspelheim@00', {
	host: "localhost",
	dialect: 'mysql'
})

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}