'use client'

import React, { useState, Suspense } from "react"

const FooterCom = () => {
    return (
        <footer className="border-t border-white/10 px-8 lg:px-20 py-10 text-gray-500 flex flex-col lg:flex-row justify-between gap-6">
            <div>
                © 2026 E-MANZILI — Performance Commerciale Immobilière
            </div>

            <div className="flex flex-wrap gap-6">
                <span>Promoteurs</span>
                <span>Academy</span>
                <span>E-learning</span>
                <span>Marketing</span>
                <span>Contact</span>
            </div>
        </footer>
    );
}

export default function Footer() {

    return <Suspense>
        <FooterCom />
    </Suspense>
}