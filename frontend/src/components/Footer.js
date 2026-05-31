const COLUMNS = [
  {
    title: "Tienda",
    links: ["Novedades", "Hoodies", "Playeras", "Pantalones", "Accesorios"],
  },
  {
    title: "Ayuda",
    links: ["Envíos", "Devoluciones", "Guía de tallas", "Contacto"],
  },
  {
    title: "Empresa",
    links: ["Sobre BunnyWear", "Sostenibilidad", "Trabaja con nosotros"],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-bone">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Marca + newsletter */}
          <div className="lg:col-span-2">
            <span className="text-2xl font-semibold tracking-tight text-ink">
              BunnyWear 🐰
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ash">
              Streetwear minimalista y atemporal. Suscríbete y recibe un 10% en
              tu primera compra.
            </p>

            <form className="mt-6 flex max-w-sm overflow-hidden rounded-full border border-line bg-white">
              <input
                type="email"
                placeholder="Tu correo"
                className="w-full bg-transparent px-5 py-3 text-sm text-ink outline-none placeholder:text-ash"
              />
              <button
                type="button"
                className="shrink-0 bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-terracotta"
              >
                Unirme
              </button>
            </form>
          </div>

          {/* Columnas de links */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="eyebrow text-ink">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ash transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-ash sm:flex-row">
          <p>© {new Date().getFullYear()} BunnyWear. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-ink">
              Privacidad
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              Términos
            </a>
            <a href="#" className="transition-colors hover:text-ink">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
