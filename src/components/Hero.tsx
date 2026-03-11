import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Texte à gauche */}
      <div className="text-center md:text-left flex-1">
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
          KAKOU KACOU MOÏSE
        </h1>
        <p className="text-blue-400 font-mono tracking-widest uppercase text-sm mb-8">
          Ingénieur Logiciels & Systèmes Embarqués
        </p>
        
        {/* Section Langues intégrée */}
        <div className="inline-grid grid-cols-3 gap-4 p-4 bg-gray-900/50 rounded-2xl border border-gray-800">
          <div className="px-4 border-r border-gray-800">
            <p className="text-[10px] text-gray-500 uppercase font-black">Anglais</p>
            <p className="text-xl font-bold text-blue-500">CEFR C2</p>
          </div>
          <div className="px-4 border-r border-gray-800">
            <p className="text-[10px] text-gray-500 uppercase font-black">Français</p>
            <p className="text-xl font-bold text-white">CEFR C2</p>
          </div>
          <div className="px-4">
            <p className="text-[10px] text-gray-500 uppercase font-black">Japonais</p>
            <p className="text-xl font-bold text-blue-500">JLPT N5</p>
          </div>
        </div>
      </div>

      
      {/* Logo à droite (face au texte) */}
      <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl transition-transform hover:rotate-3">
        <Image src="/MoKa.svg" alt="Logo MoKa" width={200} height={128} className="h-32 md:h-48 w-auto" priority /> 
        {/* <img src="/MoKa.svg" alt="Logo Moïse" className="h-32 md:h-48 w-auto" /> */}
      </div>
      {/* Overlay de décoration futuriste */}
      <div className="absolute bottom-4 right-6 pointer-events-none">
        <div className="text-[10px] font-mono text-blue-500/50 text-right">
          STATUS: OPTIMIZED<br/>
          MEMORY: STABLE<br/>
          CORES: ACTIVE
        </div>
      </div>
    </section>
  );
}