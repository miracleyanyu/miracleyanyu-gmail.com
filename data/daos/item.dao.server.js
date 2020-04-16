const itemModel = require('../models/Item/item.model.server');

const findItemById = (iid) =>
    itemModel.find({_id: iid});

const createItem = (item) =>
    itemModel.create(item);

const deleteItem = (iid) =>
    itemModel.findByIdAndDelete({_id: iid});

const updateItem = (iid, item) =>
    itemModel.findByIdAndUpdate({_id: iid}, item);

module.exports = {
  findItemById,
  createItem,
  deleteItem,
  updateItem
}
