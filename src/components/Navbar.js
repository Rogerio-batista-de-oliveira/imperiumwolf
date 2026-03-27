import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Globe, briefcase } from 'lucide-react'; // Importando ícone de maleta para carreira

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <header className="sticky top-0 z-[100] w-full">
      {/* BARRA DE IDIOMAS GLOBAL */}
      <div className="bg-slate-950 text-slate-400 py-2 px-6 flex justify-end items-center gap-6 text-[10px] font-black tracking-[0.2em] border-b border-white/5 uppercase">
          <div className="flex items-center gap-2 mr-4 text-blue-500">
            <Globe size={12} /> <span>{t('select_language')}</span>
          </div>
          <span onClick={() => changeLanguage('en')} className="cursor-pointer hover:text-white transition-colors">EN</span>
          <span onClick={() => changeLanguage('es')} className="cursor-pointer hover:text-white transition-colors">ES</span>
          <span onClick={() => changeLanguage('pt')} className="cursor-pointer hover:text-white transition-colors">PT</span>
      </div>

      {/* NAVBAR COM LOGO IMPONENTE */}
      <nav className="bg-white/95 backdrop-blur-xl border-b border-slate-100 h-24 flex items-center justify-between px-8 md:px-12 w-full shadow-sm">
        <Link to="/" className="no-underline">
          {/* Logo Maior e Mais Forte */}
          <span className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">
            Imperium<span className="text-blue-600 font-light italic">Wolf</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-black text-[11px] uppercase tracking-[0.2em] text-slate-500">
          <Link to="/" className="hover:text-blue-600 transition-colors">{t('nav_home')}</Link>
          <Link to="/sobre" className="hover:text-blue-600 transition-colors">{t('nav_company')}</Link>
          <Link to="/portifolio" className="hover:text-blue-600 transition-colors">{t('nav_portfolio')}</Link>
          <Link to="/contato" className="hover:text-blue-600 transition-colors">{t('nav_contact')}</Link>
          
          {/* Botão de Carreira (Novo) */}
          <Link to="/carreira" className="flex items-center gap-2 border-2 border-slate-200 px-5 py-2.5 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all text-[10px]">
             {t('nav_careers')}
          </Link>

          {/* Botão de Iniciar Projeto (Destaque Principal) */}
          <Link to="/contato" className="bg-blue-600 text-white px-8 py-3.5 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 ml-2 hover:-translate-y-1">
            {t('nav_hire')}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;