import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

export function Story() {
  return (
    <section className="py-12 px-6 lg:px-8 bg-gradient-to-br from-secondary/10 via-background to-accent/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-[3/4]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1615499847978-cf98484c8819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqb3VybmV5JTIwcGF0aCUyMGhvcml6b258ZW58MXx8fHwxNzYwOTEwNTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Un viaje hacia una nueva versión de ti misma"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-destructive rounded-full opacity-40 blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-secondary rounded-full opacity-40 blur-3xl" />
          </motion.div>

          {/* Right Side - Story Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-secondary uppercase tracking-wider mb-4">Déjame que te cuente una historia...</p>
            <h2 className="text-3xl lg:text-4xl text-primary mb-6" style={{ fontFamily: 'Sora, sans-serif' }}>
              Diseñando mi nueva versión
            </h2>
            
            <div className="space-y-4 text-foreground/80 leading-relaxed">
              <p>
                Había una vez una mujer llamada Alicia que, tras muchos años en una misma empresa, 
                vivió una desvinculación que se convirtió en el punto de partida de una reinvención por la que hoy se siente profundamente agradecida.
              </p>
              
              <div className="my-8 py-6 px-6 bg-card border-l-4 border-secondary rounded-r-xl shadow-sm">
                <p className="text-lg italic text-secondary">
                  "No dejes que tus miedos tomen el lugar de tus sueños."
                </p>
              </div>
              
              <p>
                <span className="text-primary" style={{ fontFamily: 'Sora, sans-serif' }}>Así comenzó su viaje.</span>
                <br />
                Decidió seguir aquello que siempre la había inspirado: crear, conectar y dar sentido a través del diseño. 
                Ganó una beca para estudiar UX/UI y, entre clases, proyectos y horas de práctica, 
                descubrió que el diseño de experiencias era mucho más que una disciplina: era una forma de mirar el mundo con empatía y propósito.
              </p>
              
              <p>
                El camino no fue fácil. Las primeras postulaciones no resultaron, pero cada intento fortaleció su convicción de estar en el rumbo correcto.
                Hasta que, finalmente, llegó la oportunidad que marcaría un antes y un después: un proyecto gubernamental donde pudo aplicar todo lo aprendido y comprobar, 
                por primera vez, el verdadero impacto del diseño centrado en las personas.
              </p>
              
              <p>
                Hoy, Alicia continúa su viaje en el mundo del diseño, transformando cada desafío en una oportunidad para aprender y crecer.
              </p>
              
              <div className="pt-4">
                <p className="text-lg text-primary" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Porque cambiar de carrera no fue un final, sino el comienzo de un camino que —como todo buen diseño— sigue en constante evolución.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}