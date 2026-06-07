'use client'

import React, { useState, Suspense } from "react"

function Field({ label, icon, type, placeholder, textarea }: {
    label: string; icon: string; type?: string; placeholder: string; textarea?: boolean
}) {
    return (
        <div className="mb-5">
            <label className="block text-[11px] font-medium text-[#8892a4] tracking-widest uppercase mb-2">
                {label}
            </label>
            <div className="relative">
                <i className={`ti ${icon} absolute left-3.5 ${textarea ? 'top-3.5' : 'top-1/2 -translate-y-1/2'} text-[#3d4a5c] text-base pointer-events-none`} />
                {textarea ? (
                    <textarea
                        placeholder={placeholder}
                        rows={5}
                        className="w-full bg-[#07111f] border border-[#1e2535] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-[#3d4a5c] outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition-all resize-none"
                    />
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        className="w-full bg-[#07111f] border border-[#1e2535] rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder-[#3d4a5c] outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition-all"
                    />
                )}
            </div>
        </div>
    )
}


const FormCom = () => {
    return (
        <div className="bg-[#0d1520] border border-[#1e2535] rounded-3xl p-10 max-w-xl mx-auto font-inter">
            <h2 className="font-syne text-2xl font-black text-white mb-1">Contactez-nous</h2>
            <p className="text-[#8892a4] text-sm mb-2">Notre équipe vous répondra dans les plus brefs délais.</p>
            <div className="w-10 h-0.5 bg-cyan-400 rounded mb-8" />

            <div className="grid grid-cols-2 gap-4">
                <Field label="Nom complet" icon="ti-user" type="text" placeholder="Ahmed Benali" />
                <Field label="Société" icon="ti-building" type="text" placeholder="Nom de la société" />
            </div>

            <Field label="Adresse e-mail" icon="ti-mail" type="email" placeholder="vous@exemple.com" />
            <Field label="N° téléphone" icon="ti-phone" type="tel" placeholder="+213 6XX XXX XXX" />
            <Field
                label="Message"
                icon="ti-message"
                placeholder="Décrivez votre besoin..."
                textarea
            />

            <button className="w-full bg-cyan-400 text-[#07111f] rounded-xl py-3.5 font-syne font-bold text-base tracking-wide hover:opacity-90 active:scale-[0.98] transition-all mt-2">
                Envoyer la demande
            </button>
            <p className="text-center text-xs text-[#3d4a5c] mt-3">
                Vos données sont protégées · <span className="text-cyan-400">E-Manzili</span>
            </p>
        </div>
    )
}

export default function Formpromomarketing() {

    return <Suspense>
        <FormCom />
    </Suspense>
}