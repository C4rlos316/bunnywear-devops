import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const  API_PRUEBA_LOCAL = process.env.NEXT_PUBLIC_API_URL || "http://192.168.223.134:30729";
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://django-backend:8000";

async function getProducts() {
  try {
    const res = await fetch(`${API_PRUEBA_LOCAL}/api/products/`, {
      cache: "no-store",
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    console.error("No se pudieron cargar los productos:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <section
            id="tienda"
            className="mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center"
          >
            <p className="eyebrow text-terracotta">Colección</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink">
              Catálogo no disponible
            </h2>
            <p className="mt-3 max-w-md text-sm text-ash">
              No pudimos conectar con la tienda en este momento. Vuelve a
              intentarlo en unos minutos.
            </p>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
