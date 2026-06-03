'use client'

import React, { useState, Suspense } from "react"

const MarketingCom = () => {
    return (
        <section className="px-8 lg:px-20 py-24 bg-[#0D1727]">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <div className="text-cyan-400 text-sm mb-4">MARKETING IMMOBILIER</div>

                    <h2 className="text-5xl font-bold leading-tight mb-8">
                        Des stratégies marketing modernes pour accélérer les ventes.
                    </h2>

                    <div className="space-y-5 text-gray-300 text-lg">
                        <div>• Visites virtuelles immersives</div>
                        <div>• Publicités Meta & Google Ads</div>
                        <div>• Campagnes de génération de leads</div>
                        <div>• Branding immobilier premium</div>
                        <div>• Automatisation WhatsApp & CRM</div>
                        <div>• Vidéos promotionnelles & contenu</div>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl">
                    <div className="text-sm text-cyan-400 mb-4">EXPERIENCE CLIENT</div>

                    <h3 className="text-3xl font-bold mb-6">
                        Une nouvelle manière de présenter les projets immobiliers.
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-8">
                        Grâce aux outils digitaux, aux visites virtuelles et à une stratégie de communication avancée, les promoteurs peuvent améliorer l’expérience client et augmenter leur taux de conversion.
                    </p>

                    <button className="bg-cyan-400 text-black px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">
                        Découvrir nos stratégies
                    </button>
                </div>
            </div>
        </section>
    );
}

export default function Marketingsection() {

    return <Suspense>
        <MarketingCom />
    </Suspense>
}