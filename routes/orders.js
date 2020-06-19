const express = require('express');
const OrderService = require('../services/orders');

function ordersApi(app) {
  const router = express.Router();
  app.use('/api/orders', router);

  // service
  const orderService = new OrderService();

  // get all orders
  router.get('/', async function (req, res, next) {
    // tags query filter pending... ?nameOfQuery
    const { tags } = req.query;

    try {
      const orders = await orderService.getOrders({ tags });
      //throw new Error('Error getting orders'); Error for test

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
    const { orderId } = req.params;

    try {
      const orders = await orderService.getOrder({ orderId });

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
    const { body: order } = req;

    try {
      const createdOrderId = await orderService.createOrder({ order });

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
    const { orderId } = req.params;
    const { body: order } = req;

    try {
      const updatedOrderId = await orderService.updateOrder({ orderId, order });

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
    const { orderId } = req.params;

    try {
      const deletedOrderId = await orderService.deleteOrder({ orderId });

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
