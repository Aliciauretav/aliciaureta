import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, ArrowLeft, ExternalLink, TrendingUp, Users, ShieldCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const tags = ["Business Case AI-Driven", "Estrategia de producto", "Investigación con usuarios sintéticos", "Experimentación A/B", "Modelo de negocio", "Ley 21.719"];

const metrics = [
  { icon: Users, value: "83% → 35%", label: "Comprensión correcta de \"quién trata mis datos y para qué\", grupo con acceso al portal vs. grupo control (+48 puntos porcentuales)" },
  { icon: TrendingUp, value: "+25 → +8", label: "NPS declarado, grupo con portal vs. grupo control (+17 puntos a favor del portal)" },
  { icon: ShieldCheck, value: "$29,4M CLP", label: "Costo estimado de la Etapa 0 (auditoría RAT + DPA) frente a un riesgo regulatorio de hasta 20.000 UTM en sanciones" },
];

const metodologia = [
  "Cuestionamos la hipótesis de partida en vez de darla por cierta — el primer entregable no fue una solución, fue poner a prueba si el problema era real y dónde.",
  "7 entrevistas con personas sintéticas (pacientes con distintos niveles de alfabetización digital y de exposición al sistema de salud) para levantar evidencia cualitativa donde no había acceso a pacientes reales.",
  "Affinity Mapping sobre esas 7 entrevistas, para pasar de citas sueltas a patrones — y de ahí a insights, sin saltarse el paso intermedio.",
  "Un pivote de modelo de negocio documentado como decisión, no como corrección de error: el caso partió modelado como una herramienta de un tercero vendiéndole compliance a la red, y la evidencia nos llevó a redefinirlo como producto interno que la propia red construye para sus pacientes.",
  "Experiment Canvas y un piloto A/B con un prototipo funcional (n=40 arquetipos sintéticos, 20 con acceso al portal y 20 en control), para pasar de \"creemos que\" a \"medimos que\" antes del pitch final.",
];

const decisiones = [
  {
    title: "Propuesta de valor de doble cara",
    desc: "Para el paciente: entender quién trata sus datos, sentir continuidad en vez de \"contar todo de nuevo\" en cada centro, y ganar confianza. Para el negocio: convertir una obligación legal reactiva en un sistema que mejora métricas de satisfacción y reduce el riesgo de responder solicitudes de derechos ARCO caso a caso.",
  },
  {
    title: "Modelo de negocio con presupuesto trazable",
    desc: "El piloto se financia con el presupuesto inicial de la Gerencia de Experiencia de Paciente, sin necesitar aprobación extraordinaria de directorio — con el costo de la Etapa 0 desglosado por rol (abogado/DPO, analista de gobierno de datos, arquitecto TI, líder de proyecto).",
  },
  {
    title: "\"Go condicionado\", no un lanzamiento total",
    desc: "La decisión no fue \"lanzar\" ni \"esperar\" — fue avanzar a un piloto real acotado en pacientes crónicos multicentro, condicionado a que la auditoría RAT + DPA esté cerrada (o con fecha concreta) y a que la interoperabilidad técnica de los 3 centros piloto esté confirmada antes de cualquier exposición al paciente.",
  },
  {
    title: "Roadmap en 3 fases con gates de decisión",
    desc: "Habilitar (Etapa 0: RAT + DPA, descubrimiento técnico) → Validar (piloto de 4-6 semanas, remidiendo comprensión y confianza) → Escalar (de 3 a 12 centros en una ventana de ~6 meses, al ritmo del RAT). Cada fase habilita la siguiente — no es un lanzamiento único.",
  },
];

export function RedVitalisPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">

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

              {/* Hero */}
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto overflow-hidden" style={{ background: "var(--background-3)" }}>
                  <img
                    src="/image/red-vitalis-cover.webp"
                    alt="Red Vitalis — Portal de Transparencia de Datos"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                    Taller integrado · Business Case AI-Driven · Salud y privacidad de datos
                  </p>
                  <h1
                    className="text-3xl lg:text-4xl text-foreground mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
                  >
                    Red Vitalis: de una hipótesis cruda a un caso de negocio con evidencia
                  </h1>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 w-fit" style={{ background: "var(--background-3)", color: "var(--primary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Trabajo de cierre del Diplomado en Estrategia de Producto en la Era de la IA (FEN, U. de Chile) · Equipo de 4 · 2026
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
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
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-4">
                  El taller de cierre del diplomado entregó una sola hipótesis compartida a los 7 equipos, deliberadamente cruda y sin validar: que toda la industria —banca, retail, salud, telco— está resolviendo la Ley 21.719 desde la auditabilidad, y nadie lo está resolviendo desde el lado de las personas. No había caso, empresa, ni industria asignada — cada equipo definía su propia metodología y decidía dónde anclar el problema.
                </p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                  Elegimos salud, por ser el rubro con la categoría de datos más sensible bajo la ley, e inventamos a Red Vitalis: una red con 12 centros y una ficha clínica unificada hace 5 años, que sabe qué datos tiene pero no puede documentar quién accedió a ellos ni con qué fin — el mismo vacío que ya le había fallado una vez, en un piloto de telemedicina anterior que no pudo sustentar la base legal de un acceso que el propio piloto exhibía.
                </p>
              </div>

              {/* Ver prototipo + mockup */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <Button variant="outline" className="group/proto mb-8" style={{ borderColor: "var(--border)" }} asChild>
                  <a href="https://presentacion-phi-two.vercel.app/#decision" target="_blank" rel="noopener noreferrer">
                    Ver prototipo interactivo
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/proto:translate-x-0.5 group-hover/proto:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
                <p className="text-xs text-foreground/40 -mt-6 mb-8">Apunta directo a la sección de decisión de la presentación del equipo.</p>
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">El producto — portal del paciente</p>
                <div className="rounded-xl overflow-hidden border border-border bg-muted max-w-xl">
                  <div className="aspect-[4/3] bg-card overflow-hidden">
                    <img
                      src="/image/red-vitalis-app-mockup.webp"
                      alt="Portal del paciente Red Vitalis — inicio y registro de actividad"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-foreground/50">Inicio y registro de actividad del portal, la parte del prototipo pensada para el paciente.</p>
                  </div>
                </div>
              </div>

              {/* Metodología y herramientas */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Metodología y herramientas que usamos</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-8">
                  El taller no prescribía entregables — sugería un camino que el equipo siguió y adaptó: Opportunity Brief para encuadrar el problema → Assumption Map / Hypothesis Board para priorizar qué supuestos poner a prueba primero → evidencia propia → Business Model Canvas → un prototipo mínimo para el pitch final. Sobre esa base, construimos:
                </p>
                <ul className="space-y-3 max-w-3xl">
                  {metodologia.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-foreground/60 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mi rol */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Mi rol en el equipo</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                  Trabajo grupal (con Karina Castillo, Camila Hidalgo y Francisco Laso), evaluado explícitamente por el camino recorrido y no solo por la solución. Mi tramo fue tomar la evidencia del piloto que construyó el equipo y convertirla en propuesta de valor, modelo de negocio, la decisión final de "Go condicionado" y el roadmap de escalamiento — el tramo que convierte un hallazgo de investigación en una recomendación que un directorio puede aprobar o rechazar.
                </p>
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
                        <p className="text-2xl text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>{m.value}</p>
                        <p className="text-sm text-foreground/55 leading-relaxed">{m.label}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Decisiones clave */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-2">Decisiones clave</p>
                <p className="text-sm text-foreground/50 mb-8 max-w-lg">Mi tramo del proyecto.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {decisiones.map((d, i) => (
                    <motion.div
                      key={d.title}
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

              {/* Lo que aprendí */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Lo que aprendí y puedo aplicar</p>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  "Este taller no me dio un problema para resolver — me dio una hipótesis cruda y la obligación de decidir yo, con mi equipo, dónde ponerla a prueba y con qué evidencia. Eso es lo que se traslada directo a mi trabajo: no esperar a que me den el caso armado, cuestionar el punto de partida antes de aceptarlo, y usar una herramienta de IA acotada (el GPT regulatorio) para no alucinar un marco normativo en vez de para reemplazar el criterio. Y en mi propio tramo, defender un 'Go condicionado' frente al equipo — ni lanzar ni esperar — es la misma disciplina que aplico hoy en AFP Modelo cuando la evidencia es real pero todavía incompleta."
                </p>
              </div>

              {/* Nota de transparencia */}
              <div className="px-8 lg:px-12 py-8 border-t border-border">
                <p className="text-xs text-foreground/40 leading-relaxed max-w-3xl">
                  <span className="font-semibold uppercase tracking-wider text-[10px] text-foreground/50">Nota de transparencia · </span>
                  Red Vitalis es un caso ficticio construido como trabajo de cierre del diplomado, con investigación basada en usuarios sintéticos (n=40, arquetipos). La ley y el marco regulatorio (Ley 21.719) son reales; la empresa y las cifras de negocio, ilustrativas.
                </p>
              </div>

              {/* CTA */}
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
