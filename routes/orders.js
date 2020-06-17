const express = require('express');
const { ordersMock } = require('../utils/mocks/orders');

function ordersApi(app) {
  const router = express.Router();
  app.use('/api/orders', router);

  // get all orders
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

  // get one order
  router.get('/:orderId', async function (req, res, next) {
    try {
      const orders = await Promise.resolve(ordersMock[0]);

      res.status(200).json({
        data: orders,
        message: 'Order Retrieve...',
      });
    } catch (err) {
      next(err);
    }
  });

  // post order
  router.post('/', async function (req, res, next) {
    try {
      const createdOrderId = await Promise.resolve(ordersMock[0].id);

      res.status(201).json({
        data: createdOrderId,
        message: 'Order Created...',
      });
    } catch (err) {
      next(err);
    }
  });

  // put order
  router.put('/:orderId', async function (req, res, next) {
    try {
      const updatedOrderId = await Promise.resolve(ordersMock[0].id);

      res.status(200).json({
        data: updatedOrderId,
        message: 'Order Updated...',
      });
    } catch (err) {
      next(err);
    }
  });

  // delete order
  router.delete('/:orderId', async function (req, res, next) {
    try {
      const deletedOrderId = await Promise.resolve(ordersMock[0].id);

      res.status(200).json({
        data: deletedOrderId,
        message: 'Order Deleted...',
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = ordersApi;
