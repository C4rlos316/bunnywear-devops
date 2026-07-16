export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-bg" />
      <div className="absolute left-1/2 top-1/3 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow animate-fade-in text-ash">
          Ingeniería en Computación · DevOps
        </p>

        <h1 className="headline-gradient mt-6 animate-fade-in-up text-5xl font-bold leading-[1.05] tracking-tighter sm:text-6xl md:text-7xl">
          Carlos Mario
          <br />
          Hernández Gutiérrez
        </h1>

        <p
          className="mt-8 max-w-xl animate-fade-in-up text-lg leading-relaxed text-ash sm:text-xl"
          style={{ animationDelay: "0.15s" }}
        >
          Desarrollo full-stack y DevOps — Kubernetes, CI/CD y observabilidad.
          Este mismo sitio corre sobre la infraestructura que construí.
        </p>

        <div
          className="mt-10 flex animate-fade-in-up flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-white"
          >
            Ver proyectos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full border border-white/15 px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-white/40"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}
