const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    preco: {type: Number, required: true},
    descricao: String,
    categoria: String,
    estoque: Number,
    
}, { timestamps: true})

module.exports = mongoose.model('Produto', produtoSchema)