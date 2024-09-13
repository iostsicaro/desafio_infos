const knex = require('../conexao');
const bcrypt = require('bcrypt');

const cadastroUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const verifyUserEmail = await knex('usuarios').where({ email }).first();

        if (verifyUserEmail) {
            return res.status(400).json('E-mail já cadastrado')
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10);

        const usuario = await knex('usuarios').insert({ nome, email, senha: senhaCriptografada });

        if (!usuario) {
            return res.status(404).json('Error 404')
        }

        return res.status(200).json('Usuário registrado com sucesso')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = {
    cadastroUsuario
};