const Sequelize = require('sequelize');
const UserModel = require('./User');


const Connexion = new Sequelize('testdb', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  storage: '',
  operatorsAliases: false,
  // define: {
  //     freezeTableName: true,
  // }
});

const User = UserModel(Connexion, Sequelize);

module.exports = {
  User,
};
