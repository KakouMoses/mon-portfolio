// app/skills/page.tsx
"use client";

import Link from 'next/link';
import SkillTree from '@/components/SkillTree';
import { ArrowLeft } from 'lucide-react';

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#0b0f1a] text-white">
      {/* Barre de contrôle supérieure */}
      <nav className="p-6 border-b border-gray-800 flex justify-between items-center bg-[#0b0f1a]/50 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} /> Retour au portfolio
        </Link>
        <div className="text-right">
          <h1 className="text-xl font-bold tracking-tighter">TECH_STACK_MAP</h1>
          <p className="text-[10px] text-blue-500 font-mono">MOÏSE KAKOU • VERSION INTERACTIVE</p>
        </div>
      </nav>

      <div className="p-4 md:p-8">
        <div className="flex-1 max-w-7xl mx-auto">
          <header className="mb-8">
            <h2 className="text-3xl font-black">Visualiseur d'Expertise</h2>
            <p className="text-gray-500 text-sm">Utilisez la souris pour naviguer, zoomer et réorganiser les nœuds de compétences.</p>
          </header>
          
          {/* On appelle le composant SkillTree qu'on a créé précédemment */}
          <div className="h-[75vh]">
            <SkillTree />
          </div>
        </div>
      </div>
    </main>
  );
}