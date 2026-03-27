import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Upload, Send, ShieldCheck } from 'lucide-react';

const Carreira = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Protocolo de Candidatura Iniciado...");
  };

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-white pb-32">
      
      {/* HEADER CARREIRA */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.6em] mb-6 block">
             {t('career_badge')}
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8">
            {t('career_title')}
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            {t('career_desc')}
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6">
        <div className="p-10 border border-white/10 rounded-[48px] bg-slate-900/40 backdrop-blur-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">
                  {t('contact_placeholder_name')}
                </label>
                <input 
                  type="text" 
                  className="w-full bg-[#020617] border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">
                  {t('contact_placeholder_email')}
                </label>
                <input 
                  type="email" 
                  className="w-full bg-[#020617] border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">
                {t('career_area')}
              </label>
              <select className="w-full bg-[#020617] border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all text-slate-400 appearance-none">
                <option>Frontend Engineer</option>
                <option>Backend / Python Developer</option>
                <option>AI Specialist</option>
                <option>UX/UI Strategist</option>
              </select>
            </div>

            {/* ÁREA DE UPLOAD DE CV */}
            <div className="relative group">
              <div className="border-2 border-dashed border-white/10 rounded-[32px] p-12 text-center hover:border-blue-500/50 transition-all cursor-pointer bg-white/[0.02]">
                <Upload className="mx-auto mb-4 text-blue-500 group-hover:scale-110 transition-transform" size={40} />
                <p className="text-slate-400 font-bold uppercase text-xs tracking-widest">
                  {t('career_upload')}
                </p>
                <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-6 rounded-2xl transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3 uppercase tracking-tighter text-lg"
            >
              {t('career_btn')} <Send size={20}/>
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-center gap-4 text-slate-500">
             <ShieldCheck size={18} className="text-blue-500" />
             <span className="text-[10px] font-black uppercase tracking-widest">GDPR COMPLIANT // SECURE TRANSMISSION</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carreira;