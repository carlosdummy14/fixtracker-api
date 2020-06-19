const express = require('express');
const { config } = require('./config/index');
const ordersApi = require('./routes/orders.js');

const app = express();

app.use(express.json());

ordersApi(app);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
