import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import logo from "figma:asset/0c9d6c08bcbc25f693d33c831280517eafeebb79.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const projectItems = [
    { name: "AFP Modelo Governance", href: "/proyectos/governance" },
    { name: "Teamwork Web App Design", href: "/proyectos/web-app-design" },
    { name: "Dirplan Web Design", href: "/proyectos/web-design" },
    { name: "María Belén App Design", href: "/proyectos/app-design" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="https://aliciaureta.com/image/LOGO.png" alt="Alicia Ureta" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/sobre-mi"
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              Sobre mí
            </Link>
            
            {/* Projects Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-1">
                Proyectos
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isProjectsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-56 bg-card border border-border rounded-xl shadow-lg overflow-hidden">
                    {projectItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-3 text-sm text-foreground/80 hover:bg-secondary/10 hover:text-primary transition-colors"
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
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              Contacto
            </Link>
            <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90" asChild>
              <a href="https://aliciaureta.com/image/CV_ALICIA_URETA.pdf" target="_blank" rel="noopener noreferrer">
                Descargar CV
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/sobre-mi"
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Sobre mí
              </Link>
              
              {/* Mobile Projects Dropdown */}
              <div>
                <button 
                  className="text-sm text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 w-full"
                  onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                >
                  Proyectos
                  <ChevronDown className={`w-4 h-4 transition-transform ${isProjectsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isProjectsOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {projectItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="text-sm text-foreground/70 hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/contacto"
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 w-full" asChild>
                <a href="https://aliciaureta.com/image/CV_ALICIA_URETA.pdf" target="_blank" rel="noopener noreferrer">
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