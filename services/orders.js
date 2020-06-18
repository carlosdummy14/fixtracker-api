const { ordersMock } = require('../utils/mocks/orders');

class OrderService {
  async getOrders() {
    const orders = await Promise.resolve(ordersMock);
    return orders || [];
  }

  async getOrder() {
    const order = await Promise.resolve(ordersMock[0]);
    return order || {};
  }

  async createOrder() {
    const createdOrderId = await Promise.resolve(ordersMock[0].id);
    return createdOrderId;
  }

  async updateOrder() {
    const updatedOrderId = await Promise.resolve(ordersMock[0].id);
    return updatedOrderId;
  }

  async deleteOrder() {
    const deletedOrderId = await Promise.resolve(ordersMock[0].id);
    return deletedOrderId;
  }
}

module.exports = OrderService;
