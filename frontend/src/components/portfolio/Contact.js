import { Github, Linkedin, Mail } from "lucide-react";
import Reveal from "../Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="eyebrow text-mint">Contacto</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          ¿Trabajamos juntos?
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ash">
          Estoy abierto a oportunidades, colaboraciones y conversaciones sobre
          tecnología. Escríbeme por cualquiera de estos canales.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="mailto:cama619@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-mint px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-mint-dark"
          >
            <Mail size={16} />
            Enviar correo
          </a>
          <a
            href="https://www.linkedin.com/in/carlosmhernandezgut/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-mint hover:text-mint"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/C4rlos316"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-mint hover:text-mint"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
