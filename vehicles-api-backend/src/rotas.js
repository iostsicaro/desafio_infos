const express = require('express');
const { login } = require('./controllers/login');
const { cadastroUsuario } = require('./controllers/user');
const loginMiddleware = require('./middlewares/loginMiddleware');
const { listarVeiculos, encontrarVeiculoId , criarVeiculo, atualizarVeiculo, removerVeiculo } = require('./controllers/vehicle');
 
const rotas = express();

// USER REGISTER ROUTE
rotas.post('/cadastro', cadastroUsuario);

// LOGIN ROUTE
rotas.post('/login', login);

// MIDDLEWARE VERIFYING LOGIN
rotas.use(loginMiddleware);

// VEHICLES ROUTES
routes.get('/listarveiculos', listarVeiculos);
routes.get('/veiculo/:id', encontrarVeiculoId);
routes.post('/criarveiculo', criarVeiculo);
routes.put('/atualizarveiculo/:id', atualizarVeiculo);
routes.delete('/removerveiculo/:id', removerVeiculo);

module.exports = rotas;