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

  // URL du site en production
  url: "https://jstechbenin.online",

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

  // Coordonnées GPS du lieu
  gps: {
    lat: 7.2127268,
    lng: 2.0769715,
  },

  // URL Google Maps — à compléter avec le lien exact du centre.
  googleMapsUrl: "https://www.google.com/maps/place/JS+TECH,+41,+Bohicon,+B%C3%A9nin/@7.2127268,2.0769715,17z",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=7.2127268,2.0769715&z=15&output=embed",
  // ── Contact ───────────────────────────────────────────────
  // Renseigné par le client : numéro WhatsApp / téléphone.
  phoneDisplay: "+229 01 91 14 43 44",
  phoneHref: "tel:+2290191144344",
  whatsappNumber: "2290191144344", // format international sans "+" pour wa.me

  email: "jstinfo229@gmail.com",

  // Horaires — non communiqués, à compléter.
  hours: "",

  // ── Réseaux sociaux (URLs à compléter) ───────────────────
  socials: {
    facebook: "https://www.facebook.com/p/CFP-JS-TECH-61590804054334/",
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
    web3formsAccessKey: "50163e08-f9b6-4c4b-a2d1-6313c9c19a06",
  },
};

export const credit = {
  name: "KONFORTECH BÉNIN",
  url: "https://konfortechbenin.online",
};
