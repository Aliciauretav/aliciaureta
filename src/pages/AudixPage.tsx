import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, ArrowLeft, Clock, Layers, BarChart3 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const metrics = [
  { icon: Clock, value: "3d → 2h", label: "Reducción del tiempo de auditoría heurística" },
  { icon: Layers, value: "3 modos", label: "Screenshot individual · Comparativa entre versiones · URL automática" },
  { icon: BarChart3, value: "Score", label: "De hallazgos cualitativos a evidencia estructurada para stakeholders" },
];

const decisionsProduct = [
  {
    title: "Zonas nombradas para tracking quirúrgico",
    desc: "Tracking por componente, no por pantalla completa. Permite comparar versiones con precisión quirúrgica.",
  },
  {
    title: "Mismo framework en los tres modos",
    desc: "Nielsen 10H + WCAG 2.1 AA aplicados consistentemente para garantizar comparabilidad entre evaluaciones.",
  },
  {
    title: "Quick wins exclusivos del modo URL",
    desc: "Para equipos con roadmaps saturados que necesitan priorización rápida y accionable.",
  },
];

const decisionsStrategy = [
  {
    title: "WCAG sobre APCA",
    desc: "El estándar adoptado pesa más que la precisión técnica en contexto de equipo. Consistencia > perfección.",
  },
  {
    title: "Screenshots sobre integración Figma",
    desc: "Funciona en cualquier contexto, incluyendo entornos con restricciones de ciberseguridad.",
  },
  {
    title: "Investigación con 3 diseñadores UX senior",
    desc: "Validar que el problema era de proceso, no de método, antes de iterar en la solución.",
  },
];

export function AudixPage() {
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
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden" style={{ background: "var(--background-3)" }}>
                  <img
                    src="/image/audix-preview.webp"
                    alt="Audix — herramienta de auditoría heurística con IA"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                    Herramienta propia · IA · UX Management
                  </p>
                  <h1
                    className="text-3xl lg:text-4xl text-foreground mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
                  >
                    Audix: De auditorías manuales a tracking de calidad UX con IA
                  </h1>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 w-fit" style={{ background: "var(--background-3)", color: "var(--primary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Diseño de producto · Prompt Engineering · React + Claude API · 2025
                  </span>
                  <p className="text-foreground/60 leading-relaxed mb-6">
                    Una herramienta propia que automatiza auditorías heurísticas y convierte evaluaciones puntuales en un sistema de tracking continuo por componente.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Prompt Engineering", "Product Design", "Claude API", "React", "Nielsen 10H", "WCAG 2.1 AA"].map((tag) => (
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
                  Las auditorías heurísticas son valiosas pero costosas: toman días, dependen del criterio individual y rara vez se repiten para evaluar si los cambios realmente funcionaron. Audix automatiza ese proceso y lo convierte en un sistema de tracking que acompaña todo el ciclo del proyecto — desde la auditoría del estado actual hasta la comparativa entre versiones del rediseño.
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

              {/* Decisiones clave */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Decisiones clave</p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-xs font-medium tracking-widest uppercase text-foreground/40 mb-5">Producto</p>
                    <div className="flex flex-col gap-3">
                      {decisionsProduct.map((d, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="rounded-xl border border-border bg-muted hover:border-primary/20 transition-colors"
                          style={{ padding: "1.5rem" }}
                        >
                          <p className="text-sm font-medium text-foreground mb-2">{d.title}</p>
                          <p className="text-xs text-foreground/55 leading-relaxed">{d.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-widest uppercase text-foreground/40 mb-5">Estrategia</p>
                    <div className="flex flex-col gap-3">
                      {decisionsStrategy.map((d, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="rounded-xl border border-border bg-muted hover:border-primary/20 transition-colors"
                          style={{ padding: "1.5rem" }}
                        >
                          <p className="text-sm font-medium text-foreground mb-2">{d.title}</p>
                          <p className="text-xs text-foreground/55 leading-relaxed">{d.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Lo que aprendí */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Lo que aprendí</p>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  "Construir Audix me confirmó que el trabajo de un UX Manager no es ejecutar más análisis — es diseñar los sistemas que permiten al equipo analizar mejor. La tecnología puede optimizar el proceso; el criterio para diseñar cómo hacerlo sigue siendo humano."
                </p>
              </div>

              {/* CTA */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-lg font-medium text-foreground mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                      ¿Te interesa saber más sobre este proyecto?
                    </p>
                    <a
                      href="https://aliciaureta.notion.site/Audix-Sistema-de-tracking-de-calidad-UX-que-escala-el-rigor-metodol-gico-en-equipos-giles-292515be12d880c0b2a3f6bba2ca9209"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm transition-colors"
                      style={{ color: "var(--primary)" }}
                      onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
                    >
                      Ver caso completo en Notion →
                    </a>
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
