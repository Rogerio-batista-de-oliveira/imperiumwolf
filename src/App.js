import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import './App.css'; // << VERIFIQUE SE ESTA LINHA ESTÁ AQUI

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const enviarMensagem = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('contatos')
      .insert([{ nome, email, mensagem }]);

    if (error) {
      alert("Erro ao enviar: " + error.message);
    } else {
      alert("Mensagem enviada com sucesso para a Imperium Wolf!");
      setNome(''); setEmail(''); setMensagem('');
    }
  };

  return (
    <div className="container"> {/* << ADICIONEI ESTA CLASSE */}
      <h1>Imperium Wolf</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>Software House & Soluções Digitais</p>
      
      <form onSubmit={enviarMensagem}>
        <input 
          placeholder="Seu Nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
          required 
        />
        <input 
          type="email" 
          placeholder="Seu melhor E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Como podemos ajudar a sua empresa?" 
          value={mensagem} 
          rows="4"
          onChange={(e) => setMensagem(e.target.value)} 
          required 
        />
        <button type="submit">Solicitar Orçamento Grátis</button>
      </form>
    </div>
  );
}

export default App;