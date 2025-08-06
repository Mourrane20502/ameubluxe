import { products } from "@/data/data";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const canapes = products.filter((p) => p.category === "canape");

export default function CanapePage() {
  return (
    <div className="relative min-h-screen">
    
      <div className="fixed z-50 top-24 left-6 hidden md:block">
        <Link href="/" className="flex items-center text-[#dbb350] hover:text-[#caa13f] transition">
          <ChevronLeft size={28} />
          <span className="ml-2 font-medium">Retour</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">Accueil</Link>
          <span className="mx-2">{'>'}</span>
          <span className="text-[#dbb350] font-semibold">Canapés</span>
        </div>

        <h1 className="text-4xl font-bold mb-10 text-[#dbb350]">Canapés</h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {canapes.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
             
                <p className="font-bold text-[#dbb350] text-lg mb-4">
                  {product.price.toLocaleString()} DH
                </p>
                <Link
                  href={`/canape/${product.name}`}
                  className="inline-block bg-[#dbb350] text-white px-4 py-2 rounded hover:bg-[#caa13f] transition"
                >
                  Voir le produit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
