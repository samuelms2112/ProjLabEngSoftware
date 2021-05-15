const { request } = require('express');
const database = require('../database/connection');
const bcrypt = require('bcrypt');

const saltRounds = bcrypt.genSaltSync(10);

class LoginController {
    insert(req, res) {
        const { nome, email, pass, admin } = req.body;

        console.log(nome, email, pass, admin);

        const senha = bcrypt.hashSync(pass, saltRounds);

        database.insert({
            nome,
            email,
            senha,
            admin
        }).table("login").then(data => {
            console.log(data);
            res.json({ message: "Login criado com sucesso !" });
        }).catch(error => {
            console.log(error);
        });
    }

    update(req, res) {
        const { nome, email, pass } = req.body;
        const id_user = req.params.id;

        console.log("Id do Login: " + id_user);

        if (!pass) {

            database.where({
                id: id_user
            }).update({
                nome,
                email
            }).table("login").then(data => {
                res.json({ message: "Login atualizado com sucesso sem senha" });
            }).catch(error => {
                res.json(error);
            });
        } else {
            const senha = bcrypt.hashSync(pass, saltRounds);
            database.where({
                id: id_user
            }).update({
                nome,
                email,
                senha
            }).table("login").then(data => {
                res.json({ message: "Login atualizado com sucesso com senha" });
            }).catch(error => {
                res.json(error);
            });
        }
    }

    delete(req, res) {
        const id_user = req.params.id;

        console.log("Id do Login: " + id_user);

        database.where({
            id: id_user,
            apagado: 0
        }).update({
            apagado: 1
        }).table("login").then(data => {
            res.json({ message: "Login Removido" });
        }).catch(error => {
            res.json(error);
        });
    }

    select(req, res) {
        const id_user = req.params.id;

        console.log("Id do Login: " + id_user);

        database.select("*").table("login").where({ id: id_user }).then(data => {
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

    selectTodos(req, res) {
        database.select("*").table("login").where({ apagado: 0 }).then(data => {
            console.log(data);
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

    login(req, res) {
        const { email, pass } = req.body;

        if (!email || !pass) {
            return res.status(400).json('incorrect form submission');
        }
        
        console.log("email retrieved from req: ", email);
        console.log("length of email retrieved from req: ", email.length);

        database.select('*').table('login')
            .where({ email: email }).then(data => {
                if (bcrypt.compare(pass, data[0].senha)) {
                    return database.select('*').from('login')
                        .where({ email: email })
                        .then(user => {
                            res.json(user)
                        })
                        .catch(err => res.status(400).json('incapaz de obter o usuário'))
                } else {
                    res.status(400).json('Senha Errada')
                }
            })
            .catch(err => res.status(400).json('Email Errado'))
    }
}

module.exports = new LoginController();