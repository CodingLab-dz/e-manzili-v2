'use client'

import React, { useState, Suspense } from "react"

const BannerCom = () => {
    return (
        <section className="relative px-8 lg:px-20 py-24 overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                <div>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-8">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        Performance Commerciale Immobilière
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
                        Transformer les équipes immobilières en
                        <span className="text-cyan-400"> machines de vente.</span>
                    </h1>

                    <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mb-10">
                        E-Manzili accompagne les promoteurs immobiliers avec des stratégies commerciales avancées, du marketing digital, des formations terrain et une plateforme e-learning dédiée aux commerciaux.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <button onClick={() => {}} className="bg-cyan-400 text-black px-7 py-4 rounded-2xl font-semibold">
                            Espace Promoteurs
                        </button>
                        <button onClick={() => {}} className="border border-white/10 bg-white/5 px-7 py-4 rounded-2xl">
                            Academy
                        </button>
                        <button onClick={() => {}} className="border border-white/10 bg-white/5 px-7 py-4 rounded-2xl">
                            E-learning
                        </button>
                        <button onClick={() => {}} className="border border-white/10 bg-white/5 px-7 py-4 rounded-2xl">
                            Marketing
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-14 max-w-xl">
                        <div>
                            <div className="text-4xl font-bold text-cyan-400">+35%</div>
                            <div className="text-gray-400 mt-2 text-sm">Conversion commerciale</div>
                        </div>

                        <div>
                            <div className="text-4xl font-bold text-cyan-400">360°</div>
                            <div className="text-gray-400 mt-2 text-sm">Accompagnement</div>
                        </div>

                        <div>
                            <div className="text-4xl font-bold text-cyan-400">24/7</div>
                            <div className="text-gray-400 mt-2 text-sm">E-learning Academy</div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-xl shadow-[0_0_80px_rgba(0,255,255,0.08)]">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="bg-black/30 border border-white/5 rounded-3xl p-6 col-span-2 lg:col-span-1">
                                <div className="text-cyan-400 text-sm mb-2">SALES</div>
                                <div className="text-3xl font-bold mb-2">Closing</div>
                                <p className="text-gray-400 text-sm">Méthodes avancées de vente immobilière.</p>
                            </div>

                            <div className="bg-black/30 border border-white/5 rounded-3xl p-6 col-span-2 lg:col-span-1">
                                <div className="text-cyan-400 text-sm mb-2">COMMUNICATION</div>
                                <div className="text-3xl font-bold mb-2">Confiance</div>
                                <p className="text-gray-400 text-sm">Développer une communication impactante.</p>
                            </div>

                            <div className="bg-black/30 border border-white/5 rounded-3xl p-6 col-span-2">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-lg font-semibold">Marketing Immobilier Avancé</span>
                                    <span className="text-cyan-400 text-sm">STRATEGY</span>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-300">Campagnes digitales</span>
                                            <span className="text-cyan-400">92%</span>
                                        </div>

                                        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                                            <div className="bg-cyan-400 h-full w-[92%]"></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-gray-300">Visites virtuelles</span>
                                            <span className="text-cyan-400">88%</span>
                                        </div>

                                        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                                            <div className="bg-cyan-400 h-full w-[88%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Banner() {

    return <Suspense>
        <BannerCom />
    </Suspense>
}