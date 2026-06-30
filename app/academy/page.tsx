'use client'

import Formacadelear from "@/components/formacadelear";
import BrainIcon from "@/components/icons/brainicon";
import ClassroomIcon from "@/components/icons/classroom";
import CompanyIcon from "@/components/icons/companyicon";
import HandshakeIcon from "@/components/icons/handshakeicon";
import LaptopIcon from "@/components/icons/laptopicon";
import ManagerIcon from "@/components/icons/managericon";
import MicIcon from "@/components/icons/micicon";
import RocketIcon from "@/components/icons/rocketicon";
import sales from '@/images/sales.svg';
import bannerig from "@/images/academybanner.webp"
import Image from "next/image";

import React, { useState, Suspense, useRef } from "react"
import TeamIcon from "@/components/icons/teamicon";


const courses: {
    icon: React.ReactNode | string;
    color: string;
    title: string;
    description: string;
    items: string[];
}[] = [
        {
            icon: BrainIcon({ size: 32 }),
            color: "cyan",
            title: "Intelligence Émotionnelle",
            description:
                "Comprendre et maîtriser ses émotions pour créer des relations commerciales durables.",
            items: [
                "Comprendre vos émotions",
                "Développer votre confiance",
                "Créer des relations durables",
                "Gérer les situations difficiles",
            ],
        },
        {
            icon: MicIcon({ size: 32 }),
            color: "cyan",
            title: "Communication & Influence",
            description:
                "Développer un impact fort et une présence mémorable dans chaque interaction.",
            items: [
                "Communication persuasive",
                "Écoute active",
                "Prise de parole",
                "Confiance relationnelle",
            ],
        },
        {
            icon: HandshakeIcon({ size: 32 }),
            color: "cyan",
            title: "Techniques de Vente",
            description:
                "Maîtriser les fondamentaux et les méthodes avancées du cycle de vente complet.",
            items: [
                "Découverte des besoins & pitching",
                "Qualification & argumentation",
                "Traitement des objections",
                "Négociation & closing",
            ],
        },
        {
            icon: RocketIcon({ size: 32 }),
            color: "cyan",
            title: "Vendre avec Confiance",
            description:
                "Développer la posture, la crédibilité et l'assurance qui font les meilleurs commerciaux.",
            items: [
                "Votre posture commerciale",
                "Votre crédibilité",
                "Votre assurance",
                "Votre capacité à convaincre",
            ],
        },
        {
            icon: ManagerIcon({ size: 32 }),
            color: "cyan",
            title: "Leadership Commercial",
            description:
                "Pour les commerciaux souhaitant évoluer vers des postes de management d'équipe.",
            items: [
                "Management d'équipe terrain",
                "Motivation & performance",
                "Pilotage des résultats",
                "Culture commerciale",
            ],
        },
    ];

const formats = [
    { icon: ClassroomIcon({ size: 26 }), label: "Présentiel" },
    { icon: LaptopIcon({ size: 26 }), label: "Distanciel" },
    { icon: ManagerIcon({ size: 26 }), label: "Coaching individuel" },
    { icon: TeamIcon({ size: 36 }), label: "Coaching collectif" },
    { icon: CompanyIcon({ size: 26 }), label: "Séminaires entreprise" },
];

const colorMap: Record<
    string,
    { bg: string; text: string; border: string; dot: string }
> = {
    purple: {
        bg: "bg-teal-500/10",
        text: "text-cyan-400",
        border: "bg-teal-500/20",
        dot: "bg-teal-400",
    },
    cyan: {
        bg: "bg-cyan-500/10",
        text: "text-cyan-400",
        border: "border-cyan-500/20",
        dot: "bg-cyan-400",
    },
    teal: {
        bg: "bg-teal-500/10",
        text: "text-teal-400",
        border: "border-teal-500/20",
        dot: "bg-teal-400",
    },
    amber: {
        bg: "bg-amber-500/10",
        text: "text-amber-400",
        border: "border-amber-500/20",
        dot: "bg-amber-400",
    },
    coral: {
        bg: "bg-orange-500/10",
        text: "text-orange-400",
        border: "border-orange-500/20",
        dot: "bg-orange-400",
    },
};



const AcademyCom = () => {
    const auditRef = useRef<HTMLDivElement>(null);

    const scrollToAudit = () => {
        auditRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div >
            <section className="min-h-screen bg-[#07111F] ">
                {/* ── Hero ── */}
                <div className="relative overflow-hidden min-h-screen flex items-center px-6 sm:px-10 lg:px-20 pt-15" data-aos="fade-up" data-aos-duration="1500">
                    {/* <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${bannerig.src})` }}
                    /> */}
                    <Image
                        src={bannerig}
                        alt="Marketing immobilier"
                        fill
                        priority
                        quality={90}
                        className="object-cover"
                    />
                    {/* Gradient overlay */}
                    {/* Global dark overlay */}
                    <div className="absolute inset-0 bg-[#07111F]/30" />

                    {/* Bottom fade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/60 to-transparent" />

                    {/* Top fade */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

                    {/* Cyan glow left */}
                    <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-cyan-500/10 blur-[160px]" />

                    {/* Cyan glow right */}
                    <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] rounded-full bg-[#07111F] blur-[160px]" />

                    {/* Ambient glow blobs (kept from original) */}
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full" />

                    {/* content */}
                    <div className="relative z-10 max-w-3xl mb-16 w-full h-screen pt-75">
                        <p className="text-xs font-semibold tracking-[0.15em] uppercase text-cyan-400 mb-4">
                            Espace Academy
                        </p>

                        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.15] mb-4">
                            Les meilleurs commerciaux{" "}
                            <br className="hidden sm:block" />
                            ne naissent pas.{" "}
                            <span className="text-cyan-400">Ils se forment.</span>
                        </h2>

                        <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-xl">
                            E-Manzili Academy est dédiée aux commerciaux, managers et
                            professionnels de l'immobilier souhaitant accélérer leur évolution sur
                            le terrain.
                        </p>

                        {/* Audience tags */}
                        <div className="flex flex-wrap gap-2">
                            {["Commerciaux", "Managers commerciaux", "Professionnels de l'immobilier"].map(
                                (tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-medium text-cyan-300 bg-teal-500/10 border bg-teal-500/20 rounded-full px-4 py-1.5"
                                    >
                                        {tag}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full px-6 sm:px-10 lg:px-20 pt-24">
                    {/* ── Divider ── */}
                    <div className="border-t border-white/5 mb-14" />

                    {/* ── Section label ── */}
                    <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-600 mb-6">
                        Parcours de formation
                    </p>

                    {/* ── Courses Grid ── */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
                        {courses.map((s) => {
                            const c = colorMap[s.color];
                            return (
                                <div
                                    key={s.title}
                                    className={`rounded-2xl border ${c.border} bg-white/[0.03] p-6 flex flex-col gap-4 hover:bg-white/[0.055]  duration-200 hover:-translate-y-3 transition-all`}
                                    data-aos="fade-up" data-aos-duration="1500"
                                >
                                    <div
                                        className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center text-lg`}
                                    >
                                        {typeof s.icon === 'string' ? (
                                            <img src={s.icon} alt={s.title} width={32} height={32} />
                                        ) : (
                                            s.icon
                                        )}
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
                    {/* ── Formats ── */}
                    <div className="mb-14">
                        <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-600 mb-5">
                            Formats disponibles
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {formats.map((f) => (
                                <div
                                    key={f.label}
                                    className="flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.07] rounded-xl px-4 py-2.5"
                                    data-aos="zoom-in" data-aos-duration="1500"
                                >
                                    <span className="text-base">{f.icon}</span>
                                    <span className="text-gray-300 text-[13px] font-medium">
                                        {f.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* ── CTA Bar ── */}
                    <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" data-aos="zoom-in" data-aos-duration="1500">
                        <div>
                            <h3 className="text-white font-bold text-xl mb-1">
                                Réservez votre place pour la prochaine session
                            </h3>
                            <p className="text-gray-400 text-sm">
                                Places limitées — rejoignez les commerciaux qui investissent dans
                                leur performance.
                            </p>
                        </div>

                        <button
                            onClick={scrollToAudit}
                            className="flex-shrink-0 inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 active:scale-95 transition-all duration-150 text-white font-semibold text-sm px-6 py-3 rounded-xl"
                        >
                            Réserver ma place
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
                </div>




            </section>
            <div ref={auditRef} className="min-h-screen w-full bg-[#0D1727] flex items-center justify-center px-4">
                <Formacadelear service="academy"/>
            </div>
        </div>
    );
}

export default function Academy() {

    return <Suspense>
        <AcademyCom />
    </Suspense>
}