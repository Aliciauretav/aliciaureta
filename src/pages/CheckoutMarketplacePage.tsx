import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, ArrowLeft, ExternalLink, TrendingUp, Clock, Gauge } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const tags = ["A/B Testing", "Prototipado", "Experimentación", "IA aplicada al diseño", "Growth"];

const metrics = [
  { icon: TrendingUp, value: "+8 puntos", label: "Incremento absoluto en Checkout Conversion Rate (variante B vs. A)" },
  { icon: Clock, value: "3 semanas", label: "Test A/B con tráfico real, split 50/50, sobre usuarios que agregaron al menos un producto" },
  { icon: Gauge, value: "AOV estable", label: "Ticket promedio monitoreado como métrica de guardia — la mejora no vino a costa del valor del pedido" },
];

const decisiones = [
  {
    title: "Un mismo sistema visual para ambas variantes, no dos prototipos distintos",
    desc: "Propuse que la Versión A reutilizara mi mismo sistema visual, quitando solo el dato clave (el costo visible), en vez de construir un entregable separado desde cero — así el experimento medía la hipótesis y no una diferencia de implementación entre dos prototipos.",
  },
  {
    title: "Mostrar el costo total desde el carrito",
    desc: "La variante B calcula el costo de despacho en tiempo real (por geolocalización o dirección guardada) y lo muestra junto al subtotal, en vez de revelarlo recién en el paso de pago — esta fue la hipótesis de diseño que propuse.",
  },
  {
    title: "Herramientas de IA en cada etapa del proceso, no solo al final",
    desc: "Claude/ChatGPT para estructurar el Opportunity Brief y redactar el copy del experimento; Stitch para bocetar mi propuesta visual de la Versión B; Antigravity, del lado de mi equipo, para construir el front-end funcional de ambas variantes integrando esos diseños con los componentes del marketplace.",
  },
];

const mockups = [
  { label: "Modo A — control", desc: "El despacho queda como \"Por calcular\" hasta un paso posterior del flujo.", src: "/image/checkout-cart-modo-a.webp" },
  { label: "Modo B — tratamiento", desc: "\"Despacho estimado\" visible junto al subtotal, desde el carrito.", src: "/image/checkout-cart-modo-b.webp" },
];

export function CheckoutMarketplacePage() {
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
                    src="/image/checkout-cover.webp"
                    alt="Checkout Marketplace — vista de productos y resumen de compra"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">
                    Experimentación, IA y validación de producto · Experimentación A/B · E-commerce
                  </p>
                  <h1
                    className="text-3xl lg:text-4xl text-foreground mb-5 leading-tight"
                    style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}
                  >
                    Checkout Marketplace: del prototipo a un rollout del 100% con datos
                  </h1>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-6 w-fit" style={{ background: "var(--background-3)", color: "var(--primary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Diplomado en Estrategia de Producto en la Era de la IA · Trabajo en equipo · 2026
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
                  El Checkout Conversion Rate de un marketplace de e-commerce cayó de 48% a 36% en pocos meses. La hipótesis de trabajo: los usuarios no abandonan por el precio del envío, sino por descubrirlo recién en el último paso del flujo — una sorpresa de costo, no un problema de costo.
                </p>
              </div>

              {/* Ver prototipo + mockups */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <Button variant="outline" className="group/proto mb-8" style={{ borderColor: "var(--border)" }} asChild>
                  <a href="https://prototipo-ecommerce-iota.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Ver prototipo interactivo
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/proto:translate-x-0.5 group-hover/proto:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-6">Modo A / Modo B — carrito</p>
                <div className="grid sm:grid-cols-2 gap-6">
                  {mockups.map((img) => (
                    <div key={img.label} className="rounded-xl overflow-hidden border border-border bg-muted">
                      <div className="aspect-[4/5] bg-card overflow-hidden">
                        <img
                          src={img.src}
                          alt={img.label}
                          className="w-full h-full object-cover object-top"
                          loading="lazy"
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
                <p className="text-xs text-foreground/35 mt-4">El selector "Modo A / Modo B" está en la esquina superior del prototipo, para alternar entre control y tratamiento.</p>
              </div>

              {/* Mi rol */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Mi rol en el equipo</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                  Propuse la hipótesis de trabajo y el diseño visual de la Versión B (tratamiento) — mostrar el costo total desde el carrito — y me concentré en la lectura de métricas del experimento (Checkout Conversion Rate, Cart Abandonment Rate, AOV como métrica de guardia). La Versión A (control) se construyó tomando el mismo sistema visual de mi propuesta, pero sin ese dato clave, para que ambas variantes compartieran diseño y el experimento midiera solo la hipótesis en cuestión. La construcción del prototipo funcional con selector de modo (Modo A / Modo B) estuvo a cargo de un compañero de equipo.
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
                        <p className="text-2xl text-foreground mb-2" style={{ fontFamily: "var(--font-serif)" }}>{m.value}</p>
                        <p className="text-sm text-foreground/55 leading-relaxed">{m.label}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Decisiones clave */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-8">Decisiones clave</p>
                <div className="flex flex-col gap-3 max-w-3xl">
                  {decisiones.map((d, i) => (
                    <motion.div
                      key={d.title}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="rounded-xl border border-border bg-card hover:border-primary/20 transition-colors"
                      style={{ padding: "1.5rem" }}
                    >
                      <p className="text-sm font-medium text-foreground mb-2">{d.title}</p>
                      <p className="text-xs text-foreground/55 leading-relaxed">{d.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Resultado y decisión */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Resultado y decisión</p>
                <p className="text-lg text-foreground/70 leading-relaxed max-w-3xl">
                  Con la hipótesis confirmada, la decisión fue rollout 100% escalonado (25% → 50% → 100%), monitoreando la latencia de las APIs logísticas durante el despliegue. Próxima hipótesis en cola: los tiempos de despacho poco claros, la segunda fricción detectada.
                </p>
              </div>

              {/* Lo que aprendí */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/40">
                <p className="text-xs font-medium tracking-widest uppercase text-primary mb-4">Lo que aprendí</p>
                <p className="text-lg text-foreground/60 leading-relaxed max-w-3xl" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  "Concentrarme en que la hipótesis fuera comprobable —no solo 'probemos algo', sino qué métrica específica se movería y por qué— fue lo que hizo que el experimento midiera lo que queríamos medir. Y aprendí a separar mi rol: proponer la dirección de diseño y la lectura de datos, y confiar en mi equipo para la implementación técnica del prototipo — no todo lo bueno de un proyecto tiene que salir de mis manos para que sea mi aporte."
                </p>
              </div>

              {/* Nota de transparencia */}
              <div className="px-8 lg:px-12 py-8 border-t border-border">
                <p className="text-xs text-foreground/40 leading-relaxed max-w-3xl">
                  <span className="font-semibold uppercase tracking-wider text-[10px] text-foreground/50">Nota de transparencia · </span>
                  Proyecto grupal del módulo Experimentación, IA y Validación de Producto, con datos de tráfico y conversión ficticios construidos para el ejercicio. La hipótesis, el diseño visual de la Versión B y la lectura de métricas del experimento son mi aporte directo; la construcción del prototipo funcional (ambas variantes) fue trabajo de mi equipo.
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
