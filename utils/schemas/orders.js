const joi = require('@hapi/joi');

const orderIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const orderOrderSchema = joi.string().regex(/^[0-9]{8}$/);
const orderClientSchema = joi.string().max(80);
const orderPositionSchema = joi.string().min(5);
const orderCarIdSchema = joi.string().regex(/^[A-Z0-9]{6}$/);
const orderTowerSchema = joi.string().regex(/^[A-Z0-9]{5}$/);
const orderDateSchema = joi.string();
const orderTimeSchema = joi.string();
const orderCommentsSchema = joi.array();

const createOrderSchema = {
  order: orderOrderSchema.required(),
  client: orderClientSchema.required(),
  position: orderPositionSchema.required(),
  carId: orderCarIdSchema.required(),
  tower: orderTowerSchema.required(),
  date: orderDateSchema,
  time: orderTimeSchema,
  comments: orderCommentsSchema,
};

const updateOrderSchema = {
  order: orderOrderSchema,
  client: orderClientSchema,
  position: orderPositionSchema,
  carId: orderCarIdSchema,
  tower: orderTowerSchema,
  date: orderDateSchema,
  time: orderTimeSchema,
  comments: orderCommentsSchema,
};

module.exports = {
  orderIdSchema,
  createOrderSchema,
  updateOrderSchema,
};
