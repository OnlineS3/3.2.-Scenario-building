const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const api = require('./server/routes/api');

const userDAO = require('./server/DAO/user');
const models = require('./server/models/index');
const initializer = require('./server/seeders/initializer');

// Auth0

const session = require('express-session');

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const clientSecret = require('./clientSecret.js');

//const initializer = require('./server/seeders/initializer');

const app = express();
const port = process.env.PORT || '8080';
const compiler = webpack(config);

// Configure Auth0

const strategy = new Auth0Strategy({
  domain: 'onlines3.eu.auth0.com',
  clientID: 'Hc4L2CjUyIgyxuuO3aLYMoF7OQq7Fw4s',
  clientSecret: clientSecret,
  callbackURL:  'http://localhost:8080/callback'
}, (accessToken, refreshToken, extraParams, profile, done) => {
  return done(null, profile);
});
passport.use(strategy);
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());


app.use(
  session({
    secret: 'shhhhhhhhh',
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));



app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Api stuff

app.use(function(req, res, next) {
  res.locals.loggedIn = false;
  if (req.session.passport && typeof req.session.passport.user != 'undefined') {
    res.locals.loggedIn = true;
  }
  console.log(req.session.passport);
  next();
});

app.use('/api', api);
app.all(
  '/login',
  passport.authenticate('auth0', {
    clientID: 'Hc4L2CjUyIgyxuuO3aLYMoF7OQq7Fw4s',
    domain: 'onlines3.eu.auth0.com',
    redirectUri: 'http://localhost:8080/callback',
    audience: 'https://onlines3.eu.auth0.com/userinfo',
    responseType: 'code',
    scope: 'openid profile'
  }),
  function(req, res) {
    res.redirect('/application');
  });
app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

app.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/'
  }),
  function(req, res) {
    console.log("Authenticated succesfully, attempting to create a user.");
    userDAO.checkAndCreate(req.session.passport.user.displayName);
    res.redirect(req.session.returnTo || '/application');
  }
);


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//models.sequelize.sync({force: true});
initializer.initDb();



app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:8080');
});
