'use client'

import React, { useState, Suspense } from "react"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from 'next/image'
import logo from '@/images/logo/logo.png'

const HeaderCom = ({ clickref }: { clickref: () => void }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/promoteurs", label: "Promoteurs" },
        { href: "/academy", label: "Academy" },
        { href: "/elearning", label: "E-learning" },
        { href: "/marketing", label: "Marketing" },
    ];

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#07111F]/80 px-8 lg:px-20 py-3 flex items-center justify-between ">
            {/* <div className="logo w-fit">
                <Link href="/" className="flex flex-col gap-1">
                    <h1 className="lg:text-2xl font-bold tracking-[0.2em] text-white">
                        <span className="text-cyan-400">E</span>-MANZILI
                    </h1>
                    <div className="flex flex-col gap-0.5">
                        <div className="w-[80%] lg:w-full h-px bg-cyan-400" />
                        <span className="text-[9px] tracking-[0.25em] text-cyan-400 uppercase">
                            Performance Immobilière
                        </span>
                    </div>
                </Link>
            </div> */}
            <div className="logo w-fit">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="E-Manzili Logo"
                        height={48}
                        className="h-10 lg:h-12 w-auto object-contain"
                    />
                </Link>
            </div>

            <div className="flex lg:hidden items-center">
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-gray-300 hover:text-white p-2"
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-gray-300">
                {links.map(({ href, label }) => {
                    const isActive = pathname === href;
                    return (
                        <Link key={href} href={href} className="relative group">
                            <span className={isActive ? "text-white" : ""}>
                                {label}
                            </span>
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300
            ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                            />
                        </Link>
                    );
                })}
                <Link href="#" onClick={clickref} className="relative group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>

            <Link href='/promoteurs'>
                <button className="bg-cyan-400 text-black px-3 py-2 lg:px-5 lg:py-3 rounded-2xl font-semibold hover:scale-105 transition-all">
                    Réserver un audit
                </button>
            </Link>

            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-[#07111F]/99 backdrop-blur-xl border-b border-white/10 lg:hidden">
                    <div className="flex flex-col gap-4 p-6">
                        <Link href="#" className="text-gray-300 hover:text-white py-2">Promoteurs</Link>
                        <Link href="#" className="text-gray-300 hover:text-white py-2">Academy</Link>
                        <Link href="#" className="text-gray-300 hover:text-white py-2">E-learning</Link>
                        <Link href="#" className="text-gray-300 hover:text-white py-2">Marketing</Link>
                        <Link href="#" className="text-gray-300 hover:text-white py-2">Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default function Header({ clickRef }: { clickRef: () => void }) {

    return <Suspense>
        <HeaderCom clickref={clickRef} />
    </Suspense>
}