import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "red-vitalis",
    href: "/proyectos/red-vitalis",
    category: "Taller integrado · Business Case AI-Driven · Salud y privacidad de datos",
    title: "Red Vitalis: de una hipótesis cruda a un caso de negocio con evidencia",
    description: "El taller de cierre del diplomado entregó una hipótesis sin validar. Con mi equipo elegimos salud, investigamos con usuarios sintéticos, corrimos un piloto A/B y llegué a un 'Go condicionado' respaldado por evidencia.",
    tags: ["Business Case AI-Driven", "Estrategia de producto", "Investigación con usuarios sintéticos", "Experimentación A/B", "Modelo de negocio", "Ley 21.719"],
    metrics: [
      { num: "83%→35%", label: "Comprensión de uso de datos, portal vs. control" },
      { num: "+17 pts", label: "NPS a favor del grupo con portal" },
    ],
    image: "/image/red-vitalis-cover.webp",
    imageBg: "var(--background-3)",
  },
  {
    id: "checkout-marketplace",
    href: "/proyectos/checkout-marketplace",
    category: "Experimentación, IA y validación de producto · E-commerce",
    title: "Checkout Marketplace: del prototipo a un rollout del 100% con datos",
    description: "El Checkout Conversion Rate de un marketplace cayó de 48% a 36%. Propuse mostrar el costo de despacho desde el carrito y lo validé con un test A/B de tráfico real antes de escalar a rollout completo.",
    tags: ["A/B Testing", "Prototipado", "Experimentación", "IA aplicada al diseño", "Growth"],
    metrics: [
      { num: "+8 pts", label: "Checkout Conversion Rate, variante B vs. A" },
      { num: "3 semanas", label: "Test A/B con tráfico real, split 50/50" },
    ],
    image: "/image/checkout-cover.webp",
    imageBg: "var(--background-3)",
  },
  {
    id: "wonderlust",
    href: "/proyectos/wonderlust",
    category: "Principios de interacción y leyes de UX · Prototipado con IA",
    title: "Wonderlust: una bitácora de viajes diseñada con principios, no con intuición",
    description: "Diseñé y prototipé de punta a punta una app que centraliza destinos de viaje, aplicando deliberadamente principios de interacción, leyes de UX y sesgos cognitivos en cada decisión.",
    tags: ["Prototipado con IA", "Leyes de UX", "Sesgos cognitivos", "Diseño de interacción", "Mobile"],
    metrics: [
      { num: "1", label: "Diseñadora, de punta a punta" },
      { num: "3 capas", label: "Interacción · Leyes de UX · Sesgos cognitivos" },
    ],
    image: "/image/wonderlust-cover.webp",
    imageBg: "var(--background-3)",
  },
  {
    id: "governance",
    href: "/proyectos/governance",
    category: "DESIGN LEADERSHIP · GOBERNANZA · TRANSFORMACIÓN ORGANIZACIONAL",
    title: "Construir UX desde cero en una organización que aún no sabía que lo necesitaba",
    description: "El cargo no existía. En dos años construí la gobernanza, los procesos y el criterio que le dieron al diseño un lugar real en la organización.",
    tags: ["Liderazgo UX", "Gobernanza de diseño", "Diseño de procesos", "Gestión de stakeholders", "Sistemas de diseño", "Design Tokens", "UX Writing", "Desarrollo de equipo"],
    metrics: [
      { num: "30%", label: "Reducción en tiempo de diseño" },
      { num: "5 plataformas", label: "Bajo gobernanza unificada" },
    ],
    image: "/afp-portada.webp",
    imageBg: "var(--background-3)",
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
                border: project.id === "red-vitalis" ? "2px solid var(--primary)" : "1px solid var(--border)",
              }}
            >
              {project.id === "red-vitalis" && (
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
