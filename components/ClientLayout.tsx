"use client";
import { useRef } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const auditRef = useRef<HTMLDivElement>(null!);

    const scrollToAudit = () => {
        auditRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Header clickRef={scrollToAudit} />
            <main ref={auditRef}>
                {children}
            </main>
            <Footer contactref={auditRef} />
        </>
    );
}