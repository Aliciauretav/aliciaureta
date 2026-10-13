import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, ArrowLeft, TrendingUp, Layers } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useIsMobile } from "../components/ui/use-mobile";

// ─── DATOS ────────────────────────────────────────────────────────────────────

const metrics = [
  { icon: TrendingUp, value: "−80%", label: "Tiempo de un proceso de diseño estándar, de ~3 meses a ~15 días, gracias a componentización y flujos estandarizados" },
  { icon: TrendingUp, value: "−30%",              label: "Reducción en tiempos de diseño aplicando componentización (Atomic Design y design tokens) en el Proyecto 311, bajo plazo no negociable" },
  { icon: Layers,     value: "5 plataformas",     label: "Bajo gobernanza unificada" },
];

const platforms = [
  { id: 1, name: "Sitio público",        pending: false },
  { id: 2, name: "Portal privado",       pending: false },
  { id: 3, name: "Portal beneficiarios", pending: false },
  { id: 4, name: "App móvil",            pending: false },
  { id: 5, name: "Portal empleadores",   pending: true  },
];

const sharedLayers = [
  "Design Tokens",
  "Tono y voz",
  "Estándares de interacción",
  "Flujo de trabajo estandarizado",
];

const stages = [
  { phase: "Investigación",                   actor: "UX/UI",                      minimum: "Síntesis de hallazgos documentada" },
  { phase: "Propuesta de diseño",             actor: "UX/UI",                      minimum: "Prototipo de alta fidelidad y componentes documentados" },
  { phase: "Revisión interna",                actor: "Líder de Diseño",                 minimum: "Visto bueno y aprobación, según el alcance, antes de presentar" },
  { phase: "Presentación a stakeholder",      actor: "Líder de Diseño · UX/UI",         minimum: "Hallazgos y prototipo, con las decisiones argumentadas" },
  { phase: "Implementación y revisión final", actor: "Desarrollo · UX · Analista", minimum: "Handoff completo; experiencia y reglas de negocio revisadas" },
  { phase: "Análisis post-lanzamiento",       actor: "Líder de Diseño · UX/UI",         minimum: "Informe de hallazgos con mejoras priorizadas, una semana después" },
];

const stageColumns = "minmax(0,1.3fr) minmax(0,1fr) minmax(0,2fr)";

const outcomes = [
  { title: "Decisiones con evidencia", body: "Cada propuesta llega a stakeholders con hallazgos y prototipo, y con la decisión argumentada." },
  { title: "Menos iteraciones innecesarias", body: "Los mínimos definen cuándo se avanza y cuándo se vuelve atrás, en lugar de rondas de cambios por preferencia." },
  { title: "Aprender después del lanzamiento", body: "El uso se revisa una semana después y otra vez meses más tarde." },
];

const projects = [
  { title: "Rediseño sitio público", body: "Lideré, junto a otro integrante del equipo de diseño, la reestructuración de la arquitectura de información del sitio público. El análisis de uso mostró que cerca del 80% de la interacción se concentraba en solo dos secciones. Propuse consolidar los tres homes en uno con contenido perfilado por tipo de usuario. Meses después del lanzamiento volví a revisar el uso con mapas de calor y analítica de comportamiento: la gente ya no depende del menú para llegar a lo que necesita, y las sesiones en que alguien volvía atrás casi de inmediato bajaron entre un 15% y un 25% frente a los tres meses anteriores. Los datos también me muestran dónde mejorar en la próxima iteración." },
  { title: "Proyecto 311 — Digitalización de trámites", body: "Un proyecto de alta complejidad y largo alcance. Bajo una restricción de tiempo no negociable, apliqué la componentización del sistema para entregar los flujos pendientes con un 30% de reducción en tiempos de diseño — sin perder criterio de diseño ni la coherencia con el sistema." },
  { title: "Simplicidad — Tono y voz", body: "A través de la gestión y coordinación con distintas áreas, lideré la construcción del manual de tono y voz base con el que hoy trabajan los equipos para comunicarse con los usuarios." },
];

const skills = ["Liderazgo UX", "Arquitectura de información", "Gobernanza de diseño", "Diseño de procesos", "Gestión de stakeholders", "Sistemas de diseño", "Design Tokens", "UX Writing", "Desarrollo de equipo"];

// ─── PÁGINA ───────────────────────────────────────────────────────────────────

export function GovernancePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

            {/* Volver */}
            <button
              onClick={() => window.history.back()}
              style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--foreground-muted)", background: "none", border: "none", cursor: "pointer", marginBottom: "2rem", padding: "0" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.textDecoration = "underline"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--foreground-muted)"; e.currentTarget.style.textDecoration = "none"; }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver</span>
            </button>

            <div className="bg-card border border-border rounded-3xl overflow-hidden">

              {/* ── HERO ── */}
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden" style={{ background: "var(--background-3)" }}>
                  <img
                    src="/afp-portada.webp"
                    alt="AFP Modelo — Gobernanza UX"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                    Design Leadership · Gobernanza · Transformación organizacional
                  </p>
                  <h1 className="text-3xl lg:text-4xl text-foreground mb-5 leading-tight" style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}>
                    Construir UX desde cero en una organización que aún no sabía que lo necesitaba
                  </h1>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 w-fit" style={{ background: "var(--background-3)", color: "var(--primary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    UX Manager → Líder de Diseño — Servicios financieros regulados · 2024 – presente
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-muted border border-border text-foreground/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── PUNTO DE PARTIDA ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">El punto de partida</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-4">
                  El cargo no existía antes de que yo llegara. El área de diseño era un servicio de maquetación: tres personas que ejecutaban instrucciones, sin criterio propio, sin autoridad sobre las decisiones y sin nadie responsable de la coherencia entre productos. Con el tiempo, el equipo pasó de tres a cinco personas.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                  CX definía los textos. Los stakeholders pedían cambios por preferencia. Desarrollo editaba lo que no le convenía. Y el único control de calidad era verificar que el flujo existiera — no que funcionara bien para el usuario.
                </p>
              </div>

              {/* ── LO QUE CONSTRUÍ ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Lo que construí</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-4">
                  Mi trabajo fue instalar la infraestructura que le dio al diseño un lugar real en la organización. No en un proyecto aislado — de manera transversal, en paralelo a la operación diaria.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-4">
                  Diseñé el flujo de trabajo del equipo desde cero: levantamiento, análisis, propuesta, revisión, presentación y handoff — con mínimos exigibles en cada etapa. Estandaricé los entregables, establecí el tono y voz, construí los design tokens que hoy comparten las cinco plataformas del ecosistema digital, y definí cómo se argumentan las decisiones de diseño frente a stakeholders y desarrollo.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                  El resultado más concreto: las propuestas dejaron de nacer de instrucciones y empezaron a nacer de análisis. Lo que antes tardaba cerca de tres meses en un proceso sencillo, hoy toma aproximadamente quince días.
                </p>
              </div>

              {/* ── MÉTRICAS ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Resultados medibles</p>
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
                        <p className="text-3xl text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>{m.value}</p>
                        <p className="text-sm text-foreground/55 leading-relaxed">{m.label}</p>
                      </motion.div>
                    );
                  })}
                </div>

              </div>

              {/* ── CÓMO TRABAJA EL EQUIPO HOY ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-2">Cómo trabaja el equipo hoy</p>
                <h2 className="text-xl text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>De iterar por preferencia a avanzar con mínimos</h2>
                <p className="text-sm text-foreground/50 mb-8 max-w-lg">Cada etapa tiene un mínimo exigible antes de pasar a la siguiente. Eso evita rondas de cambios sin fundamento y deja claro quién decide, con qué criterio y en qué momento.</p>

                {/* Antes / Hoy */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl" style={{ background: "rgba(163,45,45,0.07)", padding: "16px 20px" }}>
                    <p className="text-xs uppercase tracking-wider" style={{ fontWeight: 700, marginBottom: "4px", color: "#A32D2D" }}>Antes</p>
                    <p className="text-sm text-foreground/60 leading-relaxed">Cambios por preferencia y retrabajo reactivo. Cerca de 3 meses por proceso.</p>
                  </div>
                  <div className="rounded-xl" style={{ background: "rgba(107,79,140,0.07)", padding: "16px 20px" }}>
                    <p className="text-xs uppercase tracking-wider text-primary" style={{ fontWeight: 700, marginBottom: "4px" }}>Hoy</p>
                    <p className="text-sm text-foreground/60 leading-relaxed">Decisiones argumentadas y ciclos de revisión definidos. Cerca de 15 días por proceso.</p>
                  </div>
                </div>

                {/* Secuencia */}
                <div className="rounded-xl border border-border bg-card" style={{ overflow: "hidden" }}>
                  {!isMobile && (
                    <div style={{ display: "grid", gridTemplateColumns: stageColumns, gap: "16px", padding: "10px 20px", background: "var(--background-3)", fontSize: "9px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "color-mix(in srgb, var(--foreground) 45%, transparent)" }}>
                      <span style={{ paddingLeft: "36px" }}>Etapa</span>
                      <span>Responsable</span>
                      <span>Mínimo exigible</span>
                    </div>
                  )}
                  {stages.map((stage, i) => (
                    <div
                      key={stage.phase}
                      style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : stageColumns,
                        gap: isMobile ? "4px" : "16px",
                        alignItems: "center",
                        padding: "14px 20px",
                        borderTop: !isMobile || i > 0 ? "1px solid var(--border)" : "none",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border border-border text-primary flex items-center justify-center shrink-0" style={{ background: "var(--background-3)", fontSize: "11px", fontWeight: 600 }}>{i + 1}</span>
                        <span className="text-sm font-semibold text-foreground">{stage.phase}</span>
                      </div>
                      <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--primary)", margin: isMobile ? "0 0 0 36px" : 0 }}>{stage.actor}</p>
                      <p style={{ fontSize: "12px", lineHeight: 1.5, margin: isMobile ? "0 0 0 36px" : 0, color: "color-mix(in srgb, var(--foreground) 60%, transparent)" }}>
                        {isMobile && <span style={{ fontSize: "9px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "color-mix(in srgb, var(--foreground) 45%, transparent)" }}>Mínimo · </span>}
                        {stage.minimum}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap" style={{ marginTop: "16px" }}>
                  <span style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "4px", background: "rgba(80,160,120,0.1)", border: "1px solid rgba(80,160,120,0.3)", color: "#3B8060" }}>✓ Cumple el mínimo → avanza</span>
                  <span style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "4px", background: "rgba(180,80,80,0.08)", border: "1px solid rgba(180,80,80,0.3)", color: "#A03030" }}>↩ No lo cumple → vuelve a la etapa anterior, con observaciones acordadas</span>
                </div>

                {/* Qué cambió para el producto */}
                <p className="text-xs font-medium tracking-widest uppercase text-primary" style={{ marginTop: "40px", marginBottom: "16px" }}>Qué cambió para el producto</p>
                <div className="grid md:grid-cols-3 gap-4">
                  {outcomes.map((o, i) => (
                    <motion.div
                      key={o.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-2xl border border-border transition-colors"
                      style={{ background: "var(--background-3)", padding: "24px" }}
                    >
                      <p className="text-sm font-medium text-foreground" style={{ marginBottom: "8px" }}>{o.title}</p>
                      <p style={{ fontSize: "12px", lineHeight: 1.6, color: "color-mix(in srgb, var(--foreground) 60%, transparent)" }}>{o.body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── ECOSISTEMA ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-2">El ecosistema que gobierna</p>
                <h2 className="text-xl text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>Un sistema compartido para cinco plataformas</h2>
                <p className="text-sm text-foreground/50 mb-8 max-w-lg">Cada plataforma tiene sus propios usuarios y alcances técnicos. La gobernanza garantiza coherencia sin aplanar esas diferencias.</p>

                {/* Lineamientos compartidos */}
                <div className="mb-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-3">Lineamientos compartidos — Gobernanza UX Manager</p>
                  <div className="flex flex-wrap gap-2">
                    {sharedLayers.map((l) => (
                      <span key={l} className="text-xs px-3 py-1.5 rounded-full border text-primary border-primary/30" style={{ background: "rgba(107,79,140,0.08)" }}>
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Plataformas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {platforms.map((p) => (
                    <div
                      key={p.id}
                      className="rounded-xl p-6 flex flex-col items-center justify-center gap-2 text-center"
                      style={{
                        opacity: p.pending ? 0.6 : 1,
                        background: "var(--background-3)",
                        minHeight: "92px",
                      }}
                    >
                      <span className="text-sm font-bold uppercase tracking-wide text-foreground/75 leading-tight">{p.name}</span>
                      {p.pending ? (
                        <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--foreground-muted)" }}>
                          Pendiente · <span className="text-foreground/40">UI Kit propio</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">UI Kit propio</span>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-foreground/35 mt-3 leading-relaxed">Cada plataforma construye su UI Kit a partir de los lineamientos compartidos, adaptado a su ambiente de desarrollo y alcances técnicos.</p>
              </div>

              {/* ── CÓMO SE VE CUANDO FUNCIONA ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Cómo se ve cuando funciona</p>
                <p className="text-lg text-foreground/70 leading-relaxed mb-6">Los proyectos son la evidencia de que el sistema escala:</p>
                <div className="space-y-6">
                  {projects.map((p) => (
                    <div key={p.title} className="border-l-2 border-primary/40 pl-5">
                      <p className="text-sm font-semibold text-foreground mb-1">{p.title}</p>
                      <p className="text-sm text-foreground/60 leading-relaxed">{p.body}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground/40 mt-6 italic">El mismo marco se ha aplicado en distintos proyectos como confirmación de datos de contacto, trámites y servicios en línea, entre otros.</p>
              </div>

              {/* ── LO QUE APRENDÍ ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Lo que aprendí</p>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-3xl mb-4">
                  Entrar a una organización sin rol de diseño definido significa que nadie sabe exactamente qué esperar de ti — y que tienes que demostrarlo con cada decisión. Lo más difícil no fue construir el sistema: fue construir la convicción, dentro del equipo y hacia arriba, de que el diseño tiene criterio propio y que ese criterio mejora los productos.
                </p>
                <p className="text-lg text-foreground/50 leading-relaxed max-w-3xl italic border-l-2 border-primary pl-5" style={{ fontFamily: "var(--font-serif)" }}>
                  Lo más valioso que dejé instalado no es el UI Kit ni los tokens — es un equipo que hoy llega con argumentos a cada presentación.
                </p>
              </div>

              {/* ── CTA ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-lg font-medium text-foreground mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                      ¿Te interesa saber más sobre este proyecto?
                    </p>
                    <p className="text-sm text-foreground/45">Contáctame y hablemos</p>
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

            {/* Volver (abajo) */}
            <button
              onClick={() => window.history.back()}
              style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--foreground-muted)", background: "none", border: "none", cursor: "pointer", marginTop: "1.5rem", padding: "0" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--primary)"; e.currentTarget.style.textDecoration = "underline"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--foreground-muted)"; e.currentTarget.style.textDecoration = "none"; }}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver</span>
            </button>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
