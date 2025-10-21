import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, Target, Users, TrendingUp, TrendingDown, Lightbulb, Search, BarChart3, Pencil, Trophy, ArrowLeft, X, Check } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import project2Image from "figma:asset/29eb7cb583fcf7479bf518933480a1e4878498e7.png";

export function WebDesignPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const project = {
    title: "Rediseño sitio web oficial DIRPLAN para migración tecnológica",
    category: "Web Design",
    role: "UX/UI Designer",
    description: "La Dirección de Planeamiento del Ministerio de Obras Públicas del Gobierno de Chile me solicitó actualizar el diseño de su sitio para migrar desde un sitio Sharepoint a Wordpress.",
    image: "https://aliciaureta.com/image/dirplan.png",
    tags: ["UI Design", "Design System"],
    purpose: "Modernizar la presencia digital de DIRPLAN a través de un rediseño integral enfocado en mejorar la accesibilidad, la usabilidad y la experiencia de usuario.",
    metrics: [
      { label: "Disminución pasos de acceso a la información", value: "65%", icon: TrendingDown },
      { label: "Meses de trabajo", value: "2", icon: Users },
      { label: "Satisfacción usuario", value: "88%", icon: Target },
    ],
    workDone: [
      "Auditoría del sitio actual y análisis heurístico",
      "Investigación de mejores prácticas gubernamentales",
      "Rediseño de arquitectura de información",
      "Aplicación Sistema de Diseño Gubernamental",
      "Diseño responsive para múltiples dispositivos",
    ],
    designProcess: [
      {
        title: "Discover",
        icon: Lightbulb,
        color: "bg-amber-100/80",
        items: ["User Research", "Competitive Analysis"]
      },
      {
        title: "Define",
        icon: Search,
        color: "bg-blue-100/80",
        items: ["User Personas", "Empathy Map"]
      },
      {
        title: "Ideate",
        icon: BarChart3,
        color: "bg-pink-100/80",
        items: ["User Flow", "Information Architecture"]
      },
      {
        title: "Design",
        icon: Pencil,
        color: "bg-green-100/80",
        items: ["Wireframes", "Hi-Fi Designs", "Prototype"]
      },
      {
        title: "Testing",
        icon: Trophy,
        color: "bg-purple-100/80",
        items: ["Feedbacks", "Conclusion"]
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Button 
              variant="ghost" 
              className="group/back mb-6 hover:bg-secondary/10" 
              asChild
            >
              <Link to="/">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
                Volver
              </Link>
            </Button>

            {/* Project Detail */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
              {/* Hero Section */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-sm text-secondary uppercase tracking-wider mb-3">
                    {project.category}
                  </p>
                  <h1 className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {project.title}
                  </h1>
                  
                  {/* Role */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-foreground/70 mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Purpose Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/20">
                <h2 className="text-xl mb-4 text-secondary" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Propósito del proyecto
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  {project.purpose}
                </p>
              </div>

              {/* Metrics Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <h2 className="text-xl mb-8 text-secondary" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Métricas de éxito
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl p-6 border border-secondary/20 hover:border-secondary/40 transition-colors"
                      >
                        <Icon className="w-8 h-8 text-secondary mb-4" />
                        <div className="text-4xl mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {metric.value}
                        </div>
                        <p className="text-foreground/70">{metric.label}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Work Done Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/20">
                <h2 className="text-xl mb-6 text-secondary" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Trabajo realizado
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {project.workDone.map((work, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{work}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Design Process Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <h2 className="text-xl mb-12 text-secondary" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Proceso de diseño
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                  {project.designProcess.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex flex-col items-center text-center">
                        {/* Icon Circle */}
                        <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                          <Icon className="w-10 h-10 text-foreground/70" strokeWidth={1.5} />
                        </div>
                        
                        {/* Title */}
                        <h3 className="mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {step.title}
                        </h3>
                        
                        {/* Items List */}
                        <ul className="space-y-1 text-sm text-foreground/60">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Before/After Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/20">
                <h2 className="text-xl mb-8 text-secondary" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Antes y Después
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Before - Image 1 */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100/80 text-red-700 rounded-full text-sm">
                      Antes
                    </div>
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center">
                      <ImageWithFallback
                        src="https://aliciaureta.com/image/dir_old.png"
                        alt="Diseño antiguo del sitio web DIRPLAN"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  {/* After - Image 1 */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 text-green-700 rounded-full text-sm">
                      Después
                    </div>
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center">
                      <ImageWithFallback
                        src="https://aliciaureta.com/image/dir_new.png"
                        alt="Diseño nuevo del sitio web DIRPLAN"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  {/* Before - Image 2 */}
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100/80 text-red-700 rounded-full text-sm">
                      Antes
                    </div>
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center">
                      <ImageWithFallback
                        src="https://aliciaureta.com/image/pp_antes.png"
                        alt="Diseño antiguo del sitio web DIRPLAN - vista adicional"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  {/* After - Image 2 */}
                  <div className="space-y-4">
                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 text-green-700 rounded-full text-sm">
                      Después
                    </div>
                    <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-border bg-muted flex items-center justify-center">
                      <ImageWithFallback
                        src="https://aliciaureta.com/image/pp_ahora.png"
                        alt="Diseño nuevo del sitio web DIRPLAN - vista adicional"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                {/* Comparison List */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Problems - Before */}
                  <div className="bg-red-50/50 border border-red-200 rounded-2xl p-6">
                    <h3 className="mb-4 text-red-800" style={{ fontFamily: 'Sora, sans-serif' }}>
                      Problemas identificados
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Navegación compleja y difícil de entender</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Diseño no responsive, mala experiencia móvil</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Inconsistencia visual y falta de identidad</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Problemas de accesibilidad</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Demasiados pasos para acceder a información</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Arquitectura de información confusa</span>
                      </li>
                    </ul>
                  </div>

                  {/* Improvements - After */}
                  <div className="bg-green-50/50 border border-green-200 rounded-2xl p-6">
                    <h3 className="mb-4 text-green-800" style={{ fontFamily: 'Sora, sans-serif' }}>
                      Mejoras implementadas
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Navegación simplificada y jerarquía visual clara</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Diseño responsive adaptado a todos los dispositivos</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Aplicación del Sistema de Diseño Gubernamental</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Mejora en accesibilidad y cumplimiento de estándares</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Reducción del 65% en pasos para encontrar información</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">Arquitectura de información optimizada</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-gradient-to-br from-secondary/5 to-accent/5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h2 className="text-xl mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                      ¿Te interesa saber más sobre este proyecto?
                    </h2>
                    <p className="text-foreground/70">
                      Contáctame y hablemos
                    </p>
                  </div>
                  <Button variant="outline" className="group/btn" asChild>
                    <a href="/#contacto">
                      Contactar
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
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