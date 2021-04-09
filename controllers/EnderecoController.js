const { request } = require('express');
const database = require('../database/connection');

class FornecedorController {
    insert(req, res) {
        const { documento, rua, numero, bairro, complemento, cidade, estado } = req.body;

        const idPessoa = documento;

        console.log(idPessoa, rua, numero, bairro, complemento, cidade, estado);

        database.insert({
            rua,
            numero,
            bairro,
            data_nasc,
            complemento,
            cidade,
            estado,
            idPessoa
        }).table("endereco").then(data => {
            console.log(data);
            res.json({ message: "Endereco Add com sucesso !" });
        }).catch(error => {
            console.log(error);
        });
    }

    update(req, res) {
        const { nome, nomeFantasia, data_nasc, email, tipoPessoa } = req.body;
        const documento = req.params.doc;

        console.log("Id do fornecedor: " + documento);

        database.where({
            documento: documento
        }).update({
            nome: nome,
            nomeFantasia: nomeFantasia,
            data_nasc: data_nasc,
            email: email,
            tipoPessoa: tipoPessoa,
        }).table("pessoa").then(data => {
            res.json({ message: "Fornecedor atualizado com sucesso" });
        }).catch(error => {
            res.json(error);
        });
    }

    delete(req, res) {
        const documento = req.params.doc;

        console.log("Id do fornecedor: " + documento);

        database.where({
            documento: documento
        }).del().table("pessoa").then(data => {
            res.json({ message: "Fornecedor Removido" })
        }).catch(error => {
            res.json(error);
        });
    }

    select(req, res) {
        const documento = req.params.doc;

        console.log("Id do fornecedor: " + documento);


        database.select("*").table("pessoa").where({
            documento: documento,
            tipoCadastro: 1
        }).then(data => {
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

    selectTodos(req, res) {
        database.select("*").table("pessoa").where({ tipoCadastro: 1 }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }




}

module.exports = new FornecedorController();