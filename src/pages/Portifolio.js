import React from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Code2, Layers, Globe, Cpu } from 'lucide-react';

const Portifolio = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Brillo Astur",
      category: t('cat_web_arch'),
      desc: t('project_brillo_desc'),
      tech: ["Python", "Flask", "Tailwind"],
      icon: <Globe size={28} />
    },
    {
      title: "Real-Time Translator",
      category: t('cat_ai_systems'),
      desc: t('project_translator_desc'),
      tech: ["Whisper AI", "Python", "Neural"],
      icon: <Cpu size={28} />
    },
    {
      title: "Imperium Wolf Core",
      category: t('cat_fullstack'),
      desc: t('project_core_desc'),
      tech: ["React", "Supabase", "ROI Ops"],
      icon: <Layers size={28} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-white pb-32">
      <header className="relative py-32 px-6 text-center overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] mb-6 block">
             Global Operations
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8">
            {t('portfolio_title')}
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            {t('portfolio_subtitle')}
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20 grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group p-10 border border-white/10 rounded-[48px] bg-slate-900/60 backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-4">
            <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all">
              {p.icon}
            </div>
            <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">{p.category}</span>
            <h3 className="text-3xl font-black mt-2 mb-4 tracking-tighter">{p.title}</h3>
            <p className="text-slate-400 font-medium leading-relaxed mb-8 italic">"{p.desc}"</p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((tech, idx) => (
                <span key={idx} className="text-[10px] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-slate-300 font-bold uppercase">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Portifolio;