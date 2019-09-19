const express = require('express');
const bodyParser = require('body-parser');
const colors = require('colors');
const cors = require('cors');
const modules = require('./modules');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
modules(app);
app.listen(port, () => {
  console.log(`Running on Port ${port}`.blue);
});
