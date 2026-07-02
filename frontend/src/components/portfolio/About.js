import Reveal from "../Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-28">
      <Reveal>
        <p className="eyebrow text-mint">Sobre mí</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Estudiante de Ingeniería en Computación — UNAM
        </h2>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ash sm:text-lg">
          Estudiante de Ingeniería en Computación con experiencia en
          infraestructura tecnológica, administración de sistemas Linux,
          despliegue de aplicaciones en Kubernetes y monitoreo de servicios.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ash sm:text-lg">
          He participado en proyectos de automatización, observabilidad y
          redes, complementados con certificaciones en Google Cloud y Oracle
          Cloud Infrastructure. Busco desarrollarme en áreas de
          Infraestructura TI, Cloud, Redes y DevOps.
        </p>
      </Reveal>
      <Reveal delay={0.4}>
        <p className="mt-8 text-sm text-ash">
          Ingeniería en Computación — UNAM Facultad de Ingeniería (2021 – Actualidad)
        </p>
      </Reveal>
    </section>
  );
}
