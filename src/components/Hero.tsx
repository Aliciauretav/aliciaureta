import image_5230171894b99f845342257041a02a36a9a2a8d0 from 'figma:asset/5230171894b99f845342257041a02a36a9a2a8d0.png';
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs text-secondary uppercase tracking-wider text-[16px]">UX Manager | Product Designer | Diseño Estratégico y Gobernanza de Sistemas | Experiencias Digitales Consistentes y Medibles</p>
              <h1 className="text-5xl lg:text-7xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                Hola, soy <span className="text-primary">Alicia Ureta</span>
              </h1>
              <p className="text-lg text-foreground/70 max-w-xl">
                Diseño productos digitales que simplifican la vida de las personas y optimizan los procesos de las organizaciones. Combino estrategia, empatía y diseño para convertir necesidades en soluciones con valor real. 
              </p>
              <p className="text-lg text-foreground/70 max-w-xl">
               Estoy abierta a ofertas para liderar o colaborar en proyectos donde el diseño impulse el cambio y el crecimiento.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link to="/#projects">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 group"
                  onClick={(e) => {
                    e.preventDefault();
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  Ver Proyectos
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button size="lg" variant="outline">
                  Contáctame
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-secondary/30 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/30 to-accent/30">
              <ImageWithFallback
                src={image_5230171894b99f845342257041a02a36a9a2a8d0}
                alt="Alicia Ureta"
                className="w-full h-full object-cover object-center"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-destructive rounded-full opacity-60 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full opacity-60 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}