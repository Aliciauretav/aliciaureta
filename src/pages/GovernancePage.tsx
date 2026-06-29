import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, ArrowLeft, TrendingUp, Layers } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// ─── DATOS ────────────────────────────────────────────────────────────────────

const metrics = [
  { icon: TrendingUp, value: "3 meses → 15 días", label: "En procesos estándar, gracias a componentización y flujos estandarizados" },
  { icon: TrendingUp, value: "30%",               label: "Reducción en tiempos de diseño bajo restricción de plazo no negociable" },
  { icon: Layers,     value: "5 plataformas",     label: "Bajo gobernanza unificada" },
];

const steps_before = [
  { id: 1, type: "origin", actor: "Origen del proyecto", action: "Stakeholder define qué diseñar · CX define cómo diseñar", isOrigin: true },
  { id: 2, type: "design", actor: "UX/UI", action: "Ejecuta maqueta con librería existente" },
  { id: 3, type: "review", actor: "CX", action: "Revisa diseño y define los textos" },
  { id: 4, type: "change", actor: "Aprobación stakeholders", action: "Solicita cambios según criterio propio" },
  { id: 5, type: "design", actor: "UX/UI", action: "Edita solicitudes sin argumentación" },
  { id: 6, type: "dev",    actor: "Desarrollo", action: "Modifica lo que considera no factible sin coordinación" },
  { id: 7, type: "approval", actor: "Paso a producción", action: "Analista aprueba que el flujo se complete — no la experiencia" },
];

const steps_after = [
  { id: 1, type: "origin", actor: "Origen del proyecto", action: "Necesidad normativa · Auditoría UX/contenido · Solicitud stakeholder", isOrigin: true },
  { id: 2, type: "design", actor: "UX/UI", action: "Define qué y cómo diseñar: tipo de entregable, fundamentos de diseño y tono y voz" },
  { id: 3, type: "review", actor: "UX Manager", action: "Revisa cumplimiento de estándar de diseño y tono y voz" },
  { id: 4, type: "input",  actor: "Aprobación stakeholders", action: "Recibe propuesta fundamentada — decisiones de diseño son argumentadas" },
  { id: 5, type: "design", actor: "UX/UI", action: "Itera sobre observaciones acordadas con UX Manager" },
  { id: 6, type: "dev",    actor: "Desarrollo", action: "Implementa con entregables estandarizados — problemas de alcance se acuerdan con UX Manager" },
  { id: 7, type: "approval", actor: "Paso a producción", action: "UX Manager + UX/UI revisan usabilidad y coherencia. Analista revisa cumplimiento de reglas de negocio" },
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

const workSteps = [
  { id: 1, phase: "Investigación",              actor: "UX/UI",                          description: "Desk research, análisis de logs y benchmark a partir de los antecedentes de la necesidad", minimum: "Síntesis de hallazgos documentada", decision: null },
  { id: 2, phase: "Propuesta de diseño",        actor: "UX/UI",                          description: "Propuesta con componentes del UI Kit. Si se requiere algo nuevo, se construye el componente", minimum: "Prototipo de alta fidelidad + componentes documentados", decision: null },
  { id: 3, phase: "Preaprobación interna",      actor: "UX Manager",                     description: "Revisión de la propuesta. Si aprueba, avanza. Si no, vuelve a propuesta", minimum: "Visto bueno antes de escalar", decision: { yes: "Aprueba → escala", no: "Itera → vuelve a propuesta" } },
  { id: 4, phase: "Aprobación interna",         actor: "Aprobación interna",              description: "Revisión según alcance e importancia del proyecto", minimum: "Aprobación antes de presentar a stakeholder", decision: { yes: "Aprueba → stakeholder", no: "Itera con UX Manager" } },
  { id: 5, phase: "Presentación a stakeholder", actor: "UX Manager / UX/UI",              description: "PPT con hallazgos de investigación y prototipo de alta fidelidad con la solución propuesta", minimum: "Presentación con hallazgos + prototipo", decision: { yes: "Aprueba → implementación", no: "Itera → preaprobación interna" } },
  { id: 6, phase: "Implementación",             actor: "Desarrollo / UX Manager",         description: "Generación de front o handoff según ambiente. Problemas técnicos se negocian con UX Manager para mantener funcionalidad", minimum: "Handoff completo o front generado", decision: null },
  { id: 7, phase: "Revisión final",             actor: "UX Manager + UX/UI + Analista",   description: "UX revisa que funcione y se vea como el prototipo. En paralelo, analista revisa cumplimiento de reglas de negocio", minimum: "Aprobación de experiencia + reglas de negocio", decision: null },
  { id: 8, phase: "Análisis post-lanzamiento",  actor: "UX Manager + UX/UI",              description: "Revisión de interacción 1 semana post-producción. Mapas de calor y patrones de comportamiento para identificar hallazgos y mejoras.", minimum: "Informe de hallazgos con propuesta de mejoras priorizadas", decision: null },
];

const projects = [
  { title: "Rediseño sitio público", body: "El análisis de uso mostró que cerca del 80% de la interacción se concentraba en solo dos secciones. Propuse consolidar los tres homes en uno con contenido perfilado por tipo de usuario. Post-lanzamiento, los mapas de calor confirmaron alta interacción con las secciones priorizadas." },
  { title: "Proyecto 311 — Digitalización de trámites", body: "Un proyecto de alta complejidad y largo alcance. Bajo una restricción de tiempo no negociable, diseñé un proceso adaptado que permitió entregar los flujos pendientes con un 30% de reducción en tiempos — sin perder criterio de diseño ni la coherencia con el sistema." },
  { title: "Simplicidad — Tono y voz", body: "A través de la gestión y coordinación con distintas áreas, lideré la construcción del manual de tono y voz base con el que hoy trabajan los equipos para comunicarse con los usuarios." },
];

const skills = ["Liderazgo UX", "Gobernanza de diseño", "Diseño de procesos", "Gestión de stakeholders", "Sistemas de diseño", "Design Tokens", "UX Writing", "Desarrollo de equipo"];

// ─── SUBCOMPONENTES ───────────────────────────────────────────────────────────

interface StepData {
  id: number;
  type: string;
  actor: string;
  action: string;
  isOrigin?: boolean;
}

const stepDotColor: Record<string, string> = {
  origin: "#9B7EC8", input: "#6B4F8C", design: "#9B8060",
  review: "#9B7EC8", change: "#B45050", dev: "#888", approval: "#50A078",
};

function FlowStep({ step, isLast, accentColor }: { step: StepData; isLast: boolean; accentColor?: string }) {
  const isOrigin = step.isOrigin;
  const actorColor = accentColor ?? "#6B4F8C";
  return (
    <div className="flex flex-col">
      <div
        className="rounded-lg p-4 flex flex-col gap-2 text-xs"
        style={{
          border: isOrigin ? "1px dashed rgba(107,79,140,0.4)" : "none",
          background: isOrigin ? "rgba(107,79,140,0.06)" : "var(--background-3)",
          minHeight: "72px",
        }}
      >
        <span className="font-semibold uppercase tracking-wider text-[10px]" style={{ color: actorColor }}>{step.actor}</span>
        <span className="leading-relaxed text-foreground/60">{step.action}</span>
      </div>
      {!isLast && <div className="h-3" />}
    </div>
  );
}

// ─── PÁGINA ───────────────────────────────────────────────────────────────────

export function GovernancePage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

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
              <div className="grid lg:grid-cols-2 lg:min-h-0">
                <div className="aspect-video lg:aspect-auto overflow-hidden" style={{ background: "var(--background-3)", maxHeight: "400px" }}>
                  <img
                    src="/afp-portada.webp"
                    alt="AFP Modelo — Gobernanza UX"
                    className="w-full h-full object-contain"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                    Design Leadership · Gobernanza · Transformación organizacional
                  </p>
                  <h1 className="text-2xl lg:text-[2.5rem] text-foreground mb-5 leading-tight" style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}>
                    Construir UX desde cero en una organización que aún no sabía que lo necesitaba
                  </h1>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 w-fit" style={{ background: "var(--background-3)", color: "var(--primary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    UX Manager — Servicios financieros regulados · 2 años
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
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-4">
                  El cargo no existía antes de que yo llegara. El área de diseño era un servicio de maquetación: tres personas que ejecutaban instrucciones, sin criterio propio, sin autoridad sobre las decisiones y sin nadie responsable de la coherencia entre productos.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                  CX definía los textos. Los stakeholders pedían cambios por preferencia. Desarrollo editaba lo que no le convenía. Y el único control de calidad era verificar que el flujo existiera — no que funcionara bien para el usuario.
                </p>
              </div>

              {/* ── LO QUE CONSTRUÍ ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-sm font-semibold tracking-widest uppercase text-primary mb-4">Lo que construí</p>
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

                {/* Cambios de estado */}
                <div className="mt-8">
                  <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Cambios de estado</p>
                  <ul className="space-y-3">
                    {[
                      "De retrabajo reactivo a ciclos de revisión definidos",
                      "De decisiones por jerarquía a propuestas fundamentadas con evidencia",
                      "Inicio del análisis post-lanzamiento como práctica sistemática",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground/60">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── ANTES Y DESPUÉS (FLUJO) ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-2">Cómo cambió el proceso</p>
                <h2 className="text-xl text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>Cómo se toman las decisiones de diseño</h2>
                <p className="text-sm text-foreground/50 mb-8 max-w-lg">El cambio no fue solo visual — fue estructural. Redefinir quién decide, con qué criterio y en qué momento fue la base de todo lo que vino después.</p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Antes */}
                  <div className="rounded-2xl overflow-hidden">
                    <div className="px-5 py-3 flex items-center justify-between" style={{ background: "rgba(163,45,45,0.07)" }}>
                      <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#A32D2D" }}>Antes</span>
                      <span className="text-xs text-foreground/40">⏱ ~3 meses por proceso</span>
                    </div>
                    <div className="p-5 flex flex-col gap-0 bg-card">
                      {steps_before.map((step, i) => (
                        <FlowStep key={step.id} step={step} isLast={i === steps_before.length - 1} accentColor="#6B4F8C" />
                      ))}
                      <div className="mt-3 rounded-lg p-3 text-xs" style={{ background: "rgba(163,45,45,0.05)", border: "1px dashed rgba(163,45,45,0.2)" }}>
                        <span className="font-semibold uppercase tracking-wider block mb-1" style={{ color: "rgba(163,45,45,0.6)", fontSize: "9px" }}>Post lanzamiento</span>
                        <span className="text-foreground/40">Las mejoras quedaban sujetas a control de cambios — sin revisión proactiva de experiencia</span>
                      </div>
                    </div>
                  </div>

                  {/* Después */}
                  <div className="rounded-2xl overflow-hidden">
                    <div className="px-5 py-3 flex items-center justify-between" style={{ background: "rgba(107,79,140,0.07)" }}>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">Después</span>
                      <span className="text-xs text-foreground/40">⏱ ~15 días por proceso</span>
                    </div>
                    <div className="p-5 flex flex-col gap-0 bg-card">
                      {steps_after.map((step, i) => (
                        <FlowStep key={step.id} step={step} isLast={i === steps_after.length - 1} accentColor="#6B4F8C" />
                      ))}
                      <div className="mt-3 rounded-lg p-3 text-xs" style={{ background: "rgba(107,79,140,0.06)", border: "1px dashed rgba(107,79,140,0.3)" }}>
                        <span className="font-semibold uppercase tracking-wider block mb-1 text-primary" style={{ fontSize: "9px" }}>Mejora continua</span>
                        <span className="text-foreground/50">1 semana post-lanzamiento: revisión de interacción, hallazgos y mejoras en base a patrones de comportamiento</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── ECOSISTEMA ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-2">El ecosistema que gobierna</p>
                <h2 className="text-xl text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>Un sistema compartido para cinco plataformas</h2>
                <p className="text-sm text-foreground/50 mb-8 max-w-lg">Cada plataforma tiene sus propios usuarios y alcances técnicos. La gobernanza garantiza coherencia sin aplanar esas diferencias.</p>

                {/* Lineamientos compartidos */}
                <div className="rounded-2xl p-5 mb-4" style={{ background: "var(--background-3)" }}>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-primary mb-3">Lineamientos compartidos — Gobernanza UX Manager</p>
                  <div className="flex flex-wrap gap-2">
                    {sharedLayers.map((l) => (
                      <span key={l} className="text-xs px-3 py-1.5 rounded-full border text-primary border-primary/30" style={{ background: "rgba(107,79,140,0.08)" }}>
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Plataformas */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                  {platforms.filter((p) => !p.pending).map((p) => (
                    <div
                      key={p.id}
                      className="rounded-xl border border-solid p-4 flex flex-col items-center gap-2 text-center"
                      style={{ background: "var(--background-3)", borderColor: "var(--border)" }}
                    >
                      <span className="text-[9px] font-semibold uppercase tracking-wider rounded px-1.5 py-0.5" style={{ background: "rgba(107,79,140,0.1)", color: "var(--primary)" }}>
                        UI Kit propio
                      </span>
                      <span className="text-xs font-medium text-foreground/70 leading-tight">{p.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center">
                  {platforms.filter((p) => p.pending).map((p) => (
                    <div
                      key={p.id}
                      className="rounded-xl border p-4 flex flex-col items-center gap-2 text-center"
                      style={{ opacity: 0.5, borderStyle: "dashed", background: "var(--background-3)", borderColor: "var(--border)", width: "calc(25% - 4px)", minWidth: "120px" }}
                    >
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-foreground/40 border border-border rounded px-1.5 py-0.5">Pendiente</span>
                      <span className="text-[9px] font-semibold uppercase tracking-wider rounded px-1.5 py-0.5" style={{ background: "transparent", color: "var(--foreground-muted)" }}>
                        UI Kit propio
                      </span>
                      <span className="text-xs font-medium text-foreground/70 leading-tight">{p.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-foreground/35 mt-3 leading-relaxed">Cada plataforma construye su UI Kit a partir de los lineamientos compartidos, adaptado a su ambiente de desarrollo y alcances técnicos.</p>
              </div>

              {/* ── PROCESO ESTANDARIZADO ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-2">Cómo trabaja el equipo hoy</p>
                <h2 className="text-xl text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>Proceso de diseño estandarizado</h2>
                <p className="text-sm text-foreground/50 mb-8 max-w-lg">Cada etapa tiene un mínimo exigible antes de avanzar. Las iteraciones tienen un camino definido — no se resuelven ad hoc.</p>

                <div className="space-y-4">
                  {workSteps.map((step, i) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="rounded-xl border border-border p-6 bg-card hover:border-primary/20 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full border border-border text-[11px] font-semibold text-primary flex items-center justify-center shrink-0" style={{ background: "var(--background-3)" }}>{i + 1}</span>
                          <span className="text-sm font-semibold text-foreground">{step.phase}</span>
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/8 rounded px-2 py-0.5 shrink-0 whitespace-nowrap">{step.actor}</span>
                      </div>
                      <p className="text-sm text-foreground/60 leading-relaxed ml-9 mb-2">{step.description}</p>
                      <p className="text-[11px] text-foreground/35 ml-9">
                        <span className="uppercase tracking-wider font-semibold text-[9px]">Mínimo · </span>
                        {step.minimum}
                      </p>
                      {step.decision && (
                        <div className="flex gap-2 ml-9 mt-2 flex-wrap">
                          <span className="text-[10px] px-2 py-0.5 rounded" style={{ background: "rgba(80,160,120,0.1)", border: "1px solid rgba(80,160,120,0.3)", color: "#3B8060" }}>✓ {step.decision.yes}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded" style={{ background: "rgba(180,80,80,0.08)", border: "1px solid rgba(180,80,80,0.3)", color: "#A03030" }}>↩ {step.decision.no}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── CÓMO SE VE CUANDO FUNCIONA ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
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
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Lo que aprendí</p>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-3xl mb-4">
                  Entrar a una organización sin rol de diseño definido significa que nadie sabe exactamente qué esperar de ti — y que tienes que demostrarlo con cada decisión. Lo más difícil no fue construir el sistema: fue construir la convicción, dentro del equipo y hacia arriba, de que el diseño tiene criterio propio y que ese criterio mejora los productos.
                </p>
                <p className="text-lg text-foreground/50 leading-relaxed max-w-3xl italic border-l-2 border-primary pl-5" style={{ fontFamily: "var(--font-serif)" }}>
                  Lo más valioso que dejé instalado no es el UI Kit ni los tokens — es un equipo que hoy llega con argumentos a cada presentación.
                </p>
              </div>

              {/* ── CTA ── */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
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
