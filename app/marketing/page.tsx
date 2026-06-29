'use client'

import Formpromomarketing from "@/components/formpromomarketing";
import ClosingIcon from "@/components/icons/closingicon";
import HouseIcon from "@/components/icons/houseicon";
import SettingsIcon from "@/components/icons/settingsicon";
import TrophyIcon from "@/components/icons/trophyicon";
import VideoIcon from "@/components/icons/videoicon";
import React, { useState, Suspense, useRef, useEffect } from "react"
import bannerimg from '@/images/marketingbanner.webp'
import Image from "next/image";


const solutions = [
    {
        icon: ClosingIcon({ size: 26 }),
        color: "cyan",
        title: "Génération de Leads Qualifiés",
        description:
            "Campagnes ciblées pour attirer des prospects réellement intéressés par vos projets.",
        items: ["Facebook Ads", "Instagram Ads", "Google Ads", "Landing Pages"],
    },
    {
        icon: TrophyIcon({ size: 26 }),
        color: "cyan",
        title: "Branding Immobilier",
        description:
            "Valoriser vos projets avec une identité forte et un positionnement mémorable.",
        items: ["Identité visuelle", "Positionnement", "Storytelling", "Image de marque"],
    },
    {
        icon: VideoIcon({ size: 26 }),
        color: "cyan",
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
        icon: HouseIcon({ size: 26 }),
        color: "cyan",
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
        icon: SettingsIcon({ size: 26 }),
        color: "cyan",
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
    { value: 3, suffix: "x", label: "Plus de prospects qualifiés" },
    { value: 60, suffix: "%", plus: "+", label: "Taux de conversion moyen" },
    { value: 360, suffix: "°", label: "Couverture marketing" },
];

const AnimatedStat = ({ target, suffix = "", label }: { target: number; suffix?: string; label: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <div>
            <div className="text-3xl lg:text-4xl font-bold text-cyan-400">+{count}{suffix}</div>
            <div className="text-gray-400 mt-1 text-xs sm:text-sm">{label}</div>
        </div>
    );
};

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


            <section className="min-h-screen bg-[#07111F]">



                {/* ── Hero ── */}
                <div className="relative overflow-hidden min-h-screen flex items-center px-6 sm:px-10 lg:px-20 pt-24" data-aos="fade-up" data-aos-duration="1500">
                    {/* <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${bannerimg.src})` }}

                /> */}

                    <Image
                        src={bannerimg}
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

                    {/* content */}
                    <div className=" relative z-10 max-w-3xl">
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
                                    data-aos="fade-up" data-aos-duration="1500"
                                >
                                    <p className="text-[11.5px] text-gray-500 leading-tight">{s?.plus}</p>
                                    <p className="text-3xl font-bold text-cyan-400 mb-1"><AnimatedStat target={s.value} suffix={s.suffix} label={s.label} /></p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div />

                <div className="w-full px-6 sm:px-10 lg:px-20 py-24">
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
                                    className={`rounded-2xl border ${c.border} bg-white/[0.03] p-6 flex flex-col gap-4 hover:bg-white/[0.055] duration-200 hover:-translate-y-3 transition-all`}
                                    data-aos="fade-up" data-aos-duration="1500"
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
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-6 mb-8 flex items-start gap-5" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-xl flex-shrink-0 mt-0.5">
                            <ClosingIcon size={26} />
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
                    <div className="rounded-2xl border border-teal-500/20 bg-teal-500/5 px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" data-aos="zoom-in" data-aos-duration="1500">
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