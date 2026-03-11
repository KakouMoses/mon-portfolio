        {/* Section Projets - Grille interactive */}
        <section className="grid md:grid-cols-2 gap-8 mb-20">
          <h2 className="col-span-full text-3xl font-bold border-l-4 border-emerald-500 pl-4 mb-4">
            Projets Phares
          </h2>

          {/* Projet 1 */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-2">
              Supervision Station de Pesage{" "}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Interaction entre systèmes existants et supervision temps réel via
              Node-RED et MQTT.
            </p>
            <div className="flex gap-2 flex-wrap">
              {["Raspberry Pi", "MQTT", "SQLite"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Projet 2 */}
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition-all">
            <h3 className="text-xl font-bold mb-2">
              Système Domotique Complet{" "}
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Réalisation de la couche logicielle d'un écosystème intelligent
              (OpenHAB, InfluxDB).
            </p>
            <div className="flex gap-2 flex-wrap">
              {["Arduino", "PostgreSQL", "Node-RED"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>