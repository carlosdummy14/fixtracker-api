const express = require('express');
const { config } = require('./config/index');
const ordersApi = require('./routes/orders.js');
const {errorHandler, logErrors} = require('./utils/middleware/errorHandlers')
const app = express();

// body parser
app.use(express.json());

ordersApi(app);

// errors handler
app.use(logErrors);
app.use(errorHandler)

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
