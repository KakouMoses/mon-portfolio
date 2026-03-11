// components/SkillTreeTeaser.tsx
import Link from 'next/link';
import { Cpu, ChevronRight } from 'lucide-react';

export default function SkillTreeTeaser() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-linear-to-br from-gray-900 to-blue-900/20 border border-blue-500/30 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <Cpu size={14} /> SYSTEM_ARCH_VISUALIZER
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explorez mon Arbre de Compétences
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Une vue interactive de mon expertise, du bas niveau (C/C++, Embarqué) aux architectures cloud et backend. 
            Visualisez les connexions entre chaque technologie.
          </p>
          <Link href="/skills" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105">
            Lancer l'interactivité <ChevronRight size={18} />
          </Link>
        </div>
        
        {/* Aperçu visuel stylisé (Abstrait) */}
        <div className="w-full md:w-1/3 flex justify-center opacity-50 grayscale hover:grayscale-0 transition-all">
           <div className="grid grid-cols-2 gap-2 transform rotate-12">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-12 h-12 border border-blue-500/50 rounded-lg animate-pulse"></div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}