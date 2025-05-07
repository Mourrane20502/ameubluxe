import { products } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const chaise = products.filter((p) => p.category === "chaise");

export default function FauteillePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">Chaises</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {chaise.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="font-bold text-[#dbb350] text-lg">
                {product.price.toLocaleString()} DH
              </p>
              <Link
                href={`/chaise/${product.name}`}
                className="inline-block mt-3 bg-[#dbb350] text-white px-4 py-2 rounded hover:bg-[#caa13f] transition"
              >
                Voir le produit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
