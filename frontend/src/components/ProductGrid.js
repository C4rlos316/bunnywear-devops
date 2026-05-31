"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  const categories = useMemo(() => {
    const set = new Set(
      products.map((p) => p.category).filter(Boolean)
    );
    return ["Todos", ...Array.from(set)];
  }, [products]);

  const [active, setActive] = useState("Todos");

  const filtered = useMemo(() => {
    if (active === "Todos") return products;
    return products.filter((p) => p.category === active);
  }, [products, active]);

  return (
    <section id="tienda" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow text-terracotta">Colección</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Lo nuevo en la tienda
          </h2>
        </div>
        <p className="text-sm text-ash">
          {filtered.length}{" "}
          {filtered.length === 1 ? "producto" : "productos"}
        </p>
      </div>

      {/* Filtros por categoría */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-2 text-sm transition-all ${
              active === cat
                ? "border-ink bg-ink text-white"
                : "border-line text-ash hover:border-ink hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      ) : (
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <p className="text-lg font-medium text-ink">No hay productos aquí</p>
          <p className="mt-2 text-sm text-ash">
            Prueba con otra categoría.
          </p>
        </div>
      )}
    </section>
  );
}
