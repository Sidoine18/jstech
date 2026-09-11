// ─────────────────────────────────────────────────────────────
// CONFIGURATION CENTRALE DU SITE JS TECH
// Toutes les informations "à compléter" sont regroupées ici.
// Modifier ce fichier suffit pour mettre à jour tout le site.
// ─────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Jehovah Shammah Technologie",
  shortName: "JS TECH",
  tagline: "Formations & services informatiques",
  founder: "Mr Elisée SOHOUNGBLE",
  founderRole:
    "Fondateur de JS TECH — Formateur en TIC et gestionnaire de centre informatique",

  // URL du site en production (à adapter lors du déploiement Vercel)
  url: "https://jstech.example.com",

  description:
    "JS TECH (Jehovah Shammah Technologie) est un centre de formation professionnelle en TIC à Bohicon, Bénin. Informatique, bureautique, maintenance informatique, services informatiques et imprimerie.",

  // ── Localisation ──────────────────────────────────────────
  address: {
    line1: "Quartier Zounzonmè",
    line2: "Arrondissement d'Avogbanna",
    city: "Bohicon",
    country: "Bénin",
    full: "Zounzonmè, Avogbanna, Bohicon, Bénin",
  },

  // Coordonnées GPS non fournies — à compléter lorsque disponibles.
  gps: {
    lat: null as number | null,
    lng: null as number | null,
  },

  // URL Google Maps — à compléter avec le lien exact du centre.
  googleMapsUrl: "",
  googleMapsEmbedUrl: "",

  // ── Contact ───────────────────────────────────────────────
  // Renseigné par le client : numéro WhatsApp / téléphone.
  phoneDisplay: "+229 01 91 14 43 44",
  phoneHref: "tel:+2290191144344",
  whatsappNumber: "2290191144344", // format international sans "+" pour wa.me

  // Email non fourni — à compléter.
  email: "",

  // Horaires — non communiqués, à compléter.
  hours: "",

  // ── Réseaux sociaux (URLs à compléter) ───────────────────
  socials: {
    facebook: "",
    instagram: "",
    linkedin: "",
    tiktok: "",
  },

  // ── Formulaire de contact ────────────────────────────────
  // Renseigner l'un de ces services pour activer l'envoi réel :
  // Formspree (ex: "https://formspree.io/f/xxxxxxx")
  // Web3Forms (clé d'accès)
  // EmailJS (service/template/public key)
  contactForm: {
    formspreeEndpoint: "",
    web3formsAccessKey: "",
  },
};

export const credit = {
  name: "KONFORTECH BÉNIN",
  url: "https://konfortechbenin.online",
};
