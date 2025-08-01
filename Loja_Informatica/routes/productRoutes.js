const express = require('express')
const router = express.Router()
const controller = require('../controllers/produtoController')

router.get('/', controller.getProdutos)
router.get('/:id', controller.getProdutosById)
router.get('/', controller.createProduto)
router.get('/:id', controller.updateProduto)
router.get('/:id', controller.deleteProduto)

module.exports = router