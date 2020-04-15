const userDao = require('../data/daos/user.dao.server');

const findAllUsers = () =>
    userDao.findAllUsers();

const findUserById = (uid) =>
    userDao.findUserById(uid);

const logIn = (userName, password) =>
    userDao.logIn(userName, password);

const createUser = (user) =>
    userDao.createUser(user);

const updateUser = (uid, user) =>
    userDao.updateUser(uid, user);

const deleteUser = (uid) =>
    userDao.deleteUser(uid);

const placeOrder = (uid, order) =>
    userDao.placeOrder(uid, order);

const writeReview = (uid, review) =>
    userDao.writeReview(uid, review);

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  placeOrder,
  writeReview,
  logIn
}
