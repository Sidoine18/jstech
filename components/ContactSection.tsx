"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/data/site";
import { CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const { formspreeEndpoint, web3formsAccessKey } = siteConfig.contactForm;
  const isConfigured = Boolean(formspreeEndpoint || web3formsAccessKey);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!isConfigured) {
      // Aucun service externe configuré : on affiche simplement une
      // confirmation locale. Configurer Formspree ou Web3Forms dans
      // data/site.ts pour activer l'envoi réel.
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      if (web3formsAccessKey) {
        data.append("access_key", web3formsAccessKey);
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: data,
        });
        if (!res.ok) throw new Error("Échec de l'envoi");
      } else if (formspreeEndpoint) {
        const res = await fetch(formspreeEndpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        if (!res.ok) throw new Error("Échec de l'envoi");
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-ink-900/8 bg-white p-12 text-center">
        <CheckCircle2 className="text-azure-600" size={40} />
        <p className="text-lg font-semibold text-ink-900">
          Votre message a bien été préparé.
        </p>
        <p className="max-w-sm text-sm text-ink-700/70">
          Nous reviendrons vers vous dans les meilleurs délais. Vous pouvez
          aussi nous écrire directement sur WhatsApp pour une réponse plus
          rapide.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-900/8 bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-900">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-ink-900/15 px-4 py-2.5 text-sm outline-none focus:border-azure-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink-900">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="w-full rounded-lg border border-ink-900/15 px-4 py-2.5 text-sm outline-none focus:border-azure-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-ink-900/15 px-4 py-2.5 text-sm outline-none focus:border-azure-500"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-ink-900">
            Objet
          </label>
          <input
            id="subject"
            name="subject"
            required
            className="w-full rounded-lg border border-ink-900/15 px-4 py-2.5 text-sm outline-none focus:border-azure-500"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-900">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={20}
            rows={5}
            className="w-full rounded-lg border border-ink-900/15 px-4 py-2.5 text-sm outline-none focus:border-azure-500"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Une erreur est survenue lors de l&apos;envoi. Merci de réessayer ou de nous contacter via WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-flame-500 px-6 py-3 text-sm font-semibold text-white hover:bg-flame-600 disabled:opacity-60"
      >
        {status === "sending" && <Loader2 size={16} className="animate-spin" />}
        Envoyer le message
      </button>
    </form>
  );
}
