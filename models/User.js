

module.exports = (Connexion, Sequelize) => Connexion.define('User', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
    validate: {
      notNull: true,
      isAlphanumeric: true,
    },
  },
});
