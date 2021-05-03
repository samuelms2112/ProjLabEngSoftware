const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const FornecedorController = require('../controllers/FornecedorController');
const EnderecoController = require('../controllers/EnderecoController');
const ClienteController = require('../controllers/ClienteController');
const ContatoController = require('../controllers/ContatoController');

// router.post('/novaTarefa', TaskController.insert);
// router.get('/listarTarefas', TaskController.selectTodos);
// router.post('/listarUmaTarefa', TaskController.select);
// router.post('/removerTarefa', TaskController.delete);

router.post('/fornecedor/', FornecedorController.insert); //--> Novo 
router.put('/fornecedor/:doc/', FornecedorController.update); //--> Editar 
router.get('/fornecedor/', FornecedorController.selectTodos); //--> Listar 
router.get('/fornecedor/:doc/', FornecedorController.select); //--> Pesquisar 
router.delete('/fornecedor/:doc/', FornecedorController.delete); //--> Remover

router.post('/cliente/', ClienteController.insert); //--> Novo 
router.put('/cliente/:doc/', ClienteController.update); //--> Editar 
router.get('/cliente/', ClienteController.selectTodos); //--> Listar 
router.get('/cliente/:doc/', ClienteController.select); //--> Pesquisar 
router.delete('/cliente/:doc/', ClienteController.delete); //--> Remover

router.post('/endereco/novo', EnderecoController.insert); //--> Novo 
router.put('/endereco/:doc/editar/:id', EnderecoController.update); //--> Editar 
router.get('/endereco/listar', EnderecoController.selectTodos); //--> Listar 
router.get('/endereco/:doc/listar/', EnderecoController.select); //--> Pesquisar 
router.delete('/endereco/:doc/remover/:id', EnderecoController.delete); //--> Remover

router.post('/contato/novo', ContatoController.insert); //--> Novo 
router.put('/contato/:doc/editar/:id', ContatoController.update); //--> Editar 
router.get('/contato/listar', ContatoController.selectTodos); //--> Listar 
router.get('/contato/:doc/listar/', ContatoController.select); //--> Pesquisar 
router.delete('/contato/:doc/remover/:id', ContatoController.delete); //--> Remover

module.exports = router;