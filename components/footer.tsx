'use client'

import React, { useState, Suspense } from "react"
import Link from "next/link";
import Contact from "./contact";

const FooterCom = ({contactRef} : {contactRef : React.RefObject<HTMLDivElement> }) => {
    return (
        <footer id="contact" className="bg-[#07111F] border-t border-white/10 px-8 lg:px-20 py-10 text-gray-500 flex flex-col lg:flex-row justify-between gap-6">
            <div>
                <div className="logo w-fit">
                    <Link href="/" className="flex flex-col gap-1">
                        <h1 className="lg:text-2xl font-bold tracking-[0.2em]">
                            <span className="text-cyan-400">E</span>-MANZILI
                        </h1>
                        <div className="flex flex-col gap-0.5">
                            <div className="w-[80%] lg:w-full h-px bg-cyan-400" />
                            <span className="text-[9px] tracking-[0.25em] text-cyan-400 uppercase">
                                Performance Immobilière
                            </span>
                        </div>
                    </Link>
                </div>
                <p className="text-[15px] text-gray-500 leading-relaxed mt-8 mb-5 max-w-87.5">
                    E-Manzili accompagne les promoteurs immobiliers avec des stratégies commerciales avancées, du marketing digital, des formations terrain et une plateforme e-learning dédiée aux commerciaux.
                </p>
                © 2026 E-MANZILI — Performance Commerciale Immobilière
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

export default function Footer({contactref} : {contactref : React.RefObject<HTMLDivElement> }) {

    return <Suspense>
        <FooterCom contactRef={contactref}/>
    </Suspense>
}