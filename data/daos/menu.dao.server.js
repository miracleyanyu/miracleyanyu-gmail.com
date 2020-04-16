const menuModel = require('../models/Menu/menu.model.server');

const itemDao = require('../daos/item.dao.server');

const findAllMenus = () =>
    menuModel.find();

const findMenuForRestaurant = (rid) =>
    menuModel.find({restaurantId: rid}).populate('items');

const findItemsForMenu = (rid) =>
    menuModel.find({restaurantId: rid}).populate('items');

const createMenu = (menu) =>
    menuModel.create(menu);

const deleteMenu = (mid) =>
    menuModel.findByIdAndDelete({_id: mid});

const addItem = (mid, item) =>
    itemDao.createItem(item)
      .then(item => menuModel.findByIdAndUpdate({_id: mid}, {$push: {items: item._id}}));

const deleteItem = (mid, iid) => {
  itemDao.deleteItem(iid)
  return menuModel.findByIdAndDelete({_id: mid}, {$pull: {items: {_id: iid}}});
}

module.exports = {
  findAllMenus,
  findMenuForRestaurant,
  findItemsForMenu,
  createMenu,
  deleteMenu,
  addItem,
  deleteItem
}
