const sinon = require('sinon');

const { ordersMock, filteredOrdersMock } = require('./orders');

const getAllStub = sinon.stub();
getAllStub.withArgs('orders').resolves(ordersMock);

const positionQuery = { position: { $in: ['ENTREGADO'] } };
getAllStub
  .withArgs('orders', positionQuery)
  .resolves(filteredOrdersMock('ENTREGADO'));

const createStub = sinon.stub().resolves(ordersMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock,
};
