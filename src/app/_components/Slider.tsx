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
    <section
      className="w-full bg-gradient-to-br from-white to-[#f9f7f1] py-20 px-6"
      id="testimonials"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#ddb859] mb-4">
          Ce que disent nos clients
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Des témoignages authentiques de nos clients satisfaits partout au
          Maroc.
        </p>

        <div className="relative bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-10 transition-all duration-500 ease-in-out">
          <p className="text-gray-700 text-lg leading-relaxed italic mb-8 transition-opacity duration-500 ease-in-out">
            “{current.content}”
          </p>

          <div className="flex flex-col items-center">
            <Image
              src={current.avatar}
              alt={current.name}
              width={80}
              height={80}
              className="rounded-full border-4 border-[#ddb859] mb-3 object-cover hover:scale-105 transition-transform"
            />
            <p className="font-semibold text-gray-800 text-xl">
              {current.name}
            </p>
            <p className="text-sm text-gray-500">{current.location}</p>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="bg-[#ddb859] hover:bg-[#c7a74b] text-white p-2 rounded-full shadow-md transition"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="bg-[#ddb859] hover:bg-[#c7a74b] text-white p-2 rounded-full shadow-md transition"
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
