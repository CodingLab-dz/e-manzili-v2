'use client'



import Banner from "@/components/banner";
import Banner2 from "@/components/banner2";
import ContactSection from "@/components/contactsection";
import Espace from "@/components/espacesection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Marketingsection from "@/components/marketingsection";
import TrainingSection from "@/components/trainingsection";
import { useState } from "react";

export default function EManziliConcept() {
  return (
    <div className="min-h-screen bg-[#07111F] text-white font-sans overflow-hidden">
      {/* NAVBAR */}

      {/* HERO */}
      {/* <Banner /> */}
      <Banner2 />

      {/* DUAL SPACE */}
      <Espace />
      {/* TRAINING */}
      <TrainingSection />

      {/* MARKETING */}
      <Marketingsection />

      {/* FOOTER */}
    </div>
  )
}