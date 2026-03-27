import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Code, Cpu, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#020617] font-sans overflow-x-hidden text-white">
      
      {/* --- HERO SECTION (A LUA E O BOSQUE) --- */}
      <section className="relative py-32 px-6 min-h-[750px] flex items-center overflow-hidden z-10 bg-[#020617]">
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1481819613568-3701cbc70156?q=80&w=1920&auto=format&fit=crop" 
            alt="Winter Forest and Moon" 
            className="w-full h-full object-cover opacity-40 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/80 to-[#020617]"></div>
        </div>

        {/* CONTENT LAYER - Ajustado para não sobrepor a foto à direita */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-20 w-full">
          <div className="text-left lg:pr-10">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter uppercase">
              {t('hero_title')}
            </h1>
            <p className="mt-8 text-xl md:text-2xl text-slate-300 font-light max-w-xl leading-relaxed">
              {t('hero_desc')}
            </p>
            
            {/* Botão de Ação Único e Forte */}
            <div className="mt-12">
              <Link 
                to="/contato" 
                className="inline-flex items-center gap-6 bg-blue-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-blue-500 transition-all text-xl shadow-2xl shadow-blue-900/60 uppercase tracking-tighter"
              >
                {t('btn_strategy')} <ArrowRight size={28} />
              </Link>
            </div>
          </div>

          {/* FOTO À DIREITA - Com margem e opacidade controlada para não "brigar" com o texto */}
          <div className="hidden lg:block relative z-10">
            <div className="absolute -inset-10 bg-blue-500/5 rounded-[40px] blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Team" 
              className="relative rounded-[48px] border border-white/10 shadow-3xl grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </div>
      </section>

      {/* --- SEÇÃO DO VÍDEO COM CARDS FLUTUANTES (MANTIDA IGUAL) --- */}
      <section className="relative min-h-screen">
        <div className="sticky top-20 w-full h-[80vh] overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50 brightness-[0.6]"
          >
            <source src={process.env.PUBLIC_URL + "/lobo-walking.mp4"} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]"></div>
        </div>

        <div className="relative z-10 -mt-[40vh] max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 pb-32">
          <ServiceCard icon={<Code size={28}/>} title={t('card_software')} />
          <ServiceCard icon={<Cpu size={28}/>} title={t('card_mobile')} />
          <ServiceCard icon={<Rocket size={28}/>} title={t('card_cloud')} />
        </div>
      </section>

      <footer className="py-12 text-center text-slate-500 border-t border-white/5">
        <p>© 2026 Imperium Wolf. Global Digital Command.</p>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title }) => (
  <div className="p-12 border border-white/10 rounded-[48px] hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.6)] hover:-translate-y-4 transition-all duration-500 group bg-slate-900/60 backdrop-blur-xl">
    <div className="w-16 h-16 bg-blue-600/20 text-blue-400 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
      {icon}
    </div>
    <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">{title}</h3>
    <p className="text-slate-400 font-medium leading-relaxed text-lg">
      Enterprise software architecture designed for global operations and high-performance scale.
    </p>
  </div>
);

export default Home;