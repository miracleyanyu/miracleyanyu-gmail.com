const menuDao = require('../data/daos/menu.dao.server');

const findMenuForRestaurant = (rid) =>
    menuDao.findMenuForRestaurant(rid);

module.exports = {
  findMenuForRestaurant
}
