const { request } = require('express');
const database = require('../database/connection');

class VendaController {

    NovaVenda(req, res) {
        const { pessoa_id, datacompra } = req.body;

        console.log(pessoa_id, datacompra);

        database.insert({
            pessoa_id,
            datacompra
        }).table("venda").then(data => {
            console.log("oiiii " + data);
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

    NovoItem(req, res) {
        const { prod_id, venda_id, qtde, valor } = req.body;

        console.log(prod_id, venda_id, qtde);

        database.insert({
            prod_id,
            venda_id,
            qtde,
            valor
        }).table("vendaitens").then(data => {
            console.log(data);
            res.json({ message: "ok" })
        }).catch(error => {
            console.log(error);
        });
    }

    selectItem(req, res) {
        const { venda_id } = req.body;

        console.log(venda_id);


        database.select("*").table("vendaitens").where({ venda_id: venda_id }).then(data => {
            res.json(data);
        }).catch(error => {
            console.log(error);
        });
    }

    removerItem(req, res) {
        const { id } = req.body;

        console.log(id);


        database.delete().table("vendaitens").where({ id: id }).then(data => {
            res.json({ message: "Produto Removido" });
        }).catch(error => {
            console.log(error);
        });
    }

}

module.exports = new VendaController();