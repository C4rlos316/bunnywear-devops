async function getProducts() {
  const res = await fetch(
    "http://django-backend:8000/api/products/",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">
        BunnyWear 🐰
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow p-5"
          >
            <h2 className="text-xl font-bold">
              {product.name}
            </h2>

            <p className="text-gray-600 mt-2">
              {product.description}
            </p>

            <p className="mt-3 font-semibold">
              ${product.price}
            </p>

            <p className="text-sm text-gray-500">
              Stock: {product.stock}
            </p>

            <span className="inline-block mt-3 bg-black text-white px-3 py-1 rounded">
              {product.category}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
