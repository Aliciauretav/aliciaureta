import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, ArrowLeft, TrendingUp, Users, Target, Palette, Lightbulb, Pencil, Globe, FileDigit, SquareAsterisk, Rows4, SignpostBig, Waypoints } from "lucide-react";
import { Button } from "../components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const metrics = [
  { icon: TrendingUp, value: "30%",              label: "Reducción en tiempo de diseño con Atomic Design y Design Tokens" },
  { icon: Target,     value: "5+ plataformas",   label: "Ecosistema digital bajo gobernanza de diseño unificada" },
  { icon: Users,      value: "5 diseñadores",    label: "Equipo UX/UI liderado tácticamente en un ecosistema digital multi-plataforma" },
  { icon: Lightbulb,  value: "Objetivo corporativo", label: "Mayor alineación entre equipos de diseño, negocio y desarrollo, con base escalable para futuras iniciativas" },
];

const challenges = {
  consistencia: [
    "Cada plataforma tenía necesidades, usuarios y restricciones distintas",
    "Requería equilibrar flexibilidad, consistencia y escalabilidad",
    "Claridad transversal entre productos con perfiles de usuario muy diferentes",
  ],
  gobernanza: [
    "Establecer criterios compartidos de experiencia entre plataformas",
    "Evitar divergencias visuales, patrones contradictorios y deuda UX acumulativa",
    "Complejidad regulatoria: cumplimiento normativo, accesibilidad y alfabetización digital diversa",
  ],
};

const workFronts = [
  {
    title: "Design System y Tokens",
    icon: Palette,
    bg: "#E8E2F5",
    lightBg: true,
    items: ["Base de variables UI", "Reducir deuda visual", "Agilizar front-end"],
  },
  {
    title: "Gobernanza de diseño",
    icon: Lightbulb,
    bg: "#EDE8F5",
    lightBg: true,
    items: ["Definición de alcance en diseño", "Estándares de interacción", "Mejora en integración con desarrollo"],
  },
  {
    title: "UX Writing y Tono",
    icon: Pencil,
    bg: "#F5EAF0",
    lightBg: true,
    items: ["Definición de tono y estilo", "Consistencia comunicacional transversal", "Revisiones cruzadas entre áreas"],
  },
];

const projectsList = [
  { title: "Sitio Web Público",      desc: "Rediseño Home sitio web público",                               icon: Globe,          bg: "var(--background-3)", details: "Lideré el rediseño del home del sitio público, asegurando coherencia visual y definiendo lineamientos de diseño para optimizar la experiencia de usuario y la arquitectura de información." },
  { title: "Proyecto 311",           desc: "Digitalización trámites para afiliados",                        icon: FileDigit,      bg: "#EDE8F5",             details: "Lideré la digitalización de trámites para afiliados, asegurando el cumplimiento normativo y guiando la simplificación de formularios e información." },
  { title: "PIN Datos de contacto",  desc: "Tercer factor de validación en actualización de datos",         icon: SquareAsterisk, bg: "#F5EAF0",             details: "Diseñé el flujo de autenticación con PIN para implementar el cumplimiento normativo en la actualización de datos de contacto, garantizando coherencia entre todos los canales de atención." },
  { title: "Servicios en línea",     desc: "Centralización servicios para afiliados",                       icon: Rows4,          bg: "#EAF3F0",             details: "Lideré el rediseño de la sección de Servicios en Línea, unificando todas las herramientas disponibles para afiliados con una experiencia coherente, intuitiva y orientada al usuario." },
  { title: "Simplicidad",            desc: "Nuevo tono y voz en comunicaciones",                            icon: SignpostBig,    bg: "#F0EAF5",             details: "Lideré la definición de un tono y voz más claros y cercanos en las comunicaciones hacia los usuarios, creando guías de estilo y supervisando la coherencia entre equipos." },
  { title: "Menú sitio público",     desc: "Rediseño de Arquitectura de información",                       icon: Waypoints,      bg: "#EAF0F5",             details: "Lideré el rediseño de la arquitectura de información y navegación del sitio, reduciendo significativamente el tiempo necesario para encontrar información clave." },
];

export function GovernancePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            <button
              onClick={() => window.history.back()}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "14px",
                color: "var(--foreground-muted)",
                background: "none",
                border: "none",
                cursor: "pointer",
                marginBottom: "2rem",
                padding: "0",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--primary)";
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--foreground-muted)";
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver</span>
            </button>

            <div className="bg-card border border-border rounded-3xl overflow-hidden">

              {/* Hero */}
              <div className="grid lg:grid-cols-2">
                <div
                  className="aspect-[4/3] lg:aspect-auto overflow-hidden"
                  style={{ background: "var(--background-3)" }}
                >
                  <img
                    src="/image/afp-cover.svg"
                    alt="Gobernanza de diseño AFP Modelo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                    DESIGN SYSTEM · GOBERNANZA · UX MANAGEMENT
                  </p>
                  <h1
                    className="text-3xl lg:text-4xl text-foreground mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
                  >
                    Liderazgo UX transversal para un ecosistema digital multi-plataforma
                  </h1>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 w-fit" style={{ background: "var(--background-3)", color: "var(--primary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    UX Manager
                  </span>
                  <p className="text-foreground/60 leading-relaxed mb-6">
                    Coordinación táctica de un equipo de 5 diseñadores UX/UI y definición de estándares de experiencia para productos digitales utilizados por afiliados, beneficiarios y empleadores en un entorno altamente regulado.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Design System", "Gobernanza UX", "Design Tokens", "Atomic Design", "UX Writing", "Stakeholder Management"].map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-muted border border-border text-foreground/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Propósito */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Propósito del proyecto</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                  Sin un sistema de diseño, cada producto se construía desde cero: criterios inconsistentes, deuda visual acumulada y decisiones que dependían de quién estaba disponible. Mi rol fue construir la infraestructura que lo cambiara — gobernanza, componentes y tokens que permitieran al equipo trabajar de forma consistente y alineada a los objetivos de experiencia corporativos.
                </p>
              </div>

              {/* Contexto */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Contexto</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                  AFP Modelo cuenta con un ecosistema digital compuesto por sitio público, portal privado de afiliados, portal de beneficiarios, portal de empleadores y aplicación móvil. La organización enfrentaba desafíos de consistencia transversal, alineación entre experiencias, escalabilidad UX, gobernanza de diseño y mantenimiento de estándares comunes entre plataformas y equipos.
                </p>
              </div>

              {/* Métricas */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Métricas de impacto</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {metrics.map((m, i) => {
                    const Icon = m.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
                        style={{ background: "var(--background-3)" }}
                      >
                        <Icon className="w-6 h-6 text-primary mb-4 opacity-60" />
                        <p className="text-3xl text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>
                          {m.value}
                        </p>
                        <p className="text-sm text-foreground/55 leading-relaxed">{m.label}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Principales desafíos */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Principales desafíos</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Consistencia multi-producto
                    </p>
                    <ul className="space-y-3">
                      {challenges.consistencia.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Gobernanza UX
                    </p>
                    <ul className="space-y-3">
                      {challenges.gobernanza.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground/30 mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Frentes de trabajo */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Mis frentes de trabajo</p>
                <div className="grid md:grid-cols-3 gap-6">
                  {workFronts.map((front, i) => {
                    const Icon = front.icon;
                    const cardColor = front.lightBg ? "#1a1a1a" : "var(--foreground)";
                    return (
                      <div
                        key={i}
                        className="rounded-2xl p-6 border border-border text-center"
                        style={{ background: front.bg, color: cardColor }}
                      >
                        <div className="w-14 h-14 rounded-full bg-white/60 flex items-center justify-center mx-auto mb-4 border border-border">
                          <Icon className="w-6 h-6 opacity-60" style={{ color: "#6B4F8C" }} strokeWidth={1.5} />
                        </div>
                        <p className="text-sm font-medium mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                          {front.title}
                        </p>
                        <ul className="space-y-1">
                          {front.items.map((item, j) => (
                            <li key={j} className="text-xs leading-relaxed" style={{ opacity: 0.65 }}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Proyectos */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Proyectos en los que participé</p>
                <Carousel opts={{ align: "start", loop: true }} className="w-full">
                  <CarouselContent className="-ml-4">
                    {projectsList.map((item, i) => {
                      const Icon = item.icon;
                      const isLightBg = item.bg.startsWith("#");
                      return (
                        <CarouselItem key={i} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                          <div className="flex flex-col gap-4 p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all bg-card h-full">
                            <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-border" style={{ background: item.bg }}>
                              <Icon className="w-5 h-5" style={{ color: isLightBg ? "#6B4F8C" : "var(--primary)" }} strokeWidth={1.5} />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                                {item.title}
                              </p>
                              <p className="text-xs text-foreground/50 mb-3">{item.desc}</p>
                              <p className="text-xs text-foreground/60 leading-relaxed">{item.details}</p>
                            </div>
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <div className="flex items-center justify-end gap-2 mt-4">
                    <CarouselPrevious className="static translate-y-0" />
                    <CarouselNext className="static translate-y-0" />
                  </div>
                </Carousel>
              </div>

              {/* Lo que aprendí */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Lo que aprendí</p>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  "Trabajar en una organización con métricas de experiencia definidas me enseñó que el diseño más valioso no siempre es el más visible — a veces es el sistema silencioso que permite que todo lo demás funcione. Construir gobernanza es, en el fondo, diseñar para los diseñadores."
                </p>
              </div>

              {/* CTA */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-lg font-medium text-foreground mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                      ¿Te interesa saber más sobre este proyecto?
                    </p>
                    <p className="text-sm text-foreground/50">Contáctame y hablemos</p>
                  </div>
                  <Button variant="outline" className="group/btn" style={{ borderColor: "var(--border)" }} asChild>
                    <Link to="/contacto">
                      Contactar
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </Button>
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
