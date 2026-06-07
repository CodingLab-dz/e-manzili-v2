'use client'

import Formpromomarketing from "@/components/formpromomarketing";
import React, { useState, Suspense, useRef} from "react"

const MarketingCom = () => {
    const auditRef = useRef<HTMLDivElement>(null);
    
        const scrollToAudit = () => {
            auditRef.current?.scrollIntoView({ behavior: "smooth" });
        };
    return (
        <div >
            <section className="min-h-screen bg-[#07111F] px-8 lg:px-20 py-24">
                <h2 className="text-5xl font-bold mb-10 text-cyan-400">Marketing Immobilier</h2>
                <div className="grid lg:grid-cols-2 gap-10 text-gray-300">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Génération de leads</h3>
                        <p>Campagnes Meta Ads et Google Ads pour attirer des acheteurs qualifiés.</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Visites virtuelles</h3>
                        <p>Expériences immersives pour améliorer la conversion.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Automatisation</h3>
                        <p>CRM, WhatsApp automation et suivi client intelligent.</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Branding immobilier</h3>
                        <p>Création d’image premium pour vos projets immobiliers.</p>
                    </div>
                </div>
                <button onClick={scrollToAudit} className="mt-10 text-cyan-400">
                    Réserver un audit
                </button>
            </section>
            <div ref={auditRef} className="min-h-screen w-full bg-[#0D1727] flex items-center justify-center px-4">
                <Formpromomarketing />
            </div>
        </div>
    );
}

export default function Marketing() {

    return <Suspense>
        <MarketingCom />
    </Suspense>
}