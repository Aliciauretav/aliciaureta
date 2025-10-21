import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, Target, Users, TrendingUp, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";
import project1Image from "figma:asset/3b04e164125b03ca67abc8f0b68a9b160583f595.png";
import wireframeImage from "figma:asset/93e8e0959d7c61a99b2d0e6ad696f0af5e54a5eb.png";
import mockupsImage from "figma:asset/e929a01870fc9e73dcd0f8e1872ad0ad47e8f9e8.png";
import researchImage from "figma:asset/be4cbb83efce088130d4866ebe1ae89b9c2ed76f.png";

export function WebAppDesignPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const project = {
    title: "Digitalizar la experiencia de atracción de talento en empresa de RRHH",
    category: "Web App Design",
    role: "Product Designer",
    description: "Se me propuso el desafío de digitalizar el proceso de reclutamiento y gestión operacional de los candidatos en Teamwork Chile.",
    image: "https://aliciaureta.com/image/teamwork.png",
    tags: ["UX Research", "Design System", "Prototyping","Information Architecture","Digital Transformation"],
    purpose: "Transformar el proceso manual de reclutamiento en una experiencia digital fluida que permita a los reclutadores gestionar candidatos de manera más eficiente y reducir errores operacionales.",
    metrics: [
      { label: "Mejora en tiempo de gestión de candidatos", value: "40%", icon: TrendingUp },
      { label: "Usuarios activos", value: "50+", icon: Users },
      { label: "Perfiles gestionados por día", value: "+5000", icon: Target },
    ],
    workDone: [
      "Investigación de usuarios y análisis de necesidades",
      "Mapeo de flujos de trabajo actuales y pain points",
      "Diseño de arquitectura de información",
      "Creación de sistema de diseño reutilizable",
      "Diseño de interfaz de alta fidelidad",
      "Prototipo interactivo y testing con usuarios",
      "Documentación y entrega a desarrollo",
    ],
    processImages: [
       {
        title: "Investigación UX",
        image: "https://aliciaureta.com/image/personas_sel.png",
      },
      {
        title: "Arquitectura de la información",
        image: "https://aliciaureta.com/image/flujo_gen.png",
      },
      {
        title: "Mockups finales",
        image: "https://aliciaureta.com/image/pantallas.png",
      },
      {
        title: "Digitalización informe referencias",
        image: "https://aliciaureta.com/image/referencias.png",
      },
      {
        title: "Digitalización cuadros comparativos",
        image: "https://aliciaureta.com/image/informe_ps.png",
      },
      {
        title: "Digitalización informe psicolaboral",
        image: "https://aliciaureta.com/image/informe_com.png",
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

              {/* Process Images Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <h2 className="text-xl mb-8 text-secondary" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Proceso de diseño
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.processImages.map((item, index) => (
                    <div key={index} className="group">
                      <div className="relative h-80 rounded-xl overflow-hidden mb-3 border border-border bg-muted/20">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-sm text-foreground/70">{item.title}</p>
                    </div>
                  ))}
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
                    <Link to="/contacto">
                      Contactar
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
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