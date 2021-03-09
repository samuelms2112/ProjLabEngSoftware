const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');

router.post('/novaTarefa', TaskController.insert);
router.get('/listarTarefas', TaskController.selectTodos);
router.post('/listarUmaTarefa', TaskController.select);
router.post('/removerTarefa', TaskController.delete);

module.exports = router;