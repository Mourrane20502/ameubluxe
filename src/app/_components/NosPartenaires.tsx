"use client";
import Image from "next/image";
import bmce from "../../assets/logobmce.png";

export default function NosPartenaires() {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ddb859] mb-10">
          Nos Partenaires
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex w-[calc(250px*10)] animate-scroll whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="inline-block w-[250px]  px-4">
                <Image
                  src={bmce}
                  alt="Adidas Logo"
                  width={200}
                  height={100}
                  className="h-20 w-auto mx-auto  hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
