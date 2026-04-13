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
                UX Lead · UX Manager · Product Designer · Santiago, Chile
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
                  className="rounded-lg"
                  style={{ borderColor: "var(--border)" }}
                  onMouseEnter={e => {
                    const btn = e.currentTarget as HTMLElement;
                    btn.style.background = "var(--primary)";
                    btn.style.borderColor = "var(--primary)";
                    btn.style.color = "#fff";
                  }}
                  onMouseLeave={e => {
                    const btn = e.currentTarget as HTMLElement;
                    btn.style.background = "";
                    btn.style.borderColor = "var(--border)";
                    btn.style.color = "";
                  }}
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
                style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--foreground-muted)",
                    transition: "border-color .2s, color .2s"
                  }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                </a>
               <a href="https://wa.me/56957688546"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "var(--foreground-muted)",
                    transition: "border-color .2s, color .2s"
                  }}
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
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
                  4+
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
                style={{ width: "100%", maxWidth: "360px", maxHeight: "500px", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)", background: "var(--secondary)" }}
              >
                <img
                  src="https://aliciaureta.com/image/alicia-hero.png"
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
                  4+
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
