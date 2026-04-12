import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <Link
          to="/"
          className="text-lg text-foreground transition-opacity hover:opacity-60"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Alicia Ureta
        </Link>

        <p className="text-xs text-foreground/40">
          © 2025 · Diseñado con criterio y mucho café
        </p>

        <nav className="flex items-center gap-6">
          <Link
            to="/sobre-mi"
            className="text-xs text-foreground/50 hover:text-foreground transition-colors"
          >
            Sobre mí
          </Link>
          <Link
            to="/#projects"
            className="text-xs text-foreground/50 hover:text-foreground transition-colors"
          >
            Proyectos
          </Link>
          <Link
            to="/contacto"
            className="text-xs text-foreground/50 hover:text-foreground transition-colors"
          >
            Contacto
          </Link>
        </nav>

      </div>
    </footer>
  );
}
