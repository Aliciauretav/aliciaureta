import { Users, Award, Briefcase, Heart } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function About() {
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
    <section id="about" className="py-12 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid - Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const y = useTransform(
              scrollYProgress,
              [0, 1],
              [50 * (index + 1), -50 * (index + 1)]
            );
            
            return (
              <motion.div
                key={index}
                style={{ y }}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl text-primary" style={{ fontFamily: 'Sora, sans-serif' }}>
                      {stat.value}
                    </div>
                    <p className="text-sm text-foreground/70 mt-1">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
