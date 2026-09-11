# Site vitrine JS TECH (Jehovah Shammah Technologie)

Site vitrine statique — sans base de données — construit avec **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion** et **Lucide React**.

## 🚀 Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

## 🏗️ Build de production

```bash
npm run build
npm run start
```

Le projet est optimisé pour un déploiement sur **Vercel** (aucune configuration supplémentaire nécessaire — connectez simplement le dépôt Git).

## ⚙️ Configuration à compléter

Toutes les informations non fournies au moment de la conception (email,
GPS, lien Google Maps, réseaux sociaux, service d'envoi de formulaire)
sont centralisées dans **`data/site.ts`**. Il suffit de modifier ce
fichier pour mettre à jour l'ensemble du site :

- `email` — adresse email de contact
- `gps` — coordonnées GPS du centre
- `googleMapsUrl` / `googleMapsEmbedUrl` — liens Google Maps
- `hours` — horaires d'ouverture
- `socials` — liens Facebook / Instagram / LinkedIn / TikTok
- `contactForm.formspreeEndpoint` **ou** `contactForm.web3formsAccessKey`
  — pour activer l'envoi réel du formulaire de contact (voir
  [Formspree](https://formspree.io) ou [Web3Forms](https://web3forms.com),
  tous deux gratuits pour un usage basique)

Le numéro de téléphone / WhatsApp est déjà renseigné.

## 🖼️ Remplacer les images

- **Logo** : `public/images/logo/jstech-logo.png` (déjà en place, ne pas déformer)
- **Hero** : `public/images/hero/`
- **Formations** : `public/images/formations/`
- **Promo Vacances** : `public/images/promo-vacances/`
- **Fondateur** : `public/images/fondateur/`
- **Galerie** : `public/images/galerie/` — mettre à jour les chemins dans `data/gallery.ts`
- **Actualités** : `public/images/actualites/` — mettre à jour les chemins dans `data/articles.ts`

Toutes les images sont actuellement des **placeholders SVG** générés
pour la mise en page, clairement identifiés comme tels. Elles doivent
être remplacées par de vraies photos de JS TECH.

## 📄 Contenu géré sans base de données

- `data/site.ts` — informations générales, contact, réseaux sociaux
- `data/formations.ts` — les 3 formations
- `data/services.ts` — services, imprimerie, public cible, arguments
- `data/faq.ts` — questions fréquentes
- `data/gallery.ts` — images de la galerie
- `data/articles.ts` — articles d'actualité (un article de démonstration est inclus, à remplacer)

## 📁 Pages du site

`/`, `/a-propos`, `/fondateur`, `/formations`, `/formations/informatique`,
`/formations/bureautique`, `/formations/maintenance-informatique`,
`/promo-vacances`, `/services`, `/imprimerie`, `/galerie`,
`/actualites`, `/actualites/[slug]`, `/contact`, `/faq`,
`/mentions-legales`, `/politique-confidentialite`.

Plus `/sitemap.xml` et `/robots.txt` générés automatiquement.

## ✅ Ce que ce projet ne contient pas (volontairement)

Conformément au cahier des charges : pas de base de données, pas de
CMS, pas d'authentification, pas de dashboard administrateur, aucune
information inventée (prix, dates, statistiques, certifications,
numéros non communiqués, coordonnées GPS).

---

Site conçu par [KONFORTECH BÉNIN](https://konfortechbenin.online)
