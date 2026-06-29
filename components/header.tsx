'use client'

import React, { useState, Suspense, useEffect } from "react"
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from 'next/image'
import logo from '@/images/logo/logo.png'
// import Aos from 'aos';

const HeaderCom = ({ clickref }: { clickref: () => void }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: "/promoteurs", label: "Promoteurs" },
        { href: "/academy", label: "Academy" },
        { href: "/elearning", label: "E-learning" },
        { href: "/marketing", label: "Marketing" },
    ];


    // useEffect(() => {
    //     Aos.init({
    //         duration: 1500,
    //         once: false,
    //         mirror: true,
    //     });
    // }, []);


    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#07111F]/80" >

            <div
                 data-aos="fade-down"
                 data-aos-duration="1500"
                className="px-8 lg:px-20 py-3 flex items-center justify-between w-full"
            >
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
                            {
                                links.map(({href, label})=>{
                                    return (
                                        <Link href={href} className="text-gray-300 hover:text-white py-2">{label}</Link>
                                    );
                                })
                            }
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default function Header({ clickRef }: { clickRef: () => void }) {

    return <Suspense>
        <HeaderCom clickref={clickRef} />
    </Suspense>
}