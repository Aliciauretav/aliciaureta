import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Name */}
          <div className="flex items-center gap-2">
            <span className="text-xl text-primary" style={{ fontFamily: 'Sora, sans-serif' }}>
              Alicia Ureta
            </span>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <span>© {currentYear} Diseñado con</span>
            <Heart className="w-4 h-4 text-destructive fill-destructive" />
            <span>y mucho café</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link to="/sobre-mi" className="text-foreground/60 hover:text-primary transition-colors">
              Sobre mí
            </Link>
            <Link to="/contacto" className="text-foreground/60 hover:text-primary transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}