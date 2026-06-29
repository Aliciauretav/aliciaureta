import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

// ─── DATOS ────────────────────────────────────────────────────────────────────

const metrics = [
  { value: "3 meses → 15 días", label: "En procesos estándar, gracias a componentización y flujos estandarizados" },
  { value: "30%",               label: "Reducción en tiempos de diseño bajo restricción de plazo no negociable" },
  { value: "5 plataformas",     label: "Bajo gobernanza unificada" },
];

const steps_before = [
  { id: 1, type: "origin",   actor: "Origen del proyecto",    action: "Stakeholder define qué diseñar · CX define cómo diseñar", isOrigin: true },
  { id: 2, type: "design",   actor: "UX/UI",                  action: "Ejecuta maqueta con librería existente" },
  { id: 3, type: "review",   actor: "CX",                     action: "Revisa diseño y define los textos" },
  { id: 4, type: "change",   actor: "Aprobación stakeholders", action: "Solicita cambios según criterio propio" },
  { id: 5, type: "design",   actor: "UX/UI",                  action: "Edita solicitudes sin argumentación" },
  { id: 6, type: "dev",      actor: "Desarrollo",             action: "Modifica lo que considera no factible sin coordinación" },
  { id: 7, type: "approval", actor: "Paso a producción",      action: "Analista aprueba que el flujo se complete — no la experiencia" },
];

const steps_after = [
  { id: 1, type: "origin",   actor: "Origen del proyecto",    action: "Necesidad normativa · Auditoría UX/contenido · Solicitud stakeholder", isOrigin: true },
  { id: 2, type: "design",   actor: "UX/UI",                  action: "Define qué y cómo diseñar: tipo de entregable, fundamentos de diseño y tono y voz" },
  { id: 3, type: "review",   actor: "UX Manager",             action: "Revisa cumplimiento de estándar de diseño y tono y voz" },
  { id: 4, type: "input",    actor: "Aprobación stakeholders", action: "Recibe propuesta fundamentada — decisiones de diseño son argumentadas" },
  { id: 5, type: "design",   actor: "UX/UI",                  action: "Itera sobre observaciones acordadas con UX Manager" },
  { id: 6, type: "dev",      actor: "Desarrollo",             action: "Implementa con entregables estandarizados — problemas de alcance se acuerdan con UX Manager" },
  { id: 7, type: "approval", actor: "Paso a producción",      action: "UX Manager + UX/UI revisan usabilidad y coherencia. Analista revisa cumplimiento de reglas de negocio" },
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
  { id: 1, phase: "Investigación",              actor: "UX/UI",                        description: "Desk research, análisis de logs y benchmark a partir de los antecedentes de la necesidad", minimum: "Síntesis de hallazgos documentada", decision: null },
  { id: 2, phase: "Propuesta de diseño",        actor: "UX/UI",                        description: "Propuesta con componentes del UI Kit. Si se requiere algo nuevo, se construye el componente", minimum: "Prototipo de alta fidelidad + componentes documentados", decision: null },
  { id: 3, phase: "Preaprobación interna",      actor: "UX Manager",                   description: "Revisión de la propuesta. Si aprueba, avanza. Si no, vuelve a propuesta", minimum: "Visto bueno antes de escalar", decision: { yes: "Aprueba → escala", no: "Itera → vuelve a propuesta" } },
  { id: 4, phase: "Aprobación interna",         actor: "Aprobación interna",            description: "Revisión según alcance e importancia del proyecto", minimum: "Aprobación antes de presentar a stakeholder", decision: { yes: "Aprueba → stakeholder", no: "Itera con UX Manager" } },
  { id: 5, phase: "Presentación a stakeholder", actor: "UX Manager / UX/UI",            description: "PPT con hallazgos de investigación y prototipo de alta fidelidad con la solución propuesta", minimum: "Presentación con hallazgos + prototipo", decision: { yes: "Aprueba → implementación", no: "Itera → preaprobación interna" } },
  { id: 6, phase: "Implementación",             actor: "Desarrollo / UX Manager",       description: "Generación de front o handoff según ambiente. Problemas técnicos se negocian con UX Manager para mantener funcionalidad", minimum: "Handoff completo o front generado", decision: null },
  { id: 7, phase: "Revisión final",             actor: "UX Manager + UX/UI + Analista", description: "UX revisa que funcione y se vea como el prototipo. En paralelo, analista revisa cumplimiento de reglas de negocio", minimum: "Aprobación de experiencia + reglas de negocio", decision: null },
  { id: 8, phase: "Análisis post-lanzamiento",  actor: "UX Manager + UX/UI",            description: "Revisión de interacción 1 semana post-producción. Mapas de calor y patrones de comportamiento para identificar hallazgos y mejoras.", minimum: "Informe de hallazgos con propuesta de mejoras priorizadas", decision: null },
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

function FlowStep({ step, isLast }: { step: StepData; isLast: boolean }) {
  const isOrigin = step.isOrigin;
  return (
    <div className="flex flex-col">
      <div
        className="rounded-xl p-5 flex flex-col gap-2"
        style={{
          border: isOrigin ? "1px dashed rgba(107,79,140,0.35)" : "none",
          background: isOrigin ? "rgba(107,79,140,0.05)" : "var(--background-3)",
          minHeight: "84px",
        }}
      >
        <span className="font-bold uppercase tracking-wider text-[10px]" style={{ color: "#6B4F8C" }}>
          {step.actor}
        </span>
        <span className="leading-relaxed text-foreground/60 text-[12px]">{step.action}</span>
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

            {/* Wrapper sin borde — solo fondo y radio */}
            <div className="rounded-3xl overflow-hidden" style={{ background: "var(--card)" }}>

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
                <div className="p-8 lg:p-14 flex flex-col justify-center">
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-5">
                    Design Leadership · Gobernanza · Transformación organizacional
                  </p>
                  <h1
                    className="text-3xl lg:text-[2.6rem] text-foreground mb-6 leading-tight"
                    style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em", lineHeight: "1.18" }}
                  >
                    Construir UX desde cero en una organización que aún no sabía que lo necesitaba
                  </h1>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-7 w-fit"
                    style={{ background: "var(--background-3)", color: "var(--primary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    UX Manager — Servicios financieros regulados · 2 años
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-muted border border-border/40 text-foreground/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── PUNTO DE PARTIDA ── */}
              <div className="px-8 lg:px-14 py-14" style={{ background: "var(--background-3)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-5">El punto de partida</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mb-4">
                  El cargo no existía antes de que yo llegara. El área de diseño era un servicio de maquetación: tres personas que ejecutaban instrucciones, sin criterio propio, sin autoridad sobre las decisiones y sin nadie responsable de la coherencia entre productos.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
                  CX definía los textos. Los stakeholders pedían cambios por preferencia. Desarrollo editaba lo que no le convenía. Y el único control de calidad era verificar que el flujo existiera — no que funcionara bien para el usuario.
                </p>
              </div>

              {/* ── LO QUE CONSTRUÍ ── */}
              <div className="px-8 lg:px-14 py-14" style={{ background: "var(--card)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-5">Lo que construí</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mb-4">
                  Mi trabajo fue instalar la infraestructura que le dio al diseño un lugar real en la organización. No en un proyecto aislado — de manera transversal, en paralelo a la operación diaria.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl mb-4">
                  Diseñé el flujo de trabajo del equipo desde cero: levantamiento, análisis, propuesta, revisión, presentación y handoff — con mínimos exigibles en cada etapa. Estandaricé los entregables, establecí el tono y voz, construí los design tokens que hoy comparten las cinco plataformas del ecosistema digital, y definí cómo se argumentan las decisiones de diseño frente a stakeholders y desarrollo.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
                  El resultado más concreto: las propuestas dejaron de nacer de instrucciones y empezaron a nacer de análisis. Lo que antes tardaba cerca de tres meses en un proceso sencillo, hoy toma aproximadamente quince días.
                </p>
              </div>

              {/* ── MÉTRICAS ── */}
              <div className="px-8 lg:px-14 py-14" style={{ background: "var(--background-3)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-10">Resultados medibles</p>
                <div className="grid md:grid-cols-3 gap-5">
                  {metrics.map((m, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="rounded-2xl p-7 hover:border-primary/20 transition-colors"
                      style={{ background: "var(--card)", border: "1px solid rgba(var(--border-rgb,150,150,150),0.2)" }}
                    >
                      <p
                        className="text-foreground mb-3 leading-none"
                        style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                      >
                        {m.value}
                      </p>
                      <p className="text-sm text-foreground/55 leading-relaxed">{m.label}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10">
                  <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-5">Cambios de estado</p>
                  <ul className="space-y-4">
                    {[
                      "De retrabajo reactivo a ciclos de revisión definidos",
                      "De decisiones por jerarquía a propuestas fundamentadas con evidencia",
                      "Inicio del análisis post-lanzamiento como práctica sistemática",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-foreground/65">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── ANTES Y DESPUÉS ── */}
              <div className="px-8 lg:px-14 py-14" style={{ background: "var(--card)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Cómo cambió el proceso</p>
                <h2 className="text-2xl text-foreground mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  Cómo se toman las decisiones de diseño
                </h2>
                <p className="text-sm text-foreground/50 mb-10 max-w-lg">
                  El cambio no fue solo visual — fue estructural. Redefinir quién decide, con qué criterio y en qué momento fue la base de todo lo que vino después.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Antes */}
                  <div className="rounded-2xl overflow-hidden">
                    <div className="px-6 py-4 flex items-center justify-between"
                      style={{ background: "rgba(163,45,45,0.06)" }}>
                      <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#A32D2D" }}>Antes</span>
                      <span className="text-xs text-foreground/40">⏱ ~3 meses por proceso</span>
                    </div>
                    <div className="p-5 flex flex-col gap-0" style={{ background: "var(--card)" }}>
                      {steps_before.map((step, i) => (
                        <FlowStep key={step.id} step={step} isLast={i === steps_before.length - 1} />
                      ))}
                      <div className="mt-3 rounded-xl p-4 text-xs"
                        style={{ background: "rgba(163,45,45,0.04)", border: "1px dashed rgba(163,45,45,0.18)" }}>
                        <span className="font-bold uppercase tracking-wider block mb-1" style={{ color: "rgba(163,45,45,0.55)", fontSize: "9px" }}>Post lanzamiento</span>
                        <span className="text-foreground/40 leading-relaxed">Las mejoras quedaban sujetas a control de cambios — sin revisión proactiva de experiencia</span>
                      </div>
                    </div>
                  </div>

                  {/* Después */}
                  <div className="rounded-2xl overflow-hidden">
                    <div className="px-6 py-4 flex items-center justify-between"
                      style={{ background: "rgba(107,79,140,0.06)" }}>
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">Después</span>
                      <span className="text-xs text-foreground/40">⏱ ~15 días por proceso</span>
                    </div>
                    <div className="p-5 flex flex-col gap-0" style={{ background: "var(--card)" }}>
                      {steps_after.map((step, i) => (
                        <FlowStep key={step.id} step={step} isLast={i === steps_after.length - 1} />
                      ))}
                      <div className="mt-3 rounded-xl p-4 text-xs"
                        style={{ background: "rgba(107,79,140,0.05)", border: "1px dashed rgba(107,79,140,0.2)" }}>
                        <span className="font-bold uppercase tracking-wider block mb-1 text-primary" style={{ fontSize: "9px" }}>Mejora continua</span>
                        <span className="text-foreground/50 leading-relaxed">1 semana post-lanzamiento: revisión de interacción, hallazgos y mejoras en base a patrones de comportamiento</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── ECOSISTEMA ── */}
              <div className="px-8 lg:px-14 py-14" style={{ background: "var(--background-3)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">El ecosistema que gobierna</p>
                <h2 className="text-2xl text-foreground mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  Un sistema compartido para cinco plataformas
                </h2>
                <p className="text-sm text-foreground/50 mb-10 max-w-lg">
                  Cada plataforma tiene sus propios usuarios y alcances técnicos. La gobernanza garantiza coherencia sin aplanar esas diferencias.
                </p>

                {/* Lineamientos compartidos */}
                <div className="rounded-2xl p-6 mb-5" style={{ background: "var(--card)" }}>
                  <p className="text-[9px] font-bold uppercase tracking-widest text-primary mb-4">
                    Lineamientos compartidos — Gobernanza UX Manager
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sharedLayers.map((l) => (
                      <span
                        key={l}
                        className="text-xs px-4 py-2 rounded-full font-medium text-primary"
                        style={{ background: "rgba(107,79,140,0.08)", border: "1px solid rgba(107,79,140,0.2)" }}
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Plataformas — 2 columnas, última centrada */}
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map((p) => (
                    <div
                      key={p.id}
                      className={`rounded-xl p-5 flex flex-col items-center gap-2.5 text-center${p.id === 5 ? " col-span-2 max-w-[50%] mx-auto w-full" : ""}`}
                      style={{
                        opacity: p.pending ? 0.6 : 1,
                        background: "var(--card)",
                        border: p.pending
                          ? "1px dashed rgba(var(--border-rgb,150,150,150),0.3)"
                          : "1px solid rgba(var(--border-rgb,150,150,150),0.2)",
                      }}
                    >
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider rounded-md px-2.5 py-1"
                        style={{
                          background: p.pending ? "transparent" : "rgba(107,79,140,0.1)",
                          color: p.pending ? "var(--foreground-muted)" : "var(--primary)",
                        }}
                      >
                        {p.pending ? "Pendiente" : "UI Kit propio"}
                      </span>
                      <span className="text-sm font-medium text-foreground/75 leading-tight">{p.name}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-foreground/35 mt-4 leading-relaxed">
                  Cada plataforma construye su UI Kit a partir de los lineamientos compartidos, adaptado a su ambiente de desarrollo y alcances técnicos.
                </p>
              </div>

              {/* ── PROCESO ESTANDARIZADO ── */}
              <div className="px-8 lg:px-14 py-14" style={{ background: "var(--card)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">Cómo trabaja el equipo hoy</p>
                <h2 className="text-2xl text-foreground mb-3" style={{ fontFamily: "var(--font-serif)" }}>
                  Proceso de diseño estandarizado
                </h2>
                <p className="text-sm text-foreground/50 mb-10 max-w-lg">
                  Cada etapa tiene un mínimo exigible antes de avanzar. Las iteraciones tienen un camino definido — no se resuelven ad hoc.
                </p>

                <div className="space-y-4">
                  {workSteps.map((step, i) => (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="rounded-xl p-6 transition-colors"
                      style={{
                        background: "var(--background-3)",
                        border: "1px solid rgba(var(--border-rgb,150,150,150),0.18)",
                      }}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          <span
                            className="w-7 h-7 rounded-full text-[11px] font-bold text-primary flex items-center justify-center shrink-0"
                            style={{ background: "var(--card)", border: "1px solid rgba(var(--border-rgb,150,150,150),0.25)" }}
                          >
                            {i + 1}
                          </span>
                          <span className="text-sm font-semibold text-foreground">{step.phase}</span>
                        </div>
                        <span
                          className="text-[10px] font-bold uppercase tracking-wider rounded-md px-2.5 py-1 shrink-0 whitespace-nowrap"
                          style={{ background: "rgba(107,79,140,0.08)", color: "var(--primary)" }}
                        >
                          {step.actor}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/60 leading-relaxed ml-10 mb-2.5">{step.description}</p>
                      <p className="text-[11px] text-foreground/35 ml-10">
                        <span className="uppercase tracking-wider font-bold text-[9px]">Mínimo · </span>
                        {step.minimum}
                      </p>
                      {step.decision && (
                        <div className="flex gap-2 ml-10 mt-3 flex-wrap">
                          <span className="text-[10px] px-2.5 py-1 rounded-md font-medium"
                            style={{ background: "rgba(80,160,120,0.08)", border: "1px solid rgba(80,160,120,0.25)", color: "#3B8060" }}>
                            ✓ {step.decision.yes}
                          </span>
                          <span className="text-[10px] px-2.5 py-1 rounded-md font-medium"
                            style={{ background: "rgba(180,80,80,0.06)", border: "1px solid rgba(180,80,80,0.25)", color: "#A03030" }}>
                            ↩ {step.decision.no}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* ── CÓMO SE VE CUANDO FUNCIONA ── */}
              <div className="px-8 lg:px-14 py-14" style={{ background: "var(--background-3)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-5">Cómo se ve cuando funciona</p>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">Los proyectos son la evidencia de que el sistema escala:</p>
                <div className="space-y-7">
                  {projects.map((p) => (
                    <div key={p.title} className="border-l-2 border-primary/30 pl-6">
                      <p className="text-sm font-semibold text-foreground mb-2">{p.title}</p>
                      <p className="text-sm text-foreground/60 leading-relaxed">{p.body}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-foreground/40 mt-8 italic">
                  El mismo marco se ha aplicado en distintos proyectos como confirmación de datos de contacto, trámites y servicios en línea, entre otros.
                </p>
              </div>

              {/* ── LO QUE APRENDÍ ── */}
              <div className="px-8 lg:px-14 py-14" style={{ background: "var(--card)" }}>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-5">Lo que aprendí</p>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-2xl mb-6">
                  Entrar a una organización sin rol de diseño definido significa que nadie sabe exactamente qué esperar de ti — y que tienes que demostrarlo con cada decisión. Lo más difícil no fue construir el sistema: fue construir la convicción, dentro del equipo y hacia arriba, de que el diseño tiene criterio propio y que ese criterio mejora los productos.
                </p>
                <p
                  className="text-lg text-foreground/50 leading-relaxed max-w-2xl italic border-l-2 border-primary/40 pl-6"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Lo más valioso que dejé instalado no es el UI Kit ni los tokens — es un equipo que hoy llega con argumentos a cada presentación.
                </p>
              </div>

              {/* ── CTA ── */}
              <div className="px-8 lg:px-14 py-14" style={{ background: "var(--background-3)" }}>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <p className="text-lg font-medium text-foreground mb-1" style={{ fontFamily: "var(--font-serif)" }}>
                      ¿Te interesa saber más sobre este proyecto?
                    </p>
                    <p className="text-sm text-foreground/45">Contáctame y hablemos</p>
                  </div>
                  <Button variant="outline" className="group/btn" style={{ borderColor: "rgba(var(--border-rgb,150,150,150),0.3)" }} asChild>
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
