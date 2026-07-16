import Reveal from "../Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-36 text-center">
      <Reveal>
        <p className="eyebrow text-ash">Sobre mí</p>
      </Reveal>
      <Reveal delay={0.15}>
        <h2 className="headline-gradient mt-4 text-4xl font-bold tracking-tighter sm:text-5xl">
          Estudiante de Ingeniería en Computación — UNAM
        </h2>
      </Reveal>
      <Reveal delay={0.3}>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ash sm:text-xl">
          Estudiante de Ingeniería en Computación con experiencia en
          infraestructura tecnológica, administración de sistemas Linux,
          despliegue de aplicaciones en Kubernetes y monitoreo de servicios.
        </p>
      </Reveal>
      <Reveal delay={0.45}>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ash sm:text-xl">
          He participado en proyectos de automatización, observabilidad y
          redes, complementados con certificaciones en Google Cloud y Oracle
          Cloud Infrastructure. Busco desarrollarme en áreas de
          Infraestructura TI, Cloud, Redes y DevOps.
        </p>
      </Reveal>
      <Reveal delay={0.6}>
        <p className="mt-10 text-sm text-ash/70">
          Ingeniería en Computación — UNAM Facultad de Ingeniería (2021 – Actualidad)
        </p>
      </Reveal>
    </section>
  );
}
