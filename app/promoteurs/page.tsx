'use client'

import Formpromomarketing from "@/components/formpromomarketing";
import React, { useState, Suspense, useRef } from "react"


const services = [
    {
        icon: "🔍",
        color: "teal",
        title: "Intelligence Commerciale",
        description:
            "Analyse de vos performances pour identifier les freins à la vente et les opportunités de croissance.",
        items: [
            "Organisation commerciale",
            "Gestion des leads",
            "Expérience client",
            "Performances individuelles",
            "Indicateurs de suivi",
        ],
    },
    {
        icon: "👥",
        color: "cyan",
        title: "Recrutement & Talents",
        description:
            "Construire une équipe commerciale performante adaptée au marché immobilier.",
        items: [
            "Recrutement ciblé",
            "Évaluation des compétences",
            "Intégration & onboarding",
            "Montée en compétence",
        ],
    },
    {
        icon: "🎓",
        color: "purple",
        title: "Formation & Coaching Terrain",
        description:
            "Développer les compétences commerciales qui génèrent des résultats concrets.",
        items: [
            "Techniques de vente modernes",
            "Intelligence émotionnelle",
            "Gestion des objections & closing",
            "Leadership commercial",
        ],
    },
    {
        icon: "📈",
        color: "amber",
        title: "Marketing & Acquisition",
        description:
            "Générer des leads qualifiés pour alimenter continuellement votre pipeline commercial.",
        items: [
            "Facebook, Instagram & Google Ads",
            "Landing pages optimisées",
            "Branding & storytelling projet",
            "CRM & automatisation WhatsApp",
        ],
    },
    {
        icon: "🏡",
        color: "cyan",
        title: "Visites Virtuelles",
        description:
            "Offrir à vos prospects une expérience immersive pour accélérer leur décision d'achat.",
        items: [
            "Visites virtuelles 360°",
            "Appartements témoins digitaux",
            "Présentation interactive",
            "Parcours client digitalisé",
        ],
    },
];

const colorMap: Record<
    string,
    { bg: string; text: string; border: string; dot: string }
> = {
    teal: {
        bg: "bg-teal-500/10",
        text: "text-teal-400",
        border: "border-teal-500/20",
        dot: "bg-teal-400",
    },
    cyan: {
        bg: "bg-cyan-500/10",
        text: "text-cyan-400",
        border: "border-cyan-500/20",
        dot: "bg-cyan-400",
    },
    purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-400",
        border: "border-purple-500/20",
        dot: "bg-purple-400",
    },
    amber: {
        bg: "bg-amber-500/10",
        text: "text-amber-400",
        border: "border-amber-500/20",
        dot: "bg-amber-400",
    },
};

const pillars = [
    "Attirer les bons prospects",
    "Convertir efficacement",
    "Former des commerciaux performants",
    "Piloter avec précision",
];

const PromoteursCom = () => {
    const auditRef = useRef<HTMLDivElement>(null);

    const scrollToAudit = () => {
        auditRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div >
            {/* <section className="min-h-screen bg-[#07111F] px-8 lg:px-20 py-24">
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
            </section> */}

            <section className="min-h-screen bg-[#07111F] px-6 sm:px-10 lg:px-20 py-24">
                {/* ── Hero ── */}
                <div className="max-w-3xl mb-16">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-400 mb-4">
                        Espace Promoteurs
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.15] mb-6">
                        Transformez votre force de vente{" "}
                        <br className="hidden sm:block" />
                        en{" "}
                        <span className="text-cyan-400">avantage concurrentiel</span>
                    </h2>

                    <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
                        La différence entre deux projets immobiliers ne se joue plus
                        uniquement sur le prix ou l'emplacement — elle se joue sur votre
                        système commercial.
                    </p>

                    {/* Pillars */}
                    <div className="flex flex-wrap gap-2">
                        {pillars.map((p) => (
                            <span
                                key={p}
                                className="text-xs font-medium text-cyan-300 bg-teal-500/10 border border-teal-500/20 rounded-full px-4 py-1.5"
                            >
                                {p}
                            </span>
                        ))}
                    </div>
                </div>

                {/* ── Divider ── */}
                <div className="border-t border-white/5 mb-14" />

                {/* ── Services Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
                    {services.map((s) => {
                        const c = colorMap[s.color];
                        return (
                            <div
                                key={s.title}
                                className={`rounded-2xl border ${c.border} bg-white/[0.03] p-6 flex flex-col gap-4 hover:bg-white/[0.055] transition-colors duration-200`}
                            >
                                {/* Icon badge */}
                                <div
                                    className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center text-lg`}
                                >
                                    {s.icon}
                                </div>

                                {/* Title + description */}
                                <div>
                                    <h3 className="text-white font-semibold text-[15px] mb-1.5">
                                        {s.title}
                                    </h3>
                                    <p className="text-gray-500 text-[13px] leading-relaxed">
                                        {s.description}
                                    </p>
                                </div>

                                {/* Bullet list */}
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

                {/* ── CTA Bar ── */}
                <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-1">
                            Réservez un audit stratégique gratuit
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Découvrez comment améliorer les performances commerciales de votre
                            projet immobilier.
                        </p>
                    </div>

                    <button
                        onClick={scrollToAudit}
                        className="flex-shrink-0 inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 active:scale-95 transition-all duration-150 text-[#07111F] font-semibold text-sm px-6 py-3 rounded-xl"
                    >
                        Réserver mon audit
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