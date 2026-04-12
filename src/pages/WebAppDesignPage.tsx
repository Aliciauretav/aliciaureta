import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, ArrowLeft, TrendingUp, Users, BarChart3, Search, Layers, TestTube, Rocket, Eye } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const metrics = [
  { icon: TrendingUp, value: "60→4", label: "Inputs eliminados en el proceso de contratación" },
  { icon: Users, value: "+300", label: "Personas con flujo de contratación optimizado" },
  { icon: BarChart3, value: "+3 pts", label: "Mejora en escala de percepción de experiencia (sobre 7)" },
];

const process = [
  { step: "1", title: "Descubrir", icon: Search, desc: "Entrevistas con RRHH, mapeo de pain points y análisis del sistema existente" },
  { step: "2", title: "Definir", icon: Layers, desc: "Arquitectura de información, flujos actuales vs. ideales" },
  { step: "3", title: "Diseñar", icon: Eye, desc: "Wireframes, prototipos Hi-Fi, estandarización con UI Kit" },
  { step: "4", title: "Validar", icon: TestTube, desc: "Testing con usuarios, iteración y ajustes" },
  { step: "5", title: "Lanzar", icon: Rocket, desc: "Seguimiento post-lanzamiento y medición de resultados" },
];

const beforeAfter = {
  before: [
    "Plataforma digital con flujos incompletos",
    "60 campos de entrada por proceso",
    "Errores operacionales frecuentes",
    "Baja adopción del equipo de RRHH",
  ],
  after: [
    "Flujo rediseñado end-to-end",
    "4 inputs esenciales por proceso",
    "Reducción de errores operacionales",
    "+3 puntos en percepción de experiencia",
  ],
};

const keyImages = [
  { label: "Arquitectura de información", desc: "Muestra el razonamiento estructural del rediseño", src: "https://aliciaureta.com/image/teamwork-ai.jpg" },
  { label: "Mockup final Hi-Fi", desc: "Pantalla representativa del resultado", src: "https://aliciaureta.com/image/teamwork-mockup.jpg" },
  { label: "Digitalización de informes", desc: "Proceso de transformación de documentos clave", src: "https://aliciaureta.com/image/teamwork-docs.jpg" },
];

export function WebAppDesignPage() {
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
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden bg-[#E8F0F5]">
                  <img
                    src="https://aliciaureta.com/image/teamwork-cover.jpg"
                    alt="Digitalización RRHH Teamwork"
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                    Product Design · UX Research · Rediseño
                  </p>
                  <h1
                    className="text-3xl lg:text-4xl text-foreground mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
                  >
                    De un proceso roto a una plataforma que la gente realmente usa
                  </h1>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 w-fit" style={{ background: "var(--background-3)", color: "var(--primary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    UX/UI Designer — ciclo completo
                  </span>
                  <p className="text-foreground/60 leading-relaxed mb-6">
                    Teamwork Chile tenía una plataforma digital de reclutamiento que no funcionaba como debía: flujos incompletos, demasiados pasos y una experiencia que generaba errores y frustración en el equipo de RRHH.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["UX Research", "Arquitectura de información", "Prototipado Hi-Fi", "Design System", "Validación con usuarios", "Low-code"].map((tag) => (
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
                  Transformar el proceso manual de reclutamiento en una experiencia digital fluida que permitiera a los reclutadores gestionar candidatos de manera más eficiente y reducir errores operacionales. El desafío no era digitalizar desde cero, sino entender qué estaba fallando, rediseñar con criterio y construir algo que la gente realmente adoptara.
                </p>
              </div>

              {/* Métricas */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
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

              {/* Antes y después */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Antes y después</p>
                <div className="grid md:grid-cols-2 gap-6">
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
                        className="flex-1 min-w-[140px] max-w-[180px] rounded-2xl p-5 border border-border text-center bg-muted hover:border-primary/20 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3 border border-border" style={{ background: "var(--background-3)" }}>
                          <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                        </div>
                        <p className="text-sm font-medium text-foreground mb-2">{step.title}</p>
                        <p className="text-xs text-foreground/50 leading-relaxed">{step.desc}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Imágenes clave */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Imágenes del proceso</p>
                <div className="grid md:grid-cols-3 gap-6">
                  {keyImages.map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-border bg-card">
                      <div className="aspect-[4/3] bg-muted overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.label}
                          className="w-full h-full object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium text-foreground mb-1">{img.label}</p>
                        <p className="text-xs text-foreground/50">{img.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lo que aprendí */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Lo que aprendí</p>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  "Rediseñar algo que ya existe es más complejo que diseñar desde cero — hay que entender por qué falló primero. En este proyecto aprendí que la mayoría de los problemas no eran de interfaz sino de arquitectura: demasiadas decisiones mal distribuidas a lo largo del flujo. Simplificar radicalmente fue la solución, y validarlo con usuarios reales fue lo que dio confianza para hacerlo."
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
