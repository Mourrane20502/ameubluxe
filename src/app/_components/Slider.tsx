"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import nadia from "../../assets/nadia.avif";

const testimonials = [
  {
    name: "Nadia El Idrissi",
    location: "Casablanca",
    content:
      "Un service irréprochable ! Mon canapé a retrouvé une seconde jeunesse. L'équipe Ameublux est professionnelle, ponctuelle et très à l'écoute. Je recommande les yeux fermés.",
    avatar: nadia,
  },
  {
    name: "Youssef Benali",
    location: "Rabat",
    content:
      "La qualité du tissu et la précision des finitions sont impressionnantes. Ameublux m’a aidé à redonner vie à mes fauteuils en un temps record.",
    avatar: nadia,
  },
  {
    name: "Fatima Zahra Amrani",
    location: "Marrakech",
    content:
      "J'ai été bluffée par le professionnalisme de l'équipe. Le résultat est au-delà de mes attentes. Merci Ameublux pour votre passion du détail.",
    avatar: nadia,
  },
  {
    name: "Rachid El Mansouri",
    location: "Tanger",
    content:
      "Le service client est exceptionnel. J’ai été accompagné à chaque étape du projet. Mon salon est maintenant magnifique et confortable.",
    avatar: nadia,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="bg-white py-16 max-md:py-0 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ddb859] mb-2">
          Ce que disent nos clients
        </h2>
        <p className="text-gray-600 mb-8">
          Des avis authentiques de nos clients satisfaits à travers tout le
          Maroc.
        </p>

        <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-10">
          <p className="text-gray-700 italic mb-6">{`“${current.content}”`}</p>
          <div className="flex flex-col items-center">
            <Image
              src={current.avatar}
              alt={current.name}
              width={106}
              height={86}
              className="rounded-full mb-2 object-cover border border-[#ddb859]"
            />
            <p className="font-semibold text-gray-800">{current.name}</p>
            <p className="text-sm text-gray-500">{current.location}</p>
          </div>

          <div className="flex justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="bg-[#ddb859] text-white rounded-full p-2 hover:bg-[#caa743] transition"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="bg-[#ddb859] text-white rounded-full p-2 hover:bg-[#caa743] transition"
              aria-label="Suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
