const { request } = require('express');
const database = require('../database/connection');

class EnderecoController {
    insertF(req, res) {
        const { documento, rua, numero, bairro, complemento, cidade, estado, } = req.body;

        const idPessoa = documento;

        console.log(idPessoa, rua, numero, bairro, complemento, cidade, estado);

        database.insert({
            rua,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            idPessoa
        }).table("endereco").then(data => {
            console.log(data);
            res = "Endereco Add com sucesso !";
        }).catch(error => {
            console.log(error);
        });
    }

    insert(req, res) {
        const { rua, numero, bairro, complemento, cidade, estado } = req.body;
        const idPessoa = req.params.doc;

        console.log(idPessoa, rua, numero, bairro, complemento, cidade, estado);

        database.insert({
            rua,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            idPessoa
        }).table("endereco").then(data => {
            console.log(data);
            res.json({ message: "Endereco Add com sucesso !" })
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
        }).table("endereco").then(data => {
            res.json({ message: "Endereco Atualizado com sucesso !" })
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
        }).del().table("endereco").then(data => {
            res.json({ message: "Endereco Removido" })
        }).catch(error => {
            res.json(error);
        });
    }

    select(req, res) {
        const idPessoa = req.params.doc;

        console.log("Id do idPessoa: " + idPessoa);


        database.select("*").table("endereco").where({
            idPessoa: idPessoa,
        }).then(data => {
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

    selectTodos(req, res) {
        database.select("*").table("endereco").then(data => {
            console.log(data);
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

}

module.exports = new EnderecoController();