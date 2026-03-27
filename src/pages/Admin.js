import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { Link } from 'react-router-dom';

function Admin() {
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    fetchMensagens();
  }, []);

  async function fetchMensagens() {
    const { data, error } = await supabase
      .from('contatos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.log('Erro ao carregar:', error);
    } else {
      setMensagens(data);
    }
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Link to="/">← Voltar para o Site</Link>
      <h1>Painel de Leads - Imperium Wolf</h1>
      <button onClick={fetchMensagens} style={{ marginBottom: '20px', padding: '10px' }}>Atualizar Lista</button>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', color: '#333' }}>
          <thead>
            <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Data</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nome</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Email</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {mensagens.map((m) => (
              <tr key={m.id}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{new Date(m.created_at).toLocaleDateString('pt-BR')}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{m.nome}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{m.email}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{m.mensagem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;