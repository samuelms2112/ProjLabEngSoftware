const { request } = require('express');
const database = require('../database/connection');

class ContatoController {
    insertF(req, res) {
        const { documento, telefone } = req.body;

        const idPessoa = documento;

        console.log(idPessoa, telefone);

        database.insert({
            telefone,
            idPessoa
        }).table("contato").then(data => {
            console.log(data);
            res = "contato Add com sucesso !";
        }).catch(error => {
            console.log(error);
        });
    }

    insert(req, res) {
        const { idPessoa, telefone } = req.body;

        console.log(idPessoa, telefone);

        database.insert({
            telefone,
            idPessoa
        }).table("contato").then(data => {
            console.log(data);
            res.json({ message: "contato Add com sucesso !" })
        }).catch(error => {
            console.log(error);
        });
    }

    update(req, res) {
        const { rua, numero, bairro, complemento, cidade, estado } = req.body;
        const idPessoa = req.params.doc;
        const id = req.params.id;

        console.log("Id do idPessoa: " + idPessoa);

        database.where({
            idPessoa: idPessoa,
            id: id
        }).update({
            rua: rua,
            numero: numero,
            bairro: bairro,
            complemento: complemento,
            cidade: cidade,
            estado: estado,
        }).table("contato").then(data => {
            res.json({ message: "contato Atualizado com sucesso !" })
        }).catch(error => {
            res.json(error);
        });
    }

    delete(req, res) {
        const idPessoa = req.params.doc;
        const id = req.params.id;

        console.log("Id do idPessoa: " + idPessoa);

        database.where({
            idPessoa: idPessoa,
            id: id
        }).del().table("contato").then(data => {
            res.json({ message: "contato Removido" })
        }).catch(error => {
            res.json(error);
        });
    }

    select(req, res) {
        const idPessoa = req.params.doc;

        console.log("Id do idPessoa: " + idPessoa);


        database.select("*").table("contato").where({
            idPessoa: idPessoa,
        }).then(data => {
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

    selectTodos(req, res) {
        database.select("*").table("contato").then(data => {
            console.log(data);
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

}

module.exports = new ContatoController();