const { request } = require('express');
const database = require('../database/connection');
const bcrypt = require('bcrypt');

const saltRounds = 10;

class LoginController {
    insert(req, res) {
        const { nome, email, senha, admin } = req.body;

        console.log(nome, email, senha, admin);

        const Hashedpassword = await bcrypt.hash(req.body.senha, saltRounds);

        database.insert({
            nome,
            email,
            Hashedpassword,
            admin
        }).table("login").then(data => {
            console.log(data);
            res.json({ message: "Login criado com sucesso !" });
        }).catch(error => {
            console.log(error);
        });
    }

    update(req, res) {
        const { nome, email, senha } = req.body;
        const id_user = req.params.id;

        console.log("Id do Login: " + id_user);

        if (!senha) {
            database.where({
                id: id_user
            }).update({
                nome,
                email
            }).table("login").then(data => {
                res.json({ message: "Login atualizado com sucesso" });
            }).catch(error => {
                res.json(error);
            });
        } else {
            database.where({
                id: id_user
            }).update({
                nome,
                email,
                Hashedpassword
            }).table("login").then(data => {
                res.json({ message: "Login atualizado com sucesso" });
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
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json('incorrect form submission');
        }
        console.log("email retrieved from req: ", email);
        console.log("length of email retrieved from req: ", email.length);

        database.select('email, senha').table('login')
        .where( 'email', '=', req.email)
        .first
        .then(data => {
          const isValid = bcrypt.compare(password, data[0].hash);
          if (isValid) {
            return database.select('*').from('login')
              .where('email', '=', email)
              .then(user => {
                res.json(user[0])
              })
              .catch(err => res.status(400).json('unable to get user'))
          } else {
            res.status(400).json('wrong password')
          }
        })
        .catch(err => res.status(400).json('wrong email'))
    }
}

module.exports = new LoginController();