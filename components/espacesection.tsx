'use client'

import React, { useState, Suspense } from "react"

const EspaceCom = () => {
    return (
        <section className="px-8 lg:px-20 py-24 bg-[#0D1727]">
            <div className="text-center mb-16"
                data-aos="zoom-in"
                data-aos-duration="1500">
                <h2 className="text-5xl font-bold mb-6">
                    Une plateforme.
                    <span className="text-cyan-400"> Deux univers.</span>
                </h2>

                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                    E-Manzili connecte les promoteurs immobiliers aux meilleures stratégies commerciales et aux talents formés grâce à une plateforme moderne de performance et d’apprentissage.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-[40px] p-10 hover:-translate-y-2 transition-all duration-300" data-aos="fade-up" data-aos-duration="1500">
                    <div className="text-cyan-400 text-sm mb-4">B2B • PROMOTEURS</div>

                    <h3 className="text-4xl font-bold mb-6">
                        Espace Promoteurs
                    </h3>

                    <div className="space-y-5 text-gray-300">
                        <div>• Audit commercial immobilier</div>
                        <div>• Structuration des forces de vente</div>
                        <div>• Recrutement des commerciaux</div>
                        <div>• Stratégies marketing avancées</div>
                        <div>• Visites virtuelles & expérience digitale</div>
                        <div>• Coaching terrain & management</div>
                        <div>• Campagnes digitales immobilières</div>
                    </div>

                    <button className="mt-10 bg-cyan-400 text-black px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">
                        Accéder aux solutions B2B
                    </button>
                </div>

                <div className="bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20 rounded-[40px] p-10 hover:-translate-y-2 transition-all duration-300"  data-aos="fade-up" data-aos-duration="1500">
                    <div className="text-cyan-400 text-sm mb-4">ACADEMY • E-LEARNING</div>

                    <h3 className="text-4xl font-bold mb-6">
                        E-Manzili Academy
                    </h3>

                    <div className="space-y-5 text-gray-300">
                        <div>• Formations en ligne et présentiel</div>
                        <div>• Communication commerciale</div>
                        <div>• Vendre avec confiance</div>
                        <div>• Négociation & Closing</div>
                        <div>• Leadership commercial</div>
                        <div>• WhatsApp Selling</div>
                        <div>• Certificats & progression</div>
                    </div>

                    <button className="mt-10 bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition-all">
                        Explorer l’Academy
                    </button>
                </div>
            </div>
        </section>

    );
}

export default function Espace() {

    return <Suspense>
        <EspaceCom />
    </Suspense>
}