import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, Target, Users, TrendingUp, ArrowLeft, BookOpen, GitBranch, Shield, Lightbulb, Search, Pencil, BarChart3, Palette, Globe, FileDigit, SquareAsterisk, Rows4, SignpostBig, Waypoints, ChevronDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

export function GovernancePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    setExpandedProjects((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const project = {
    title: "Gobernanza de diseño en AFP Modelo",
    category: "Design System",
    role: "UX/UI Manager",
    description: "Implementación de un sistema de gobernanza robusto para mantener la consistencia, escalabilidad y calidad del diseño en toda la organización financiera.",
    image: "https://aliciaureta.com/image/modelo.png",
    tags: ["Design System","Tokens","UX Writing", "Governance", "Documentation", "Collaboration"],
    purpose: "Establecer un marco de gobernanza que asegure la coherencia del diseño en todos los productos digitales de AFP Modelo, facilitando la colaboración entre equipos y acelerando el tiempo de desarrollo.",
    metrics: [
      { label: "Mejora de consistencias", value: "75%", icon: TrendingUp },
      { label: "Proyectos liderados", value: "5+", icon: Users },
      { label: "Sitios en gobernanza", value: "6+", icon: Target },
    ],
    workDone: [
      "Auditoría de componentes y patrones existentes",
      "Definición de estructura y nomenclatura",
      "Creación de documentación de tono y estilo en la comunicación",
      "Establecimiento de procesos de revisión y actualización de documentación normativa",
      "Capacitación de equipos de diseño",
      "Monitoreo y mantenimiento continuo del sistema",
    ],
    designProcess: [
      {
        title: "Design System y token",
        icon: Palette,
        color: "bg-blue-100",
        items: [
          "Base de variables UI",
          "Reducir deuda visual",
          "Agilizar front-end"
        ]
      },
      {
        title: "Gobernanza de Diseño",
        icon: Lightbulb,
        color: "bg-purple-100",
        items: [
          "Definición de alcance en diseño",
          "Mejora en integración",
        ]
      },
      {
        title: "UX Writing",
        icon: Pencil,
        color: "bg-pink-100",
        items: [
          "Definición Tono y estilo de la web",
          "Control documentación normativa y vencimientos",
          "Revisiones cruzadas entre áreas de comunicación"
        ]
      },
   
    ],
    projectsList: [
      {
        title: "Sitio Web Público",
        description: "Rediseño Home sitio web público",
        icon: Globe,
        color: "bg-blue-50",
        details: "Lideré el rediseño completo de la página principal del sitio web público de AFP Modelo, asegurando coherencia visual y definiendo nuevos lineamientos de diseño para optimizar la experiencia de usuario y la arquitectura de información."
      },
      {
        title: "Proyecto 311",
        description: "Digitalización trámites para afiliados",
        icon: FileDigit,
        color: "bg-purple-50",
        details: "Lideré la digitalización de trámites para afiliados, asegurando el cumplimiento normativo y guiando la simplificación de formularios e información. Esta optimización mejoró significativamente la claridad y la satisfacción de los usuarios."
      },
      {
        title: "PIN Datos de contacto",
        description: "Tercer factor de validación en actualización de datos de contacto",
        icon: SquareAsterisk,
        color: "bg-pink-50",
        details: "Diseñé el flujo de autenticación con PIN para implementar el cumplimiento normativo en la actualización de datos de contacto de los afiliados, garantizando coherencia y continuidad entre los distintos canales de atención: web pública, sitio privado, app y canal telefónico."
      },
      {
        title: "Servicios en línea",
        description: "Centralización servicios para afiliados",
        icon: Rows4,
        color: "bg-cyan-50",
        details: "Lideré el rediseño de la sección de Servicios en Línea, unificando todas las herramientas disponibles para afiliados. El objetivo fue crear una experiencia coherente, intuitiva y clara, con accesos directos que orientan al usuario sobre qué puede hacer y qué esperar en cada servicio."
      },
      {
        title: "Simplicidad",
        description: "Aplicación de nuevo tono y voz a comprobantes desde la web",
        icon: SignpostBig,
        color: "bg-indigo-50",
        details: "Lideré la definición de un tono y voz más claros y cercanos en las comunicaciones hacia los usuarios. Creé guías de estilo de contenido, nuevos templates de correos y supervisé las comunicaciones del equipo de comunicaciones, logrando mensajes más coherentes y comprensibles para los afiliados."
      },
      {
        title: "Menú sitio público",
        description: "Rediseño de la Arquitectura de la información en sitio público",
        icon: Waypoints,
        color: "bg-violet-50",
        details: "Lideré el rediseño de la arquitectura de información y el sistema de navegación del sitio web público, implementando una estructura más intuitiva y orientada al usuario, que redujo significativamente el tiempo necesario para encontrar información clave."
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
                  Mis frentes de trabajo
                </h2>
                <div className="flex flex-wrap justify-center gap-8">
                  {project.designProcess.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <div key={index} className="flex flex-col items-center text-center w-64 min-h-[260px] p-4 border border-border rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 bg-background">
                        {/* Icon Circle */}
                        <div className={`w-24 h-24 rounded-full ${step.color} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                          <Icon className="w-10 h-10 text-foreground/70" strokeWidth={1.5} />
                        </div>
                        
                        {/* Title */}
                        <h3 className="mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
                          {step.title}
                        </h3>
                        
                        {/* Items List */}
                        <ul className="space-y-1 text-sm text-foreground/60 text-left">
                          {step.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Projects List Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <h2 className="text-xl mb-8 text-secondary" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Algunos Proyectos en los que he participado
                </h2>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {project.projectsList.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                          <div className="group flex flex-col gap-4 p-6 rounded-xl border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-md bg-card h-full">
                            {/* Icon */}
                            <div className={`w-16 h-16 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                              <Icon className="w-8 h-8 text-foreground/70" strokeWidth={1.5} />
                            </div>
                            
                            {/* Content */}
                            <div className="flex-1">
                              <h3 className="mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                                {item.title}
                              </h3>
                              <p className="text-sm text-foreground/60 mb-4">
                                {item.description}
                              </p>
                              <p className="text-sm text-foreground/70 leading-relaxed">
                                {item.details}
                              </p>
                            </div>
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel>
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