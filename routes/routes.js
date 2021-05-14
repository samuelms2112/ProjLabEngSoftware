const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const FornecedorController = require('../controllers/FornecedorController');
const EnderecoController = require('../controllers/EnderecoController');
const ClienteController = require('../controllers/ClienteController');
const ContatoController = require('../controllers/ContatoController');
const LoginController = require('../controllers/LoginController');
const GrupoController = require('../controllers/GrupoController');
const ProdutoController = require('../controllers/ProdutoController');

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

router.post('/endereco/', EnderecoController.insert); //--> Novo 
router.put('/endereco/:doc/:id', EnderecoController.update); //--> Editar 
router.get('/endereco/', EnderecoController.selectTodos); //--> Listar 
router.get('/endereco/:doc/', EnderecoController.select); //--> Pesquisar 
router.delete('/endereco/:doc/:id', EnderecoController.delete); //--> Remover

router.post('/contato/', ContatoController.insert); //--> Novo 
router.put('/contato/:doc/:id', ContatoController.update); //--> Editar 
router.get('/contato/', ContatoController.selectTodos); //--> Listar 
router.get('/contato/:doc/', ContatoController.select); //--> Pesquisar 
router.delete('/contato/:doc/:id', ContatoController.delete); //--> Remover

router.post('/user/', LoginController.insert); //--> Novo 
router.put('/user/:id/', LoginController.update); //--> Editar 
router.get('/user/', LoginController.selectTodos); //--> Listar 
router.get('/user/:id/', LoginController.select); //--> Pesquisar 
router.delete('/user/:id/', LoginController.delete); //--> Remover
router.get('/login/', LoginController.login); //--> Logar 

router.post('/grupo/', GrupoController.insert); //--> Novo 
router.put('/grupo/:id/', GrupoController.update); //--> Editar 
router.get('/grupo/', GrupoController.selectTodos); //--> Listar 
router.get('/grupo/:id/', GrupoController.select); //--> Pesquisar 

router.post('/produto/', ProdutoController.insert); //--> Novo 
router.put('/produto/:id/', ProdutoController.update); //--> Editar 
router.get('/produto/', ProdutoController.selectTodos); //--> Listar 
router.get('/produto/:id/', ProdutoController.select); //--> Pesquisar 
router.delete('/produto/:id/', ProdutoController.delete); //--> Remover

module.exports = router;