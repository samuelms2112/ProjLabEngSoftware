const { request } = require('express');
const database = require('../database/connection');

class ProdutoController {
    insert(req, res) {
        const { nome, ean, grupo_id, preco, apagado } = req.body;

        console.log(nome, ean, grupo_id, preco, apagado);

        database.insert({
            nome,
            ean,
            grupo_id,
            preco
        }).table("produto001").then(data => {
            console.log(data);
            res.json({ message: "Produto criado com sucesso !" });
        }).catch(error => {
            console.log(error);
        });
    }

    update(req, res) {
        const { nome, ean, grupo_id, preco, apagado } = req.body;
        const id = req.params.id;

        console.log("Id do Cliente: " + id);

        database.where({
            id: id
        }).update({
            Nome: nome,
            ean: ean,
            grupo_id: grupo_id,
            preco: preco,
        }).table("produto001").then(data => {
            res.json({ message: "Produto atualizado com sucesso" });
        }).catch(error => {
            res.json(error);
        });
    }

    delete(req, res) {
        const id = req.params.id;

        console.log("Id do Cliente: " + id);

        database.where({
            id: id,
            apagado: 0
        }).update({
            apagado: 1
        }).table("produto001").then(data => {
            res.json({ message: "Produto Removido" });
        }).catch(error => {
            res.json(error);
        });
    }

    select(req, res) {
        const id = req.params.ean;

        console.log("Id do Cliente: " + id);


        database.select("*").table("produto001").where({ ean: id }).then(data => {
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

    // selectTodos(req, res) {
    //     database.select("*").table("produto001").where({ apagado: 0 }).then(data => {
    //         console.log(data);
    //         res.json(data);
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }
    selectTodos(req, res) {
        database.select("p.*", "g.nome AS grupo")
            .table("produto001 AS p")
            .innerJoin("grupo AS g", "p.grupo_id", "g.id")
            .where({ apagado: 0 })
            .then(data => {
                console.log(data);
                res.json(data);
            }).catch(error => {
                console.log(error);
            });
    }






}

module.exports = new ProdutoController();