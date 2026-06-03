'use client'

import React, { useState, Suspense } from "react"
import Link from "next/link";
import Image from 'next/image'
import logo from '@/images/logo/logo.png'
import logo2 from '@/images/logo/logo2.png'

const HeaderCom = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#07111F]/80 px-8 lg:px-20 py-3 flex items-center justify-between">
            <div>
                <div className="h-[70px] overflow-hidden">
                    <Image
                        src={logo2}
                        alt="logo"
                        width={100} height={70}
                        className="mix-blend-mode:screen mt-[-10px]"
                    />
                </div>

                {/* <h1 className="text-2xl font-bold tracking-wide">
                    E-<span className="text-cyan-400">MANZILI</span>
                </h1> */}
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
                <Link href="#" className="relative group">
                    Promoteurs
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#" className="relative group">
                    Academy
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#" className="relative group">
                    E-learning
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#" className="relative group">
                    Marketing
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#" className="relative group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>

            <button className="bg-cyan-400 text-black px-3 py-2 lg:px-5 lg:py-3 rounded-2xl font-semibold hover:scale-105 transition-all">
                Réserver un audit
            </button>

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

export default function Header() {

    return <Suspense>
        <HeaderCom />
    </Suspense>
}