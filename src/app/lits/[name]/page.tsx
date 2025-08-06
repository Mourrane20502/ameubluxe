"use client";

import { products } from "@/data/data";
import { Check, CheckCircle, ShieldCheck, Truck } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

type TabType = "description" | "caracteristiques" | "specifications";
const tabs: TabType[] = ["description", "caracteristiques", "specifications"];

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();

  // Handle possible string | string[] for name param:
  let name = params?.name;
  if (Array.isArray(name)) {
    name = name[0]; // fallback to first if array
  }

  // Always call hooks unconditionally
  const [selectedTab, setSelectedTab] = useState<TabType>("description");
  const [mainImage, setMainImage] = useState<string | StaticImageData>("/placeholder.png");

  // Find product based on name param
  const product = name ? products.find((p) => p.name === decodeURIComponent(name!)) : undefined;

  // Update mainImage state when product changes
  useEffect(() => {
    if (product) {
      setMainImage(product.productImages?.[0] || product.image || "/placeholder.png");
    }
  }, [product]);

  // Redirect if no product found
  useEffect(() => {
    if (name && !product) {
      router.replace("/404");
    }
  }, [name, product, router]);

  if (!product) return null; // or a loading spinner

  const whatsappMessage = encodeURIComponent(`Je suis intéressé par ce produit: ${product.name}`);

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 text-sm text-gray-500">
          <Link href="/" className="hover:underline">Accueil</Link>
          <span className="mx-2">{'>'}</span>
          <Link href={`/${product.category}`} className="hover:underline capitalize">{product.category}</Link>
          <span className="mx-2">{'>'}</span>
          <span className="text-[#dbb350] font-semibold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left column: images */}
          <div>
            <div className="w-full h-64 sm:h-[450px] relative rounded-xl overflow-hidden">
              <Image
                src={mainImage}
                alt={product.name}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 600px"
                priority
                className="rounded-xl"
              />
            </div>

            <div className="flex gap-4 mt-4 flex-wrap justify-center">
              {product.productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`rounded-md cursor-pointer border-2 p-0.5 ${
                    mainImage === img ? "border-[#dbb350]" : "border-transparent"
                  } hover:scale-105 transition-transform focus:outline-none`}
                  aria-label={`Image ${index + 1}`}
                  type="button"
                >
                  <Image
                    src={img}
                    alt={`Image ${index + 1}`}
                    width={100}
                    height={100}
                    className="object-cover rounded-md"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right column: details */}
          <div className="flex flex-col gap-4">
            <div className="bg-gray-200 px-3 py-1 rounded-full text-gray-700 w-max">{product.category}</div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#222]">{product.name}</h1>

            {product.stars && product.stars > 0 && (
              <div className="flex gap-1 text-yellow-400 text-3xl">
               {Array.from({ length: 5 }, (_, i) => (
  <span key={i}>{i < (product.stars ?? 0) ? "★" : "☆"}</span>
))}
              </div>
            )}

            <p className="text-xl sm:text-2xl font-semibold text-[#dbb350]">{product.price.toLocaleString()} DH</p>

            <div className="mt-3 w-full max-w-xs">
              <label htmlFor="quantity" className="block font-semibold mb-1 text-gray-700">Quantité</label>
              <input
                id="quantity"
                type="number"
                min={1}
                max={10}
                defaultValue={1}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#dbb350]"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-6 text-gray-700">
              <div className="flex items-center gap-2 min-w-[140px]">
                <Truck className="text-[#dbb350]" size={20} />
                <span className="text-sm sm:text-base">Livraison gratuite</span>
              </div>
              <div className="flex items-center gap-2 min-w-[100px]">
                <CheckCircle className="text-[#dbb350]" size={20} />
                <span className="text-sm sm:text-base">En stock</span>
              </div>
              <div className="flex items-center gap-2 min-w-[130px]">
                <ShieldCheck className="text-[#dbb350]" size={20} />
                <span className="text-sm sm:text-base">Garantie 5 ans</span>
              </div>
            </div>

            <div className="mt-2 w-full max-w-3xl">
              <nav className="flex gap-4 border-b border-gray-300 overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={`py-2 px-4 font-semibold transition border-b-4 whitespace-nowrap ${
                      selectedTab === tab
                        ? "border-[#dbb350] text-[#dbb350]"
                        : "border-transparent text-gray-600 hover:text-[#dbb350]"
                    }`}
                    type="button"
                  >
                    {tab === "description" && "Description"}
                    {tab === "caracteristiques" && "Caractéristiques"}
                    {tab === "specifications" && "Spécifications"}
                  </button>
                ))}
              </nav>

              <div className="mt-4 text-gray-700 text-base leading-relaxed max-w-full whitespace-pre-line">
                {selectedTab === "description" && <p>{product.description}</p>}

                {selectedTab === "caracteristiques" && (
                  <ul className="list-disc list-inside space-y-2">
                    {product.caracteristiques && product.caracteristiques.length > 0 ? (
                      product.caracteristiques.map((item, i) => (
                        <li key={i} className="flex gap-3.5 items-center">
                          <Check color="gold" />
                          <span>{item}</span>
                        </li>
                      ))
                    ) : (
                      <p>Aucune caractéristique disponible.</p>
                    )}
                  </ul>
                )}

                {selectedTab === "specifications" && (
                  product.specifications ? (
                    <table className="w-full border-collapse text-sm sm:text-base">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <tr key={key} className="border-b border-gray-300">
                            <td className="py-1 font-semibold capitalize">{key}</td>
                            <td className="py-1">{value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>Aucune spécification disponible.</p>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full max-w-3xl">
              <a
                href={`https://wa.me/212695592907?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 flex items-center gap-3.5 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-center font-semibold text-lg transition w-full sm:w-auto"
              >
                Contacter sur WhatsApp <FaWhatsapp size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
