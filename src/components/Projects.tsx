import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "audix",
    href: "/proyectos/audix",
    category: "Herramienta propia · IA · UX Management",
    title: "Audix: De auditorías manuales a tracking de calidad UX con IA",
    description: "Diseñé y construí una herramienta que reduce una auditoría heurística de 3 días a 2 horas, estandariza el output y convierte evaluaciones puntuales en un sistema de tracking por componente.",
    tags: ["Prompt Engineering", "Product Design", "Claude API", "React"],
    metrics: [
      { num: "3d→2h", label: "Tiempo de auditoría" },
      { num: "3 modos", label: "Screenshot · Comparativa · URL" },
    ],
    image: "/audix/audix_portada.webp",
    imageBg: "var(--background-3)",
  },
  {
    id: "governance",
    href: "/proyectos/governance",
    category: "UX Management · Design System",
    title: "Construir el sistema que hace posible el buen diseño a escala",
    description: "Implementé la infraestructura de diseño de AFP Modelo: desde el sistema de gobernanza hasta los componentes que redujeron el tiempo de diseño en un 30% y mejoraron la experiencia percibida por los usuarios.",
    tags: ["Design System", "Gobernanza UX", "Design Tokens", "Atomic Design"],
    metrics: [
      { num: "30%", label: "Reducción en tiempo de diseño" },
      { num: "+5", label: "Sitios bajo gobernanza unificada" },
    ],
    image: "/afp-portada.webp",
    imageBg: "var(--background-3)",
  },
  {
    id: "web-app-design",
    href: "/proyectos/web-app-design",
    category: "Product Design · UX Research",
    title: "De un proceso roto a una plataforma que la gente realmente usa",
    description: "Detecté que el problema no era de interfaz sino de arquitectura. Amplié el scope, coordiné dos equipos tecnológicos y diseñé un sistema unificado — de 60 inputs a 4, con impacto medible en más de 300 personas.",
    tags: ["UX Research", "Arquitectura de información", "Prototipado Hi-Fi", "Validación con usuarios"],
    metrics: [
      { num: "60→4", label: "Inputs en el proceso de contratación" },
      { num: "+300", label: "Personas con flujo optimizado" },
    ],
    image: "/image/teamwork-cover.webp",
    imageBg: "#E8F0F5",
  },
  {
    id: "web-design",
    href: "/proyectos/web-design",
    category: "Consultoría UX · Sector Público",
    title: "Rediseñar un sitio institucional del Estado con restricciones reales",
    description: "Rediseñé el sitio oficial de DIRPLAN para su migración a WordPress, trabajando dentro del Sistema de Diseño Gubernamental y reduciendo en un 65% los pasos para acceder a información clave.",
    tags: ["Consultoría externa", "Mobile First", "Sistema Gubernamental", "Accesibilidad"],
    metrics: [
      { num: "65%", label: "Reducción en pasos para encontrar info" },
      { num: "88%", label: "Satisfacción en pruebas de usabilidad" },
    ],
    image: "/image/dirplan-cover.webp",
    imageBg: "#EEF2F0",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 lg:px-8" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-primary" />
            <p className="text-xs font-medium tracking-widest uppercase text-primary">
              Proyectos destacados
            </p>
          </div>
          <h2
            className="text-4xl lg:text-5xl text-foreground mb-4"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
          >
            Casos de éxito
          </h2>
          <p className="text-foreground/60 max-w-xl leading-relaxed">
            Una selección de proyectos que demuestran mi capacidad para resolver
            problemas complejos con soluciones claras y medibles.
          </p>
        </div>

        {/* Grilla 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.href}
              className="group flex flex-col bg-muted rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 relative"
              style={{
                border: project.id === "governance" ? "2px solid var(--primary)" : "1px solid var(--border)",
              }}
            >
              {project.id === "governance" && (
                <span
                  style={{
                    position: "absolute", top: "12px", right: "12px", zIndex: 10,
                    background: "var(--primary)", color: "var(--primary-foreground)",
                    fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em",
                    textTransform: "uppercase", padding: "3px 10px", borderRadius: "999px",
                  }}
                >
                  Destacado
                </span>
              )}
              {/* Imagen — parte superior */}
              <div
                className="overflow-hidden"
                style={{ background: project.imageBg, aspectRatio: "16/9" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              {/* Info — parte inferior */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-3">
                  {project.category}
                </p>

                <h3
                  className="text-xl lg:text-2xl text-foreground mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }}
                >
                  {project.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4 text-foreground/60">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-background border border-border text-foreground/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Métricas */}
                <div className="flex gap-6 pt-4 border-t border-border mb-4 mt-auto">
                  {project.metrics.map((m) => (
                    <div key={m.num}>
                      <p
                        className="text-2xl font-bold leading-none text-foreground"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {m.num}
                      </p>
                      <p className="text-xs mt-1 leading-relaxed text-foreground/55">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                  Ver caso completo
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
