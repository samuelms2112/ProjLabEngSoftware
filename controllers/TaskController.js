const { request } = require('express');
const database = require('../database/connection');

class TaskController {
    insert(req, res) {
        const { tarefa, descricao, responsavel } = req.body;

        console.log(tarefa, descricao, responsavel);

        database.insert({ tarefa, descricao, responsavel }).table("tasks").then(data => {
            console.log(data);
            res.json({ message: "Tarefa criada com sucesso !" });
        }).catch(error => {
            console.log(error);
        });
    }

    update(req, res) {
        const { id, tarefa, descricao, responsavel } = req.body;

        database.where({
            id: id
        }).update({
            tarefa: tarefa,
            descricao: descricao,
            responsavel: responsavel
        }).table("tasks").then(data => {
            res.json({ message: "Tarefa atualizar com sucesso" });
        }).catch(error => {
            res.json(error);
        });
    }

    delete(req, res) {
        const { id } = req.body;

        database.where({
            id: id
        }).del().table("tasks").then(data => {
            res.json({ message: "Tarefa Removida" })
        }).catch(error => {
            res.json(error);
        });
    }

    select(req, res) {
        const { id } = req.body;

        database.select("*").table("tasks").where({ id: id }).then(tarefa => {
            res.json(tarefa);
        }).catch(error => {
            console.log(error);
        });
    }

    selectTodos(req, res) {
        database.select("*").table("tasks").then(tarefas => {
            console.log(tarefas);
            res.json(tarefas);
        }).catch(error => {
            console.log(error);
        });
    }




}

module.exports = new TaskController();