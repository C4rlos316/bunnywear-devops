import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-3xl px-6 py-36 text-center">
      <Reveal>
        <p className="eyebrow text-ash">Contacto</p>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="headline-gradient mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">
          ¿Trabajamos juntos?
        </h2>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ash">
          Estoy abierto a oportunidades, colaboraciones y conversaciones sobre
          tecnología. Escríbeme por cualquiera de estos canales.
        </p>
      </Reveal>

      <Reveal delay={0.45}>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="mailto:cama619@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-white"
          >
            <Mail size={16} />
            Enviar correo
          </a>
          <a
            href="https://www.linkedin.com/in/carlosmhernandezgut/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-white/40"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/C4rlos316"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-white/40"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
