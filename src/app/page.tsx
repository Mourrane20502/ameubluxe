import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, ShieldCheck, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import bgImage from "../assets/bgimage.jpg";
import servicenettoyage from "../assets/service_de_nettoyage.jpg";
import tapisserie from "../assets/tapisserie.jpg";
import NosPartenaires from "./_components/NosPartenaires";
import Testimonials from "./_components/Slider";

export default function Page() {
  const features = [
    {
      icon: <ShieldCheck className="text-[#ddb859]" size={32} />,
      title: "Qualité Garantie",
      desc: "Nous utilisons des matériaux haut de gamme et des techniques professionnelles pour garantir un résultat impeccable.",
    },
    {
      icon: <Sparkles className="text-[#ddb859]" size={32} />,
      title: "Finitions Élégantes",
      desc: "Nos artisans allient savoir-faire traditionnel et design moderne pour sublimer votre intérieur.",
    },
    {
      icon: <Clock className="text-[#ddb859]" size={32} />,
      title: "Respect des Délais",
      desc: "Nous livrons dans les temps, sans compromis sur la qualité de nos prestations.",
    },
    {
      icon: <Users className="text-[#ddb859]" size={32} />,
      title: "Écoute & Accompagnement",
      desc: "Chaque projet est unique : nous vous conseillons et vous accompagnons à chaque étape.",
    },
  ];
  return (
    <>
      <section className="relative w-full h-[80vh]">
        {/* Background Image */}
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 flex flex-col items-center gap-2 justify-center text-center text-white px-6">
          <h1 className="text-5xl sm:text-6xl font-semibold mb-4">
            chez Ameublux
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl mb-6">
            Tapisserie sur mesure, nettoyage professionnel, collections uniques
            — l’élégance au cœur de votre maison.
          </p>

          <a
            href="#collections"
            className="px-8 py-3 text-lg font-semibold text-white rounded-full shadow-lg bg-[#ddb859] hover:text-[#ddb859] hover:bg-white transition-all duration-300"
          >
            Voir les collections
          </a>
        </div>
      </section>

      <section className="py-20 max-md:py-10 bg-white px-6" id="pourquoi-nous">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#ddb859]">
            Pourquoi Nous Choisir ?
          </h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Chez <strong>Ameublux</strong>, nous transformons vos idées en
            réalité avec passion, précision et professionnalisme. Voici ce qui
            nous distingue.
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start bg-white shadow-md p-6 rounded-lg hover:scale-95 transition-all duration-300 gap-4 text-left"
              >
                <div className="bg-[#f7f7f7] p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-10 max-md:py-3 bg-white" id="tapisserie">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <Image
              src={tapisserie}
              alt="Tapisserie sur mesure"
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#ddb859] mb-6">
              Tapisserie sur mesure
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Donnez vie à vos espaces avec des créations uniques. Notre service
              de tapisserie sur mesure vous permet de personnaliser entièrement
              vos meubles, rideaux, et décorations textiles avec des tissus de
              qualité supérieure et un savoir-faire artisanal.
            </p>

            <ul className="text-gray-600 mb-6 space-y-2">
              <li>✔️ Choix infini de tissus et motifs</li>
              <li>✔️ Confection artisanale au Maroc</li>
              <li>✔️ Accompagnement personnalisé</li>
            </ul>

            <a
              href="#contact"
              className="inline-block bg-[#ddb859] text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-[#c6a14a] transition-all duration-300"
            >
              Demander un Devis
            </a>
          </div>
        </div>
      </section>

      <section
        className="w-full py-16 max-md:py-8 bg-white"
        id="nettoyage-service"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start  gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl font-semibold text-[#333] mb-4">
                Service de Nettoyage Professionnel
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Offrez à vos tapis et meubles un entretien de qualité avec notre
                service de nettoyage professionnel. Nous utilisons des
                techniques et des produits respectueux de l environnement pour
                garantir la longévité de vos produits.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nos experts assurent un nettoyage impeccable, que ce soit à
                domicile ou pour des projets professionnels. Laissez-nous
                prendre soin de vos biens précieux !
              </p>
              <a
                href="#demande-service"
                className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#ddb859] rounded-full shadow-lg hover:bg-[#c6a14a] transition-all duration-300"
              >
                Demander un Service
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="relative w-full h-80">
                <Image
                  width={600}
                  height={800}
                  src={servicenettoyage}
                  alt="Nettoyage Professionnel"
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <NosPartenaires />

      <section className="w-full py-16 max-md:py-8 px-4" id="contact">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Form  */}
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-[#ddb859] mb-6">
              Contactez-nous
            </h2>

            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Votre nom complet"
                className="w-full p-3 py-5 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ddb859]"
              />

              {/* Phone Number Input */}
              <Input
                type="tel"
                placeholder="Numéro de téléphone"
                className="w-full p-3 py-5  border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ddb859]"
              />

              {/* Email Input */}
              <Input
                type="email"
                placeholder="Votre email"
                className="w-full p-3 py-5  border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ddb859]"
              />

              {/* Subject Input */}
              <Input
                type="text"
                placeholder="Sujet de votre message"
                className="w-full p-3 py-5  border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ddb859]"
              />

              {/* Message Textarea */}
              <Textarea
                placeholder="Votre message"
                className="w-full p-3 border py-5  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ddb859]"
                rows={4}
              />

              {/* Submit Button */}
              <Button className="w-full bg-[#ddb859] text-white hover:bg-[#c6a14a] p-3 rounded-md py-6 shadow-lg transition-all duration-300">
                Envoyer
              </Button>
            </form>
          </div>

          {/* Google Maps Section */}
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.2165058247056!2d-7.669785824225398!3d33.573727473341094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d37f1259f8ab%3A0x5435088c8387fda8!2sAmeubluxe!5e0!3m2!1sfr!2sma!4v1746477007982!5m2!1sfr!2sma"
              width="100%"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
