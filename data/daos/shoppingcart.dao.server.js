const shoppingCartModel = require('../models/ShoppingCart/shoppingCart.model.server');

const findShoppingCartForUser = (uid) =>
    shoppingCartModel.findOne({_id: uid});

module.exports = {
  findShoppingCartForUser
}
