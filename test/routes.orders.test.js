const assert = require('assert');
const proxyquire = require('proxyquire');

const { ordersMock, OrdersSevicesMock } = require('../utils/mocks/orders.js');
const testServer = require('../utils/testServer');

describe('routes - orders', () => {
  const route = proxyquire('../routes/orders', {
    '../services/orders': OrdersSevicesMock,
  });

  const request = testServer(route);
  describe('GET /orders', () => {
    it('should respond with status 200', function (done) {
      request.get('/api/orders').expect(200, done);
    });

    it('should respond with the list of orders', function (done) {
      request.get('/api/orders').end((err, res) => {
        assert.deepEqual(res.body, {
          data: ordersMock,
          message: 'Orders Listed...',
        });

        done();
      });
    });
  });

  describe('GET /orders/:orderId', () => {
    it('should respond with status 200', function (done) {
      request.get('/api/orders/123456789012345678901234').expect(200, done);
    });

    it('should respond with a order', function (done) {
      request.get('/api/orders/123456789012345678901234').end((err, res) => {
        assert.deepEqual(res.body, {
          data: ordersMock[0],
          message: 'Order Retrieve...',
        });

        done();
      });
    });
  });

  describe('POST /orders', () => {
    it('should respond with status 201', function (done) {
      request.post('/api/orders').expect(201,done);
    })

    it('should respond with a order id', function (done) {
      request.post('/api/orders').end((err, res) => {
        assert.deepEqual(res.body, {
          data: ordersMock[0].id,
          message: 'Order Created...',
        });

        done();
      });
    });
  })

  describe('DELETE /order', () => {
    it('should respond with status 200', function (done) {
      request.delete('/api/orders/123456789012345678901234').expect(200,done);
    })

    it('should respond with a order id', function (done) {
      request.delete('/api/orders/123456789012345678901234').end((err, res) => {
        assert.deepEqual(res.body, {
          data: ordersMock[0].id,
          message: 'Order Deleted...',
        });

        done();
      });
    });
  })
});
