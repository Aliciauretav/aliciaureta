import { Palette, Wallpaper, ChartScatter, Route, Lightbulb, Handshake } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Palette,
      title: "Diseño de Producto",
      skills: ["Figma", "Tokens", "Component Librarie", "Accesibilidad (WCAG 2.1"],
    },
    {
      icon: Wallpaper,
      title: "Prototipado",
      skills: ["Prototipos interactivos","Microinteracciones","Hand-off"],
    },
    {
      icon: ChartScatter,
      title: "Investigación UX y Analytics",
      skills: ["User Interviews", "User Testing", "Benchmarking", "Personas", "Journey Maps","Service blueprint","Google Analytics"],
    },
    {
      icon: Route,
      title: "Estrategia y Gobernanza",
      skills: ["Google Analytics", "Hotjar", "Mixpanel", "UserTesting", "Maze"],
    },
    {
      icon: Lightbulb,
      title: "Metodologías",
      skills: ["Design Thinking", "Agile/Scrum", "Design Sprint", "Lean UX", "Atomic Design"],
    },
    {
      icon: Handshake,
      title: "Liderazgo y gestión",
      skills: ["Team Management", "Stakeholder Communication", "Mentoring"],
    },
  ];

  const expertise = [
    { name: "UX Research", level: 95 },
    { name: "UI Design", level: 90 },
    { name: "Prototyping", level: 92 },
    { name: "Design Systems", level: 88 },
    { name: "User Testing", level: 94 },
    { name: "Leadership", level: 85 },
  ];

  return (
    <section id="skills" className="py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-secondary uppercase tracking-wider mb-4"> Habilidades </p>
          <h2 className="text-4xl lg:text-5xl mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
            Unir creatividad, análisis y propósito
          </h2>
          <p className="text-foreground/70">
            Un conjunto diverso de habilidades que me permiten liderar proyectos UX 
            de principio a fin, desde la investigación hasta la implementación.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs text-foreground/60"
                        >
                          {skill}
                          {skillIndex < category.skills.length - 1 ? " •" : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}