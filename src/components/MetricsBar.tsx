const metrics = [
  {
    value: "−30%",
    suffix: "",
    desc: "AFP Modelo · tiempo de diseño con componentización, en un proyecto con plazo no negociable",
  },
  {
    value: "+3 pts",
    suffix: "",
    desc: "Teamwork · mejora en la escala de percepción de experiencia (sobre 7)",
  },
  {
    value: "88%",
    suffix: "",
    desc: "DIRPLAN · satisfacción de usuarios en pruebas de usabilidad del sitio rediseñado",
  },
];

export function MetricsBar() {
  return (
    <div className="px-6 lg:px-8" style={{ background: "var(--foreground)", paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {metrics.map((m, i) => (
          <div key={i}>
            <p
              className="text-4xl lg:text-5xl mb-3 leading-none font-bold"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--background)",
              }}
            >
              {m.value}
              {m.suffix && (
                <span className="text-[#C4A8E0] dark:text-[#6B4F8C]">{m.suffix}</span>
              )}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--background)", opacity: 0.6 }}
            >
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
