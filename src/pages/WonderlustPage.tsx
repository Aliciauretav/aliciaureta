import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const tags = ["Prototipado con IA", "Leyes de UX", "Sesgos cognitivos", "Diseño de interacción", "Mobile"];

const stack = ["NotebookLM — investigación", "Claude — prompts de estilo", "Stitch — prototipado visual", "Antigravity — construcción", "Supabase — base de datos", "Vercel — despliegue"];

const principiosInteraccion = [
  { title: "Anticipación", desc: "Selector visual de estaciones para sugerir la mejor época para viajar." },
  { title: "Consistencia", desc: "Mismo estilo de chips y botones en todas las pantallas." },
  { title: "Carga cognitiva mínima", desc: "El formulario de nuevo destino solo pide nombre y país como obligatorios." },
  { title: "Feedback explícito", desc: "Confirmación \"Listo, quedó guardado\" tras cada acción." },
  { title: "Control y reversibilidad", desc: "Botón editar y modal de confirmación antes de eliminar un destino." },
];

const leyesUX = [
  { title: "Fitt's Law", desc: "Botón principal grande, en zona accesible al pulgar." },
  { title: "Hick's Law", desc: "Navbar reducido a 3 ítems — Mapa, Rutas, Perfil — máximo 4 opciones por decisión." },
  { title: "Jacob's Law", desc: "Patrones familiares de apps de mapas y de Instagram, para que nadie tenga que aprender un patrón nuevo." },
  { title: "Miller's Law", desc: "Actividades agrupadas en 3 categorías: Comer / Ver / Hacer." },
  { title: "Peak-End Rule", desc: "Guardar un destino con foto queda diseñado como el momento memorable de la interacción." },
];

const sesgos = [
  { title: "Sesgo de confianza", desc: "Look & feel cuidado desde el primer segundo, para transmitir seriedad en una app que maneja planes de viaje." },
  { title: "Miedo a la pérdida", desc: "La wishlist queda siempre visible como recordatorio de los destinos pendientes, no escondida en un menú." },
];

const decisiones = [
  {
    title: "Mapa como pantalla principal, no una lista",
    desc: "La app abre directo en un mapa con los destinos marcados por estado (Ya fui / Tengo plan / Quiero ir, cada uno con su color), en vez de abrir en una lista o un dashboard — la decisión prioriza la naturaleza aspiracional del producto sobre la eficiencia de una tabla.",
  },
  {
    title: "Un formulario con el mínimo posible de campos obligatorios",
    desc: "Solo nombre y país son obligatorios para guardar un nuevo destino — todo lo demás (fechas, notas, presupuesto) queda como opcional, para no perder al usuario en el momento de mayor entusiasmo (agregar un destino nuevo).",
  },
  {
    title: "Navegación de 3 ítems, no 5",
    desc: "Aplicar Hick's Law de forma literal — menos opciones visibles, decisión más rápida — en vez de intentar meter cada función en la barra de navegación.",
  },
];

function PrincipleGroup({ title, items }: { title: string; items: { title: string; desc: string }[] }) {
  return (
    <div>
      <p className="text-xs font-medium tracking-widest uppercase text-foreground/40 mb-4">{title}</p>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-border bg-card" style={{ padding: "1rem 1.25rem" }}>
            <p className="text-sm font-medium text-foreground mb-1">{item.title}</p>
            <p className="text-xs text-foreground/55 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WonderlustPage() {
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
                    src="/image/wonderlust-cover.webp"
                    alt="Wonderlust — itinerario y mis rutas"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                    Principios de interacción y leyes de UX · Prototipado con IA · Trabajo individual
                  </p>
                  <h1
                    className="text-3xl lg:text-4xl text-foreground mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
                  >
                    Wonderlust: una bitácora de viajes diseñada con principios, no con intuición
                  </h1>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 w-fit" style={{ background: "var(--background-3)", color: "var(--primary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Diplomado en Estrategia de Producto en la Era de la IA · Prototipo individual, de punta a punta · 2026
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
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                  Usuarios viajeros con un perfil deliberadamente amplio — desde jóvenes muy digitales hasta adultos mayores con baja alfabetización digital — reportaban la misma fricción: la información de un viaje queda dispersa en varias apps (mapas, notas, redes sociales, itinerarios), es difícil planificar recorridos con varias paradas y destinos, y cualquier imprevisto rompe el plan porque no hay flexibilidad para ajustarlo. Wonderlust centraliza los destinos en un solo espacio, con un mapa aspiracional como pantalla principal, un campo de "mejor época para viajar" por destino, y la posibilidad de generar rutas.
                </p>
              </div>

              {/* Ver prototipo */}
              <div className="px-8 lg:px-12 py-8 border-t border-border">
                <Button variant="outline" className="group/proto" style={{ borderColor: "var(--border)" }} asChild>
                  <a href="https://wonderlust2.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Ver prototipo interactivo
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/proto:translate-x-0.5 group-hover/proto:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>

              {/* Mi rol */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Mi rol</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                  Diseñé y prototipé Wonderlust completo, de punta a punta — investigación de usuario, decisiones de interacción y la interfaz funcional — sin repartir tramos con un equipo. Es el ejercicio del diplomado donde más control tuve sobre cada decisión, del primer wireframe al prototipo final.
                </p>
              </div>

              {/* Metodología y herramientas */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Metodología y herramientas</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl mb-6">
                  Un stack de IA distinto para cada etapa, no una sola herramienta para todo. Además de las herramientas, aplicación deliberada de tres capas de principios de diseño:
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {stack.map((s) => (
                    <span key={s} className="text-xs px-3 py-1.5 rounded-full border text-primary border-primary/30" style={{ background: "rgba(107,79,140,0.08)" }}>
                      {s}
                    </span>
                  ))}
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <PrincipleGroup title="Principios de interacción" items={principiosInteraccion} />
                  <PrincipleGroup title="Leyes de UX" items={leyesUX} />
                  <PrincipleGroup title="Sesgos cognitivos" items={sesgos} />
                </div>
              </div>

              {/* Decisiones clave */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Decisiones clave</p>
                <div className="flex flex-col gap-3 max-w-3xl">
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
                  "Wonderlust fue el ejercicio donde más pude comprobar que una ley de UX no es una regla decorativa — es una decisión que se nota cuando falta. Diseñar sola, sin repartir tramos, me obligó a sostener la coherencia de todas las decisiones —interacción, leyes, sesgos— en una sola cabeza, del wireframe al prototipo funcional. Es la prueba más directa que tengo de que puedo construir un producto completo con herramientas de IA, no solo dirigir a alguien que lo construya."
                </p>
              </div>

              {/* Nota de transparencia */}
              <div className="px-8 lg:px-12 py-8 border-t border-border">
                <p className="text-xs text-foreground/40 leading-relaxed max-w-3xl">
                  <span className="font-semibold uppercase tracking-wider text-[10px] text-foreground/50">Nota de transparencia · </span>
                  Wonderlust es un ejercicio individual del diplomado, con usuarios y datos ficticios construidos para el caso. Investigación, diseño de interacción y prototipo son de mi autoría individual, de punta a punta.
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
