import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Calendar,
  CreditCard,
  ShieldCheck,
  Globe,
  Languages,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

// ---- Replace these with your live details ----
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/REPLACE_ME"; // Put your Stripe Payment Link here
const EVENT_DATE = "September 4, 2025";
const EVENT_TIME = "5:00–7:00 PM ET";
const LOCATION = "Add venue or Zoom link";
const CONTACT_EMAIL = "contact@promptingforreality.ai";
const CONTACT_PHONE = "+1 (555) 555-5555";
// ----------------------------------------------

const copy = {
  en: {
    brand: "Prompting for Reality",
    nav: {
      home: "Home",
      about: "About",
      event: "Event",
      courses: "Programs",
      resources: "Resources",
      contact: "Contact",
    },
    hero: {
      title: "AI is here. Now what?",
      subtitle:
        "Use AI with your identity, not against it. PfR aligns tools to who you are and what you intend.",
      cta: "Register for the Event",
      altCta: "Learn more",
    },
    trust: [
      { icon: ShieldCheck, text: "Patent-pending semantic OS" },
      { icon: Sparkles, text: "Identity-aligned prompting" },
      { icon: Globe, text: "Designed for real work" },
    ],
    about: {
      h: "What is PfR?",
      p: "PfR (Prompting for Reality) is a semantic operating system that structures prompts around identity, objectives, and context. The result is clearer outputs and reliable action.",
      bullets: [
        "Identity Capsule to calibrate AI to you",
        "Quadrant model for business, life, learning, tools",
        "Reusable Capsules for repeatable results",
      ],
    },
    event: {
      h: "Community Intro Event",
      date: "Date",
      time: "Time",
      location: "Location",
      btn: "Get Ticket",
      note: "Apple Pay and Google Pay supported",
    },
    programs: {
      h: "Programs",
      cards: [
        {
          title: "PfR 101",
          text: "Foundations, Identity Capsule, prompt structure.",
        },
        {
          title: "Capsule Masterclass",
          text: "Design Capsules for business, education, and ops.",
        },
        {
          title: "Agentic Protocol",
          text: "Deploy Capsule-powered agents across workflows.",
        },
      ],
    },
    resources: {
      h: "Resources",
      bullets: [
        "Starter prompts",
        "Event slides",
        "Handouts and checklists",
      ],
      note: "Ask to enable a members area when ready.",
    },
    contact: {
      h: "Contact",
      p: "Questions about the event or PfR?",
      email: "Email",
      phone: "Phone",
      send: "Send",
    },
    footer: {
      rights: "All rights reserved.",
      legal: ["Privacy", "Refunds", "Terms"],
    },
  },
  es: {
    brand: "Prompting for Reality",
    nav: {
      home: "Inicio",
      about: "Qué es PfR",
      event: "Evento",
      courses: "Programas",
      resources: "Recursos",
      contact: "Contacto",
    },
    hero: {
      title: "La IA está aquí. ¿Y ahora qué?",
      subtitle:
        "Usa la IA con tu identidad, no en contra de ella. PfR alinea las herramientas con quién eres y qué buscas.",
      cta: "Regístrate al evento",
      altCta: "Saber más",
    },
    trust: [
      { icon: ShieldCheck, text: "Sistema semántico con patente en proceso" },
      { icon: Sparkles, text: "Prompts alineados a tu identidad" },
      { icon: Globe, text: "Diseñado para trabajo real" },
    ],
    about: {
      h: "¿Qué es PfR?",
      p: "PfR (Prompting for Reality) es un sistema operativo semántico que estructura prompts según identidad, objetivos y contexto. El resultado: salidas más claras y acción confiable.",
      bullets: [
        "Cápsula de Identidad para calibrar la IA a ti",
        "Modelo de cuadrantes: negocio, vida, aprendizaje, herramientas",
        "Cápsulas reutilizables para resultados consistentes",
      ],
    },
    event: {
      h: "Evento Comunitario Introductorio",
      date: "Fecha",
      time: "Hora",
      location: "Lugar",
      btn: "Comprar boleto",
      note: "Acepta Apple Pay y Google Pay",
    },
    programs: {
      h: "Programas",
      cards: [
        {
          title: "PfR 101",
          text: "Fundamentos, Cápsula de Identidad y estructura de prompts.",
        },
        {
          title: "Masterclass de Cápsulas",
          text: "Diseña Cápsulas para negocio, educación y operaciones.",
        },
        {
          title: "Protocolo Agéntico",
          text: "Despliega agentes con Cápsulas en flujos de trabajo.",
        },
      ],
    },
    resources: {
      h: "Recursos",
      bullets: [
        "Prompts iniciales",
        "Slides del evento",
        "Handouts y listas de verificación",
      ],
      note: "Podemos activar un área para miembros cuando gustes.",
    },
    contact: {
      h: "Contacto",
      p: "¿Dudas sobre el evento o PfR?",
      email: "Correo",
      phone: "Teléfono",
      send: "Enviar",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      legal: ["Privacidad", "Reembolsos", "Términos"],
    },
  },
};

function Nav({ lang, setLang }) {
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const Item = ({ href, children }) => (
    <a href={href} className="px-3 py-2 text-sm font-medium hover:text-indigo-400">
      {children}
    </a>
  );
  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">
        <a href="#home" className="flex items-center gap-2 font-semibold">
          <img src="/logo.png" alt="PfR" className="w-6 h-6 rounded-sm" />
          <span>{t.brand}</span>
        </a>
        <div className="hidden md:flex items-center">
          <Item href="#home">{t.nav.home}</Item>
          <Item href="#about">{t.nav.about}</Item>
          <Item href="#event">{t.nav.event}</Item>
          <Item href="#programs">{t.nav.courses}</Item>
          <Item href="#resources">{t.nav.resources}</Item>
          <Item href="#contact">{t.nav.contact}</Item>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-slate-700 hover:border-indigo-500"
            aria-label="Toggle language"
          >
            <Languages className="w-4 h-4" /> {lang.toUpperCase()}
          </button>
          <button
            className="md:hidden p-2 rounded border border-slate-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <ChevronRight className={`w-5 h-5 transition-transform ${open ? "rotate-90" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-3 flex flex-col gap-2">
          {[
            ["#home", t.nav.home],
            ["#about", t.nav.about],
            ["#event", t.nav.event],
            ["#programs", t.nav.courses],
            ["#resources", t.nav.resources],
            ["#contact", t.nav.contact],
          ].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="py-2 text-sm border-b border-slate-800">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Section({ id, children }) {
  return (
    <section id={id} className="py-20 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}

function CTAButton({ href, children }) {
  const disabled = STRIPE_PAYMENT_LINK.includes("REPLACE_ME");
  return (
    <a
      href={disabled ? "#" : href}
      onClick={(e) => disabled && e.preventDefault()}
      className={`inline-flex items-center justify-center px-6 py-3 rounded-2xl text-sm font-semibold shadow hover:shadow-lg transition ${
        disabled ? "bg-slate-700 text-slate-400 cursor-not-allowed" : "bg-indigo-500 hover:bg-indigo-400 text-white"
      }`}
      aria-disabled={disabled}
    >
      <CreditCard className="w-4 h-4 mr-2" /> {children}
    </a>
  );
}

export default function Site() {
  const [lang, setLang] = useState("en");
  const t = copy[lang];

  return (
    <div className="min-h-screen text-slate-100 bg-slate-950">
      <Nav lang={lang} setLang={setLang} />

      {/* HERO */}
      <Section id="home">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              {t.hero.title}
            </motion.h1>
            <p className="mt-4 text-slate-300 max-w-prose">{t.hero.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href={STRIPE_PAYMENT_LINK}>{t.hero.cta}</CTAButton>
              <a href="#about" className="inline-flex items-center px-6 py-3 rounded-2xl border border-slate-700 hover:border-indigo-500">
                <BookOpen className="w-4 h-4 mr-2" /> {t.hero.altCta}
              </a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {t.trust.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <Icon className="w-5 h-5 text-indigo-400" />
                  <span className="text-sm text-slate-300">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20">
              <div className="rounded-3xl p-6 bg-slate-900 border border-slate-800">
                <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">PfR Capsule Preview</div>
                <div className="rounded-xl h-60 bg-slate-950/50 border border-slate-800 flex items-center justify-center text-slate-400 text-sm">
                  Embed your CapsuleGPT or a demo video here
                </div>
                <p className="mt-3 text-slate-400 text-xs">Placeholder. Replace with an iframe or image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ABOUT */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{t.about.h}</h2>
            <p className="text-slate-300">{t.about.p}</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              {t.about.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-indigo-400 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-6 bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-2 text-slate-300">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              <span className="text-sm">Semantic OS • Identity-aligned</span>
            </div>
            <div className="mt-4 text-sm text-slate-400">
              <p>Use Capsules to standardize high-quality prompts. Reuse them across models, contexts, and teams.</p>
              <p className="mt-2">Reduce guesswork. Increase signal. Ship results.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* EVENT */}
      <Section id="event">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold mb-1 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" /> {t.event.h}
            </h2>
            <div className="mt-4 grid sm:grid-cols-3 gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400" /><span className="font-medium">{t.event.date}:</span> <span className="ml-1">{EVENT_DATE}</span></div>
              <div className="flex items-center gap-2"><ClockIcon /><span className="font-medium">{t.event.time}:</span> <span className="ml-1">{EVENT_TIME}</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /><span className="font-medium">{t.event.location}:</span> <span className="ml-1">{LOCATION}</span></div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <CTAButton href={STRIPE_PAYMENT_LINK}>{t.event.btn}</CTAButton>
              <span className="text-xs text-slate-400">{t.event.note}</span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="font-semibold">Agenda</h3>
            <ul className="mt-3 text-sm text-slate-300 space-y-2">
              <li>00:00–00:10 · Welcome and framing</li>
              <li>00:10–00:35 · What is PfR</li>
              <li>00:35–01:00 · Identity Capsule demo</li>
              <li>01:00–01:20 · Use cases and Q&amp;A</li>
              <li>01:20–01:30 · Next steps</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* PROGRAMS */}
      <Section id="programs">
        <h2 className="text-2xl font-semibold mb-6">{t.programs.h}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.programs.cards.map((c, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* RESOURCES */}
      <Section id="resources">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{t.resources.h}</h2>
            <ul className="mt-3 text-slate-300 space-y-2">
              {t.resources.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <BookOpen className="w-5 h-5 text-indigo-400 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-slate-400">{t.resources.note}</p>
          </div>
          <div className="rounded-2xl p-6 bg-slate-900 border border-slate-800">
            <h3 className="font-semibold">Newsletter</h3>
            <form
              className="mt-3 flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Captured. Connect to Mailchimp/Brevo in production.");
              }}
            >
              <input
                type="email"
                required
                placeholder={lang === "en" ? "Your email" : "Tu correo"}
                className="flex-1 rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-sm font-semibold">
                {lang === "en" ? "Subscribe" : "Suscribirme"}
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">{t.contact.h}</h2>
            <p className="text-slate-300">{t.contact.p}</p>
            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> <span className="font-medium">{t.contact.email}:</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="ml-2 hover:text-indigo-400">{CONTACT_EMAIL}</a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> <span className="font-medium">{t.contact.phone}:</span>
                <a href={`tel:${CONTACT_PHONE}`} className="ml-2 hover:text-indigo-400">{CONTACT_PHONE}</a>
              </p>
            </div>
          </div>
          <div className="rounded-2xl p-6 bg-slate-900 border border-slate-800">
            <h3 className="font-semibold">Message</h3>
            <form
              className="mt-3 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message captured. Connect to a backend form handler.");
              }}
            >
              <input
                type="text"
                placeholder={lang === "en" ? "Name" : "Nombre"}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                type="email"
                placeholder={lang === "en" ? "Email" : "Correo"}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <textarea
                placeholder={lang === "en" ? "How can we help?" : "¿Cómo podemos ayudarte?"}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm h-28 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button className="px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-sm font-semibold">
                {t.contact.send}
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="py-10 text-sm text-slate-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {copy.en.brand}. {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            {t.footer.legal.map((x, i) => (
              <a key={i} href="#" className="hover:text-indigo-400">{x}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="w-4 h-4 text-slate-400"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}
