import { Component, type ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props { children: ReactNode; }
interface State { hasError: boolean; }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <p className="text-4xl mb-4" style={{ fontFamily: "var(--font-serif)" }}>Algo salió mal</p>
          <p className="text-foreground/60 mb-8 max-w-sm">
            No se pudo cargar este proyecto. Puedes volver al inicio y seguir explorando.
          </p>
          <Link
            to="/"
            style={{
              padding: "10px 24px",
              borderRadius: "8px",
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            Volver al inicio
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}
