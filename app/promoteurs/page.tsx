'use client'

import Formpromomarketing from "@/components/formpromomarketing";
import React, { useState, Suspense, useRef } from "react"

const PromoteursCom = () => {
    const auditRef = useRef<HTMLDivElement>(null);

    const scrollToAudit = () => {
        auditRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div >
            <section className="min-h-screen bg-[#07111F] px-8 lg:px-20 py-24">
                <h2 className="text-5xl font-bold mb-10 text-cyan-400">Espace Promoteurs</h2>
                <div className="grid lg:grid-cols-2 gap-10 text-gray-300">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Audit & Stratégie</h3>
                        <p>Analyse complète de votre structure commerciale, pipeline, conversion et organisation.</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Structuration équipe</h3>
                        <p>Création d’organigrammes, scripts de vente, KPI et processus commerciaux.</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Recrutement</h3>
                        <p>Sélection de commerciaux adaptés au marché immobilier et formation initiale.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Marketing avancé</h3>
                        <p>Meta Ads, Google Ads, génération de leads et automatisation WhatsApp.</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Visites virtuelles</h3>
                        <p>Expériences immersives pour accélérer la décision client.</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Coaching terrain</h3>
                        <p>Accompagnement direct des équipes commerciales sur site.</p>
                    </div>
                </div>
                <button onClick={scrollToAudit} className="mt-10 text-cyan-400">
                    Réserver un audit
                </button>
            </section>
            <div ref={auditRef} className="audit min-h-screen w-full bg-[#0D1727] flex items-center justify-center px-4">
                <Formpromomarketing />
            </div>
        </div>
    );
}

export default function Promoteurs() {

    return <Suspense>
        <PromoteursCom />
    </Suspense>
}