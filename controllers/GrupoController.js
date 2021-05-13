const { request } = require('express');
const database = require('../database/connection');

class GrupoController {
    insert(req, res) {
        const { nome } = req.body;

        console.log(nome);

        database.insert({
            nome,
        }).table("grupo").then(data => {
            console.log(data);
            res.json({ message: "Grupo criado com sucesso !" });
        }).catch(error => {
            console.log(error);
        });
    }

    update(req, res) {
        const { nome } = req.body;
        const id = req.params.id;

        console.log("Id do Cliente: " + id);

        database.where({
            id: id
        }).update({
            Nome: nome
        }).table("grupo").then(data => {
            res.json({ message: "Grupo atualizado com sucesso" });
        }).catch(error => {
            res.json(error);
        });
    }

    // delete(req, res) {
    //     const id = req.params.id;

    //     console.log("Id do Cliente: " + id);

    //     database.where({
    //         id: id
    //     }).update({
    //         status: 0
    //     }).table("grupo").then(data => {
    //         res.json({ message: "Grupo Removido" });
    //     }).catch(error => {
    //         res.json(error);
    //     });
    // }

    select(req, res) {
        const id = req.params.id;

        console.log("Id do Cliente: " + id);


        database.select("*").table("grupo")
            .where({ id: id })
            .then(data => {
                res.json(data);
            }).catch(error => {
                console.log(error);
            });
    }

    selectTodos(req, res) {
        database.select("*").table("grupo")
            .then(data => {
                console.log(data);
                res.json(data);
            }).catch(error => {
                console.log(error);
            });
    }


}

module.exports = new GrupoController();