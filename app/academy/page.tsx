'use client'

import Formacadelear from "@/components/formacadelear";

import React, { useState, Suspense, useRef } from "react"

const AcademyCom = () => {
    const auditRef = useRef<HTMLDivElement>(null);

    const scrollToAudit = () => {
        auditRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div >
            <section className="min-h-screen bg-[#07111F] px-8 lg:px-20 py-24">
                <h2 className="text-5xl font-bold mb-10 text-cyan-400">E-Manzili Academy</h2>
                <div className="grid lg:grid-cols-2 gap-10 text-gray-300">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Communication</h3>
                        <p>Développer une communication commerciale impactante et professionnelle.</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Vendre avec confiance</h3>
                        <p>Posture, confiance et gestion des objections clients.</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Closing</h3>
                        <p>Techniques avancées pour transformer les prospects en clients.</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Leadership</h3>
                        <p>Gestion d’équipe commerciale et motivation terrain.</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Certification</h3>
                        <p>Parcours certifiants pour devenir commercial immobilier performant.</p>
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

export default function Academy() {

    return <Suspense>
        <AcademyCom />
    </Suspense>
}