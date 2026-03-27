import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "34600000000"; // Substitua pelo seu número (com código do país)
  const message = "Olá Imperium Wolf. Gostaria de iniciar um protocolo de projeto estratégico.";

  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[999] bg-green-600 text-white p-4 rounded-2xl shadow-2xl shadow-green-900/40 hover:bg-green-500 hover:-translate-y-2 transition-all duration-300 flex items-center justify-center group"
    >
      {/* Tooltip que aparece no hover */}
      <span className="absolute right-full mr-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
        Direct Command
      </span>
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;