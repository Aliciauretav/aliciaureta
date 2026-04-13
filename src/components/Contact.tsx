import { useState } from "react";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ nombre: "", email: "", asunto: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      toast.error("Por favor completa los campos requeridos.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/xvzdpwrl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        toast.error("Hubo un error al enviar. Intenta de nuevo.");
      }
    } catch {
      toast.error("Hubo un error al enviar. Intenta de nuevo.");
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
            <p className="text-foreground/60 leading-relaxed mb-8 max-w-sm">
              Estoy siempre abierta a nuevas oportunidades y colaboraciones. ¿Tienes algo en mente? Me encantaría escucharte.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              <a href="mailto:hola@aliciaureta.com" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors group">
                <span className="w-9 h-9 rounded-lg border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-secondary transition-colors">
                  <Mail className="w-4 h-4" />
                </span>
                hola@aliciaureta.com
              </a>
              <a href="https://linkedin.com/in/aliciauretavergara" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground/60 hover:text-primary transition-colors group">
                <span className="w-9 h-9 rounded-lg border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-secondary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </span>
                /in/aliciauretavergara
              </a>
              <span className="flex items-center gap-3 text-sm text-foreground/60">
                <span className="w-9 h-9 rounded-lg border border-border flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </span>
                Santiago, Chile
              </span>
            </div>
            <blockquote className="pl-5 border-l-2 border-primary" style={{ borderRadius: 0 }}>
              <p className="text-base text-foreground/60 leading-relaxed mb-2" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                "Las mejores interfaces de usuario son las que desaparecen. Todo lo que queda es la experiencia."
              </p>
              <cite className="text-xs text-foreground/40 not-italic">— Jared Spool</cite>
            </blockquote>
          </div>

          {sent ? (
            <div className="flex flex-col items-center justify-center text-center rounded-2xl border border-border" style={{ padding: "4rem 2rem", background: "var(--background-3)", minHeight: "400px" }}>
              <p className="text-3xl text-primary mb-4" style={{ fontFamily: "var(--font-serif)" }}>
                ¡Mensaje enviado!
              </p>
              <p className="text-foreground/60 leading-relaxed max-w-sm">
                Gracias por escribirme. Te responderé a la brevedad en <strong>hola@aliciaureta.com</strong>
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-foreground/60 uppercase tracking-wider">Nombre *</label>
                  <input type="text" name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-all" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-foreground/60 uppercase tracking-wider">Email *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-all" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-foreground/60 uppercase tracking-wider">Asunto</label>
                <input type="text" name="asunto" value={form.asunto} onChange={handleChange} placeholder="¿En qué puedo ayudarte?" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-all" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-medium text-foreground/60 uppercase tracking-wider">Mensaje *</label>
                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Cuéntame sobre tu proyecto..." rows={5} className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary transition-all resize-none" />
              </div>
              <Button onClick={handleSubmit} disabled={loading} className="self-start bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 gap-2" size="lg">
                {loading ? "Enviando..." : "Enviar mensaje"}
                <Send className="w-4 h-4" />
              </Button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}