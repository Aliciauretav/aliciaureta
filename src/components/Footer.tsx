import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 lg:px-8" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        <p className="text-xs text-foreground/40 text-center max-w-sm leading-relaxed">
          Sitio diseñado y construido mediante orquestación de herramientas de IA y desarrollo propio, priorizando claridad, performance y escalabilidad. Con <span style={{ color: "#D22424" }}>♥</span> y mucho café · Santiago, Chile © 2026
        </p>

        <nav className="flex items-center gap-6">
          <Link
            to="/sobre-mi"
            className="text-xs transition-colors"
            style={{ color: "var(--foreground-subtle)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground-subtle)")}
          >
            Sobre mí
          </Link>
          <Link
            to="/#projects"
              className="text-xs transition-colors"
              style={{ color: "var(--foreground-subtle)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground-subtle)")}

          >
            Proyectos
          </Link>
          <Link
            to="/contacto"
             className="text-xs transition-colors"
              style={{ color: "var(--foreground-subtle)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground-subtle)")}
          >
            Contacto
          </Link>
        </nav>

      </div>
    </footer>
  );
}
