import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = "https://render-express-back.onrender.com"; // substituir pela URL da api do render AULA 22/05

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({ nome: "", preco: "", estoque: "" });
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProdutos();
  }, []);

  const fetchProdutos = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}/produtos`);
      setProdutos(res.data);
    } catch {
      setError("Erro ao carregar produtos.");
    }
    setLoading(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.nome || !form.preco || !form.estoque) {
      setError("Preencha todos os campos.");
      return;
    }
    setError("");
    try {
      if (editId) {
        await axios.put(`${API_URL}/produtos/${editId}`, {
          nome: form.nome,
          preco: Number(form.preco),
          estoque: Number(form.estoque),
        });
      } else {
        await axios.post(`${API_URL}/produtos`, {
          nome: form.nome,
          preco: Number(form.preco),
          estoque: Number(form.estoque),
        });
      }
      setForm({ nome: "", preco: "", estoque: "" });
      setEditId(null);
      fetchProdutos();
    } catch {
      setError("Erro ao salvar produto.");
    }
  };

  const handleEdit = produto => {
    setForm({
      nome: produto.nome,
      preco: produto.preco,
      estoque: produto.estoque,
    });
    setEditId(produto.id);
  };

  const handleDelete = async id => {
    if (!window.confirm("Confirma exclusão?")) return;
    try {
      await axios.delete(`${API_URL}/produtos/${id}`);
      fetchProdutos();
    } catch {
      setError("Erro ao excluir produto.");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Gestão de Produtos</h1>

      {error && <p className="error">{error}</p>}

      {loading ? (
        <p>Carregando produtos...</p>
      ) : (
        <table className="tabela">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(p => (
              <tr key={p.id}>
                <td>{p.nome}</td>
                <td>R$ {p.preco.toFixed(2)}</td>
                <td>{p.estoque}</td>
                <td>
                  <button className="btn editar" onClick={() => handleEdit(p)}>Editar</button>
                  <button className="btn excluir" onClick={() => handleDelete(p.id)}>Excluir</button>
                </td>
              </tr>
            ))}
            {produtos.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>Nenhum produto disponível.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <h2>{editId ? "Editar Produto" : "Adicionar Produto"}</h2>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          name="nome"
          placeholder="Nome do produto"
          value={form.nome}
          onChange={handleChange}
        />
        <input
          type="number"
          name="preco"
          placeholder="Preço"
          value={form.preco}
          onChange={handleChange}
        />
        <input
          type="number"
          name="estoque"
          placeholder="Estoque"
          value={form.estoque}
          onChange={handleChange}
        />
        <button className="btn salvar" type="submit">
          {editId ? "Salvar Alterações" : "Adicionar"}
        </button>
        {editId && (
          <button type="button" className="btn cancelar" onClick={() => {
            setEditId(null);
            setForm({ nome: "", preco: "", estoque: "" });
            setError("");
          }}>Cancelar</button>
        )}
      </form>
    </div>
  );
}
