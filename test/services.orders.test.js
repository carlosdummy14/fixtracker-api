const assert = require('assert')
const proxyquire = require('proxyquire')

const {getAllStub, MongoLibMock}= require('../utils/mocks/mongoLib')
const {ordersMock}= require('../utils/mocks/orders')

describe('services - orders', function() {
  const OrdersService = proxyquire('../services/orders', {
    '../lib/mongo': MongoLibMock
  })

  const ordersService = new OrdersService()

  describe('when getOrders method is called', async function () {
    it('should call the getall MongoLib method', async function() {
      await ordersService.getOrders({})
      assert.strictEqual(getAllStub.called, true)
    })

    it('should return an array of movies', async function() {
      const result = await ordersService.getOrders({});
      const expect = ordersMock
      assert.deepEqual(result, expect)
    })
  })
})
