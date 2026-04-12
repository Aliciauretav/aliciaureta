import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projectItems = [
    { name: "AFP Modelo — Gobernanza de diseño", href: "/proyectos/governance" },
    { name: "Teamwork — Digitalización RRHH", href: "/proyectos/web-app-design" },
    { name: "DIRPLAN — Rediseño institucional", href: "/proyectos/web-design" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            to="/"
            className="text-xl text-foreground transition-opacity hover:opacity-70"
            style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.01em" }}
          >
            Alicia Ureta
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/sobre-mi"
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Sobre mí
            </Link>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button className="text-sm text-foreground/70 hover:text-foreground transition-colors flex items-center gap-1">
                Proyectos
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isProjectsOpen ? "rotate-180" : ""
                  }`}
                />
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
              className="text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Contacto
            </Link>

            <Button
              variant="default"
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4"
              asChild
            >
              <a
                href="https://aliciaureta.com/image/CV_ALICIA_URETA.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-5">
              <Link
                to="/sobre-mi"
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </Link>

              <div>
                <button
                  className="text-sm text-foreground/70 hover:text-primary transition-colors flex items-center gap-1 w-full"
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                >
                  Proyectos
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${
                      isProjectsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isProjectsOpen && (
                  <div className="ml-4 mt-3 flex flex-col gap-3">
                    {projectItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-sm text-foreground/60 hover:text-primary transition-colors"
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
                className="text-sm text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>

              <Button
                variant="default"
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full rounded-lg"
                asChild
              >
                <a
                  href="https://aliciaureta.com/image/CV_ALICIA_URETA.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
