import { products } from "@/data/data";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import feauteillebg from "../../assets/Atelier Madame Rêve - Tapissier d'ameublement.jpeg"

const fauteuilles = products.filter((p) => p.category === "fauteuille");

export default function FauteuillePage() {
  return (
    <div className="bg-white min-h-screen text-gray-800">
   <header
      className="relative h-72 flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${feauteillebg.src})` }}
    >        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2">
            Collection de Fauteuils
          </h1>
          <p className="text-md md:text-lg max-w-xl mx-auto">
            Confort, style et sophistication réunis dans nos fauteuils haut de gamme.
          </p>
        </div>
      </header>

      {/* Return Button */}
      <div className="fixed z-50 top-24 left-6 hidden md:block">
        <Link
          href="/"
          className="flex items-center text-[#dbb350] hover:text-[#caa13f] transition"
        >
          <ChevronLeft size={28} />
          <span className="ml-2 font-medium">Retour</span>
        </Link>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">
            Accueil
          </Link>
          <span className="mx-2">{'>'}</span>
          <span className="text-[#dbb350] font-medium">Fauteuils</span>
        </nav>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#dbb350] mb-12">
          Nos Fauteuils
        </h2>

        {/* Product Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {fauteuilles.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#dbb350] text-white text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                  Luxe
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#dbb350] font-semibold text-base mb-3">
                    {product.price.toLocaleString()} DH
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Un fauteuil qui allie élégance moderne et confort absolu.
                  </p>
                </div>

                <div className="mt-5">
                  <Link
                    href={`/fauteuille/${product.name}`}
                    className="inline-block text-sm px-5 py-2 bg-[#dbb350] text-white rounded-full font-medium hover:bg-[#caa13f] transition"
                  >
                    Voir le produit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
