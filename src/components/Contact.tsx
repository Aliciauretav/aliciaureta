import { useState } from "react";
import { Mail, Linkedin, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

type FieldErrors = { nombre?: string; email?: string; mensaje?: string };
type FieldTouched = { nombre?: boolean; email?: boolean; mensaje?: boolean };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<FieldTouched>({});

  const validateField = (name: string, value: string): string => {
    if (name === "nombre" && !value.trim()) return "El nombre es requerido.";
    if (name === "email") {
      if (!value.trim()) return "El email es requerido.";
      if (!emailRegex.test(value)) return "Ingresa un email válido.";
    }
    if (name === "mensaje" && !value.trim()) return "El mensaje es requerido.";
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (error) setError(false);
    if (touched[name as keyof FieldTouched]) {
      const msg = validateField(name, value);
      setFieldErrors(prev => ({ ...prev, [name]: msg }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const msg = validateField(name, value);
    setFieldErrors(prev => ({ ...prev, [name]: msg }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      toast.error("Por favor completa los campos requeridos.");
      return;
    }
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("https://formspree.io/f/xvzdpwrl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
        setForm({ nombre: "", email: "", asunto: "", mensaje: "" });
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="px-6 lg:px-8" style={{ paddingTop: "8rem", paddingBottom: "8rem" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-primary" />
              <p className="text-xs font-medium tracking-widest uppercase text-primary">Contacto</p>
            </div>
            <h2 className="text-4xl lg:text-5xl text-foreground mb-4" style={{ fontFamily: "var(--font-serif)", letterSpacing: "-0.02em" }}>
              Hablemos
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-8 max-w-sm">
              Estoy siempre abierta a nuevas oportunidades y colaboraciones. ¿Tienes algo en mente? Me encantaría escucharte.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              <a href="mailto:aliciauretav@gmail.com" className="flex items-center gap-3 text-sm text-foreground/75 hover:text-primary transition-colors">
                <span style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "border-color .2s" }}>
                  <Mail className="w-4 h-4" />
                </span>
                aliciauretav@gmail.com
              </a>
              <a href="https://linkedin.com/in/aliciauretavergara" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground/75 hover:text-primary transition-colors">
                <span style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "border-color .2s" }}>
                  <Linkedin className="w-4 h-4" />
                </span>
                /in/aliciauretavergara
              </a>
              <span className="flex items-center gap-3 text-sm text-foreground/75">
                <span style={{ width: "36px", height: "36px", borderRadius: "50%", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin className="w-4 h-4" />
                </span>
                Santiago, Chile
              </span>
            </div>
            <blockquote className="pl-5 border-l-2 border-primary" style={{ borderRadius: 0 }}>
              <p className="text-base text-foreground/75 leading-relaxed mb-2" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                "Las mejores interfaces de usuario son las que desaparecen. Todo lo que queda es la experiencia."
              </p>
              <cite className="text-xs text-foreground/60 not-italic">— Jared Spool</cite>
            </blockquote>
          </div>

          {sent ? (
            <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-border" style={{ padding: "4rem 2rem", background: "var(--background-3)", minHeight: "400px" }}>
              <p className="text-3xl text-primary mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                ¡Mensaje enviado!
              </p>
              <p className="text-foreground/75 leading-relaxed max-w-sm">
                Gracias por escribirme. Te responderé a la brevedad en <strong>aliciauretav@gmail.com</strong>
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="text-xs font-medium text-foreground/75 uppercase tracking-wider">Nombre *</label>
                  <input
                    id="nombre" type="text" name="nombre" value={form.nombre}
                    onChange={handleChange} onBlur={handleBlur}
                    placeholder="Tu nombre"
                    className="w-full bg-muted border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none transition-all"
                    style={{ borderColor: touched.nombre && fieldErrors.nombre ? "#dc2626" : touched.nombre && !fieldErrors.nombre && form.nombre ? "#16a34a" : "var(--border)" }}
                  />
                  {touched.nombre && fieldErrors.nombre && (
                    <p className="flex items-center gap-1 text-xs text-red-600"><AlertCircle className="w-3 h-3" />{fieldErrors.nombre}</p>
                  )}
                  {touched.nombre && !fieldErrors.nombre && form.nombre && (
                    <p className="flex items-center gap-1 text-xs text-green-600"><CheckCircle className="w-3 h-3" />Correcto</p>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-medium text-foreground/75 uppercase tracking-wider">Email *</label>
                  <input
                    id="email" type="email" name="email" value={form.email}
                    onChange={handleChange} onBlur={handleBlur}
                    placeholder="tu@email.com"
                    className="w-full bg-muted border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none transition-all"
                    style={{ borderColor: touched.email && fieldErrors.email ? "#dc2626" : touched.email && !fieldErrors.email && form.email ? "#16a34a" : "var(--border)" }}
                  />
                  {touched.email && fieldErrors.email && (
                    <p className="flex items-center gap-1 text-xs text-red-600"><AlertCircle className="w-3 h-3" />{fieldErrors.email}</p>
                  )}
                  {touched.email && !fieldErrors.email && form.email && (
                    <p className="flex items-center gap-1 text-xs text-green-600"><CheckCircle className="w-3 h-3" />Correcto</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="asunto" className="text-xs font-medium text-foreground/75 uppercase tracking-wider">Asunto</label>
                <input id="asunto" type="text" name="asunto" value={form.asunto} onChange={handleChange} placeholder="¿En qué puedo ayudarte?" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="mensaje" className="text-xs font-medium text-foreground/75 uppercase tracking-wider">Mensaje *</label>
                <textarea
                  id="mensaje" name="mensaje" value={form.mensaje}
                  onChange={handleChange} onBlur={handleBlur}
                  placeholder="Cuéntame sobre tu proyecto..." rows={5}
                  className="w-full bg-muted border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none transition-all resize-none"
                  style={{ borderColor: touched.mensaje && fieldErrors.mensaje ? "#dc2626" : touched.mensaje && !fieldErrors.mensaje && form.mensaje ? "#16a34a" : "var(--border)" }}
                />
                {touched.mensaje && fieldErrors.mensaje && (
                  <p className="flex items-center gap-1 text-xs text-red-600"><AlertCircle className="w-3 h-3" />{fieldErrors.mensaje}</p>
                )}
                {touched.mensaje && !fieldErrors.mensaje && form.mensaje && (
                  <p className="flex items-center gap-1 text-xs text-green-600"><CheckCircle className="w-3 h-3" />Correcto</p>
                )}
              </div>
              {error && (
                <p className="text-sm text-red-600 flex items-center gap-2">
                  ✗ Error al enviar. Por favor intenta de nuevo.
                </p>
              )}
              <Button onClick={handleSubmit} disabled={loading} className="self-start bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 gap-2" size="lg">
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
