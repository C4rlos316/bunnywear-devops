const ITEMS = [
  "Envío gratis desde $999",
  "Devoluciones en 30 días",
  "Pago seguro",
  "Hecho para durar",
  "Nueva temporada 2026",
];

export default function Marquee() {
  // Duplicamos los items para un loop continuo
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-line bg-ink py-3 text-white">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className="eyebrow flex shrink-0 items-center gap-3 text-white/80"
          >
            <span className="text-terracotta">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
