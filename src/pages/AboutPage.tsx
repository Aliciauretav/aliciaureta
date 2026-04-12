import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";

const workTimeline = [
  {
    title: "UX/UI Manager",
    org: "AFP Modelo",
    date: "2024 — actualidad",
    desc: "Gobernanza de diseño, Design System, liderazgo de equipo",
  },
  {
    title: "UX/UI Designer",
    org: "Teamwork Chile",
    date: "2023 — 2024",
    desc: "Digitalización de procesos de RRHH",
  },
  {
    title: "UX/UI Designer — Consultora",
    org: "DIRPLAN — MOP",
    date: "2022",
    desc: "Rediseño sitio institucional, migración a WordPress",
  },
  {
    title: "Analista GIS",
    org: "VTR — Km Telecomunicaciones",
    date: "2011 — 2021",
    desc: "Gestión de datos masivos, proyectos técnicos interáreas",
  },
];

const studyTimeline = [
  {
    title: "Diplomado en Estrategia y Experiencia de Productos en la Era de la IA",
    org: "FEN — Universidad de Chile",
    date: "Mayo 2025 — en curso",
    desc: "Estrategia de producto, liderazgo UX e inteligencia artificial",
    highlight: true,
  },
  {
    title: "UX Writing para Principiantes",
    org: "Coursera",
    date: "2024",
    desc: "",
  },
  {
    title: "Diplomado en Diseño de Servicios",
    org: "PUC Chile",
    date: "2023",
    desc: "Service Design, Customer Journey, Co-creación",
  },
  {
    title: "Bootcamp UX/UI (402 hrs)",
    org: "AIEP + Laboratoria",
    date: "2022",
    desc: "Design Thinking, Research Methods, Usability Testing",
  },
  {
    title: "Licenciatura en Arte y Diseño",
    org: "INACAP",
    date: "2003 — 2006",
    desc: "Especialización en Diseño de Vestuario",
  },
];

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">

        {/* Hero */}
        <section className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-primary" />
                <p className="text-xs font-medium tracking-widest uppercase text-primary">
                  Sobre mí
                </p>
              </div>
              <h1
                className="text-4xl lg:text-6xl text-foreground mb-6"
                style={{
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                Diseñando experiencias que importan — y los sistemas que las hacen posibles.
              </h1>
              <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl">
                Soy Alicia Ureta, UX Manager y Product Designer. Me especializo en
                crear productos digitales que simplifican lo complejo — para las
                personas que los usan y para los equipos que los construyen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Historia + Foto */}
        <section className="py-16 px-6 lg:px-8 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Foto */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0 bg-secondary border border-border">
                  <img
                    src="https://aliciaureta.com/image/alicia-about.jpg"
                    alt="Alicia Ureta"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20"
                  style={{ background: "var(--primary)" }}
                />
              </motion.div>

              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="space-y-6"
              >
                <h2
                  className="text-3xl text-foreground"
                  style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
                >
                  Trabajo en el cruce entre estrategia, diseño y personas.
                </h2>

                <p className="text-foreground/60 leading-relaxed">
                  Llegué al diseño UX después de más de 10 años en organizaciones
                  complejas — y esa trayectoria cambió cómo diseño. Entiendo los
                  procesos internos, las restricciones reales y las personas que
                  están detrás de cada flujo. No solo diseño interfaces: diseño
                  con contexto.
                </p>

                <p className="text-foreground/60 leading-relaxed">
                  Hoy lidero equipos UX, implemento sistemas de diseño y creo
                  experiencias que equilibran las necesidades del usuario con los
                  objetivos del negocio. Mi trabajo combina investigación,
                  estrategia y ejecución — desde la primera entrevista de usuario
                  hasta el design system que sostiene todo el producto.
                </p>

                {/* Cita */}
                <blockquote
                  className="pl-5 border-l-2 border-primary mt-8"
                  style={{ borderRadius: 0 }}
                >
                  <p
                    className="text-base text-foreground/60 leading-relaxed"
                    style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
                  >
                    "Porque cambiar de carrera no fue un final, sino el comienzo
                    de un camino que —como todo buen diseño— sigue en constante
                    evolución."
                  </p>
                </blockquote>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline dual */}
        <section className="py-24 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-primary" />
                <p className="text-xs font-medium tracking-widest uppercase text-primary">
                  Trayectoria
                </p>
              </div>
              <h2
                className="text-3xl lg:text-4xl text-foreground"
                style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
              >
                Experiencia y formación
              </h2>
            </motion.div>

            {/* Desktop: grid dual */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_40px_1fr] gap-0">

              {/* Headers */}
              <div className="pb-6 border-b border-border">
                <span className="text-xs font-medium tracking-widest uppercase text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                  Experiencia laboral
                </span>
              </div>
              <div />
              <div className="pb-6 border-b border-border">
                <span className="text-xs font-medium tracking-widest uppercase text-foreground/40 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-foreground/30 inline-block" />
                  Formación
                </span>
              </div>

              {/* Filas */}
              {Array.from({ length: Math.max(workTimeline.length, studyTimeline.length) }).map((_, i) => {
                const work = workTimeline[i];
                const study = studyTimeline[i];
                return (
                  <div key={i} className="contents">
                    {/* Trabajo */}
                    <div className="py-6 pr-8">
                      {work && (
                        <motion.div
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <p
                              className="text-sm font-medium text-foreground"
                              style={{ fontFamily: "var(--font-serif)" }}
                            >
                              {work.title}
                            </p>
                            <span className="text-xs text-foreground/40 whitespace-nowrap shrink-0">
                              {work.date}
                            </span>
                          </div>
                          <p className="text-xs text-primary mb-2">{work.org}</p>
                          {work.desc && (
                            <p className="text-xs text-foreground/50 leading-relaxed">
                              {work.desc}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </div>

                    {/* Línea central */}
                    <div className="flex flex-col items-center py-6">
                      <div
                        className="w-2.5 h-2.5 rounded-full mt-5 shrink-0"
                        style={{ background: work ? "var(--primary)" : "var(--foreground-subtle)" }}
                      />
                      <div className="flex-1 w-px bg-border mt-2" />
                    </div>

                    {/* Estudio */}
                    <div className="py-6 pl-8">
                      {study && (
                        <motion.div
                          initial={{ opacity: 0, x: 16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 + 0.04 }}
                          className={`rounded-xl p-5 transition-all hover:shadow-sm ${
                            study.highlight
                              ? "bg-primary/5 border border-primary/20 hover:border-primary/40"
                              : "bg-card border border-border hover:border-foreground/20"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <p
                              className={`text-sm font-medium ${
                                study.highlight ? "text-primary" : "text-foreground"
                              }`}
                              style={{ fontFamily: "var(--font-serif)" }}
                            >
                              {study.title}
                            </p>
                            <span
                              className={`text-xs whitespace-nowrap shrink-0 ${
                                study.highlight
                                  ? "text-primary/70 bg-primary/10 px-2 py-0.5 rounded-full"
                                  : "text-foreground/40"
                              }`}
                            >
                              {study.date}
                            </span>
                          </div>
                          <p
                            className={`text-xs mb-2 ${
                              study.highlight ? "text-primary/70" : "text-foreground/50"
                            }`}
                          >
                            {study.org}
                          </p>
                          {study.desc && (
                            <p className="text-xs text-foreground/50 leading-relaxed">
                              {study.desc}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile: columnas separadas */}
            <div className="lg:hidden space-y-12">
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary inline-block" />
                  Experiencia laboral
                </p>
                <div className="space-y-4 border-l-2 border-border pl-6">
                  {workTimeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="bg-card border border-border rounded-xl p-5 relative"
                    >
                      <div className="absolute -left-[1.85rem] top-5 w-2.5 h-2.5 rounded-full bg-primary border-2 border-background" />
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <span className="text-xs text-foreground/40 whitespace-nowrap shrink-0">{item.date}</span>
                      </div>
                      <p className="text-xs text-primary mb-1">{item.org}</p>
                      {item.desc && <p className="text-xs text-foreground/50">{item.desc}</p>}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-medium tracking-widest uppercase text-foreground/40 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-foreground/30 inline-block" />
                  Formación
                </p>
                <div className="space-y-4 border-l-2 border-border pl-6">
                  {studyTimeline.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className={`rounded-xl p-5 relative ${
                        item.highlight
                          ? "bg-primary/5 border border-primary/20"
                          : "bg-card border border-border"
                      }`}
                    >
                      <div
                        className="absolute -left-[1.85rem] top-5 w-2.5 h-2.5 rounded-full border-2 border-background"
                        style={{ background: item.highlight ? "var(--primary)" : "var(--foreground-subtle)" }}
                      />
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className={`text-sm font-medium ${item.highlight ? "text-primary" : "text-foreground"}`}>
                          {item.title}
                        </p>
                        <span className={`text-xs whitespace-nowrap shrink-0 ${item.highlight ? "text-primary/70" : "text-foreground/40"}`}>
                          {item.date}
                        </span>
                      </div>
                      <p className={`text-xs mb-1 ${item.highlight ? "text-primary/70" : "text-foreground/50"}`}>
                        {item.org}
                      </p>
                      {item.desc && <p className="text-xs text-foreground/50">{item.desc}</p>}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
