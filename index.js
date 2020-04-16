const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'currentUser',
  cookie : {
    maxAge : 1000 * 60 * 3
  },
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

require('./data/db');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
      "http://localhost:3001");
  res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

require('./controllers/user.controller.server')(app);
require('./controllers/review.controller.server')(app);
require('./controllers/order.controller.server')(app);
require('./controllers/payment.controller.server')(app);
require('./controllers/shoppingcart.controller.server')(app);
require('./controllers/menu.controller.server')(app);
require('./controllers/item.controller.server')(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/' + 'api.server.html')
});

app.listen(process.env.PORT || 3000);
