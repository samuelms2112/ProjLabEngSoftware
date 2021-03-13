const { request } = require('express');
const database = require('../database/connection');

class TaskController {
    insert(req, res) {
        const { documento, Nome, data_nasc, email, tipoPessoa } = req.body;

        const tipoCadastro = 1;

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
            res.json({ message: "Fornecedor criado com sucesso !" });
        }).catch(error => {
            console.log(error);
        });
    }

    update(req, res) {
        const { documento, Nome, data_nasc, email, tipoPessoa } = req.body;

        database.where({
            documento: documento
        }).update({
            Nome: Nome,
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
        const { documento } = req.body;

        database.where({
            documento: documento
        }).del().table("pessoa").then(data => {
            res.json({ message: "Fornecedor Removido" })
        }).catch(error => {
            res.json(error);
        });
    }

    select(req, res) {
        const { documento } = req.body;

        database.select("*").table("pessoa").where({ documento: documento }).then(data => {
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

    selectTodos(req, res) {
        database.select("*").table("pessoa").then(data => {
            console.log(data);
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }




}

module.exports = new TaskController();