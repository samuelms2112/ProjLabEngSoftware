const { request } = require('express');
const database = require('../database/connection');
const EnderecoController = require('../controllers/EnderecoController');

class FornecedorController {
    insert(req, res) {
        const { documento, nome, nomeFantasia, data_nasc, email, tipoPessoa } = req.body;

        const tipoCadastro = 1;

        console.log(documento, nome, data_nasc, email, tipoPessoa);

        database.insert({
            documento,
            nome,
            nomeFantasia,
            data_nasc,
            email,
            tipoPessoa,
            tipoCadastro
        }).table("pessoa").then(data => {
            console.log(data);
            const m = "";
            EnderecoController.insertF(req, m);
            res.json({ message: "Fornecedor criado com sucesso !  " + m });
        }).catch(error => {
            console.log(error);
        });
    }

    update(req, res) {
        const { nome, nomeFantasia, email, tipoPessoa } = req.body;
        const documento = req.params.doc;

        console.log("Id do fornecedor: " + documento);

        database.where({
            documento: documento
        }).update({
            nome: nome,
            nomeFantasia: nomeFantasia,
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

        // database.where({
        //     documento: documento
        // }).del().table("pessoa").then(data => {
        //     res.json({ message: "Fornecedor Removido" })
        // }).catch(error => {
        //     res.json(error);
        // });

        database.where({
            documento: documento,
            status: 1
        }).update({
            status: 0
        }).table("pessoa").then(data => {
            res.json({ message: "Fornecedor Removido" });
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
        database.select("*").table("pessoa").where({ tipoCadastro: 1, status: 1 }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }




}

module.exports = new FornecedorController();