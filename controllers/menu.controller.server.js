const menuService = require('../services/menu.service.server');

module.exports = (app) => {
  app.get('/api/menus/restaurants/:rid', (req, res) => {
    menuService.findMenuForRestaurant(req.params['rid'])
      .then(menu => res.send(menu))
  })
}
