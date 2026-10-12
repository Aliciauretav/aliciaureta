const metrics = [
  {
    value: "30%",
    suffix: "",
    desc: "Menos tiempo de diseño con componentización, en un proyecto con plazo no negociable",
  },
  {
    value: "60",
    suffix: "→4",
    desc: "Inputs eliminados en proceso de contratación para más de 300 personas",
  },
  {
    value: "65%",
    suffix: "",
    desc: "Menos pasos tras reestructurar la arquitectura de información de un sitio del Estado",
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
