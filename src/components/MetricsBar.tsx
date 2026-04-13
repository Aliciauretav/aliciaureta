const metrics = [
  {
    value: "30%",
    suffix: "",
    desc: "Reducción en tiempo de diseño mediante Atomic Design y Design Tokens",
  },
  {
    value: "60",
    suffix: "→4",
    desc: "Inputs eliminados en proceso de contratación para más de 300 personas",
  },
  {
    value: "65%",
    suffix: "",
    desc: "Menos pasos para acceder a información en sitio institucional del Estado",
  },
];

export function MetricsBar() {
  return (
    <div className="px-6 lg:px-8" style={{ background: "var(--foreground)", paddingTop: "4rem", paddingBottom: "4rem" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {metrics.map((m, i) => (
          <div key={i}>
            <p
              className="text-4xl lg:text-5xl mb-3 leading-none"
              style={{
                fontFamily: "var(--font-serif)",
                color: "var(--background)",
              }}
            >
              {m.value}
              {m.suffix && (
                <span style={{ color: "var(--primary)" }}>{m.suffix}</span>
              )}
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(250,250,248,0.5)" }}
            >
              {m.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
