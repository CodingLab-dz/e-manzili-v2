'use client'

import React, { useState, Suspense } from "react"

const TrainingCom = () => {
    return (
        <section className="px-8 lg:px-20 py-24">
            <div className="mb-16">
                <div className="text-cyan-400 text-sm mb-4">FORMATIONS & PERFORMANCE</div>
                <h2 className="text-5xl font-bold mb-6">
                    Former des commerciaux capables de convaincre avec confiance.
                </h2>

                <p className="text-gray-400 text-lg max-w-3xl">
                    Nos programmes combinent psychologie de vente, communication, intelligence émotionnelle et méthodes modernes de closing adaptées au marché immobilier.
                </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                {[
                    {
                        title: 'Communication Impactante',
                        desc: 'Maîtriser le langage commercial et développer une présence professionnelle.'
                    },
                    {
                        title: 'Vendre avec confiance',
                        desc: 'Développer la confiance, la posture et l’aisance face aux clients.'
                    },
                    {
                        title: 'Closing Immobilier',
                        desc: 'Transformer les prospects en clients grâce à des techniques modernes.'
                    },
                    {
                        title: 'Marketing Digital',
                        desc: 'Utiliser le contenu et les stratégies digitales pour générer des leads.'
                    }
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 flex items-center justify-center mb-6">
                            <div className="w-8 h-8 rounded-full bg-cyan-400"></div>
                        </div>

                        <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function TrainingSection() {

    return <Suspense>
        <TrainingCom />
    </Suspense>
}