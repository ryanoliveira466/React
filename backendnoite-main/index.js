const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let produtos = [
  { id: 1, nome: "Notebook Gamer", preco: 4500, estoque: 10 },
  { id: 2, nome: "Mouse RGB", preco: 150, estoque: 30 },
  { id: 3, nome: "Teclado Mecânico", preco: 350, estoque: 20 }
];

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
  const produto = produtos.find(p => p.id === parseInt(req.params.id));
  produto ? res.json(produto) : res.status(404).json({ erro: "Produto não encontrado" });
});

app.post('/produtos', (req, res) => {
  const novoProduto = { id: Date.now(), ...req.body };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

app.put('/produtos/:id', (req, res) => {
  const index = produtos.findIndex(p => p.id === parseInt(req.params.id));
  if (index >= 0) {
    produtos[index] = { ...produtos[index], ...req.body };
    res.json(produtos[index]);
  } else {
    res.status(404).json({ erro: "Produto não encontrado" });
  }
});

app.delete('/produtos/:id', (req, res) => {
  produtos = produtos.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
