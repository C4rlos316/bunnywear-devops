function formatPrice(value) {
  const number = Number(value);
  if (Number.isNaN(number)) return value;
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
}

export default function ProductCard({ product, index = 0, onAddToCart }) {
  const lowStock = typeof product.stock === "number" && product.stock <= 10;
  const outOfStock = product.stock === 0;

  return (
    <article
      className="group animate-fade-in-up"
      style={{ animationDelay: `${Math.min(index * 0.06, 0.6)}s` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-200">
        {product.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image_url}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-ash">
            Sin imagen
          </div>
        )}

        {/* Badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {outOfStock ? (
            <span className="rounded-full bg-ink/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
              Agotado
            </span>
          ) : lowStock ? (
            <span className="rounded-full bg-terracotta px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
              Últimas piezas
            </span>
          ) : null}
        </div>

        {/* Botón aparece al hover */}
        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            disabled={outOfStock}
            onClick={() => !outOfStock && onAddToCart && onAddToCart(product)}
            className="w-full rounded-full bg-bone/95 py-2.5 text-sm font-medium text-ink backdrop-blur transition-colors hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {outOfStock ? "No disponible" : "Agregar al carrito"}
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="eyebrow text-ash">{product.category}</p>
          <h3 className="mt-1 text-sm font-medium text-ink">{product.name}</h3>
        </div>
        <p className="shrink-0 text-sm font-semibold text-ink">
          {formatPrice(product.price)}
        </p>
      </div>

      <p className="mt-1 line-clamp-1 text-xs text-ash">{product.description}</p>
    </article>
  );
}
