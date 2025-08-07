"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import litImg from "../assets/40.jpg";
import bgImage from "../assets/hero.jpg";
import canapeImg from "../assets/canape.jpg";
import chaiseImg from "../assets/chaise.jpg";
import fauteuilImg from "../assets/feauteille.jpg";
import servicenettoyage from "../assets/service_de_nettoyage.jpg";
import tapisserie from "../assets/tapisserie.jpg";
import NosPartenaires from "./_components/NosPartenaires";
import { FaArrowUp } from "react-icons/fa";
import { useRef } from "react";
import TestimonialsSection from "./_components/Slider";
import ameubluxeImage from "../assets/bgimage.jpg"
import surMesureImage from "../assets/134887.jpg"
import WhyAmeubluxe from "./_components/WhyAmeubluxe";
import { motion } from 'framer-motion';
import TopHeader from "./(navigation)/TopHeader";
import MainHeader from "./(navigation)/Header";
import ProjectsSection from "./_components/Projects";
import MeetTheTeam from "./_components/Team";
export default function Page() {
  const topSectionRef = useRef<HTMLDivElement>(null)




  const moveToTopSection = () => {
  if (topSectionRef && topSectionRef.current) {
    topSectionRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

  
  return (
    <div ref={topSectionRef}>
         <TopHeader />
              <MainHeader />
    <div className="fixed z-50 right-8 bottom-8">
      <FaArrowUp onClick={moveToTopSection} className="cursor-pointer"  size={30} fill="#ddb859" />
    </div>
     <section className="relative w-full h-screen overflow-hidden">
  <Image
    src={bgImage}
    alt="Image de fond représentant le luxe et l'élégance"
    fill
    className="object-cover"
    priority
  />

  <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/30 via-black/50 to-black/70 backdrop-blur-sm z-10" />

  <motion.div
    className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <motion.h1
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
    >
      Bienvenue chez <span className="text-[#dbb350]">Ameubluxe</span>
    </motion.h1>

    <motion.p
      className="text-base sm:text-lg md:text-xl font-light max-w-3xl mb-8 leading-relaxed"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
    >
      Tapisseries sur mesure, collections exclusives — offrez une touche d élégance intemporelle à votre intérieur.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
    >
      <Link
        href="#collections"
        className="inline-block px-8 py-3 text-lg font-semibold rounded-full bg-[#ddb859] text-white hover:text-[#ddb859] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#ddb859] focus:ring-offset-2 transition-all duration-300 shadow-lg"
      >
        Voir les collections
      </Link>
    </motion.div>
  </motion.div>
</section>

  <section className="py-24 bg-white px-6 md:px-10 scroll-m-4" id="about">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    
    <div>
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={ameubluxeImage}
          alt="Showroom Ameubluxe"
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          placeholder="blur"
        />
      </div>
    </div>

    <div>
      <h2 className="text-3xl md:text-4xl font-semibold text-[#ddb859] mb-6 leading-snug">
        Ameubluxe : L’excellence du mobilier sur mesure
      </h2>

      <p className="text-gray-700 text-[1.1rem] leading-relaxed mb-5">
        Depuis notre création, nous marions savoir-faire artisanal et design contemporain
        pour concevoir des meubles uniques et durables. Chaque pièce est fabriquée avec passion,
        dans le respect des matériaux nobles et du détail.
      </p>

      <p className="text-gray-700 text-[1.1rem] leading-relaxed mb-8">
        Que ce soit pour votre intérieur ou vos projets professionnels, nous vous accompagnons
        à chaque étape avec rigueur, créativité et écoute.
      </p>

      <a
        href="#realisations"
        className="inline-block px-7 py-3 text-base font-medium text-white bg-[#ddb859] hover:bg-[#caa74f] rounded-full shadow-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#ddb859] focus:ring-offset-2"
      >
        Découvrir nos réalisations
      </a>
    </div>
  </div>
</section>



  <WhyAmeubluxe />

 <section className="bg-white py-10 px-6 md:px-10">
  <div className="max-w-7xl mx-auto text-center mb-14">
    <h2 className="text-3xl md:text-5xl text-left md:text-center font-bold text-[#ddb859] mb-4">
      Des services sur mesure pour vos besoins
    </h2>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      Découvrez notre savoir-faire artisanal et notre accompagnement personnalisé à travers nos services de tapisserie, nettoyage professionnel et conception de meubles.
    </p>
  </div>

  <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center mb-24 max-w-7xl mx-auto">
    <div>
      <h3 className="text-3xl font-semibold text-[#ddb859] mb-4">
        Tapisserie sur mesure
      </h3>
      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
        Donnez vie à vos espaces avec des créations uniques. Notre service de tapisserie sur mesure vous permet de personnaliser entièrement vos meubles, rideaux, et décorations textiles avec des tissus de qualité supérieure et un savoir-faire artisanal.
      </p>
      <ul className="text-gray-600 mb-6 space-y-2">
        <li>✔️ Choix infini de tissus et motifs</li>
        <li>✔️ Confection artisanale au Maroc</li>
        <li>✔️ Accompagnement personnalisé</li>
      </ul>
      <a
        href="https://wa.me/212695592907"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#ddb859] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#c6a14a] transition-all"
      >
        Demander un Devis
      </a>
    </div>
    <div>
      <Image
        src={tapisserie}
        alt="Tapisserie sur mesure"
        className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
      />
    </div>
  </div>

  <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto mb-24">
    <div>
      <Image
        width={600}
        height={400}
        src={servicenettoyage}
        alt="Nettoyage Professionnel"
        className="object-cover rounded-2xl shadow-lg w-full"
      />
    </div>
    <div>
      <h3 className="text-3xl font-semibold text-[#ddb859] mb-4">
        Service de Nettoyage Professionnel
      </h3>
      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
        Offrez à vos tapis et meubles un entretien de qualité avec notre service de nettoyage professionnel. Nous utilisons des techniques et des produits respectueux de l’environnement pour garantir la longévité de vos produits.
      </p>
      <p className="text-gray-700 text-lg mb-6 leading-relaxed">
        Nos experts assurent un nettoyage impeccable, que ce soit à domicile ou pour des projets professionnels. Laissez-nous prendre soin de vos biens précieux !
      </p>
      <a
        href="https://wa.me/212695592907"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#ddb859] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#c6a14a] transition-all"
      >
        Demander un Service
      </a>
    </div>
  </div>

  <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
    <div>
      <h3 className="text-3xl font-semibold text-[#ddb859] mb-4">
        Conception de Meubles sur Mesure
      </h3>
      <p className="text-gray-700 text-lg mb-4 leading-relaxed">
        Créez des pièces uniques qui reflètent parfaitement votre style et vos besoins. Nos artisans conçoivent des meubles 100% personnalisés : formes, dimensions, finitions, tout est adapté à votre intérieur.
      </p>
      <ul className="text-gray-600 mb-6 space-y-2">
        <li>✔️ Mobilier adapté à chaque espace</li>
        <li>✔️ Design contemporain ou traditionnel</li>
        <li>✔️ Fabrication artisanale haut de gamme</li>
      </ul>
      <a
        href="https://wa.me/212695592907"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#ddb859] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#c6a14a] transition-all"
      >
        Lancer mon projet
      </a>
    </div>
    <div>
      <Image
        src={surMesureImage}
        alt="Meubles sur mesure"
        className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
      />
    </div>
  </div>
</section>


      <section className="w-full py-10" id="collections">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#ddb859] mb-6">
            Nos Collections
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Découvrez nos différentes collections pensées pour sublimer chaque
            espace de votre maison.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {[
    { name: "Canape", image: canapeImg, badge: "Nouveau" },
    { name: "Fauteuille", image: fauteuilImg, badge: "Populaire" },
    { name: "Lits", image: litImg, badge: "Confort" },
    { name: "Chaise", image: chaiseImg, badge: "Élégant" },
  ].map((item) => (
    <Link
      key={item.name}
      href={`/${item.name.toLowerCase()}`}
      className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="absolute top-3 left-3 bg-[#ddb859] text-white text-xs font-medium px-3 py-1 rounded-full z-10 shadow-sm">
        {item.badge}
      </div>

      <div className="relative overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5 flex flex-col justify-between h-[220px]">
        <div>
          <h3 className="text-lg font-medium text-[#ddb859] mb-2">
            {item.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Explorez notre sélection de {item.name.toLowerCase()} conçus avec soin et élégance.
          </p>
        </div>

        <div className="mt-6">
          <span className="inline-block px-5 py-2 text-sm font-medium text-white bg-[#ddb859] rounded-full transition duration-300 hover:bg-[#caa74f]">
            Découvrir
          </span>
        </div>
      </div>
    </Link>
  ))}
</div>


        </div>
      </section>
      

      <ProjectsSection />
      <MeetTheTeam />
        <section className="bg-[#ddb859] mt-6 py-16 px-6 md:px-10 text-white max-w-7xl mx-auto rounded-xl shadow-lg">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Restez connecté avec Ameubluxe
        </h2>
        <p className="mb-8 text-lg font-light">
          Inscrivez-vous à notre newsletter pour recevoir les dernières nouveautés, offres exclusives, et inspirations déco.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Votre adresse email"
            className="w-full sm:w-auto border-black/80 border-1 px-4 py-3 rounded-full text-gray-800 font-medium focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white cursor-pointer text-[#ddb859] font-semibold px-6 py-3 rounded-full hover:text-white hover:bg-yellow-300 transition"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
      <TestimonialsSection />
      <NosPartenaires />
      <section className="w-full py-16 max-md:py-8 px-4" id="contact">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg max-w-xl mx-auto">
            <h2 className="text-3xl font-semibold text-center text-[#ddb859] mb-6">
              Contactez-nous
            </h2>

            <form className="space-y-6">
              <Input
                type="text"
                placeholder="Votre nom complet"
                className="w-full p-3 py-5 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ddb859]"
              />

              <Input
                type="tel"
                placeholder="Numéro de téléphone"
                className="w-full p-3 py-5  border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ddb859]"
              />

              <Input
                type="email"
                placeholder="Votre email"
                className="w-full p-3 py-5  border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ddb859]"
              />

              <Input
                type="text"
                placeholder="Sujet de votre message"
                className="w-full p-3 py-5  border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ddb859]"
              />

              <Textarea
                placeholder="Votre message"
                className="w-full p-3 border py-5  rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ddb859]"
                rows={4}
              />

              <Button className="w-full bg-[#ddb859] text-white hover:bg-[#c6a14a] p-3 rounded-md py-6 shadow-lg transition-all duration-300">
                Envoyer
              </Button>
            </form>
          </div>

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
    </div>
  );
}
