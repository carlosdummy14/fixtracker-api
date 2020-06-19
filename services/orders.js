const MongoLib = require('../lib/mongo');

class OrderService {
  constructor() {
    this.collection = 'orders';
    this.mongoDB = new MongoLib();
  }
  async getOrders({ tags }) {
    // filter
    const query = tags && { tags: { $in: tags } }; //mongo syntax
    const orders = await this.mongoDB.getAll(this.collection, query);
    return orders || [];
  }

  async getOrder({orderId}) {
    const order = await this.mongoDB.get(this.collection, orderId);
    return order || {};
  }

  async createOrder({ order }) {
    const createdOrderId = await this.mongoDB.create(this.collection, order);
    return createdOrderId;
  }

  async updateOrder({ orderId, order } = {}) {
    const updatedOrderId = await this.mongoDB.update(
      this.collection,
      orderId,
      order
    );
    return updatedOrderId;
  }

  async deleteOrder({ orderId }) {
    const deletedOrderId = await this.mongoDB.delete(this.collection, orderId);
    return deletedOrderId;
  }
}

module.exports = OrderService;
