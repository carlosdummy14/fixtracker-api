const express = require('express');
const app = express();
const cors = require('cors');

const { config } = require('./config/index');
const ordersApi = require('./routes/orders.js');
const {
  errorHandler,
  wrapErrors,
  logErrors,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

// cors
app.use(cors());

// body parser
app.use(express.json());

// routes
ordersApi(app);

// catch 404 error
app.use(notFoundHandler);

// errors handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
