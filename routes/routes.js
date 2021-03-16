const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const FornecedorController = require('../controllers/FornecedorController');

router.post('/novaTarefa', TaskController.insert);
router.get('/listarTarefas', TaskController.selectTodos);
router.post('/listarUmaTarefa', TaskController.select);
router.post('/removerTarefa', TaskController.delete);

router.post('/fornecedor/novo', FornecedorController.insert); //--> Novo 
router.put('/fornecedor/:doc/editar', FornecedorController.update); //--> Editar 
router.get('/fornecedor/listar', FornecedorController.selectTodos); //--> Listar 
router.get('/fornecedor/:doc/listar', FornecedorController.select); //--> Pesquisar 
router.delete('/fornecedor/:doc/remover', FornecedorController.delete); //--> Remover


module.exports = router;