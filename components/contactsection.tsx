'use client'
import React, {Suspense} from "react"

const Contactseccomp = () => {
  return (
    <section className="relative px-8 lg:px-20 py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Left — Info */}
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            Contactez-nous
          </div>

          <h2 className="text-3xl xl:text-4xl font-bold leading-tight mb-4">
            Parlons de votre{" "}
            <span className="text-cyan-400">projet immobilier</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Notre équipe vous répond dans les 24h pour vous accompagner vers plus de performances commerciales.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
            {[
              { icon: "📍", text: "Oran, Algérie" },
              { icon: "📞", text: "+213 696 647 876" },
              { icon: "✉️", text: "contact@emanzili.com" },
              { icon: "🕐", text: "Lun – Ven, 9h00 – 18h00" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-300 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-5">
            {["Instagram", "LinkedIn", "Facebook"].map((s) => (
              <button key={s} className="w-9 h-9 rounded-xl border border-white/10 bg-white/5 text-xs text-gray-400 hover:border-cyan-400/50 hover:text-cyan-400 transition-all">
                {s[0]}
              </button>
            ))}
          </div>

          <p className="text-gray-500 text-xs mt-4 leading-relaxed">
            Chaque message reçoit une réponse dans les 24h ou le prochain jour ouvrable.
          </p>
        </div>

        {/* Right — Form */}
        <div className="bg-white/5 border border-white/10 rounded-[32px] p-6 sm:p-8 backdrop-blur-xl shadow-[0_0_80px_rgba(0,255,255,0.08)]">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Nom complet</label>
              <input type="text" placeholder="Votre nom"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50" />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">E-mail</label>
              <input type="email" placeholder="votre@email.com"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50" />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Numéro de contact</label>
              <input type="tel" placeholder="+213 6xx xxx xxx"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50" />
            </div>
            <div>
              <label className="text-xs text-gray-400 mb-1 block">Sujet</label>
              <input type="text" placeholder="Audit, Formation…"
                className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50" />
            </div>
          </div>

          <div className="mt-4">
            <label className="text-xs text-gray-400 mb-1 block">Message (optionnel)</label>
            <textarea rows={4} placeholder="Décrivez votre projet ou votre besoin…"
              className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 resize-none" />
          </div>

          <button className="mt-4 w-full bg-cyan-400 text-black font-semibold text-sm py-3 rounded-xl hover:-translate-y-0.5 transition-all">
            SOUMETTRE
          </button>
        </div>

      </div>
    </section>
  )
}

export default function ContactSection(){
    return (
        <Suspense>
            <Contactseccomp />
        </Suspense>
    )
}