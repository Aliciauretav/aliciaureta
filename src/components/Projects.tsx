import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";
import project1Image from "figma:asset/3b04e164125b03ca67abc8f0b68a9b160583f595.png";
import project2Image from "figma:asset/29eb7cb583fcf7479bf518933480a1e4878498e7.png";
import project3Image from "figma:asset/5d2cd3119eef87d1a9281e35d5b95b0f1baa0dbe.png";

export function Projects() {
  const projects = [
    {
      title: "Gobernanza de diseño en AFP Modelo",
      category: "Ux Management",
      description: "Implementación de un sistema de gobernanza para mantener la consistencia y escalabilidad del diseño en una organización previsional.",
      image: "https://aliciaureta.com/image/modelo.png",
      tags: ["Design System", "Governance", "Documentation", "Collaboration"],
      color: "primary",
      href: "/proyectos/governance",
    },
    {
      title: "Digitalizar la experiencia de atracción de talento en empresa de RRHH",
      category: "Web App Design",
      description: "Con este proyecto, no sólo se agilizó el proceso de reclutamiento, sino que también se disminuyeron los errores asociados al proceso.",
      image: "https://aliciaureta.com/image/teamwork.png",
      tags: ["UX Research", "UI Design", "Prototyping", "Information Architecture"],
      color: "secondary",
      href: "/proyectos/web-app-design",
    },
    {
      title: "Rediseño sitio web oficial DIRPLAN para migración tecnológica",
      category: "Web Design",
      description: "Rediseño que facilitó el acceso a la información de la Dirección de Planeamiento del Ministerio de Obras Públicas del Gobierno de Chile.",
      image: "https://aliciaureta.com/image/dirplan.png",
      tags: ["UI Design", "Design System"],
      color: "accent",
      href: "/proyectos/web-design",
    },
  ];

  return (
    <section id="projects" className="py-12 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-secondary uppercase tracking-wider mb-4">Proyectos destacados</p>
          <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
            Casos de éxito
          </h2>
          <p className="text-foreground/70">
            Una selección de proyectos que demuestran mi capacidad para resolver problemas 
            complejos con soluciones de diseño elegantes y efectivas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Image */}
                <div className={`relative aspect-[4/3] lg:aspect-auto overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <p className="text-sm text-secondary uppercase tracking-wider mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {project.title}
                  </h3>
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

                  <div>
                    <Link to={project.href}>
                      <Button variant="outline" className="group/btn">
                        Ir a proyecto
                        <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}