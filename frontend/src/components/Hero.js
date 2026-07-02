export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-bg" />
      <div className="absolute -left-32 -top-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-mint/10 blur-3xl" />
      <div className="absolute -bottom-24 right-1/4 -z-10 h-[20rem] w-[20rem] rounded-full bg-mint/5 blur-3xl" />

      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-start justify-center px-6">
        <p className="eyebrow animate-fade-in text-mint">
          Ingeniería en Computación
        </p>

        <h1 className="mt-6 animate-fade-in-up text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
          Carlos Mario
          <br />
          Hernández Gutiérrez
        </h1>

        <p
          className="mt-7 max-w-xl animate-fade-in-up text-base leading-relaxed text-ash sm:text-lg"
          style={{ animationDelay: "0.1s" }}
        >
          Estudiante de Ingeniería en Computación. Me interesa el desarrollo
          full-stack y el DevOps — Kubernetes, CI/CD y observabilidad. Este
          mismo sitio corre sobre la infraestructura que construí.
        </p>

        <div
          className="mt-10 flex animate-fade-in-up flex-col gap-3 sm:flex-row"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="#proyectos"
            className="group inline-flex items-center gap-2 rounded-full bg-mint px-8 py-3.5 text-sm font-medium text-black transition-all hover:bg-mint-dark"
          >
            Ver proyectos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contacto"
            className="inline-flex items-center rounded-full border border-line px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-mint hover:text-mint"
          >
            Contactar
          </a>
        </div>

        <div
          className="mt-16 flex animate-fade-in-up gap-10 border-t border-line pt-8"
          style={{ animationDelay: "0.3s" }}
        >
          <div>
            <p className="text-2xl font-semibold text-mint">2</p>
            <p className="mt-1 text-xs text-ash uppercase tracking-wider">Nodos K3s</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-mint">100%</p>
            <p className="mt-1 text-xs text-ash uppercase tracking-wider">HTTPS + CI/CD</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-mint">2026</p>
            <p className="mt-1 text-xs text-ash uppercase tracking-wider">Proyecto</p>
          </div>
        </div>
      </div>
    </section>
  );
}
