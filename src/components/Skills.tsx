const leadSkills = [
  {
    title: "Liderazgo de equipos UX",
    desc: "Dirección, revisión de entregables y desarrollo de diseñadores",
  },
  {
    title: "Gobernanza de diseño",
    desc: "Sistemas, procesos y estándares que escalan",
  },
  {
    title: "Estrategia de producto",
    desc: "Alineación entre objetivos de negocio y experiencia de usuario",
  },
  {
    title: "Gestión de stakeholders",
    desc: "Priorización, validación y coordinación transversal",
  },
];

const processSkills = [
  { title: "Investigación UX", desc: "Cualitativa, cuantitativa, entrevistas, testing" },
  { title: "Facilitación", desc: "Workshops, Design Sprints, co-creación" },
  { title: "Arquitectura de información", desc: "Flujos, jerarquías, navegación" },
  { title: "UX Writing", desc: "Tono, estilo y comunicación en interfaz" },
  { title: "Métricas de experiencia", desc: "Interpretación y seguimiento de KPIs UX" },
  { title: "Accesibilidad", desc: "WCAG, diseño inclusivo, mobile first" },
];

const tools = [
  "Figma", "Maze", "Optimal Workshop", "Jira",
  "Illustrator", "Photoshop", "HTML / CSS", "Visual Studio Code",
];

export function Skills() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

          {/* Intro */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-primary" />
              <p className="text-xs font-medium tracking-widest uppercase text-primary">
                Habilidades
              </p>
            </div>
            <h2
              className="text-3xl lg:text-4xl text-foreground mb-4"
              style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
            >
              Unir creatividad, análisis y propósito
            </h2>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Un conjunto diverso de habilidades que me permite liderar proyectos UX
              de principio a fin, desde la investigación hasta la implementación.
            </p>
          </div>

          {/* Habilidades */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* Nivel 1 — Liderazgo */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <p className="text-xs font-medium tracking-widest uppercase text-primary">
                  Liderazgo y estrategia
                </p>
                <span className="flex-1 h-px bg-border" />
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {leadSkills.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl p-4 border border-primary/20"
                    style={{ background: "var(--background-3)" }}
                  >
                    <p
                      className="text-sm font-medium text-primary mb-1"
                    >
                      {s.title}
                    </p>
                    <p className="text-xs text-foreground/60 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nivel 2 — Proceso */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <p className="text-xs font-medium tracking-widest uppercase text-foreground/50">
                  Habilidades de proceso
                </p>
                <span className="flex-1 h-px bg-border" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {processSkills.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl p-4 bg-card border border-border"
                  >
                    <p className="text-sm font-medium text-foreground mb-1">
                      {s.title}
                    </p>
                    <p className="text-xs text-foreground/50 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Nivel 3 — Herramientas */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <p className="text-xs font-medium tracking-widest uppercase text-foreground/40">
                  Herramientas
                </p>
                <span className="flex-1 h-px bg-border" />
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm px-4 py-2 rounded-full bg-background border border-border text-foreground/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
