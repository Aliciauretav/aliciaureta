import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 lg:px-8" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <Link to="/" className="flex items-center">
          <img
            src="https://aliciaureta.com/image/LOGO.png"
            alt="Alicia Ureta"
            className="h-8 w-auto object-contain"
          />
        </Link>

        <p className="text-xs text-foreground/40">
          © 2025 · Diseñado con ♥ y mucho café
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
