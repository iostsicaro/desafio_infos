const knex = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const hashPassword = require('../hashPassword');

const login = async (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(404).json('Email e senha são obrigatórios')
    }

    try {
        const usuario = await knex('usuarios').where({ email: email }).first();

        if (!usuario) {
            return res.status(400).json("Usuário não foi encontrado");
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if (!senhaValida) {
            return res.status(400).json('E-mail or senha inválidos');
        }

        const tokenUsuario = {
            id: usuario.id,
            email: usuario.email
        }

        const token = jwt.sign(tokenUsuario, hashPassword, { expiresIn: '8h' });

        const { senha: _, ...dadosUsuario } = usuario;

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        })
    } catch (error) {
        return res.status(400).json('USUÁRIO NÃO ENCONTRADO');
    }
}

module.exports = {
    login
};