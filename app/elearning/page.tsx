'use client'

import Formacadelear from "@/components/formacadelear";

import React, { useState, Suspense, useRef } from "react"

const ElearningCom = () => {
    const auditRef = useRef<HTMLDivElement>(null);

    const scrollToAudit = () => {
        auditRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div >
            <section className="min-h-screen bg-[#07111F] px-8 lg:px-20 py-24">
                <h2 className="text-5xl font-bold mb-10 text-cyan-400">E-learning</h2>
                <div className="grid lg:grid-cols-2 gap-10 text-gray-300">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Apprentissage en ligne</h3>
                        <p>Modules vidéo accessibles 24/7 avec progression personnalisée.</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Exercices pratiques</h3>
                        <p>Cas réels, simulations de vente et mises en situation.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Certification</h3>
                        <p>Validation des compétences commerciales immobilières.</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Suivi progression</h3>
                        <p>Tableau de bord personnel pour suivre votre évolution.</p>
                    </div>
                </div>
                <button onClick={scrollToAudit} className="mt-10 text-cyan-400">
                    Reserver
                </button>
            </section>
            <div ref={auditRef} className="min-h-screen w-full bg-[#0D1727] flex items-center justify-center px-4">
                <Formacadelear />
            </div>
        </div>
    );
}

export default function Elearning() {

    return <Suspense>
        <ElearningCom />
    </Suspense>
}