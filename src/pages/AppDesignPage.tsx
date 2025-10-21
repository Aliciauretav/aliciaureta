import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ArrowUpRight, Target, Users, TrendingUp, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function AppDesignPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const project = {
    title: "Caso de estudio / App para personalizar producto textil",
    category: "App Design",
    role: "UX/UI Designer",
    description: "La tienda de E-commerce María Belén me solicitó diseñar una experiencia digital que permite la experiencia de compra de productos personalizados de diseño textil",
    image: "https://aliciaureta.com/image/mockup.png",
    tags: ["UX Research", "UI Design", "Prototyping"],
    purpose: "Crear una experiencia de compra intuitiva y atractiva que permita a los usuarios personalizar productos textiles de forma fácil, visualizar sus diseños en tiempo real y completar la compra sin fricciones.",
    metrics: [
      { label: "Conversión", value: "35%", icon: TrendingUp },
      { label: "Usuarios registrados", value: "5K+", icon: Users },
      { label: "NPS Score", value: "85", icon: Target },
    ],
    workDone: [
      "Research de mercado y análisis competitivo",
      "Entrevistas con usuarios",
      "Definición de user personas y journeys",
      "Diseño del flujo de personalización",
      "Prototipado de la experiencia de customización",
      "Diseño UI con focus en conversión",
    ],
    processImages: [
      {
        title: "Analíticas",
        image: "https://aliciaureta.com/image/analit.png",
      },
      {
        title: "User Persona",
        image: "https://aliciaureta.com/image/user%20persona.png",
      },
      {
        title: "User Journey Map",
        image: "https://aliciaureta.com/image/journey.png",
      },
      {
        title: "User Flow",
        image: "https://aliciaureta.com/image/user%20flow.png",
      },
      {
        title: "Mockups finales",
        image: "https://aliciaureta.com/image/mockup.png",
      },
      {
        title: "Prototipo interactivo",
        image: "https://aliciaureta.com/image/protipo.png",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <Button 
              variant="ghost" 
              className="group/back mb-6 hover:bg-secondary/10" 
              asChild
            >
              <Link to="/">
                <ArrowLeft className="mr-2 w-4 h-4 group-hover/back:-translate-x-1 transition-transform" />
                Volver
              </Link>
            </Button>

            {/* Project Detail */}
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-2xl">
              {/* Hero Section */}
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Image */}
                <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-sm text-secondary uppercase tracking-wider mb-3">
                    {project.category}
                  </p>
                  <h1 className="text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {project.title}
                  </h1>
                  
                  {/* Role */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      {project.role}
                    </span>
                  </div>
                  
                  <p className="text-foreground/70 mb-6">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Purpose Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/20">
                <h2 className="text-xl mb-4 text-secondary" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Propósito del proyecto
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  {project.purpose}
                </p>
              </div>

              {/* Work Done Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-muted/20">
                <h2 className="text-xl mb-6 text-secondary" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Trabajo realizado
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {project.workDone.map((work, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{work}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process Images Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border">
                <h2 className="text-xl mb-8 text-secondary" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Proceso de diseño
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {project.processImages.map((item, index) => (
                    <div key={index} className="group">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-border">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <p className="text-sm text-foreground/70">{item.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="px-8 lg:px-12 py-12 border-t border-border bg-gradient-to-br from-secondary/5 to-accent/5">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h2 className="text-xl mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                      ¿Te interesa saber más sobre este proyecto?
                    </h2>
                    <p className="text-foreground/70">
                      Contáctame y hablemos
                    </p>
                  </div>
                  <Button variant="outline" className="group/btn" asChild>
                    <a href="/#contacto">
                      Contactar
                      <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}