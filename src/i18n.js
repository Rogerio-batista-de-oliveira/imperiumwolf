import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Navbar & Global
      "select_language": "NETWORK ACCESS",
      "nav_home": "Home",
      "nav_company": "Company",
      "nav_portfolio": "Operations",
      "nav_contact": "Contact",
      "nav_careers": "Careers / CV",
      "nav_hire": "Deploy Project",
      
      // Home - ROI Style
      "hero_title": "MAXIMIZE YOUR DIGITAL ROI",
      "hero_desc": "Your competition has data. We transform that data into real profit and absolute competitive advantage. Ready for the next level?",
      "btn_strategy": "START PROJECT NOW",
      "card_software": "Elite Software",
      "card_mobile": "Mobile Command",
      "card_cloud": "Cloud Fortress",

      // Sobre (Company)
      "about_badge": "The Alpha Mindset",
      "about_title": "LEADING THE DIGITAL FRONTIER",
      "about_desc": "Imperium Wolf is a technology consultancy focused on the architecture of digital ecosystems that drive real growth. We combine executive vision with flawless technical execution.",
      "pillar_1_title": "Operational Scalability",
      "pillar_1_desc": "We develop infrastructures that are ready for massive growth in your operation.",
      "pillar_2_title": "Business Intelligence",
      "pillar_2_desc": "Designed to optimize processes, reduce costs and maximize profitability through automation.",
      "pillar_3_title": "Critical Mission Systems",
      "pillar_3_desc": "Absolute reliability. Our architectures follow the highest security standards in the global market.",

      // Portfolio
      "portfolio_title": "ENGINEERING EXCELLENCE",
      "portfolio_subtitle": "Projects developed with technical rigor, scalability and focus on global results.",
      "cat_web_arch": "Web Architecture",
      "cat_ai_systems": "AI & Neural Systems",
      "cat_fullstack": "Fullstack Ops",
      "project_brillo_desc": "Premium service platform focused on UX and lead conversion.",
      "project_translator_desc": "Instant translation system with neural audio processing.",
      "project_core_desc": "High-performance data capture system with real-time integration.",

      // Contato (Contact)
      "contact_badge": "Direct Transmission",
      "contact_title": "START YOUR DOMINATION",
      "contact_desc": "Our executive team is ready to analyze your project and design the ideal technical architecture.",
      "contact_channels": "Command Channels",
      "contact_info_email": "Corporate E-mail",
      "contact_info_base": "Operational Base",
      "contact_info_base_loc": "Asturias, Spain",
      "contact_info_time": "Response Time",
      "contact_info_time_detail": "24h Business Protocol",
      "contact_security_title": "Security Protocol",
      "contact_security_desc": "All transmitted data is protected by end-to-end encryption. Your intellectual property is our absolute priority.",
      "contact_btn": "SEND MESSAGE",
      "contact_placeholder_name": "Full Name",
      "contact_placeholder_email": "Corporate Email",
      "contact_placeholder_subject": "Project Subject",
      "contact_placeholder_message": "Describe your operational goals...",

      // Carreira (Careers)
      "career_badge": "Join the Pack",
      "career_title": "WORK WITH US",
      "career_desc": "We are looking for elite talent ready to dominate the digital frontier. Send your CV for strategic analysis.",
      "career_btn": "SUBMIT APPLICATION",
      "career_area": "Area of Expertise",
      "career_upload": "Drop your CV (PDF) or click to select"
    }
  },
  es: {
    translation: {
      "select_language": "ACCESO RED",
      "nav_home": "Inicio",
      "nav_company": "Empresa",
      "nav_portfolio": "Operaciones",
      "nav_contact": "Contacto",
      "nav_careers": "Carrera / CV",
      "nav_hire": "Iniciar Proyecto",
      
      "hero_title": "MAXIMICE SU ROI DIGITAL",
      "hero_desc": "Su competencia tiene datos. Nosotros transformamos esos datos en ganancias reales y ventaja competitiva absoluta. ¿Listo para el siguiente nivel?",
      "btn_strategy": "INICIAR PROYECTO AHORA",
      "card_software": "Software de Élite",
      "card_mobile": "Comando Móvil",
      "card_cloud": "Fortaleza Cloud",

      "about_badge": "Mentalidad Alpha",
      "about_title": "LIDERANDO LA FRONTERA DIGITAL",
      "about_desc": "Imperium Wolf es una consultoría tecnológica enfocada en la arquitectura de ecosistemas digitales que impulsan el crecimiento real. Combinamos visión ejecutiva con ejecución técnica impecable.",
      "pillar_1_title": "Escalabilidad Operativa",
      "pillar_1_desc": "Desarrollamos infraestructuras preparadas para el crecimiento masivo de su operación.",
      "pillar_2_title": "Inteligencia de Negocios",
      "pillar_2_desc": "Diseñado para optimizar procesos, reducir costes y maximizar la rentabilidad mediante la automatización.",
      "pillar_3_title": "Sistemas de Misión Crítica",
      "pillar_3_desc": "Confiabilidad absoluta. Nuestras arquitecturas siguen los más altos estándares de seguridad del mercado global.",

      "portfolio_title": "EXCELENCIA EN INGENIERÍA",
      "portfolio_subtitle": "Proyectos desarrollados con rigor técnico, escalabilidad y enfoque en resultados globales.",
      "cat_web_arch": "Arquitectura Web",
      "cat_ai_systems": "IA y Sistemas Neurales",
      "cat_fullstack": "Ops Fullstack",
      "project_brillo_desc": "Plataforma de servicios premium enfocada en UX y conversión de leads.",
      "project_translator_desc": "Sistema de traducción instantánea con procesamiento de audio neural.",
      "project_core_desc": "Sistema de captura de datos de alto rendimiento con integración en tiempo real.",

      "contact_badge": "Transmisión Directa",
      "contact_title": "INICIE SU DOMINACIÓN",
      "contact_desc": "Nuestro equipo ejecutivo está listo para analizar su proyecto y diseñar la arquitectura técnica ideal.",
      "contact_channels": "Canales de Mando",
      "contact_info_email": "E-mail Corporativo",
      "contact_info_base": "Base Operativa",
      "contact_info_base_loc": "Asturias, España",
      "contact_info_time": "Tiempo de Respuesta",
      "contact_info_time_detail": "Protocolo de 24h hábiles",
      "contact_security_title": "Protocolo de Seguridad",
      "contact_security_desc": "Todos los datos transmitidos están protegidos por cifrado de extremo a extremo. Su propiedad intelectual es nuestra prioridad absoluta.",
      "contact_btn": "ENVIAR MENSAJE",
      "contact_placeholder_name": "Nombre Completo",
      "contact_placeholder_email": "Email Corporativo",
      "contact_placeholder_subject": "Asunto del Proyecto",
      "contact_placeholder_message": "Describa sus objetivos operativos...",

      "career_badge": "Únete a la Manada",
      "career_title": "TRABAJA CON NOSOTROS",
      "career_desc": "Buscamos talentos de élite listos para dominar la frontera digital. Envía tu CV para análisis estratégico.",
      "career_btn": "ENVIAR CANDIDATURA",
      "career_area": "Área de Actuación",
      "career_upload": "Arrastra tu CV (PDF) o haz clic para seleccionar"
    }
  },
  pt: {
    translation: {
      "select_language": "ACESSO À REDE",
      "nav_home": "Início",
      "nav_company": "Empresa",
      "nav_portfolio": "Operações",
      "nav_contact": "Contato",
      "nav_careers": "Carreira / CV",
      "nav_hire": "Iniciar Projeto",
      
      "hero_title": "MAXIMIZE SEU ROI DIGITAL",
      "hero_desc": "Sua concorrência tem dados. Nós transformamos esses dados em lucro real e vantagem competitiva absoluta. Pronto para o próximo nível?",
      "btn_strategy": "INICIAR PROJETO AGORA",
      "card_software": "Software de Elite",
      "card_mobile": "Comando Móvel",
      "card_cloud": "Fortaleza Cloud",

      "about_badge": "Mentalidade Alpha",
      "about_title": "LIDERANDO A FRONTEIRA DIGITAL",
      "about_desc": "A Imperium Wolf é uma consultoria de tecnologia focada na arquitetura de ecossistemas digitais que impulsionam o crescimento real. Combinamos visão executiva com execução técnica impecável.",
      "pillar_1_title": "Escalabilidade Operacional",
      "pillar_1_desc": "Desenvolvemos infraestruturas preparadas para o crescimento massivo da sua operação.",
      "pillar_2_title": "Inteligência de Negócio",
      "pillar_2_desc": "Projetado para otimizar processos, reduzir custos e maximizar a lucratividade através da automação.",
      "pillar_3_title": "Sistemas de Missão Crítica",
      "pillar_3_desc": "Confiabilidade absoluta. Nossas arquiteturas seguem os mais altos padrões de segurança do mercado global.",

      "portfolio_title": "EXCELÊNCIA EM ENGENHARIA",
      "portfolio_subtitle": "Projetos desenvolvidos com rigor técnico, escalabilidade e foco em resultados globais.",
      "cat_web_arch": "Arquitetura Web",
      "cat_ai_systems": "IA e Sistemas Neurais",
      "cat_fullstack": "Ops Fullstack",
      "project_brillo_desc": "Plataforma de serviços premium focada em UX e conversão de leads.",
      "project_translator_desc": "Sistema de tradução instantânea com processamento de áudio neural.",
      "project_core_desc": "Sistema de captura de dados de alta performance com integração em tempo real.",

      "contact_badge": "Transmissão Direta",
      "contact_title": "INICIE SUA DOMINAÇÃO",
      "contact_desc": "Nossa equipe executiva está pronta para analisar seu projeto e desenhar a arquitetura técnica ideal.",
      "contact_channels": "Canais de Comando",
      "contact_info_email": "E-mail Corporativo",
      "contact_info_base": "Base Operacional",
      "contact_info_base_loc": "Asturias, Espanha",
      "contact_info_time": "Tempo de Resposta",
      "contact_info_time_detail": "Protocolo de 24h úteis",
      "contact_security_title": "Protocolo de Segurança",
      "contact_security_desc": "Todos os dados transmitidos são protegidos por criptografia de ponta a ponta. Sua propriedade intelectual é nossa prioridade absoluta.",
      "contact_btn": "ENVIAR MENSAGEM",
      "contact_placeholder_name": "Nome Completo",
      "contact_placeholder_email": "E-mail Corporativo",
      "contact_placeholder_subject": "Assunto do Projeto",
      "contact_placeholder_message": "Descreva seus objetivos operacionais...",

      "career_badge": "Junte-se à Alcateia",
      "career_title": "TRABALHE CONOSCO",
      "career_desc": "Buscamos talentos de elite prontos para dominar a fronteira digital. Envie seu currículo para análise estratégica.",
      "career_btn": "ENVIAR CANDIDATURA",
      "career_area": "Área de Atuação",
      "career_upload": "Arraste seu currículo (PDF) ou clique para selecionar"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('i18nextLng') || "pt",
  interpolation: { escapeValue: false }
});

export default i18n;