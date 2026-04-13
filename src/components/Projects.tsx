import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "governance",
    href: "/proyectos/governance",
    category: "UX Management · Design System",
    title: "Construir el sistema que hace posible el buen diseño a escala",
    description:
      "Implementé la infraestructura de diseño de AFP Modelo: desde el sistema de gobernanza hasta los componentes que redujeron el tiempo de diseño en un 30% y mejoraron la experiencia percibida por los usuarios.",
    tags: ["Design System", "Gobernanza UX", "Design Tokens", "Atomic Design"],
    metrics: [
      { num: "30%", label: "Reducción en\ntiempo de diseño" },
      { num: "+5", label: "Sitios bajo\ngobernanza unificada" },
    ],
    image: "https://aliciaureta.com/image/afp-cover.png",
    imageBg: "var(--background-3)",
    reverse: false,
  },
  {
    id: "web-app-design",
    href: "/proyectos/web-app-design",
    category: "Product Design · UX Research",
    title: "De un proceso roto a una plataforma que la gente realmente usa",
    description:
      "Rediseñé el proceso digital de reclutamiento de Teamwork Chile: de 60 inputs a 4, con mejora medible en la experiencia percibida por más de 300 personas.",
    tags: ["UX Research", "Arquitectura de información", "Prototipado Hi-Fi", "Validación con usuarios"],
    metrics: [
      { num: "60→4", label: "Inputs en el\nproceso de contratación" },
      { num: "+300", label: "Personas con\nflujo optimizado" },
    ],
    image: "https://aliciaureta.com/image/teamwork-cover.png",
    imageBg: "#E8F0F5",
    reverse: true,
  },
  {
    id: "web-design",
    href: "/proyectos/web-design",
    category: "Consultoría UX · Sector Público",
    title: "Rediseñar un sitio institucional del Estado con restricciones reales",
    description:
      "Rediseñé el sitio oficial de DIRPLAN para su migración a WordPress, trabajando dentro del Sistema de Diseño Gubernamental y reduciendo en un 65% los pasos para acceder a información clave.",
    tags: ["Consultoría externa", "Mobile First", "Sistema Gubernamental", "Accesibilidad"],
    metrics: [
      { num: "65%", label: "Reducción en pasos\npara encontrar info" },
      { num: "88%", label: "Satisfacción en\npruebas de usabilidad" },
    ],
    image: "https://aliciaureta.com/image/dirplan-cover.png",
    imageBg: "#EEF2F0",
    reverse: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 lg:px-8" style={{ paddingTop: "1rem", paddingBottom: "6rem" }}>
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

        {/* Proyectos */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.href}
              className="group grid lg:grid-cols-2 bg-muted rounded-2xl overflow-hidden border border-border hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Imagen */}
              <div
                className={`aspect-[4/3] overflow-hidden ${project.reverse ? "lg:order-2" : ""}`}
                style={{ background: project.imageBg }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>

              {/* Info */}
              <div
                className={`p-8 lg:p-12 flex flex-col justify-center ${
                  project.reverse ? "lg:order-1" : ""
                }`}
              >
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                  {project.category}
                </p>

                <h3
                  className="text-2xl lg:text-3xl text-foreground mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }}
                >
                  {project.title}
                </h3>

                <p className="text-sm text-foreground/60 leading-relaxed mb-6">
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
                <div className="flex gap-8 pt-6 border-t border-border mb-6">
                  {project.metrics.map((m) => (
                    <div key={m.num}>
                      <p
                        className="text-2xl text-foreground"
                        style={{ fontFamily: "var(--font-serif)" }}
                      >
                        {m.num}
                      </p>
                      <p className="text-xs text-foreground/50 mt-1 whitespace-pre-line leading-relaxed">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <span
                  className="inline-flex items-center gap-2 text-sm font-medium transition-all"
                  style={{ color: "var(--primary)" }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "var(--foreground)";
                    (e.currentTarget as HTMLElement).style.gap = "12px";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "var(--primary)";
                    (e.currentTarget as HTMLElement).style.gap = "8px";
                  }}
                >
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
