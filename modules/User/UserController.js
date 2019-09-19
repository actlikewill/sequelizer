const { User } = require('../../models');

class UserController {
  static returnUserHandler(user, req, res) {
    console.log(req.query);
    res.json(req.query.attrib ? user[req.query.attrib] : user);
  }

  static getAllUsers(req, res) {
    if (/[0-9]/.test(req.params.id)) {
      User.findByPk(req.params.id)
        .then(user => UserController.returnUserHandler(user, req, res))
        .catch((e) => {
          res.send('ERROR=>', e);
        });
    } else {
      User.findOne({
        where: {
          name: req.params.id,
        },
      })
        .then((user) => {
          res.json(user);
        })
        .catch((e) => {
          res.send('ERROR=>', e);
        });
    }
  }

  static createNewUser(req, res) {
    const newUser = req.body.user;
    User.create({
      name: newUser.name,
      email: newUser.email,
    })
      .then((user) => {
        res.json({
          message: 'New user created.',
          newUser: user,
        });
      })
      .catch((e) => {
        console.log('ERROR=>', e);
      });
  }

  static updateUser(req, res) {
    const updatedUser = req.body.user;
    console.log(updatedUser);
    User.update(
      { name: updatedUser.name, email: updatedUser.email },
      { where: { id: req.params.id } },
    )
      .then((user) => {
        res.json({
          message: 'User updated.',
          updatedUser: user,
        });
      })
      .catch((e) => {
        console.log('UPDATE ERROR=>', e);
      });
  }
}

module.exports = UserController;
