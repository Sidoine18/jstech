import { MapPin, Navigation, Phone, MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function MapSection() {
  const {
    address,
    googleMapsUrl,
    googleMapsEmbedUrl,
    phoneHref,
    phoneDisplay,
    whatsappNumber,
    email,
  } = siteConfig;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div className="overflow-hidden rounded-2xl border border-ink-900/8 bg-white">
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 shrink-0 text-flame-500" size={22} />
            <div>
              <h3 className="font-semibold text-ink-900">Adresse</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-700/75">
                {address.line1}
                <br />
                {address.line2}
                <br />
                {address.city}, {address.country}
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {googleMapsUrl ? (
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-azure-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-azure-700"
              >
                <Navigation size={16} /> Itinéraire
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-full bg-ink-900/5 px-5 py-2.5 text-sm text-ink-700/60">
                <Navigation size={16} /> Itinéraire (lien à venir)
              </span>
            )}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-5 py-2.5 text-sm font-semibold text-ink-900 hover:border-ink-900/40"
            >
              <Phone size={16} /> {phoneDisplay}
            </a>
            {email && (
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-5 py-2.5 text-sm font-semibold text-ink-900 hover:border-ink-900/40"
              >
                <Mail size={16} /> {email}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="min-h-[280px] overflow-hidden rounded-2xl border border-ink-900/8 bg-azure-50">
        {googleMapsEmbedUrl ? (
          <iframe
            src={googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: 280 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation de JS TECH"
          />
        ) : (
          <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-2 p-8 text-center">
            <MapPin size={28} className="text-azure-500" />
            <p className="text-sm text-ink-700/70 max-w-xs">
              La carte Google Maps du centre sera intégrée ici dès que le
              lien officiel sera disponible.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
