import React from "react";
import Head from "next/head";
import Timeline from "@/components/Timeline";
import Certifications from "@/components/Certifications";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkillTreeTeaser from "@/components/SkillTreeTeaser";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-gray-100 font-sans">
      <Head>
        <title>Moïse Kakou | Ingénieur Logiciel</title>
      </Head>

      <Header />
      <main className="container mx-auto px-6 py-12">
        <section className="mb-20 text-center lg:text-left">
          <Hero />
        </section> 
        <Certifications />
        <SkillTreeTeaser />
        <Timeline />
      </main>
      <Footer />
    </div>
    
  );
}
