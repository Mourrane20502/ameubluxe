import Image from "next/image";
import Link from "next/link";
import { FaCouch, FaChair, FaBed, FaTable} from "react-icons/fa";
import { Lamp  , SofaIcon} from "lucide-react";
import salonBg from "../../assets/Moroccan modern salon 🇲🇦✨.jpeg";

const projects = [
  {
    id: 1,
    title: "Salon Moderne à Paris",
    tagline: "Confort et élégance marocaine",
    description: "Un canapé sur mesure alliant confort et design élégant, inspiré du style marocain traditionnel avec une touche contemporaine.",
    href: "/realisations/salon-moderne-paris",
    icon: FaCouch,
  },
  {
    id: 2,
    title: "Fauteuils Classiques",
    tagline: "Artisanat et noblesse des matériaux",
    description: "Fauteuils raffinés fabriqués à la main pour un bureau élégant, mêlant artisanat marocain et matériaux nobles.",
    href: "/realisations/fauteuils-classiques",
    icon: FaChair,
  },
  {
    id: 3,
    title: "Chambre Contemporaine",
    tagline: "Matériaux naturels et finitions haut de gamme",
    description: "Lits sur mesure avec matériaux naturels et finitions haut de gamme, sublimant le confort et le style marocain.",
    href: "/realisations/chambre-contemporaine",
    icon: FaBed,
  },
  {
    id: 4,
    title: "Table à manger artisanale",
    tagline: "Design unique et pratique",
    description: "Tables fabriquées à la main, parfaites pour les moments conviviaux, inspirées des motifs marocains.",
    href: "/realisations/table-artisanale",
    icon: FaTable,
  },
  {
    id: 5,
    title: "Éclairage d’ambiance",
    tagline: "Lampes marocaines traditionnelles",
    description: "Une sélection de lampes artisanales qui apportent chaleur et authenticité à vos espaces.",
    href: "/realisations/eclairage-ambiance",
    icon: Lamp,
  },
  {
    id: 6,
    title: "Canapés d’exception",
    tagline: "Confort et style revisités",
    description: "Des canapés sur mesure combinant design moderne et tradition marocaine pour un intérieur chaleureux.",
    href: "/realisations/canapes-exception",
    icon: SofaIcon,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-6 md:px-10 scroll-m-10 max-w-7xl mx-auto" id="realisations">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#ddb859] mb-16">
        Nos Réalisations
      </h2>

      <div className="grid gap-12 md:grid-cols-3">
        {projects.map(({ id, title, tagline, description, href, icon: Icon }) => (
          <Link
            key={id}
            href={href}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
          >
            <div className="absolute top-4 left-4 bg-[#ddb859] rounded-full p-3 shadow-md text-white text-2xl z-10">
              <Icon />
            </div>

            <div className="relative h-64 w-full overflow-hidden group-hover:brightness-90 transition duration-500">
              <Image
                src={salonBg}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
                <p className="text-sm text-[#ddb859] font-semibold">{tagline}</p>
              </div>
            </div>

            {/* Text content */}
            <div className="p-6 pt-12">
              <h3 className="text-xl font-semibold text-[#dbb350] mb-3">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
