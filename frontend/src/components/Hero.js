export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Fondo base lado izquierdo */}
      <div className="absolute inset-0 -z-10 bg-bone" />
      <div className="absolute -left-32 -top-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-terracotta/10 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 -z-10 h-[20rem] w-[20rem] rounded-full bg-stone-300/30 blur-3xl" />

      <div className="mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center px-6 md:grid-cols-2">

        {/* Columna izquierda — texto */}
        <div className="flex flex-col items-start justify-center pt-24 pb-16 md:pt-0 md:pb-0 md:pr-12">
          <p className="eyebrow animate-fade-in text-terracotta">
            Nueva Temporada · 2026
          </p>

          <h1 className="mt-6 animate-fade-in-up text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Tu estilo,
            <br />
            tu actitud.
          </h1>

          <p
            className="mt-7 max-w-md animate-fade-in-up text-base leading-relaxed text-ash sm:text-lg"
            style={{ animationDelay: "0.1s" }}
          >
            Streetwear minimalista, piezas atemporales y materiales premium.
            Descubre la colección BunnyWear.
          </p>

          <div
            className="mt-10 flex animate-fade-in-up flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#tienda"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-terracotta"
            >
              Ver colección
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#tienda"
              className="inline-flex items-center rounded-full border border-line px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Explorar categorías
            </a>
          </div>

          {/* Stats pequeños */}
          <div
            className="mt-16 flex animate-fade-in-up gap-10 border-t border-line pt-8"
            style={{ animationDelay: "0.3s" }}
          >
            <div>
              <p className="text-2xl font-semibold text-ink">20+</p>
              <p className="mt-1 text-xs text-ash uppercase tracking-wider">Productos</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-ink">100%</p>
              <p className="mt-1 text-xs text-ash uppercase tracking-wider">Calidad</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-ink">2026</p>
              <p className="mt-1 text-xs text-ash uppercase tracking-wider">Colección</p>
            </div>
          </div>
        </div>

        {/* Columna derecha — grid de fotos */}
        <div className="relative hidden h-full min-h-screen md:flex items-center py-24">
          <div className="grid h-full w-full grid-cols-2 gap-3">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80&auto=format&fit=crop"
              alt=""
              aria-hidden="true"
              className="h-72 w-full rounded-2xl object-cover object-top shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80&auto=format&fit=crop"
              alt=""
              aria-hidden="true"
              className="mt-10 h-72 w-full rounded-2xl object-cover shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&auto=format&fit=crop"
              alt=""
              aria-hidden="true"
              className="h-72 w-full rounded-2xl object-cover shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80&auto=format&fit=crop"
              alt=""
              aria-hidden="true"
              className="mt-10 h-72 w-full rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>

      </div>

    </section>
  );
}
