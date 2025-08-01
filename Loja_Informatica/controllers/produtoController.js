const Produto = require('../models/Produto')

// GET /api/produtos
exports.getProdutos = async (req, res) => {
    const produtos = await Produto.find()
    res.json(produtos)
}

// GET /api/produtos:id
exports.getProdutosById = async (req, res) => {
    try {
        const produtos = await Produto.findById(req.params.id)
        if (!produtos) {
            return res.status(404).json({ msg: 'Produto não encontrado'})
        }
        res.json(produtos)
    } catch (error) {
        res.status(404).json({ msg: 'ID inválido'})
    }
}



// POST /api/produtos
exports.createProduto = async (req, res) => {
    const novoProduto = new Produto(req.body)
    const salvo = await novoProduto.save()
    res.status(201).json(salvo)
}

// PUT /api/produtos:id
exports.updateProduto = async (req,res) => {
    const atualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json(atualizado)
}


// DELETE /api/produtos/:id
exports.deleteProduto = async (req,res) => {
    await Produto.findByIdAndDelete(req.params.id)
    res.json({msg: 'Produto removido com sucesso'})
}