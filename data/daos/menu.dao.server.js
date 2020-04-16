const menuModel = require('../models/Menu/menu.model.server');

const findMenuForRestaurant = (rid) =>
    menuModel.find({restaurantId: rid});

module.exports = {
  findMenuForRestaurant
}
