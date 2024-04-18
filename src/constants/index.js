import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  whatsapp,
  yourlogo,
} from "../../src/assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Precio",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Crear cuenta",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Ingresar",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Información al instante",
  "Palabras clave",
  "Intercambio de archivos",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Una Interfaz Increible",
    text: "Habilite el chatbot para comprender y responder a comandos de voz, lo que facilita a los usuarios interactuar con la aplicación con manos libres.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Widgets Incrustables",
    text: "Agregue elementos similares a juegos, como insignias o tablas de clasificación, para incentivar a los usuarios a interactuar con el chatbot con más frecuencia.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Widgets Incrustables",
    text: "Permita a los usuarios personalizar la apariencia y el comportamiento del chatbot, haciéndolo más atractivo y divertido para interactuar.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Insights sobre tu negocio",
    text: "Permita que el chatbot acceda a fuentes de datos externas, como API meteorológicas o API de noticias, para proporcionar recomendaciones más relevantes.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Ofrece ayuda automatizada 24/7 con un Chatbot de Servicio al Cliente de Niko AI";

export const collabContent = [
  {
    id: "0",
    title: "Colaboración perfecta",
  },
  {
    id: "1",
    title: "Automatización Inteligente",
  },
  {
    id: "2",
    title: "Seguridad de primer nivel",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Whatsapp",
    icon: whatsapp,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Básico",
    description: "Chatbot AI, recomendaciones personalizadas",
    price: "0",
    features: [
      "Un chatbot con IA que puede entender tus consultas",
      "Recomendaciones personalizadas basadas en tus preferencias",
      "Posibilidad de explorar la aplicación y sus funciones sin ningún costo",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Chatbot de IA avanzado, soporte prioritario, panel de análisis",
    price: "9.99",
    features: [
      "Un chatbot de IA avanzado que puede comprender consultas complejas",
      "Un panel de análisis para seguir tus conversaciones",
      "Soporte prioritario para resolver problemas rápidamente",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Chatbot de IA personalizado, análisis avanzado, cuenta dedicada",
    price: null,
    features: [
      "Un chatbot con IA que puede entender tus consultas",
      "Recomendaciones personalizadas basadas en tus preferencias",
      "Posibilidad de explorar la aplicación y sus funciones sin ningún costo",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Pregunta lo que sea",
    text: "Deja que tus clientes encuentren rápidamente las respuestas a sus preguntas sobre tu negocio, toda la información la tiene tu chatbot.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Centraliza tus mensajes",
    text: "Prueba nuestro inbox unificado. Recibe los mensajes de todas las plataformas en un solo lugar.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Impulsa tu marketing",
    text: "Conecta el chatbot de IA con Whatsapp para crear un embudo perfecto. Atiende a tus clientes en cualquier momento y lugar.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Conecta tus tickets",
    text: "Gestiona la atención al cliente de manera efectiva y fácil con nuestro súper sistema de tickets.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Intercambia archivos",
    text: "Envía y recibe archivos durante tus conversaciones de IA cuando las palabras no sean suficiente.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Conoce a tus clientes",
    text: "Con nuestro Perfil Unificado del Cliente podrás recolectar, y gestionar automaticamente la información de tus clientes.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];