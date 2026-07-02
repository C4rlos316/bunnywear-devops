import Reveal from "../Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="eyebrow text-mint">Sobre mí</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Estudiante de Ingeniería en Computación
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ash sm:text-lg">
          Me gusta entender cómo funcionan los sistemas de punta a punta:
          desde el código de una API hasta la infraestructura que la mantiene
          corriendo. Este sitio es un ejemplo — empezó como un e-commerce de
          práctica y terminó siendo un proyecto de infraestructura completo en
          la nube: contenedores, Kubernetes, HTTPS, CI/CD y monitoreo.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ash sm:text-lg">
          Actualmente sigo aprendiendo y construyendo, con foco en desarrollo
          full-stack y prácticas de DevOps.
        </p>
      </Reveal>
    </section>
  );
}
