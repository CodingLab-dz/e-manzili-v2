'use client'

import React, { useEffect, useState, Suspense } from "react"
import Link from "next/link";
import imagebanner from '@/images/imagebanner.jpeg';

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

const AnimatedProgressBar = ({ label, value }: { label: string; value: number }) => {
    const [width, setWidth] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setWidth(value), 300);
        return () => clearTimeout(timer);
    }, [value]);

    useEffect(() => {
        if (width === 0) return;
        let start = 0;
        const duration = 1000;
        const increment = value / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [width]);

    return (
        <div>
            <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-300">{label}</span>
                <span className="text-cyan-400">{count}%</span>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                    className="bg-cyan-400 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${width}%` }}
                />
            </div>
        </div>
    );
};

const BannerCom = () => {
    return (
        <section className="relative px-8 lg:px-20 py-20 overflow-hidden min-h-screen flex items-center" data-aos="fade-up">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${imagebanner.src})` }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />

            {/* Optional top/bottom fades for polish */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

            {/* Ambient glow blobs (kept from original) */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full" />

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* text side */}
                <div className="w-full">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-8">
                        <div className="w-2 h-2 rounded-full bg-cyan-400 shrink-0"></div>
                        Performance Commerciale Immobilière
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-5xl font-bold leading-tight mb-8">
                        L'ingénierie commerciale au service de l'immobilier.{" "}
                        <span className="text-cyan-400">
                            Audit, formation, marketing et accompagnement
                        </span>{" "}
                        des promoteurs immobiliers pour générer plus de prospects, plus de visites et plus de ventes.
                    </h1>

                    <p className="text-lg text-gray-300 leading-relaxed mb-10">
                        E-Manzili accompagne les promoteurs immobiliers avec des stratégies commerciales avancées, du marketing digital, des formations terrain et une plateforme e-learning dédiée aux commerciaux.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <Link href='/promoteurs' className="hover:-translate-y-0.5 transition-all">
                            <button className="bg-cyan-400 text-black px-6 py-3 rounded-2xl font-semibold text-sm">
                                Espace Promoteurs
                            </button>
                        </Link>
                        <Link href='/academy' className="hover:-translate-y-0.5 transition-all">
                            <button className="border border-white/10 bg-white/5 px-6 py-3 rounded-2xl text-sm">
                                Academy
                            </button>
                        </Link>
                        <Link href='/elearning' className="hover:-translate-y-0.5 transition-all">
                            <button className="border border-white/10 bg-white/5 px-6 py-3 rounded-2xl text-sm">
                                E-learning
                            </button>
                        </Link>
                        <Link href='/marketing' className="hover:-translate-y-0.5 transition-all">
                            <button className="border border-white/10 bg-white/5 px-6 py-3 rounded-2xl text-sm">
                                Marketing
                            </button>
                        </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-12">
                        <div>
                            <AnimatedStat target={35} suffix="%" label="Conversion commerciale" />
                        </div>
                        <div>
                            <AnimatedStat target={360} suffix="°" label="Accompagnement" />
                        </div>
                        <div>
                            <div className="text-3xl lg:text-4xl font-bold text-cyan-400">24/7</div>
                            <div className="text-gray-400 mt-1 text-xs sm:text-sm">E-learning Academy</div>
                        </div>
                    </div>
                </div>

                {/* stat side */}
                <div className="w-full">
                    <div className="bg-white/5 border border-white/10 rounded-[32px] p-5 sm:p-8 backdrop-blur-xl shadow-[0_0_80px_rgba(0,255,255,0.08)]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
                                <div className="text-cyan-400 text-xs mb-2">SALES</div>
                                <div className="text-2xl font-bold mb-1">Closing</div>
                                <p className="text-gray-400 text-xs">Méthodes avancées de vente immobilière.</p>
                            </div>
                            <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
                                <div className="text-cyan-400 text-xs mb-2">COMMUNICATION</div>
                                <div className="text-2xl font-bold mb-1">Confiance</div>
                                <p className="text-gray-400 text-xs">Développer une communication impactante.</p>
                            </div>
                            <div className="bg-black/30 border border-white/5 rounded-2xl p-5 lg:col-span-2">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-base font-semibold">Marketing Immobilier Avancé</span>
                                    <span className="text-cyan-400 text-xs">STRATEGY</span>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <AnimatedProgressBar label="Campagnes digitales" value={92} />
                                    </div>
                                    <div>
                                        <AnimatedProgressBar label="Visites virtuelles" value={88} />

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

export default function Banner2() {
    return <Suspense><BannerCom /></Suspense>
}