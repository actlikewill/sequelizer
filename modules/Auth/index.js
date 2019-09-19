const express = require('express');


const AuthRouter = express.Router();

AuthRouter.route('/login')
  .get(UserController.login);


module.exports = AuthRouter;
