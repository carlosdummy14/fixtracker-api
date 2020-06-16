const express = require('express');
const { ordersMock } = require('../utils/mocks/orders');

function ordersApi(app) {
  const router = express.Router();
  app.use('/api/orders', router);

  router.get('/', async function (req, res, next) {
    try {
      const orders = await Promise.resolve(ordersMock);

      res.status(200).json({
        data: orders,
        message: 'Orders Listed...',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = ordersApi;
