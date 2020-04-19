const userService = require('../services/user.service.server');

module.exports = (app) => {

  const register = (req, res) => {
    userService.createUser(req.body)
      .then(user => {
        req.session.user = user;
        res.send(user);
      })
  }

  const login = (req, res) => {
    userService.logIn(req.body.userName, req.body.password)
      .then(user => {
        if (user != null) {
          req.session.user = user;
          this.user = req.session.user;
          return res.send(user);
        }
        res.send({result: false});
      })
  }

  const profile = (req, res) => {
    res.send(req.session.user);
  }

  const logout = (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  }


  app.post('/api/login', login);
  app.post('/api/register', register);
  app.post('/api/profile', profile);
  app.post('/api/logout', logout);


  app.post('/api/users', (req, res) => {
    userService.createUser(req.body)
      .then(user => res.send(user));
  });
  app.get('/api/users', (req, res) => {
    userService.findAllUsers()
      .then(users => res.json(users))
  });
  app.get('/api/users/:username', (req, res) => {
    userService.findUserByUserName(req.params['username'])
    .then(users => res.json(users))
  });
  app.get('/api/users/:uid', (req, res) => {
    userService.findUserById(req.params['uid'])
    .then(user => res.send((user)))
  });
  app.put('/api/users/:uid', (req, res) => {
    userService.updateUser(req.params['uid'], req.body)
      .then(user => res.send(user))
  });
  app.delete('/api/users/:uid', (req, res) => {
    userService.deleteUser(req.params['uid'])
      .then(user => res.send("Successfully deleted."))
  })

}
