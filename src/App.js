import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes Globais
import Navbar from "./components/Navbar"; 
import ScrollToTop from "./components/ScrollToTop"; // Reseta o scroll ao mudar de página
import WhatsAppButton from "./components/WhatsAppButton"; // Botão de contato direto

// Importando as páginas
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Contato from "./pages/Contato";
import Portifolio from "./pages/Portifolio"; 
import Sobre from "./pages/Sobre"; 
import Carreira from "./pages/Carreira"; 

// Configurações Globais
import "./i18n"; 
import "./App.css";

function App() {
  return (
    <Router>
      {/* Reseta o scroll para o topo em cada transição de rota */}
      <ScrollToTop /> 

      <div className="App bg-[#020617] min-h-screen flex flex-col">
        {/* Navbar Global com Logo e Tradução */}
        <Navbar /> 

        <main className="flex-grow">
          <Routes>
            {/* Rota Principal: ROI & Estratégia */}
            <Route path="/" element={<Home />} />
            
            {/* Painel Administrativo de Leads */}
            <Route path="/admin" element={<Admin />} />
            
            {/* Contato de Negócios */}
            <Route path="/contato" element={<Contato />} />
            
            {/* Portfólio de Engenharia */}
            <Route path="/portifolio" element={<Portifolio />} />
            
            {/* Sobre a Imperium Wolf */}
            <Route path="/sobre" element={<Sobre />} />

            {/* Recrutamento e Currículos */}
            <Route path="/carreira" element={<Carreira />} />
          </Routes>
        </main>

        {/* Canal de Resposta Rápida (WhatsApp) */}
        <WhatsAppButton />

        {/* Footer Executivo */}
        <footer className="py-12 text-center text-slate-600 bg-[#020617] border-t border-white/5 text-[10px] font-black tracking-[0.3em] uppercase">
          © 2026 Imperium Wolf // Digital Intelligence & Global Strategy
        </footer>
      </div>
    </Router>
  );
}

export default App;