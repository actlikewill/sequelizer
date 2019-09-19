const express = require('express');
const UserController = require('./UserController');

const UserRouter = express.Router();

UserRouter.route('/users/:id')
  .get(UserController.getAllUsers);

UserRouter.route('/users')
  .post(UserController.createNewUser);

UserRouter.route('/users/:id')
  .put(UserController.updateUser);

module.exports = UserRouter;
