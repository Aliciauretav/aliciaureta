import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Users, Award, Briefcase, Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect } from "react";
import timelineImage from 'figma:asset/b8749a1556dfd9756848b0a78fa913d1c550dcc9.png';
import { Story } from "../components/Story";

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const stats = [
    { icon: Users, value: "15+", label: "Proyectos completados" }, 
    { icon: Briefcase, value: "10+", label: "Años de experiencia profesional" },
    { icon: Award, value: "2+", label: "Años liderando UX" },
    { icon: Heart, value: "100%", label: "Pasión por el diseño" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="pt-24 pb-2 px-6 lg:px-8" ref={sectionRef}>
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="max-w-2xl mb-16">
              <p className="text-secondary uppercase tracking-wider mb-4">Sobre mí</p>
              <h1 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
                Diseñando experiencias que importan
              </h1>
              <p className="text-foreground/70 text-lg">
                Con más de 3 años de experiencia en diseño UX/UI, me especializo en crear productos digitales que equilibran estética, funcionalidad y propósito. 
                Mi enfoque se basa en comprender a las personas y sus contextos para diseñar experiencias que realmente aporten valor y mejoren su día a día.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <Story />

        {/* Timeline - Experience and Education Section */}
        <section className="py-12 px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xl mb-8 text-secondary" style={{ fontFamily: 'Sora, sans-serif' }}>
              Mi trayectoria profesional y formación
            </h2>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Center Line - Hidden on mobile */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-secondary via-accent to-secondary opacity-30" />
              
              {/* Mobile Line */}
              <div className="lg:hidden absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-secondary via-accent to-secondary opacity-30" />

              <div className="space-y-8">
                {/* UX/UI Manager - AFP Modelo */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-8"
                >
                  <div className="lg:text-right lg:pr-12 ml-20 lg:ml-0">
                    <div className="bg-card border border-secondary/20 rounded-xl p-6 hover:shadow-lg transition-all hover:border-secondary/40">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-primary" style={{ fontFamily: 'Sora, sans-serif' }}>
                          UX/UI Manager
                        </h4>
                        <span className="text-xs text-secondary bg-secondary/10 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                          2024 - Actual
                        </span>
                      </div>
                      <p className="text-sm text-accent mb-2">AFP Modelo</p>
                      <p className="text-sm text-foreground/70">
                        Liderazgo equipo de diseño, implementación de design systems y gobernanza de UX
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 top-6 transform lg:-translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-lg" />
                  
                  <div className="hidden lg:block" />
                </motion.div>

                {/* Diplomado en Diseño de servicios */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-8"
                >
                  <div className="hidden lg:block" />
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 top-6 transform lg:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg" />
                  
                  <div className="lg:pl-12 ml-20 lg:ml-0">
                    <div className="bg-card border border-accent/20 rounded-xl p-6 hover:shadow-lg transition-all hover:border-accent/40">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-primary" style={{ fontFamily: 'Sora, sans-serif' }}>
                          Diplomado en Diseño de servicios
                        </h4>
                        <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                          2023
                        </span>
                      </div>
                      <p className="text-sm text-accent mb-2">Pontificia Universidad Católica de Chile</p>
                      <p className="text-sm text-foreground/70">
                        Service Design, Customer Journey Mapping, Co-creación
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* UX/UI Designer - Teamwork */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-8"
                >
                  <div className="lg:text-right lg:pr-12 ml-20 lg:ml-0">
                    <div className="bg-card border border-secondary/20 rounded-xl p-6 hover:shadow-lg transition-all hover:border-secondary/40">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-primary" style={{ fontFamily: 'Sora, sans-serif' }}>
                          UX/UI Designer
                        </h4>
                        <span className="text-xs text-secondary bg-secondary/10 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                          2022 - 2023
                        </span>
                      </div>
                      <p className="text-sm text-accent mb-2">Teamwork</p>
                      <p className="text-sm text-foreground/70">
                        Plataforma modular para selección y contratación
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 top-6 transform lg:-translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-lg" />
                  
                  <div className="hidden lg:block" />
                </motion.div>

                {/* Diseñadora Digital */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-8"
                >
                  <div className="hidden lg:block" />
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 top-6 transform lg:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg" />
                  
                  <div className="lg:pl-12 ml-20 lg:ml-0">
                    <div className="bg-card border border-accent/20 rounded-xl p-6 hover:shadow-lg transition-all hover:border-accent/40">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-primary" style={{ fontFamily: 'Sora, sans-serif' }}>
                          Diseñadora UX/UI
                        </h4>
                        <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                          2022
                        </span>
                      </div>
                      <p className="text-sm text-accent mb-2">Dirplan MOP Gobierno de Chile</p>
                      <p className="text-sm text-foreground/70">
                        Diseño sitio Dirplan para migración a Wordpress
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Especialización en UX/UI */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-8"
                >
                  <div className="lg:text-right lg:pr-12 ml-20 lg:ml-0">
                    <div className="bg-card border border-secondary/20 rounded-xl p-6 hover:shadow-lg transition-all hover:border-secondary/40">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-primary" style={{ fontFamily: 'Sora, sans-serif' }}>
                          Bootcamp de especialización en UX/UI
                        </h4>
                        <span className="text-xs text-secondary bg-secondary/10 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                          2022
                        </span>
                      </div>
                      <p className="text-sm text-accent mb-2">Instituto profesional AIEP</p>
                      <p className="text-sm text-foreground/70">
                        Design Thinking, Research Methods, Usability Testing
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 top-6 transform lg:-translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background shadow-lg" />
                  
                  <div className="hidden lg:block" />
                </motion.div>

                {/* Diseño Gráfico */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative lg:grid lg:grid-cols-2 lg:gap-8"
                >
                  <div className="lg:text-right lg:pr-12 ml-20 lg:ml-0">
                    <div className="bg-card border border-accent/20 rounded-xl p-6 hover:shadow-lg transition-all hover:border-accent/40">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-primary" style={{ fontFamily: 'Sora, sans-serif' }}>
                          Licenciatura en Arte y Diseño
                        </h4>
                        <span className="text-xs text-accent bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap ml-2">
                          2003 - 2006
                        </span>
                      </div>
                      <p className="text-sm text-accent mb-2">Universidad Tecnológica de Chile</p>
                      <p className="text-sm text-foreground/70">
                        Especialización en Diseño de vestuario
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 lg:left-1/2 top-6 transform lg:-translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-lg" />
                  
                  <div className="hidden lg:block" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}