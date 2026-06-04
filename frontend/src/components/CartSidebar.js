"use client";

import { useCart } from "./ClientLayout";

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

export default function CartSidebar({ isOpen, onClose, items }) {
  const { onUpdateQty } = useCart();
  const total = items.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-bone shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <h2 className="text-base font-semibold text-ink">
            Tu carrito{" "}
            {items.length > 0 && (
              <span className="ml-1 text-sm font-normal text-ash">
                ({items.length} {items.length === 1 ? "producto" : "productos"})
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            aria-label="Cerrar carrito"
            className="rounded-full p-1.5 transition-colors hover:bg-stone-100"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Lista de productos */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-stone-300">
                <path d="M6 6h15l-1.5 9h-12z" strokeLinejoin="round" />
                <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
                <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
                <path d="M6 6 5 3H3" strokeLinecap="round" />
              </svg>
              <p className="mt-4 text-sm font-medium text-ink">Tu carrito está vacío</p>
              <p className="mt-1 text-xs text-ash">Agrega productos desde la tienda</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="h-20 w-16 shrink-0 overflow-hidden rounded-xl bg-stone-200">
                    {item.image_url ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image_url}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-[10px] text-ash">
                        Sin imagen
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-0.5">
                    <div className="flex items-start justify-between gap-1">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-ash">{item.category}</p>
                        <p className="mt-0.5 text-sm font-medium text-ink leading-tight">{item.name}</p>
                      </div>
                      <button
                        onClick={() => onUpdateQty(item.id, -item.qty)}
                        aria-label="Quitar del carrito"
                        className="shrink-0 rounded-full p-1 text-ash transition-colors hover:bg-stone-100 hover:text-ink"
                      >
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                          <path d="M18 6 6 18M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQty(item.id, -1)}
                          aria-label="Quitar uno"
                          disabled={item.qty <= 1}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink disabled:opacity-30"
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M5 12h14" />
                          </svg>
                        </button>
                        <span className="w-4 text-center text-sm font-medium text-ink">{item.qty}</span>
                        <button
                          onClick={() => onUpdateQty(item.id, 1)}
                          aria-label="Agregar uno"
                          disabled={typeof item.stock === "number" && item.qty >= item.stock}
                          className="flex h-6 w-6 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink disabled:opacity-30"
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-ink">
                        {formatPrice(Number(item.price) * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer con total y botón */}
        {items.length > 0 && (
          <div className="border-t border-line px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-ash">Subtotal</span>
              <span className="text-base font-semibold text-ink">{formatPrice(total)}</span>
            </div>
            <button className="w-full rounded-full bg-ink py-3 text-sm font-medium text-white transition-colors hover:bg-stone-700">
              Ir a pagar
            </button>
            <button
              onClick={onClose}
              className="w-full rounded-full border border-line py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
