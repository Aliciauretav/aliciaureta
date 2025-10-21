import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner@2.0.3";

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear el mailto link con los datos del formulario
    const mailtoLink = `mailto:hola@aliciaureta.com?subject=${encodeURIComponent(
      formData.subject || "Contacto desde portafolio"
    )}&body=${encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    )}`;

    // Abrir el cliente de correo
    window.location.href = mailtoLink;

    // Mostrar confirmación
    toast.success("¡Mensaje preparado!", {
      description: "Tu cliente de correo se abrirá con el mensaje listo para enviar.",
    });

    // Limpiar el formulario
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hola@aliciaureta.com",
      href: "mailto:hola@aliciaureta.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/aliciauretavergara",
      href: "www.linkedin.com/in/aliciauretavergara",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Santiago, Chile",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-12 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-secondary uppercase tracking-wider">Contacto</p>
                  <h1 className="text-4xl lg:text-5xl" style={{ fontFamily: 'Sora, sans-serif' }}>
                    Hablemos
                  </h1>
                  <p className="text-foreground/70 text-lg">
                    Estoy siempre abierta a nuevas oportunidades y colaboraciones. 
                    ¿Tienes un proyecto en mente? Me encantaría escucharte.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4 pt-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-md transition-shadow group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-foreground/60">{info.label}</p>
                          <p className="text-foreground">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="bg-card border border-border rounded-3xl p-8 lg:p-12">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-foreground/80">
                        Nombre
                      </label>
                      <Input
                        id="name"
                        placeholder="Tu nombre"
                        className="bg-input-background border-border"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-foreground/80">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-input-background border-border"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-foreground/80">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      placeholder="¿En qué puedo ayudarte?"
                      className="bg-input-background border-border"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-foreground/80">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntame sobre tu proyecto..."
                      rows={6}
                      className="bg-input-background border-border resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 group">
                    Enviar mensaje
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Decorative Quote - Full Width at Bottom */}
            <div className="mt-16 p-6 bg-card border-l-4 border-secondary rounded-lg">
              <p className="text-foreground/80 italic">
                "Las mejores interfaces de usuario son las que desaparecen. Todo lo que queda es la experiencia."
              </p>
              <p className="text-sm text-foreground/60 mt-2">— Jared Spool</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}