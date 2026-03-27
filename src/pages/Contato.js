import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Send, MapPin, Clock } from 'lucide-react';

const Contato = () => {
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Iniciando protocolo de transmissão...");
  };

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-white pb-32">
      
      {/* HEADER DE CONTATO */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-blue-500 font-black text-xs uppercase tracking-[0.6em] mb-6 block">
             {t('contact_badge')}
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 uppercase">
            {t('contact_title')}
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            {t('contact_desc')}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        
        {/* INFORMAÇÕES DE CANAL - AGORA 100% VIA i18n */}
        <div className="space-y-12">
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white">
            {t('contact_channels')}
          </h2>
          
          <div className="space-y-8">
            <ContactInfoItem 
              icon={<Mail />}
              title={t('contact_info_email')}
              content="contato@imperiumwolf.com"
            />
            <ContactInfoItem 
              icon={<MapPin />}
              title={t('contact_info_base')}
              content={t('contact_info_base_loc')}
            />
            <ContactInfoItem 
              icon={<Clock />}
              title={t('contact_info_time')}
              content={t('contact_info_time_detail')}
            />
          </div>

          {/* BOX DE SEGURANÇA TRADUZIDO */}
          <div className="p-8 border border-white/5 rounded-[32px] bg-white/5 backdrop-blur-sm">
            <h4 className="text-blue-500 font-black text-xs uppercase tracking-widest mb-4 italic">
              {t('contact_security_title')}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed italic">
              {t('contact_security_desc')}
            </p>
          </div>
        </div>

        {/* FORMULÁRIO EXECUTIVO */}
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
                {t('contact_placeholder_subject')}
              </label>
              <input 
                type="text" 
                className="w-full bg-[#020617] border border-white/10 rounded-2xl px-6 py-4 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">
                {t('contact_placeholder_message')}
              </label>
              <textarea 
                rows="4" 
                className="w-full bg-[#020617] border border-white/10 rounded-3xl px-6 py-4 focus:border-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/40 flex items-center justify-center gap-3 uppercase tracking-tighter"
            >
              {t('contact_btn')} <Send size={20}/>
            </button>
          </form>
        </div>

      </section>
    </div>
  );
};

const ContactInfoItem = ({ icon, title, content }) => (
  <div className="flex gap-6 group">
    <div className="w-14 h-14 bg-blue-600/10 text-blue-500 border border-blue-500/20 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h3 className="text-sm font-black text-slate-500 uppercase tracking-widest mb-1">{title}</h3>
      <p className="text-xl font-bold text-white tracking-tight">{content}</p>
    </div>
  </div>
);

export default Contato;