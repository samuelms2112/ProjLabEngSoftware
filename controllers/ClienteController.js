const { request } = require('express');
const database = require('../database/connection');

class ClienteController {
    insert(req, res) {
        const { documento, Nome, data_nasc, email, tipoPessoa } = req.body;

        const tipoCadastro = 0;

        console.log(documento, Nome, data_nasc, email, tipoPessoa);

        database.insert({
            documento,
            Nome,
            data_nasc,
            email,
            tipoPessoa,
            tipoCadastro
        }).table("pessoa").then(data => {
            console.log(data);
            res.json({ message: "Cliente criado com sucesso !" });
        }).catch(error => {
            console.log(error);
        });
    }

    update(req, res) {
        const { Nome, data_nasc, email, tipoPessoa } = req.body;
        const documento = req.params.doc;

        console.log("Id do Cliente: " + documento);

        database.where({
            documento: documento
        }).update({
            Nome: Nome,
            data_nasc: data_nasc,
            email: email,
            tipoPessoa: tipoPessoa,
        }).table("pessoa").then(data => {
            res.json({ message: "Cliente atualizado com sucesso" });
        }).catch(error => {
            res.json(error);
        });
    }

    delete(req, res) {
        const documento = req.params.doc;

        console.log("Id do Cliente: " + documento);

        database.where({
            documento: documento
        }).del().table("pessoa").then(data => {
            res.json({ message: "Cliente Removido" })
        }).catch(error => {
            res.json(error);
        });
    }

    select(req, res) {
        const documento = req.params.doc;

        console.log("Id do Cliente: " + documento);


        database.select("*").table("pessoa").where({ documento: documento, tipoCadastro: 0 }).then(data => {
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

    selectTodos(req, res) {
        database.select("*").table("pessoa").where({ tipoCadastro: 0 }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }






}

module.exports = new ClienteController();