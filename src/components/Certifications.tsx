const certifications = [
  { name: "CyberOps Associate", issuer: "Smart Africa Digital Academy", date: "Avril 2024" }, // [cite: 21, 22]
  { name: "EF SET English (C2)", issuer: "EF SET", date: "Sept 2024" }, // 
  { name: "CodinGame C++", issuer: "CodinGame", date: "Mai 2022" }, // [cite: 53, 54]
  { name: "ICDL Application Essentials", issuer: "ICDL Africa", date: "Juillet 2021" },
  { name: "ICDL Computer & Online Essentials", issuer: "ICDL Africa", date: "Juillet 2021" } 
];

export default function Certifications() {
  return (
    <section className="py-10 border-t border-gray-800">
      <h3 className="text-gray-500 text-sm font-mono mb-6 uppercase tracking-widest text-center">
        Certifications & Accréditations
      </h3>
      <div className="flex flex-wrap justify-center gap-6">
        {certifications.map((cert, i) => (
          <div key={i} className="group relative bg-gray-900/40 p-4 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-all">
            <div className="text-emerald-400 font-bold text-sm">{cert.name}</div>
            <div className="text-gray-500 text-[11px]">{cert.issuer} • {cert.date}</div>
            {/* Effet de lueur au survol */}
            <div className="absolute inset-0 bg-emerald-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </section>
  );
}