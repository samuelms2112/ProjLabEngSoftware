const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
const FornecedorController = require('../controllers/FornecedorController');

router.post('/novaTarefa', TaskController.insert);
router.get('/listarTarefas', TaskController.selectTodos);
router.post('/listarUmaTarefa', TaskController.select);
router.post('/removerTarefa', TaskController.delete);

router.post('/novoFornecedor', FornecedorController.insert);
router.post('/editarFornecedor', FornecedorController.update);
router.get('/listarFornecedores', FornecedorController.selectTodos);
router.post('/listarUmFornecedor', FornecedorController.select);
router.post('/removerFornecedor', FornecedorController.delete);

module.exports = router;