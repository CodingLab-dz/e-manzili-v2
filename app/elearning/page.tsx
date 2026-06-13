'use client'

import Formacadelear from "@/components/formacadelear";

import React, { useState, Suspense, useRef } from "react"

const categories = [
    { icon: "🎤", label: "Communication Commerciale" },
    { icon: "🧠", label: "Intelligence Émotionnelle" },
    { icon: "🤝", label: "Techniques de Vente" },
    { icon: "🏡", label: "Vente Immobilière" },
    { icon: "⚖️", label: "Négociation" },
    { icon: "🎯", label: "Closing" },
    { icon: "👨‍💼", label: "Leadership" },
    { icon: "📈", label: "Marketing Immobilier" },
    { icon: "🌱", label: "Développement Personnel" },
];

const dashboard = [
    {
        icon: "📊",
        color: "cyan",
        title: "Tableau de bord",
        description: "Suivez votre progression module par module en temps réel.",
    },
    {
        icon: "🏅",
        color: "amber",
        title: "Certificats",
        description: "Valorisez vos compétences avec des certificats partageables.",
    },
    {
        icon: "✅",
        color: "teal",
        title: "Quiz & Évaluations",
        description: "Mesurez vos acquis après chaque module de formation.",
    },
    {
        icon: "🗺️",
        color: "purple",
        title: "Parcours personnalisés",
        description: "Évoluez selon votre niveau et vos objectifs professionnels.",
    },
];

const audiences = [
    "Commerciaux débutants",
    "Conseillers commerciaux",
    "Managers commerciaux",
    "Promoteurs immobiliers",
    "Entrepreneurs",
];

const colorMap: Record<
    string,
    { bg: string; border: string; dot: string }
> = {
    cyan: {
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20",
        dot: "bg-cyan-400",
    },
    amber: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/20",
        dot: "bg-amber-400",
    },
    teal: {
        bg: "bg-teal-500/10",
        border: "border-teal-500/20",
        dot: "bg-teal-400",
    },
    purple: {
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        dot: "bg-purple-400",
    },
};

const ElearningCom = () => {
    const auditRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState<number | null>(null);

    const scrollToAudit = () => {
        auditRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div >
            <section className="min-h-screen bg-[#07111F] px-6 sm:px-10 lg:px-20 py-24">
                {/* ── Hero ── */}
                <div className="max-w-3xl mb-16">
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-400 mb-4">
                        Espace E-Learning
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.15] mb-4">
                        Apprenez où vous voulez.{" "}
                        <br className="hidden sm:block" />
                        Progressez{" "}
                        <span className="text-cyan-400">à votre rythme.</span>
                    </h2>

                    <p className="text-gray-400 text-base leading-relaxed max-w-xl">
                        Transformez chaque heure de formation en compétence concrète grâce à
                        une bibliothèque complète de contenus immobiliers et commerciaux.
                    </p>
                </div>

                {/* ── Divider ── */}
                <div className="border-t border-white/5 mb-14" />

                {/* ── Library ── */}
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-600 mb-6">
                    Bibliothèque de contenus
                </p>

                <div className="flex flex-wrap gap-3 mb-16">
                    {categories.map((cat, i) => (
                        <button
                            key={cat.label}
                            onMouseEnter={() => setHovered(i)}
                            onMouseLeave={() => setHovered(null)}
                            className={`flex items-center gap-2.5 border rounded-xl px-4 py-2.5 transition-all duration-150 cursor-default
              ${hovered === i
                                    ? "bg-cyan-500/10 border-cyan-500/30 scale-[1.02]"
                                    : "bg-white/[0.03] border-white/[0.07]"
                                }`}
                        >
                            <span className="text-base">{cat.icon}</span>
                            <span
                                className={`text-[13px] font-medium transition-colors duration-150 ${hovered === i ? "text-cyan-300" : "text-gray-300"
                                    }`}
                            >
                                {cat.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* ── Personal Space ── */}
                <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-600 mb-6">
                    Votre espace personnel
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
                    {dashboard.map((d) => {
                        const c = colorMap[d.color];
                        return (
                            <div
                                key={d.title}
                                className={`rounded-2xl border ${c.border} bg-white/[0.03] p-5 flex flex-col gap-3 hover:bg-white/[0.055] transition-colors duration-200`}
                            >
                                <div
                                    className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center text-base`}
                                >
                                    {d.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-[14px] mb-1">
                                        {d.title}
                                    </h3>
                                    <p className="text-gray-500 text-[12.5px] leading-relaxed">
                                        {d.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ── Pour qui ── */}
                <div className="mb-14">
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-600 mb-5">
                        Pour qui ?
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {audiences.map((a) => (
                            <div
                                key={a}
                                className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-2.5"
                            >
                                <span className="text-cyan-400 text-sm">✔</span>
                                <span className="text-gray-300 text-[13px] font-medium">{a}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── CTA Bar ── */}
                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div>
                        <h3 className="text-white font-bold text-xl mb-1">
                            Accédez gratuitement à un module découverte
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Testez la plateforme sans engagement — aucune carte bancaire requise.
                        </p>
                    </div>

                    <button
                        onClick={scrollToAudit}
                        className="flex-shrink-0 inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 active:scale-95 transition-all duration-150 text-[#07111F] font-semibold text-sm px-6 py-3 rounded-xl"
                    >
                        Essayer gratuitement
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