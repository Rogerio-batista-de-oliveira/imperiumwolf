import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShieldCheck, TrendingUp, BarChart3, Globe2 } from 'lucide-react';

const Sobre = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-white pb-32">
      
      {/* SEÇÃO MANIFESTO */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1920&auto=format&fit=crop" 
            alt="Corporate Strategy" 
            className="w-full h-full object-cover opacity-10 grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.6em] mb-8 block">
             {t('about_badge')}
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-12 uppercase">
            {t('about_title')}
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            {t('about_desc')}
          </p>
        </div>
      </section>

      {/* PILARES ESTRATÉGICOS */}
      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-600/10 rounded-[48px] blur-3xl transition-all duration-1000"></div>
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
            alt="Intelligence" 
            className="relative rounded-[48px] border border-white/5 shadow-2xl grayscale brightness-90"
          />
        </div>

        <div className="space-y-12">
          <PillarItem 
            icon={<TrendingUp size={32} />}
            title={t('pillar_1_title')}
            desc={t('pillar_1_desc')}
          />
          <PillarItem 
            icon={<BarChart3 size={32} />}
            title={t('pillar_2_title')}
            desc={t('pillar_2_desc')}
          />
          <PillarItem 
            icon={<ShieldCheck size={32} />}
            title={t('pillar_3_title')}
            desc={t('pillar_3_desc')}
          />
        </div>
      </section>
    </div>
  );
};

const PillarItem = ({ icon, title, desc }) => (
  <div className="flex gap-8 group">
    <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <div>
      <h3 className="text-2xl font-black mb-3 tracking-tight uppercase text-white">{title}</h3>
      <p className="text-slate-400 leading-relaxed font-medium text-lg">{desc}</p>
    </div>
  </div>
);

export default Sobre;