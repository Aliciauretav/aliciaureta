import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, ArrowLeft, TrendingUp, Users, BarChart3, Search, BookOpen, Layers, Pencil, TestTube } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const metrics = [
  { icon: TrendingUp, value: "65%", label: "Reducción en pasos para encontrar información clave" },
  { icon: BarChart3, value: "7→3", label: "Niveles de flujo documental simplificados" },
  { icon: Users, value: "88%", label: "Satisfacción de usuarios en pruebas de usabilidad" },
];

const constraints = [
  { title: "Sistema de Diseño Gubernamental", desc: "Paleta, tipografía y componentes definidos por el Estado. El trabajo creativo estuvo en la arquitectura y la experiencia, no en la identidad visual." },
  { title: "Normativa de accesibilidad", desc: "Cumplimiento de estándares WCAG para sitios públicos — no opcional sino obligatorio por normativa." },
  { title: "Migración SharePoint → WordPress", desc: "Las decisiones de diseño debían ser implementables en WordPress sin desarrollo a medida." },
  { title: "Plazo de dos meses", desc: "Ciclo completo — investigación, arquitectura, prototipado y entrega — como consultora externa en tiempo acotado." },
];

const process = [
  { step: "1", title: "Discover", icon: Search, items: ["Auditoría heurística", "Research competitivo"] },
  { step: "2", title: "Define", icon: BookOpen, items: ["User personas", "Mapa de empatía"] },
  { step: "3", title: "Ideate", icon: Layers, items: ["User flows", "Arquitectura de información"] },
  { step: "4", title: "Design", icon: Pencil, items: ["Wireframes", "Prototipos Hi-Fi"] },
  { step: "5", title: "Testing", icon: TestTube, items: ["Feedback", "Iteración"] },
];

const beforeAfter = {
  before: [
    "Navegación compleja y sin jerarquía clara",
    "Diseño no responsive, mala experiencia móvil",
    "7 niveles para llegar a documentos",
    "Sin cumplimiento de accesibilidad",
    "Identidad visual inconsistente",
  ],
  after: [
    "Arquitectura simplificada y escaneable",
    "Mobile First desde la base",
    "3 niveles máximo de navegación",
    "Cumplimiento WCAG aplicado",
    "Sistema de Diseño Gubernamental integrado",
  ],
};

export function WebDesignPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            <Button variant="ghost" className="group/back mb-8 hover:bg-secondary -ml-3" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
                Volver
              </Link>
            </Button>

            <div className="bg-card border border-border rounded-3xl overflow-hidden">

              {/* Hero */}
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#EEF2F0]">
                  <img
                    src="https://aliciaureta.com/image/dirplan-cover.jpg"
                    alt="Rediseño DIRPLAN"
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                    Consultoría UX · Sector Público · Rediseño
                  </p>
                  <h1
                    className="text-3xl lg:text-4xl text-foreground mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
                  >
                    Rediseñar un sitio institucional del Estado con restricciones reales y entrega en dos meses
                  </h1>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 w-fit" style={{ background: "var(--background-3)", color: "var(--primary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Consultora UX/UI externa — proyecto de alcance completo
                  </span>
                  <p className="text-foreground/60 leading-relaxed mb-6">
                    La Dirección de Planeamiento del Ministerio de Obras Públicas necesitaba migrar su sitio desde SharePoint a WordPress. Más que una migración técnica, era una oportunidad para resolver problemas de fondo.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Consultoría externa", "UX Research", "Arquitectura de información", "Mobile First", "Sistema Gubernamental", "Accesibilidad WCAG"].map((tag) => (
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
                  Modernizar la presencia digital de DIRPLAN a través de un rediseño integral enfocado en mejorar la accesibilidad, la usabilidad y la experiencia de usuario. Como consultora externa, tuve dos meses para investigar, diseñar y entregar una solución dentro de los estándares del Sistema de Diseño Gubernamental de Chile.
                </p>
              </div>

              {/* Restricciones */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-3">Las restricciones como parte del diseño</p>
                <p className="text-sm text-foreground/50 mb-8 max-w-xl">
                  Trabajar con restricciones reales es una habilidad senior. Esta sección muestra que el buen diseño no ocurre en el vacío.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {constraints.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-xl p-5 border border-border bg-muted hover:border-primary/20 transition-colors"
                    >
                      <p className="text-sm font-medium text-foreground mb-2">{c.title}</p>
                      <p className="text-xs text-foreground/55 leading-relaxed">{c.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Métricas */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Métricas de impacto</p>
                <div className="grid md:grid-cols-3 gap-6">
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

              {/* Proceso */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Proceso de diseño</p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  {process.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="flex-1 min-w-[130px] max-w-[160px] rounded-2xl p-5 border border-border text-center bg-muted hover:border-primary/20 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border border-border" style={{ background: "var(--background-3)" }}>
                          <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <p className="text-sm font-medium text-foreground mb-2">{step.title}</p>
                        <ul className="space-y-1">
                          {step.items.map((item, j) => (
                            <li key={j} className="text-xs text-foreground/50">{item}</li>
                          ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Antes y después */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Antes y después</p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="rounded-2xl p-6" style={{ background: "#FCEBEB" }}>
                    <p className="text-xs font-medium uppercase tracking-wider mb-4" style={{ color: "#A32D2D" }}>Antes</p>
                    <ul className="space-y-3">
                      {beforeAfter.before.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#791F1F" }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#A32D2D" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl p-6" style={{ background: "#EAF3DE" }}>
                    <p className="text-xs font-medium uppercase tracking-wider mb-4" style={{ color: "#3B6D11" }}>Después</p>
                    <ul className="space-y-3">
                      {beforeAfter.after.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#27500A" }}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#3B6D11" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Capturas antes/después */}
                <div className="grid md:grid-cols-2 gap-4">
                  {["https://aliciaureta.com/image/dirplan-before.jpg", "https://aliciaureta.com/image/dirplan-after.jpg"].map((src, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-border bg-muted aspect-[4/3]">
                      <img
                        src={src}
                        alt={i === 0 ? "Sitio antes del rediseño" : "Sitio después del rediseño"}
                        className="w-full h-full object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Lo que aprendí */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Lo que aprendí</p>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  "Diseñar para el sector público me enseñó que las restricciones no limitan el buen diseño — lo enfocan. Trabajar dentro del Sistema de Diseño Gubernamental significó concentrar toda la energía en lo que realmente importaba: la arquitectura de información y la experiencia de navegación. A veces el mejor diseño es el que resuelve el problema correcto dentro de los límites que existen."
                </p>
              </div>

              {/* CTA */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-lg font-medium text-foreground mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                      ¿Te interesa saber más sobre este proyecto?
                    </p>
                    <p className="text-sm text-foreground/50">Contáctame y hablemos</p>
                  </div>
                  <Button variant="outline" className="group/btn hover:border-primary hover:text-primary" asChild>
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
