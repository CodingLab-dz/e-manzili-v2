'use client'

import Formpromomarketing from "@/components/formpromomarketing";
import React, { useState, Suspense, useRef } from "react"

const solutions = [
    {
        icon: "🎯",
        color: "cyan",
        title: "Génération de Leads Qualifiés",
        description:
            "Campagnes ciblées pour attirer des prospects réellement intéressés par vos projets.",
        items: ["Facebook Ads", "Instagram Ads", "Google Ads", "Landing Pages"],
    },
    {
        icon: "🏆",
        color: "amber",
        title: "Branding Immobilier",
        description:
            "Valoriser vos projets avec une identité forte et un positionnement mémorable.",
        items: ["Identité visuelle", "Positionnement", "Storytelling", "Image de marque"],
    },
    {
        icon: "🎥",
        color: "coral",
        title: "Création de Contenus",
        description:
            "Des contenus qui donnent envie — visuels, vidéos et réseaux sociaux.",
        items: [
            "Vidéos promotionnelles",
            "Interviews",
            "Photos professionnelles",
            "Contenu réseaux sociaux",
        ],
    },
    {
        icon: "🏡",
        color: "teal",
        title: "Visites Virtuelles Immersives",
        description:
            "Faire visiter vos projets à distance avec une expérience immersive.",
        items: [
            "Visites 360°",
            "Appartements témoins digitaux",
            "Présentation interactive",
            "Expérience immersive",
        ],
    },
    {
        icon: "⚙️",
        color: "purple",
        title: "CRM & Automatisation",
        description:
            "Ne perdez plus aucune opportunité grâce à un suivi automatisé et intelligent.",
        items: [
            "Suivi prospects",
            "Relances automatiques",
            "WhatsApp Business",
            "Reporting",
        ],
    },
];

const stats = [
    { value: "3×", label: "Plus de prospects qualifiés" },
    { value: "+60%", label: "Taux de conversion moyen" },
    { value: "360°", label: "Couverture marketing" },
];

const colorMap: Record<
    string,
    { bg: string; border: string; dot: string; accent: string }
> = {
    cyan: {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        dot: "bg-cyan-400",
        accent: "text-cyan-400",
    },
    amber: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        dot: "bg-amber-400",
        accent: "text-amber-400",
    },
    coral: {
        bg: "bg-orange-500/10",
        border: "border-orange-500/20",
        dot: "bg-orange-400",
        accent: "text-cyan-400",
    },
    teal: {
        bg: "bg-teal-500/10",
        border: "border-teal-500/20",
        dot: "bg-teal-400",
        accent: "text-teal-400",
    },
    purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        dot: "bg-purple-400",
        accent: "text-purple-400",
    },
};


const MarketingCom = () => {
    const auditRef = useRef<HTMLDivElement>(null);

    const scrollToAudit = () => {
        auditRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div >
            {/* <section className="min-h-screen bg-[#07111F] px-8 lg:px-20 py-24">
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
            </section> */}

            <section className="min-h-screen bg-[#07111F] px-6 sm:px-10 lg:px-20 py-24">
                {/* ── Hero ── */}
                <div className="max-w-3xl mb-14">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-400 mb-4">
                        Espace Marketing
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.15] mb-4">
                        Plus de visibilité.{" "}
                        <span className="text-cyan-400">Plus de prospects.</span>
                        <br className="hidden sm:block" /> Plus de ventes.
                    </h2>

                    <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                        Une stratégie marketing performante ne consiste pas à être vu.
                        Elle consiste à{" "}
                        <span className="text-gray-200 font-medium">être choisi.</span>
                    </p>
                </div>

                {/* ── Stats ── */}
                <div className="grid grid-cols-3 gap-4 mb-14 max-w-xl">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className="rounded-2xl bg-white/[0.04] border border-white/[0.07] px-4 py-5 text-center"
                        >
                            <p className="text-3xl font-bold text-cyan-400 mb-1">{s.value}</p>
                            <p className="text-[11.5px] text-gray-500 leading-tight">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* ── Divider ── */}
                <div className="border-t border-white/5 mb-14" />

                {/* ── Solutions ── */}
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-600 mb-6">
                    Nos solutions marketing
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                    {solutions.map((s) => {
                        const c = colorMap[s.color];
                        return (
                            <div
                                key={s.title}
                                className={`rounded-2xl border ${c.border} bg-white/[0.03] p-6 flex flex-col gap-4 hover:bg-white/[0.055] transition-colors duration-200`}
                            >
                                <div
                                    className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center text-lg`}
                                >
                                    {s.icon}
                                </div>

                                <div>
                                    <h3 className="text-white font-semibold text-[15px] mb-1.5">
                                        {s.title}
                                    </h3>
                                    <p className="text-gray-500 text-[13px] leading-relaxed">
                                        {s.description}
                                    </p>
                                </div>

                                <ul className="flex flex-col gap-1.5 mt-auto">
                                    {s.items.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-2 text-[12.5px] text-gray-400"
                                        >
                                            <span
                                                className={`mt-[6px] w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`}
                                            />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>

                {/* ── Objectif banner ── */}
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-6 mb-8 flex items-start gap-5">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-xl flex-shrink-0 mt-0.5">
                        🎯
                    </div>
                    <div>
                        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-600 mb-2">
                            Notre objectif
                        </p>
                        <p className="text-gray-300 text-[14px] leading-relaxed">
                            Transformer votre marketing en un système capable de générer des
                            opportunités commerciales de manière{" "}
                            <span className="text-cyan-400 font-medium">continue</span>.
                        </p>
                    </div>
                </div>

                {/* ── CTA Bar ── */}
                <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-1">
                            Demandez une analyse marketing gratuite
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Nous analysons votre projet et vous proposons un plan d'action concret.
                        </p>
                    </div>

                    <button
                        onClick={scrollToAudit}
                        className="flex-shrink-0 inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 active:scale-95 transition-all duration-150 text-white font-semibold text-sm px-6 py-3 rounded-xl"
                    >
                        Analyser mon projet
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </button>
                </div>
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