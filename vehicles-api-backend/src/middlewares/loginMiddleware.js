const knex = require('../conexao');
const jwt = require('jsonwebtoken');
const hashPassword = require('../hashPassword');

const loginMiddleware = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json('Acesso Negado')
    }

    try {
        const token = authorization.replace('Bearer ', '').trim();

        const { id } = jwt.verify(token, hashPassword);

        const usuarioVerificado = await knex('usuarios').where({ id: id }).first();

        if (!usuarioVerificado) {
            return res.status.json('Usuário não foi encontrado');
        }

        const { senha, ...usuario } = usuarioVerificado;

        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = loginMiddleware;