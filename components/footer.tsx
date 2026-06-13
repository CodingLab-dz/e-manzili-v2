'use client'

import React, { useState, Suspense } from "react"
import Link from "next/link";
import Contact from "./contact";
import Image from 'next/image'
import logo from '@/images/logo/logo.png'

const FooterCom = ({ contactRef }: { contactRef: React.RefObject<HTMLDivElement> }) => {
    return (
        <footer id="contact" className="bg-[#07111F] border-t border-white/10 px-8 lg:px-20 py-10 text-gray-500 flex flex-col lg:flex-row justify-between gap-6">
            <div className="max-w-82.5">
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
                <h1><span className="font-bold">Tel: </span></h1>
                <h1><span className="font-bold">E-mail: </span></h1>
                <h1>24/7  / chaque communication electronique recoit une reponse dans les 24 heures
                    © 2026 E-MANZILI — Performance Commerciale Immobilière</h1>
            </div>

            <div className="flex flex-col gap-6">
                <Link href="/promoteurs" className="relative group">
                    Promoteurs
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/academy" className="relative group">
                    Academy
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/elearning" className="relative group">
                    E-learning
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="/marketing" className="relative group">
                    Marketing
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link href="#" className="relative group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
            </div>

            <div ref={contactRef}>
                <Contact />
            </div>
        </footer>
    );
}

export default function Footer({ contactref }: { contactref: React.RefObject<HTMLDivElement> }) {

    return <Suspense>
        <FooterCom contactRef={contactref} />
    </Suspense>
}