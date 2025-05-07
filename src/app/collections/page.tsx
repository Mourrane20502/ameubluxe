"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import chaise from "../../assets/25295.jpg";
import lits from "../../assets/40.jpg";
import canape from "../../assets/canape.jpg";
import feateuille from "../../assets/feauteille.jpg";

const categories = [
  {
    slug: "canape",
    name: "Canapé",
    description:
      "Explorez notre collection de canapés luxueux, alliant confort et design moderne. Chaque canapé est fabriqué avec des matériaux de haute qualité pour offrir un confort optimal et une durabilité exceptionnelle. Que vous recherchiez un canapé pour votre salon ou pour un espace plus intime, nos modèles s'adaptent à tous les besoins, tout en apportant une touche d'élégance à votre intérieur.",
    image: canape,
  },
  {
    slug: "fauteuille",
    name: "Fauteuille",
    description:
      "Nos fauteuils sont l'incarnation du confort et du style. Conçus pour s'intégrer parfaitement dans n'importe quel décor, nos fauteuils sont fabriqués à partir de matériaux de qualité supérieure, garantissant un soutien ergonomique et un design raffiné. Parfaits pour un coin lecture ou pour ajouter une touche de luxe à votre espace de vie, nos fauteuils offrent un confort inégalé tout en apportant une touche moderne à votre décor.",
    image: feateuille,
  },
  {
    slug: "lits",
    name: "Lits",
    description:
      "Un bon sommeil est essentiel, et avec nos lits modernes, vous bénéficierez d'une qualité de sommeil optimale. Nos lits sont conçus avec des cadres robustes et des matelas ergonomiques pour garantir une posture idéale pendant la nuit. Disponibles dans une gamme de styles, de tailles et de matériaux, nos lits sont idéals pour transformer votre chambre en un havre de paix où vous pourrez vous détendre et vous ressourcer.",
    image: lits,
  },
  {
    slug: "chaise",
    name: "Chaise",
    description:
      "Nos chaises sont l'équilibre parfait entre confort et esthétique. Que ce soit pour une salle à manger, un bureau ou un coin de détente, nos chaises sont conçues pour apporter une touche de style tout en offrant un confort exceptionnel. Fabriquées avec des matériaux de haute qualité et dans une variété de styles, nos chaises sont idéales pour s'adapter à tout type d'intérieur et pour offrir une expérience agréable à ceux qui les utilisent.",
    image: chaise,
  },
];

export default function CollectionsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nos Collections
        </h1>

        <div className="space-y-12">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/collections/${cat.slug}`}
              className="group block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                </div>

                <div className="flex flex-col justify-center items-start text-center md:text-left">
                  <h2 className="text-2xl font-semibold text-[#dbb350] group-hover:text-[#dbb350] transition-colors mb-4">
                    {cat.name}
                  </h2>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                    {cat.description}
                  </p>
                  <Button asChild>
                    <Link
                      href={`/collections/${cat.slug}`}
                      className="py-6 px-14 bg-[#dbb350] text-white font-semibold text-sm rounded-lg hover:bg-[#b4932c] transition-all duration-300"
                    >
                      Voir les produits
                    </Link>
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
