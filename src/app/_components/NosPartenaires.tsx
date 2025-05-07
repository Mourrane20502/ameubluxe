"use client";
import Image from "next/image";
import glovo from "../../assets/glovo.png";
import haworth from "../../assets/haworth.png";
import hoceimaHolding from "../../assets/hoceima.jpeg";
import bmce from "../../assets/logobmce.png";

const partners = [bmce, glovo, hoceimaHolding, haworth];

export default function NosPartenaires() {
  const repeatedPartners = [...partners, ...partners];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ddb859] mb-10">
          Nos Partenaires
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex w-max animate-scroll gap-12">
            {repeatedPartners.map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-[200px]">
                <Image
                  src={logo}
                  alt={`Logo partenaire ${i + 1}`}
                  width={200}
                  height={200}
                  className="h-20 w-auto mx-auto  transition duration-300"
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
          animation: scroll 15s linear infinite;
        }
      `}</style>
    </section>
  );
}
