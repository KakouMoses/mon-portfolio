import React from 'react';

const experiences = [
  {
    date: "Mars 2025 - Décembre 2025",
    title: "Développeur logiciels intégrés",
    company: "3iDomotique, Grand-Bassam",
    description: "Formations et programmation de cartes contrôleurs pour communiquer sur différents supports et interfaces de communication",
    tools: ["Interfaces I2C, SPI, UART", "ESP32", "Arduino", "Modbus"],
    type: "Stage"
  },
  {
    date: "Mars 2025 - Octobre 2025",
    title: "Système de supervision de station de pesage",
    company: "3iDomotique, Grand-Bassam",
    description: "Programmation de la logique d'interaction entre systèmes existants et supervision.",
    tools: ["Node-RED", "Raspberry Pi", "MQTT", "SQLite"],
    type: "Projet Pro"
  },
  {
    date: "Mars 2025 - Septembre 2025",
    title: "Système Domotique Complet",
    company: "3iDomotique",
    description: "Réalisation de la partie logicielle d'un système complet à partir d'un prototype.",
    tools: ["OpenHAB", "InfluxDB", "PostgreSQL", "Arduino"],
    type: "Projet Pro"
  },
  {
    date: "Juillet 2024 - Août 2024",
    title: "Tests et intégration LivraiX",
    company: "Startup LivraiX, Abidjan",
    description: "Écriture et intégration de tests pour assurer le fonctionnement de la plateforme.",
    tools: ["Java SpringBoot", "Mockito"],
    type: "Stage"
  },
  {
    date: "Nov 2023 - Déc 2023",
    title: "Application de messagerie distribuée",
    company: "ESATIC",
    description: "Mise en pratique des notions de systèmes distribués avec Socket.io.",
    tools: ["React.js", "Socket.io", "Express.js"],
    type: "Académique"
  },
  {
    date: "Mars 2023 - Septembre 2023",
    title: "Étude et mise en place d’un système d’alimentation électrique autonome pour la mobilité du Z-bot",
    company: "Société Ivoirienne d'Intelligence Numérique",
    description: "Estimation de l'énergie nécessaire pour le fonctionnement d'un prototype de robot pendant une durée définie, et dimmensionnement de la batterie du prototype.",
    tools: ["Proteus", "Arduino"],
    type: "Projet Pro"
  },
  {
    date: "Septembre 2022 - Janvier 2023",
    title: "Digitalisation de la gestion des parkings dans la commune du Plateau",
    company: "Apprentissage par projet niveau 3, ESATIC",
    description: "Notre solution consistait en une application mobile permettant de localiser et réserver les places de parking, ainsi qu’un système de gestion des places de parking utilisant des caméras intelligentes pour la détection de celles-ci.",
    tools: ["React Native", "Node.js", "MySQL", "Python", "MongoDB", "Git", "Github"],
    type: "Académique"
  }
];

export default function Timeline() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-12">Parcours & Projets</h2>
      
      {/* Conteneur avec la bordure gauche qui sert de ligne */}
      <div className="relative border-blue-500/30 ml-4 space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8">
            {/* Le point indicateur sur la ligne */}
            <div className="absolute w-4 h-4 bg-orange-500 rounded-full -left-[2.25] top-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div> 
            
            <div className="bg-gray-900/40 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
              <span className="text-xs font-mono text-blue-400">{exp.date}</span>
              <h3 className="text-xl font-bold text-white mt-1">{exp.title}</h3>
              <h4 className="text-s font-bold text-blue-400 mt-1">{exp.company}</h4>
              <p className="text-gray-400 text-sm mt-2 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tools.map(tool => (
                  <span key={tool} className="text-[10px] bg-gray-800 px-2 py-1 rounded text-gray-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


