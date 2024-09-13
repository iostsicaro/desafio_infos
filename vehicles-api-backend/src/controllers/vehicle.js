const knex = require('../conexao');

const listarVeiculos = async (req, res) => {
    try {
        const veiculos = await knex('veiculos');

        if (!veiculos) {
            return res.status(404).json('Não foram encontrados veículos');
        }

        return res.status(200).json(veiculos);
    } catch (error) {
        const { data: { status_message }, status } = error.response;

        return res.status(status).json(status_message);
    }
}

const encontrarVeiculoId = async (req, res) => {
    const { id } = req.params;

    try {
        const veiculoEncontrado = await knex('veiculos').where({ id }).first();

        if (!veiculoEncontrado) {
            return res.status(404).json('Veículo não foi encontrado');
        }

        return res.status(200).json(veiculoEncontrado);
    } catch (error) {
        const { data: { status_message }, status } = error.response;

        return res.status(status).json(status_message);
    }
}

const criarVeiculo = async (req, res) => {
    const { placa, chassi, renavam, modelo, marca, ano } = req.body;

    try {
        const verificarDuplicidade = await knex('veiculos').where({ placa, renavam }).first();

        if (verificarDuplicidade) {
            return res.status(400).json('Veículo já cadastrado na base de dados');
        }

        const novoVeiculo = await knex('veiculos').insert({ 
            placa, 
            chassi, 
            renavam, 
            modelo, 
            marca, 
            ano 
        });

        if (!novoVeiculo) {
            return res.status(400).json('Não foi possível cadastrar veículo na base de dados')
        }

        return res.status(200).json('Veículo cadastrado com sucesso.')
    } catch (error) {
        const { data: { status_message }, status } = error.response;

        return res.status(status).json(status_message);
    }
}

const atualizarVeiculo = async (req, res) => {
    const { id } = req.params;
    const { placa, chassi, renavam, modelo, marca, ano } = req.body;

    try {
        const encontrarVeiculo = await knex('veiculos').where({ id }).first();

        if (!encontrarVeiculo) {
            return res.status(404).json('Veículo não foi encontrado');
        }

        const veiculoAtualizado = await knex('veiculos').update({
            placa,
            chassi,
            renavam,
            modelo,
            marca,
            ano
        }).where({ id });

        if (!veiculoAtualizado) {
            return res.status(400).json('Não foi possível atualizar veículo.');
        }

        return res.status(200).json('Veículo atualizado com sucesso');
    } catch (error) {
        const { data: { status_message }, status } = error.response;

        return res.status(status).json(status_message);
    }
}

const removerVeiculo = async (req, res) => {
    const { id } = req. params;

    try {
        const veiculoEncontrado = await knex('veiculos').where({ id }).first();

        if (!veiculoEncontrado) {
            return res.status(404).json('Veículo não foi encontrado');
        }

        const veiculoRemovido = await knex('veiculos').del().where({ id });

        if (!veiculoRemovido) {
            return res.status(400).json('Veículo não foi removido')
        }

        return res.status(200).json('Veículo removido com sucesso');
    } catch (error) {
        const { data: { status_message }, status } = error.response;

        return res.status(status).json(status_message);
    }
}

module.exports = {
    listarVeiculos,
    encontrarVeiculoId,
    criarVeiculo,
    atualizarVeiculo,
    removerVeiculo
}