import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";
  const isActive = (path: string) => location.pathname === path;
  const isProjectsActive = location.pathname.startsWith("/proyectos");

  const projectItems = [
    { name: "Audix — Tracking de calidad UX", href: "/proyectos/audix" },
    { name: "AFP Modelo — Gobernanza de diseño", href: "/proyectos/governance" },
    { name: "Teamwork — Digitalización RRHH", href: "/proyectos/web-app-design" },
    { name: "DIRPLAN — Rediseño institucional", href: "/proyectos/web-design" },
  ];

  const navItemClass = "text-sm transition-all duration-200 ease-in-out relative py-1 px-3";

  const getLinkStyle = (active: boolean) => active
    ? {
        color: "var(--primary)",
        fontWeight: "600",
        textDecoration: "underline",
        textDecorationColor: "var(--primary)",
        textUnderlineOffset: "5px",
        textDecorationThickness: "2px",
      }
    : { color: "var(--foreground)" };

  const hoverHandlers = (active: boolean) => ({
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      if (active) return;
      const el = e.currentTarget;
      el.style.color = "var(--primary)";
      el.style.textDecoration = "underline";
      el.style.textDecorationColor = `color-mix(in srgb, var(--primary) 50%, transparent)`;
      el.style.textUnderlineOffset = "5px";
      el.style.textDecorationThickness = "2px";
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      if (active) return;
      const el = e.currentTarget;
      el.style.color = "var(--foreground)";
      el.style.textDecoration = "none";
    },
  });

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        bg-background border-b border-border
        ${scrolled
          ? "shadow-sm"
          : "md:bg-transparent md:border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo SVG */}
          <Link to="/" className="flex items-center shrink-0">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">

            <Link
              to="/"
              className={navItemClass}
              style={getLinkStyle(isHome)}
              {...hoverHandlers(isHome)}
            >
              Inicio
            </Link>

            <Link
              to="/sobre-mi"
              className={navItemClass}
              style={getLinkStyle(isActive("/sobre-mi"))}
              {...hoverHandlers(isActive("/sobre-mi"))}
            >
              Sobre mí
            </Link>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button
                className={`${navItemClass} flex items-center gap-1`}
                style={getLinkStyle(isProjectsActive)}
                {...hoverHandlers(isProjectsActive)}
              >
                Proyectos
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isProjectsOpen ? "rotate-180" : ""}`} />
              </button>

              {isProjectsOpen && (
                <div className="absolute top-full left-0 pt-3">
                  <div className="w-64 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                    {projectItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 text-sm text-foreground/70 hover:bg-secondary hover:text-primary transition-colors border-b border-border last:border-0"
                        onClick={() => setIsProjectsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contacto"
              className={navItemClass}
              style={getLinkStyle(isActive("/contacto"))}
              {...hoverHandlers(isActive("/contacto"))}
            >
              Contacto
            </Link>

            {/* Dark mode toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Cambiar modo de color"
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
                  background: "transparent",
                  cursor: "pointer",
                  transition: "border-color .2s, color .2s",
                }}
              >
                {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <a
              href="/CV_Alicia_Ureta_UX_Manager_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                height: "36px",
                padding: "0 16px",
                borderRadius: "8px",
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                fontSize: "14px",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
                marginLeft: "12px",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "color-mix(in srgb, var(--primary) 80%, transparent)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--primary)"; }}
            >
              Descargar CV
            </a>
          </div>

          {/* Mobile: dark mode toggle + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Cambiar modo de color"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "var(--foreground-muted)",
                  background: "transparent",
                  cursor: "pointer",
                  transition: "border-color .2s, color .2s",
                }}
              >
                {resolvedTheme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}
            <button
              className="w-10 h-10 flex items-center justify-center text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col">

              <Link
                to="/"
                className="flex items-center text-sm py-3 transition-all duration-200"
                style={isHome ? { color: "var(--primary)", fontWeight: "600" } : { color: "var(--foreground)" }}
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>

              <Link
                to="/sobre-mi"
                className="flex items-center text-sm py-3 transition-all duration-200"
                style={isActive("/sobre-mi") ? { color: "var(--primary)", fontWeight: "600" } : { color: "var(--foreground)" }}
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </Link>

              <div>
                <button
                  className="flex items-center gap-1 text-sm py-3 w-full transition-all duration-200"
                  style={{ color: "var(--foreground)" }}
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                >
                  Proyectos
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isProjectsOpen ? "rotate-180" : ""}`} />
                </button>

                {isProjectsOpen && (
                  <div className="ml-4 flex flex-col">
                    {projectItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-sm text-foreground/60 hover:text-primary transition-colors py-3.5"
                        onClick={() => { setIsOpen(false); setIsProjectsOpen(false); }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contacto"
                className="flex items-center text-sm py-3 transition-all duration-200"
                style={isActive("/contacto") ? { color: "var(--primary)", fontWeight: "600" } : { color: "var(--foreground)" }}
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>

              <div className="pt-2 border-t border-border mt-2">
                <a
                  href="/CV_Alicia_Ureta_UX_Manager_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "36px",
                    borderRadius: "8px",
                    background: "var(--primary)",
                    color: "var(--primary-foreground)",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                    marginTop: "12px",
                    transition: "background 0.2s",
                  }}
                >
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
