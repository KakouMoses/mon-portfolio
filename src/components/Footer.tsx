import Image from "next/image";

  export default function Footer() {
    return (
      <footer style={{ backgroundColor: '#e05407' }} className="mt-20 py-16 border-t border-gray-900 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Identité */}
          <div className="space-y-4">
            <div className="bg-white inline-block p-2 rounded-lg">
              <Image src="/MoKa.svg" width={100} height={100} alt="Logo" className="h-6 w-auto" />
            </div>
            <p className="text-white text-sm leading-relaxed">
              Passionné par la convergence entre le logiciel et le matériel. 
              Basé à Abidjan, Côte d'Ivoire.
            </p>
          </div>
  
          {/* Coordonnées (basées sur ton CV) */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Contact direct</h4>
            <ul className="text-white text-sm space-y-3">
              <li className="flex items-center gap-2">📧 kakoumoise.professional@gmail.com</li>
              <li className="flex items-center gap-2">📞 +225 07 97 96 16 49</li>
            </ul>
          </div>
  
          {/* Liens Professionnels */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Réseaux</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/kacou-mo%C3%AFse-kakou-b686781b8/" className="p-3 bg-gray-900 rounded-full hover:bg-blue-600 transition-all">LinkedIn</a>
              <a href="https://my.assessfirst.com/public/profile/cad0mgfb-kacou-moise-kakou?lang=fr-FR" className="p-3 bg-gray-900 rounded-full hover:bg-emerald-600 transition-all">AssessFirst</a>
            </div>
          </div>
        </div>
        <div className="text-center mt-10 pt-6 border-t border-white/20 text-xs opacity-70">
          © 2026 — Abidjan, Côte d'Ivoire
        </div>
      </footer>
    );
  }