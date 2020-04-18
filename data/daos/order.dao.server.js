const orderModel = require('../models/Order/order.model.server');

const findAllOrders = () =>
    orderModel.find();

const findOrderById = (oid) =>
    orderModel.findById(oid).populate("items");

const findOrderByUser = (uid) =>
    orderModel.find({"userId": uid}).populate("items");

const findOrderByRestaurant = (rid) =>
    orderModel.find({"restaurantId": rid}).populate("items");

const createOrder = (uid, rid, order) => {
  order.userId = uid;
  order.restaurantId = rid;
  return orderModel.create(order).populate("items");
}

const updateOrder = (oid, order) =>
    orderModel.findByIdAndUpdate({_id: oid}, order).populate("items");

const deleteOrder = (oid) =>
    orderModel.findByIdAndDelete({_id: oid});

const createOrderSimpleURL = (order) =>
    orderModel.create(order).populate("items");

module.exports = {
  findAllOrders,
  findOrderById,
  findOrderByUser,
  findOrderByRestaurant,
  createOrder,
  updateOrder,
  deleteOrder,
  createOrderSimpleURL
}
