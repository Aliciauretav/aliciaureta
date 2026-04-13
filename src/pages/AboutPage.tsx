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
    title: "Transformaciones digital con IA y Automatización (150 hrs)",
    org: "Desafío Latam",
    date: "2025",
    desc: "",
  },
  {
    title: "Paleta de colores accesibles",
    org: "Weaaare",
    date: "2025",
    desc: "",
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
        <section className="pt-24 px-6 lg:px-8" style={{ paddingBottom: "5rem" }}>
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
        <section className="px-6 lg:px-8 bg-muted" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
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
                    src="https://aliciaureta.com/image/alicia-about.png"
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

       {/* Timeline */}
<section className="px-6 lg:px-8" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
  <div className="max-w-7xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ marginBottom: "3rem" }}
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

    {/* Grid responsivo */}
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem",
      alignItems: "start"
    }}>

      {/* Columna Trabajo */}
      <div>
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          marginBottom: "1.5rem", paddingBottom: "1rem",
          borderBottom: "1px solid var(--border)"
        }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", display: "inline-block" }} />
          <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--primary)" }}>
            Experiencia laboral
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {workTimeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.25rem"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", marginBottom: "4px" }}>
                <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--foreground)", fontFamily: "var(--font-serif)" }}>
                  {item.title}
                </p>
                <span style={{ fontSize: "11px", color: "var(--foreground-subtle)", whiteSpace: "nowrap", flexShrink: 0 }}>
                  {item.date}
                </span>
              </div>
              <p style={{ fontSize: "12px", color: "var(--primary)", marginBottom: "6px" }}>{item.org}</p>
              {item.desc && <p style={{ fontSize: "12px", color: "var(--foreground-muted)", lineHeight: 1.6 }}>{item.desc}</p>}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Columna Formación */}
      <div>
        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          marginBottom: "1.5rem", paddingBottom: "1rem",
          borderBottom: "1px solid var(--border)"
        }}>
          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--foreground-subtle)", display: "inline-block" }} />
          <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--foreground-subtle)" }}>
            Formación
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {studyTimeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: item.highlight ? "var(--background-3)" : "var(--card)",
                border: item.highlight ? "1px solid rgba(107,79,140,0.2)" : "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.25rem"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", marginBottom: "4px" }}>
                <p style={{ fontSize: "14px", fontWeight: 500, color: item.highlight ? "var(--primary)" : "var(--foreground)", fontFamily: "var(--font-serif)" }}>
                  {item.title}
                </p>
                <span style={{
                  fontSize: "11px",
                  color: item.highlight ? "var(--primary)" : "var(--foreground-subtle)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  background: item.highlight ? "rgba(107,79,140,0.1)" : "transparent",
                  padding: item.highlight ? "2px 8px" : "0",
                  borderRadius: "20px"
                }}>
                  {item.date}
                </span>
              </div>
              <p style={{ fontSize: "12px", color: item.highlight ? "var(--primary)" : "var(--foreground-muted)", marginBottom: "6px" }}>
                {item.org}
              </p>
              {item.desc && <p style={{ fontSize: "12px", color: "var(--foreground-muted)", lineHeight: 1.6 }}>{item.desc}</p>}
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
