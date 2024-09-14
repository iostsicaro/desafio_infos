const express = require('express');
const { login } = require('./controllers/login');
const { cadastroUsuario } = require('./controllers/user');
const loginMiddleware = require('./middlewares/loginMiddleware');
const { listarVeiculos, encontrarVeiculoId , criarVeiculo, atualizarVeiculo, removerVeiculo } = require('./controllers/vehicle');
 
const rotas = express();

// USER REGISTER ROUTE
rotas.post('/cadastrar', cadastroUsuario);

// LOGIN ROUTE
rotas.post('/login', login);

// MIDDLEWARE VERIFYING LOGIN
rotas.use(loginMiddleware);

// VEHICLES ROUTES
rotas.get('/listarveiculos', listarVeiculos);
rotas.get('/veiculo/:id', encontrarVeiculoId);
rotas.post('/criarveiculo', criarVeiculo);
rotas.put('/atualizarveiculo/:id', atualizarVeiculo);
rotas.delete('/removerveiculo/:id', removerVeiculo);

module.exports = rotas;