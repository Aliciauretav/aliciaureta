import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowLeft } from "lucide-react";

// ─── DATOS ────────────────────────────────────────────────────────────────────

const steps_before = [
  { id: 1, type: "origin", actor: "Origen del proyecto", action: "Stakeholder define qué diseñar · CX define cómo diseñar", isOrigin: true, isSingle: false },
  { id: 2, type: "design", actor: "UX/UI", action: "Ejecuta maqueta con librería existente" },
  { id: 3, type: "review", actor: "CX", action: "Revisa diseño y define los textos" },
  { id: 4, type: "change", actor: "Aprobación stakeholders", action: "Solicita cambios según criterio propio" },
  { id: 5, type: "design", actor: "UX/UI", action: "Edita solicitudes sin argumentación" },
  { id: 6, type: "dev", actor: "Desarrollo", action: "Modifica lo que considera no factible sin coordinación" },
  { id: 7, type: "approval", actor: "Paso a producción", action: "Analista aprueba que el flujo se complete — no la experiencia" },
];

const steps_after = [
  { id: 1, type: "origin", actor: "Origen del proyecto", action: "Necesidad normativa · Auditoría UX/contenido · Solicitud stakeholder", isOrigin: true, isSingle: false },
  { id: 2, type: "design", actor: "UX/UI", action: "Define qué y cómo diseñar: tipo de entregable, fundamentos de diseño y tono y voz" },
  { id: 3, type: "review", actor: "UX Manager", action: "Revisa cumplimiento de estándar de diseño y tono y voz" },
  { id: 4, type: "input", actor: "Aprobación stakeholders", action: "Recibe propuesta fundamentada — decisiones de diseño son argumentadas" },
  { id: 5, type: "design", actor: "UX/UI", action: "Itera sobre observaciones acordadas con UX Manager" },
  { id: 6, type: "dev", actor: "Desarrollo", action: "Implementa con entregables estandarizados — problemas de alcance se acuerdan con UX Manager" },
  { id: 7, type: "approval", actor: "Paso a producción", action: "UX Manager + UX/UI revisan usabilidad y coherencia. Analista revisa cumplimiento de reglas de negocio" },
];

const typeColors: Record<string, { bg: string; border: string; dot: string }> = {
  origin:   { bg: "rgba(107,79,140,0.08)",  border: "rgba(107,79,140,0.35)", dot: "#9B7EC8" },
  input:    { bg: "rgba(107,79,140,0.15)",  border: "#6B4F8C",               dot: "#6B4F8C" },
  design:   { bg: "rgba(229,220,196,0.08)", border: "rgba(229,220,196,0.4)", dot: "#E5DCC4" },
  review:   { bg: "rgba(107,79,140,0.1)",   border: "rgba(107,79,140,0.5)",  dot: "#9B7EC8" },
  change:   { bg: "rgba(180,80,80,0.1)",    border: "rgba(180,80,80,0.5)",   dot: "#B45050" },
  dev:      { bg: "rgba(229,220,196,0.05)", border: "rgba(229,220,196,0.2)", dot: "rgba(229,220,196,0.5)" },
  approval: { bg: "rgba(80,160,120,0.1)",   border: "rgba(80,160,120,0.4)", dot: "#50A078" },
};

const tagColors = [
  { bg: "rgba(107,79,140,0.2)",  border: "rgba(107,79,140,0.5)",  text: "#9B7EC8" },
  { bg: "rgba(80,160,140,0.15)", border: "rgba(80,160,140,0.4)",  text: "#50A09A" },
  { bg: "rgba(180,80,80,0.12)",  border: "rgba(180,80,80,0.4)",   text: "#C06060" },
];

const platforms = [
  { id: 1, name: "Sitio público",        pending: false },
  { id: 2, name: "Portal privado",       pending: false },
  { id: 3, name: "Portal beneficiarios", pending: false },
  { id: 4, name: "App móvil",            pending: false },
  { id: 5, name: "Portal empleadores",   pending: true  },
];

const sharedLayers = [
  { label: "Design Tokens",                  color: "#6B4F8C", bg: "rgba(107,79,140,0.18)", border: "rgba(107,79,140,0.45)" },
  { label: "Tono y voz",                     color: "#9B7EC8", bg: "rgba(107,79,140,0.12)", border: "rgba(107,79,140,0.35)" },
  { label: "Estándares de interacción",      color: "#7B6FA0", bg: "rgba(107,79,140,0.09)", border: "rgba(107,79,140,0.28)" },
  { label: "Flujo de trabajo estandarizado", color: "#A08EC0", bg: "rgba(107,79,140,0.07)", border: "rgba(107,79,140,0.22)" },
];

const workSteps = [
  { id: 1, phase: "Investigación",              actor: "UX/UI",                         description: "Desk research, análisis de logs y benchmark a partir de los antecedentes de la necesidad", minimum: "Síntesis de hallazgos documentada", type: "research",    decision: null },
  { id: 2, phase: "Propuesta de diseño",        actor: "UX/UI",                         description: "Propuesta con componentes del UI Kit. Si se requiere algo nuevo, se construye el componente", minimum: "Prototipo de alta fidelidad + componentes documentados", type: "design",     decision: null },
  { id: 3, phase: "Preaprobación interna",      actor: "UX Manager",                    description: "Revisión de la propuesta. Si aprueba, avanza. Si no, vuelve a propuesta", minimum: "Visto bueno antes de escalar", type: "review",     decision: { yes: "Aprueba → escala", no: "Itera → vuelve a propuesta" } },
  { id: 4, phase: "Aprobación interna",         actor: "Aprobación interna",             description: "Revisión según alcance e importancia del proyecto", minimum: "Aprobación antes de presentar a stakeholder", type: "internal",   decision: { yes: "Aprueba → stakeholder", no: "Itera con UX Manager" } },
  { id: 5, phase: "Presentación a stakeholder", actor: "UX Manager / UX/UI",             description: "PPT con hallazgos de investigación y prototipo de alta fidelidad con la solución propuesta", minimum: "Presentación con hallazgos + prototipo", type: "stakeholder", decision: { yes: "Aprueba → implementación", no: "Itera → preaprobación interna" } },
  { id: 6, phase: "Implementación",             actor: "Desarrollo / UX Manager",        description: "Generación de front o handoff según ambiente. Problemas técnicos se negocian con UX Manager para mantener funcionalidad", minimum: "Handoff completo o front generado", type: "dev",        decision: null },
  { id: 7, phase: "Revisión final",             actor: "UX Manager + UX/UI + Analista",  description: "UX revisa que funcione y se vea como el prototipo. En paralelo, analista revisa cumplimiento de reglas de negocio", minimum: "Aprobación de experiencia + reglas de negocio", type: "approval",   decision: null },
  { id: 8, phase: "Análisis post-lanzamiento",  actor: "UX Manager + UX/UI",             description: "En proyectos de alto alcance: revisión de interacción 1 semana post-producción. Mapas de calor y patrones de comportamiento para identificar hallazgos y mejoras sencillas.", minimum: "Informe de hallazgos con propuesta de mejoras priorizadas", type: "continuity", decision: null },
];

const workTypeStyles: Record<string, { bg: string; border: string; dot: string; actor: string }> = {
  research:    { bg: "rgba(80,160,140,0.08)",  border: "rgba(80,160,140,0.3)",  dot: "#50A09A", actor: "rgba(80,160,140,0.8)" },
  design:      { bg: "rgba(229,220,196,0.07)", border: "rgba(229,220,196,0.3)", dot: "#E5DCC4", actor: "#E5DCC4" },
  review:      { bg: "rgba(107,79,140,0.1)",   border: "rgba(107,79,140,0.4)",  dot: "#9B7EC8", actor: "#9B7EC8" },
  internal:    { bg: "rgba(107,79,140,0.07)",  border: "rgba(107,79,140,0.25)", dot: "#7B6FA0", actor: "#7B6FA0" },
  stakeholder: { bg: "rgba(180,140,80,0.08)",  border: "rgba(180,140,80,0.3)",  dot: "#B4986A", actor: "#B4986A" },
  dev:         { bg: "rgba(229,220,196,0.04)", border: "rgba(229,220,196,0.15)", dot: "rgba(229,220,196,0.45)", actor: "rgba(229,220,196,0.5)" },
  approval:    { bg: "rgba(80,160,120,0.08)",  border: "rgba(80,160,120,0.3)",  dot: "#50A078", actor: "#50A078" },
  continuity:  { bg: "rgba(180,140,80,0.08)",  border: "rgba(180,140,80,0.3)",  dot: "#B4986A", actor: "#B4986A" },
};

const skills = [
  { es: "Liderazgo UX",            en: "UX Leadership, UX Management" },
  { es: "Gobernanza de diseño",    en: "Design Governance" },
  { es: "Diseño de procesos",      en: "Process Design" },
  { es: "Gestión de stakeholders", en: "Stakeholder Management" },
  { es: "Sistemas de diseño",      en: "Design Systems" },
  { es: "Design Tokens",           en: "Design Tokens" },
  { es: "UX Writing",              en: "UX Writing" },
  { es: "Desarrollo de equipo",    en: "Team Enablement" },
];

// ─── COMPONENTES ARTEFACTO 1 ─────────────────────────────────────────────────

interface StepData {
  id: number;
  type: string;
  actor: string;
  action: string;
  isOrigin?: boolean;
  isSingle?: boolean;
}

function OriginStep({ step }: { step: StepData }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", background: typeColors.origin.bg, border: `1px dashed ${typeColors.origin.border}`, borderRadius: "8px", padding: "12px 10px", display: "flex", flexDirection: "column", gap: "8px", minHeight: "90px", justifyContent: "space-between" }}>
        <span style={{ fontSize: "10px", fontWeight: "600", color: typeColors.origin.dot, textTransform: "uppercase", letterSpacing: "0.06em" }}>Origen del proyecto</span>
        {step.isSingle ? (
          <span style={{ fontSize: "12px", color: "rgba(229,220,196,0.85)", lineHeight: 1.4 }}>{step.action}</span>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
            {step.action.split(" · ").map((tag, i) => (
              <div key={i} style={{ display: "inline-flex", alignSelf: "flex-start", background: tagColors[i]?.bg, border: `1px solid ${tagColors[i]?.border}`, borderRadius: "4px", padding: "3px 8px" }}>
                <span style={{ fontSize: "11px", color: tagColors[i]?.text, lineHeight: 1.4 }}>{tag}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div style={{ width: "1px", height: "16px", background: "rgba(229,220,196,0.2)" }} />
    </div>
  );
}

function FlowStep({ step, index, total }: { step: StepData; index: number; total: number }) {
  if (step.isOrigin) return <OriginStep step={step} />;
  const colors = typeColors[step.type];
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "100%", background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: "8px", padding: "12px 10px", position: "relative", minHeight: "90px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "6px" }}>
        <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: colors.dot, position: "absolute", top: "10px", right: "10px" }} />
        <span style={{ fontSize: "10px", fontWeight: "600", color: colors.dot, textTransform: "uppercase", letterSpacing: "0.06em", lineHeight: 1.3, paddingRight: "16px" }}>{step.actor}</span>
        <span style={{ fontSize: "12px", color: "rgba(229,220,196,0.85)", lineHeight: 1.4 }}>{step.action}</span>
      </div>
      {index < total - 1 && <div style={{ width: "1px", height: "16px", background: "rgba(229,220,196,0.2)" }} />}
    </div>
  );
}

interface FlowColumnProps {
  title: string;
  subtitle: string;
  time?: string;
  steps: StepData[];
  accentColor: string;
  labelBg: string;
  showContinuity?: boolean;
  showBefore?: boolean;
}

function FlowColumn({ title, subtitle, time, steps, accentColor, labelBg, showContinuity, showBefore }: FlowColumnProps) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      <div style={{ marginBottom: "20px", paddingBottom: "16px", borderBottom: `1px solid ${accentColor}` }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", gap: "8px" }}>
          <div style={{ display: "inline-block", background: labelBg, border: `1px solid ${accentColor}`, borderRadius: "4px", padding: "3px 10px" }}>
            <span style={{ fontSize: "10px", fontWeight: "700", color: accentColor, textTransform: "uppercase", letterSpacing: "0.1em" }}>{title}</span>
          </div>
          {time && <span style={{ fontSize: "13px", color: accentColor, fontWeight: "600", whiteSpace: "nowrap" }}>⏱ {time}</span>}
        </div>
        <p style={{ fontSize: "12px", color: "rgba(229,220,196,0.5)", margin: 0, lineHeight: 1.5 }}>{subtitle}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {steps.map((step, i) => <FlowStep key={step.id} step={step} index={i} total={steps.length} />)}
      </div>
      {showContinuity && (
        <div style={{ marginTop: "12px", background: "rgba(107,79,140,0.07)", border: "1px dashed rgba(107,79,140,0.3)", borderRadius: "8px", padding: "12px 10px" }}>
          <span style={{ fontSize: "10px", fontWeight: "600", color: "#9B7EC8", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "5px" }}>Mejora continua</span>
          <span style={{ fontSize: "12px", color: "rgba(229,220,196,0.7)", lineHeight: 1.5 }}>1 semana post-lanzamiento: revisión de interacción, hallazgos y mejoras sencillas en base a patrones de comportamiento</span>
        </div>
      )}
      {showBefore && (
        <div style={{ marginTop: "12px", background: "rgba(180,80,80,0.05)", border: "1px dashed rgba(180,80,80,0.2)", borderRadius: "8px", padding: "12px 10px" }}>
          <span style={{ fontSize: "10px", fontWeight: "600", color: "rgba(180,80,80,0.6)", textTransform: "uppercase", letterSpacing: "0.06em", display: "block", marginBottom: "5px" }}>Post lanzamiento</span>
          <span style={{ fontSize: "12px", color: "rgba(229,220,196,0.45)", lineHeight: 1.5 }}>Las mejoras quedaban sujetas a control de cambios por incidencias — sin revisión proactiva de experiencia</span>
        </div>
      )}
    </div>
  );
}

// ─── COMPONENTES ARTEFACTO 3 ─────────────────────────────────────────────────

interface Decision {
  yes: string;
  no: string;
}

function DecisionBadge({ decision }: { decision: Decision | null }) {
  if (!decision) return null;
  return (
    <div style={{ display: "flex", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "rgba(80,160,120,0.1)", border: "1px solid rgba(80,160,120,0.3)", borderRadius: "4px", padding: "2px 8px" }}>
        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#50A078", flexShrink: 0 }} />
        <span style={{ fontSize: "10px", color: "#50A078", lineHeight: 1.4 }}>{decision.yes}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "4px", background: "rgba(180,80,80,0.08)", border: "1px solid rgba(180,80,80,0.3)", borderRadius: "4px", padding: "2px 8px" }}>
        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#B45050", flexShrink: 0 }} />
        <span style={{ fontSize: "10px", color: "#B45050", lineHeight: 1.4 }}>{decision.no}</span>
      </div>
    </div>
  );
}

interface WorkStep {
  id: number;
  phase: string;
  actor: string;
  description: string;
  minimum: string;
  type: string;
  decision: Decision | null;
}

function WorkStepCard({ step, index }: { step: WorkStep; index: number }) {
  const s = workTypeStyles[step.type];
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: "32px" }}>
        <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: s.bg, border: `1px solid ${s.border}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ fontSize: "11px", fontWeight: "600", color: s.dot }}>{index + 1}</span>
        </div>
        {index < workSteps.length - 1 && <div style={{ width: "1px", flex: 1, minHeight: "24px", background: "rgba(229,220,196,0.1)", marginTop: "4px" }} />}
      </div>
      <div style={{ flex: 1, background: s.bg, border: `1px solid ${s.border}`, borderRadius: "10px", padding: "16px", marginBottom: "12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px", gap: "8px" }}>
          <span style={{ fontSize: "13px", fontWeight: "600", color: "#E5DCC4", lineHeight: 1.3 }}>{step.phase}</span>
          <span style={{ fontSize: "10px", fontWeight: "600", color: s.actor, textTransform: "uppercase", letterSpacing: "0.06em", background: "rgba(0,0,0,0.2)", borderRadius: "3px", padding: "2px 7px", flexShrink: 0, whiteSpace: "nowrap" }}>{step.actor}</span>
        </div>
        <p style={{ fontSize: "12px", color: "rgba(229,220,196,0.7)", margin: "0 0 10px", lineHeight: 1.6 }}>{step.description}</p>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
          <div style={{ width: "3px", minHeight: "14px", background: s.dot, borderRadius: "2px", flexShrink: 0, marginTop: "2px", opacity: 0.6 }} />
          <span style={{ fontSize: "10px", color: "rgba(229,220,196,0.4)", lineHeight: 1.5 }}>
            <span style={{ color: "rgba(229,220,196,0.3)", textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "9px", fontWeight: "600" }}>Mínimo · </span>
            {step.minimum}
          </span>
        </div>
        <DecisionBadge decision={step.decision} />
      </div>
    </div>
  );
}

// ─── ESTILOS ──────────────────────────────────────────────────────────────────

const S = {
  page:          { background: "#1A1612", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#E5DCC4" },
  container:     { maxWidth: "900px", margin: "0 auto", padding: "64px 32px" },
  eyebrow:       { fontSize: "11px", fontWeight: "600", color: "#6B4F8C", textTransform: "uppercase" as const, letterSpacing: "0.14em", display: "block", marginBottom: "16px" },
  h1:            { fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px, 5vw, 48px)", color: "#E5DCC4", margin: "0 0 20px", lineHeight: 1.15, fontWeight: 400 },
  h2:            { fontFamily: "'DM Serif Display', serif", fontSize: "clamp(22px, 3vw, 32px)", color: "#E5DCC4", margin: "0 0 8px", lineHeight: 1.2, fontWeight: 400 },
  label:         { fontSize: "11px", fontWeight: "600", color: "#6B4F8C", textTransform: "uppercase" as const, letterSpacing: "0.12em", display: "block", marginBottom: "8px" },
  body:          { fontSize: "15px", color: "rgba(229,220,196,0.75)", lineHeight: 1.8, margin: "0 0 16px" },
  divider:       { border: "none", borderTop: "1px solid rgba(229,220,196,0.08)", margin: "64px 0" },
  artefactLabel: { fontSize: "11px", fontWeight: "600", color: "#6B4F8C", textTransform: "uppercase" as const, letterSpacing: "0.12em", display: "block", marginBottom: "10px" },
  artefactTitle: { fontFamily: "'DM Serif Display', serif", fontSize: "clamp(18px, 2.5vw, 24px)", color: "#E5DCC4", margin: "0 0 8px", lineHeight: 1.2, fontWeight: 400 },
  artefactDesc:  { fontSize: "13px", color: "rgba(229,220,196,0.5)", margin: "0 0 32px", lineHeight: 1.6, maxWidth: "520px" },
};

// ─── PÁGINA ───────────────────────────────────────────────────────────────────

export function GovernancePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={S.page}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <Navigation />

      <div style={S.container}>

        {/* ── VOLVER ── */}
        <button
          onClick={() => window.history.back()}
          style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "var(--foreground-muted)", background: "none", border: "none", cursor: "pointer", marginBottom: "2rem", padding: "0" }}
          onMouseEnter={e => { e.currentTarget.style.color = "var(--primary)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "var(--foreground-muted)"; }}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver</span>
        </button>

        {/* ── HEADER ── */}
        <span style={S.eyebrow}>Design Leadership · Gobernanza · Transformación organizacional</span>
        <h1 style={S.h1}>Construir UX desde cero en una organización que aún no sabía que lo necesitaba</h1>

        <div style={{ display: "flex", gap: "8px", marginBottom: "40px", flexWrap: "wrap" }}>
          {["UX Manager", "Servicios financieros regulados", "2 años"].map(t => (
            <span key={t} style={{ fontSize: "12px", color: "rgba(229,220,196,0.5)", background: "rgba(229,220,196,0.06)", border: "1px solid rgba(229,220,196,0.12)", borderRadius: "4px", padding: "4px 12px" }}>{t}</span>
          ))}
        </div>

        {/* Skills */}
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "64px" }}>
          {skills.map(s => (
            <span key={s.es} data-keywords={s.en} aria-label={s.es} style={{ fontSize: "12px", color: "rgba(229,220,196,0.6)", background: "rgba(229,220,196,0.04)", border: "1px solid rgba(229,220,196,0.15)", borderRadius: "20px", padding: "5px 14px" }}>{s.es}</span>
          ))}
        </div>

        <hr style={S.divider} />

        {/* ── EL PUNTO DE PARTIDA ── */}
        <span style={S.label}>El punto de partida</span>
        <p style={S.body}>El cargo no existía antes de que yo llegara. El área de diseño era un servicio de maquetación: tres personas que ejecutaban instrucciones, sin criterio propio, sin autoridad sobre las decisiones y sin nadie responsable de la coherencia entre productos.</p>
        <p style={S.body}>CX definía los textos. Los stakeholders pedían cambios por preferencia. Desarrollo editaba lo que no le convenía. Y el único control de calidad era verificar que el flujo existiera — no que funcionara bien para el usuario.</p>

        <hr style={S.divider} />

        {/* ── LO QUE CONSTRUÍ ── */}
        <span style={S.label}>Lo que construí</span>
        <p style={S.body}>Mi trabajo fue instalar la infraestructura que le dio al diseño un lugar real en la organización. No en un proyecto aislado — de manera transversal, en paralelo a la operación diaria.</p>
        <p style={S.body}>Diseñé el flujo de trabajo del equipo desde cero: levantamiento, análisis, propuesta, revisión, presentación y handoff — con mínimos exigibles en cada etapa. Estandaricé los entregables, establecí el tono y voz, construí los design tokens que hoy comparten las cinco plataformas del ecosistema digital, y definí cómo se argumentan las decisiones de diseño frente a stakeholders y desarrollo.</p>
        <p style={S.body}>El resultado más concreto: las propuestas dejaron de nacer de instrucciones y empezaron a nacer de análisis. Lo que antes tardaba cerca de tres meses en un proceso sencillo, hoy toma aproximadamente quince días.</p>

        {/* Métricas */}
        <div style={{ marginTop: "40px", marginBottom: "32px" }}>
          <span style={{ fontSize: "10px", fontWeight: "700", color: "rgba(229,220,196,0.3)", textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "16px" }}>Resultados medibles</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1px", background: "rgba(229,220,196,0.08)", border: "1px solid rgba(229,220,196,0.08)", borderRadius: "12px", overflow: "hidden" }}>
            {[
              { value: "3 meses → 15 días", label: "En procesos estándar — gracias a componentización y flujos estandarizados" },
              { value: "30%",               label: "De reducción en tiempos de diseño bajo restricción de plazo no negociable" },
              { value: "3 homes → 1",       label: "Con contenido perfilado — ~80% de la interacción se concentraba en 2 secciones" },
              { value: "5 plataformas",     label: "Bajo gobernanza unificada" },
            ].map(m => (
              <div key={m.label} style={{ background: "#1A1612", padding: "24px" }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: "28px", color: "#6B4F8C", marginBottom: "8px", fontWeight: 400, lineHeight: 1.1 }}>{m.value}</div>
                <div style={{ fontSize: "12px", color: "rgba(229,220,196,0.45)", lineHeight: 1.5 }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cambios de estado */}
        <div style={{ marginBottom: "64px" }}>
          <span style={{ fontSize: "10px", fontWeight: "700", color: "rgba(229,220,196,0.3)", textTransform: "uppercase", letterSpacing: "0.12em", display: "block", marginBottom: "16px" }}>Cambios de estado</span>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {[
              "De retrabajo reactivo a ciclos de revisión definidos",
              "De decisiones por jerarquía a propuestas fundamentadas con evidencia",
              "Inicio del análisis post-lanzamiento como práctica sistemática — a partir de hallazgos presentados y enseñados al equipo",
            ].map(item => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#6B4F8C", flexShrink: 0, marginTop: "8px" }} />
                <span style={{ fontSize: "13px", color: "rgba(229,220,196,0.6)", lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── ARTEFACTO 1 ── */}
        <span style={S.artefactLabel}>Cómo cambió el proceso</span>
        <h2 style={S.artefactTitle}>Cómo se toman las decisiones de diseño</h2>
        <p style={S.artefactDesc}>El cambio no fue solo visual — fue estructural. Redefinir quién decide, con qué criterio y en qué momento fue la base de todo lo que vino después.</p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 40px 1fr", alignItems: "start", marginBottom: "64px" }}>
          <FlowColumn title="Antes" subtitle="Decisiones por jerarquía, sin criterio de diseño" time="~3 meses por proceso" steps={steps_before} accentColor="rgba(180,80,80,0.7)" labelBg="rgba(180,80,80,0.1)" showBefore={true} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "64px" }}>
            <div style={{ width: "1px", flex: 1, background: "rgba(229,220,196,0.1)" }} />
            <span style={{ fontSize: "14px", color: "rgba(229,220,196,0.2)", padding: "8px 0" }}>→</span>
            <div style={{ width: "1px", flex: 1, background: "rgba(229,220,196,0.1)" }} />
          </div>
          <FlowColumn title="Después" subtitle="Origen múltiple, propuestas fundamentadas con criterio" time="~15 días por proceso" steps={steps_after} accentColor="#6B4F8C" labelBg="rgba(107,79,140,0.15)" showContinuity={true} />
        </div>

        {/* ── ARTEFACTO 2 ── */}
        <span style={S.artefactLabel}>El ecosistema que gobierna</span>
        <h2 style={S.artefactTitle}>Un sistema compartido para cinco plataformas</h2>
        <p style={S.artefactDesc}>Cada plataforma tiene sus propios usuarios y alcances técnicos. La gobernanza garantiza coherencia sin aplanar esas diferencias.</p>

        <div style={{ border: "1px dashed rgba(107,79,140,0.4)", borderRadius: "16px", padding: "28px 28px 0", position: "relative", marginBottom: "16px" }}>
          <div style={{ position: "absolute", top: "-13px", left: "28px", background: "#1A1612", padding: "0 10px" }}>
            <span style={{ fontSize: "10px", fontWeight: "700", color: "#6B4F8C", textTransform: "uppercase", letterSpacing: "0.12em" }}>Gobernanza UX Manager</span>
          </div>
          <div style={{ border: "1px solid rgba(107,79,140,0.2)", borderRadius: "10px", padding: "16px", marginBottom: "24px", background: "rgba(107,79,140,0.04)", position: "relative" }}>
            <div style={{ position: "absolute", top: "-10px", left: "14px", background: "#1A1612", padding: "0 8px" }}>
              <span style={{ fontSize: "9px", fontWeight: "700", color: "rgba(107,79,140,0.7)", textTransform: "uppercase", letterSpacing: "0.1em" }}>Lineamientos compartidos</span>
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {sharedLayers.map(l => (
                <div key={l.label} style={{ background: l.bg, border: `1px solid ${l.border}`, borderRadius: "6px", padding: "5px 12px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "500", color: l.color }}>{l.label}</span>
                </div>
              ))}
            </div>
          </div>
          <svg width="100%" height="28" style={{ display: "block" }} preserveAspectRatio="none">
            {[9, 27, 50, 73, 91].map((pct, i) => (
              <line key={i} x1={`${pct}%`} y1="0" x2={`${pct}%`} y2="28" stroke={i === 4 ? "rgba(229,220,196,0.1)" : "rgba(107,79,140,0.25)"} strokeWidth="1" strokeDasharray="3 3" />
            ))}
          </svg>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px" }}>
            {platforms.map(p => (
              <div key={p.id} style={{ background: p.pending ? "rgba(229,220,196,0.02)" : "rgba(229,220,196,0.06)", border: p.pending ? "1px dashed rgba(229,220,196,0.1)" : "1px solid rgba(229,220,196,0.18)", borderRadius: "10px 10px 0 0", padding: "16px 10px", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", textAlign: "center", opacity: p.pending ? 0.5 : 1, position: "relative" }}>
                {p.pending && (
                  <div style={{ position: "absolute", top: "8px", right: "8px", background: "rgba(229,220,196,0.08)", border: "1px solid rgba(229,220,196,0.15)", borderRadius: "3px", padding: "1px 5px" }}>
                    <span style={{ fontSize: "9px", color: "rgba(229,220,196,0.4)", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.06em" }}>Pendiente</span>
                  </div>
                )}
                <div style={{ background: p.pending ? "rgba(229,220,196,0.04)" : "rgba(107,79,140,0.1)", border: p.pending ? "1px dashed rgba(229,220,196,0.1)" : "1px solid rgba(107,79,140,0.25)", borderRadius: "4px", padding: "3px 7px" }}>
                  <span style={{ fontSize: "9px", fontWeight: "600", color: p.pending ? "rgba(229,220,196,0.2)" : "rgba(107,79,140,0.8)", textTransform: "uppercase", letterSpacing: "0.06em" }}>UI Kit propio</span>
                </div>
                <span style={{ fontSize: "11px", fontWeight: "500", color: p.pending ? "rgba(229,220,196,0.35)" : "rgba(229,220,196,0.85)", lineHeight: 1.3 }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: "11px", color: "rgba(229,220,196,0.35)", margin: "12px 0 64px", lineHeight: 1.6 }}>Cada plataforma construye su UI Kit a partir de los lineamientos compartidos, adaptado a su ambiente de desarrollo y alcances técnicos.</p>

        {/* ── ARTEFACTO 3 ── */}
        <span style={S.artefactLabel}>Cómo trabaja el equipo hoy</span>
        <h2 style={S.artefactTitle}>Proceso de diseño estandarizado</h2>
        <p style={S.artefactDesc}>Cada etapa tiene un mínimo exigible antes de avanzar. Las iteraciones tienen un camino definido — no se resuelven ad hoc.</p>
        <div style={{ marginBottom: "64px" }}>
          {workSteps.map((step, i) => <WorkStepCard key={step.id} step={step} index={i} />)}
        </div>

        <hr style={S.divider} />

        {/* ── CÓMO SE VE CUANDO FUNCIONA ── */}
        <span style={S.label}>Cómo se ve cuando funciona</span>
        <p style={S.body}>Los proyectos son la evidencia de que el sistema escala:</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "40px" }}>
          {[
            { title: "Rediseño sitio público", body: "El análisis de uso mostró que cerca del 80% de la interacción se concentraba en solo dos secciones — el sitio funcionaba como paso intermedio hacia el portal privado, no como destino. Al mismo tiempo, el feedback de usuarios señalaba que no encontraban información que ya existía en el sitio. A esto se sumaba una inconsistencia significativa entre la versión desktop y mobile. Con esos hallazgos, propuse consolidar los tres homes en uno con contenido perfilado por tipo de usuario y lideré el proceso de rediseño — desde la arquitectura de información hasta el diseño responsivo. Post-lanzamiento, los mapas de calor confirmaron alta interacción con las secciones priorizadas — validando que el criterio era correcto. Fue también el inicio del análisis post-lanzamiento como práctica sistemática en el equipo." },
            { title: "Proyecto 311 — Digitalización de trámites", body: "Un proyecto de alta complejidad y largo alcance. Al revisar los avances existentes detecté inconsistencias críticas que requirieron rediseñar el proceso de diseño desde cero. Desde ese punto, todos los flujos de diseño pasaron por mí. Bajo una restricción de tiempo no negociable, diseñé un proceso adaptado que permitió entregar los flujos pendientes con un 30% de reducción en tiempos — sin perder criterio de diseño ni la coherencia con el sistema que estábamos construyendo." },
            { title: "Simplicidad — Tono y voz", body: "A través de la gestión y coordinación con distintas áreas, lideré la construcción del manual de tono y voz base con el que hoy trabajan los equipos para comunicarse con los usuarios." },
          ].map(p => (
            <div key={p.title} style={{ borderLeft: "2px solid rgba(107,79,140,0.4)", paddingLeft: "20px" }}>
              <p style={{ fontSize: "13px", fontWeight: "600", color: "#E5DCC4", margin: "0 0 8px" }}>{p.title}</p>
              <p style={{ fontSize: "14px", color: "rgba(229,220,196,0.65)", margin: 0, lineHeight: 1.8 }}>{p.body}</p>
            </div>
          ))}
        </div>

        <p style={{ ...S.body, color: "rgba(229,220,196,0.55)", fontStyle: "italic" }}>El mismo marco se ha aplicado en distintos proyectos como confirmación de datos de contacto, trámites y servicios en línea, entre otros.</p>

        <hr style={S.divider} />

        {/* ── LO QUE APRENDÍ ── */}
        <span style={S.label}>Lo que aprendí</span>
        <p style={S.body}>Entrar a una organización sin rol de diseño definido significa que nadie sabe exactamente qué esperar de ti — y que tienes que demostrarlo con cada decisión. Lo más difícil no fue construir el sistema: fue construir la convicción, dentro del equipo y hacia arriba, de que el diseño tiene criterio propio y que ese criterio mejora los productos.</p>
        <p style={{ ...S.body, color: "rgba(229,220,196,0.5)", borderLeft: "2px solid #6B4F8C", paddingLeft: "20px", fontStyle: "italic" }}>Lo más valioso que dejé instalado no es el UI Kit ni los tokens — es un equipo que hoy llega con argumentos a cada presentación.</p>

        <hr style={S.divider} />

        {/* ── CTA ── */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <p style={{ fontSize: "15px", fontWeight: "600", color: "#E5DCC4", margin: "0 0 4px" }}>¿Te interesa saber más sobre este proyecto?</p>
            <p style={{ fontSize: "13px", color: "rgba(229,220,196,0.45)", margin: 0 }}>Contáctame y hablemos</p>
          </div>
          <a href="mailto:alicia@aliciaureta.com" style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "transparent", border: "1px solid rgba(229,220,196,0.25)", borderRadius: "6px", padding: "10px 20px", color: "#E5DCC4", fontSize: "13px", fontWeight: "500", textDecoration: "none", cursor: "pointer" }}>
            Contactar <span style={{ fontSize: "11px" }}>↗</span>
          </a>
        </div>

      </div>

      <Footer />
    </div>
  );
}
