import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="min-h-screen flex items-center px-6 lg:px-8 pt-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16">

          {/* Contenido */}
          <div className="space-y-8">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-primary" />
              <p
                className="text-xs font-medium tracking-widest uppercase text-primary"
              >
                UX Manager · Product Designer · Santiago, Chile
              </p>
            </div>

            {/* Titular */}
            <div className="space-y-4">
              <h1
                className="text-5xl lg:text-6xl text-foreground leading-tight"
                style={{
                  fontFamily: "var(--font-serif)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                }}
              >
                UX Manager que convierte problemas{" "}
                <em
                  className="text-primary"
                  style={{ fontStyle: "italic" }}
                >
                  complejos
                </em>{" "}
                en experiencias claras.
              </h1>

              <p className="text-lg text-foreground/60 max-w-xl leading-relaxed">
                Diseño productos digitales y lidero equipos UX con foco en resultados:
                procesos más simples, sistemas más consistentes y experiencias que la
                gente realmente entiende.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/#projects" onClick={scrollToProjects}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground group rounded-lg"
                >
                  Ver proyectos
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-lg border-foreground/20 hover:bg-secondary hover:border-primary/30 hover:text-primary"
                >
                  Contáctame
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/in/aliciauretavergara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-foreground/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:hola@aliciaureta.com"
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-foreground/50"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Stats */}
            <div
              className="flex gap-8 pt-4 border-t border-border"
            >
              <div>
                <p
                  className="text-2xl text-foreground"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  30%
                </p>
                <p className="text-xs text-foreground/50 mt-1">
                  Reducción en<br />tiempo de diseño
                </p>
              </div>
              <div>
                <p
                  className="text-2xl text-foreground"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  60→4
                </p>
                <p className="text-xs text-foreground/50 mt-1">
                  Inputs en<br />un proceso
                </p>
              </div>
              <div>
                <p
                  className="text-2xl text-foreground"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  3+
                </p>
                <p className="text-xs text-foreground/50 mt-1">
                  Sectores:<br />público, privado, fintech
                </p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Marco de foto */}
              <div
                className="w-full max-w-sm lg:max-w-md aspect-[3/4] rounded-3xl overflow-hidden bg-secondary border border-border"
              >
                <img
                  src="https://aliciaureta.com/image/alicia-hero.jpg"
                  alt="Alicia Ureta, UX Manager"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.style.background = "var(--background-3)";
                  }}
                />
              </div>

              {/* Badge flotante */}
              <div
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl px-4 py-3 shadow-lg"
              >
                <p
                  className="text-2xl text-primary leading-none"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  3+
                </p>
                <p className="text-xs text-foreground/50 mt-1">años en UX</p>
              </div>

              {/* Elemento decorativo */}
              <div
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full opacity-20"
                style={{ background: "var(--primary)" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
