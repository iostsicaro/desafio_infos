const express = require('express');
const { login } = require('./controllers/login');
const { registerUser } = require('./controllers/user');
const loginMiddleware = require('./middlewares/loginMiddleware');

const routes = express();

// USER REGISTER ROUTE
routes.post('/register', registerUser);

// LOGIN ROUTE
routes.post('/login', login);

// MIDDLEWARE VERIFYING LOGIN
routes.use(loginMiddleware);

module.exports = routes;