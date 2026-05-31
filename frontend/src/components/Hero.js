export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Fondo con degradado sutil */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-stone-100 via-bone to-bone" />
      <div className="absolute -right-32 -top-32 -z-10 h-[36rem] w-[36rem] rounded-full bg-terracotta/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 -z-10 h-[30rem] w-[30rem] rounded-full bg-stone-300/30 blur-3xl" />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow animate-fade-in text-terracotta">
          Nueva Temporada · 2026
        </p>

        <h1 className="mt-6 animate-fade-in-up text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl">
          Moda urbana,
          <br />
          hecha para durar.
        </h1>

        <p
          className="mx-auto mt-7 max-w-xl animate-fade-in-up text-base leading-relaxed text-ash sm:text-lg"
          style={{ animationDelay: "0.1s" }}
        >
          Streetwear minimalista, piezas atemporales y materiales premium.
          Descubre la colección BunnyWear.
        </p>

        <div
          className="mt-10 flex animate-fade-in-up flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="#tienda"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-terracotta"
          >
            Ver colección
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#tienda"
            className="inline-flex items-center rounded-full border border-line px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Explorar categorías
          </a>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-ash/40 p-1.5">
          <div className="h-1.5 w-1 animate-bounce rounded-full bg-ash" />
        </div>
      </div>
    </section>
  );
}
