import Image from "next/image";
import achraf from "../../assets/achraf.jpg";

const teamMembers = [
  {
    id: 1,
    name: "Achraf Bouhakya",
    role: "Fondateur & Designer",
    photo: achraf,
    bio: "Passionné par le mobilier sur mesure, Achraf crée des designs uniques alliant tradition et modernité.",
  },
  {
    id: 2,
    name: "Amir El Hadi",
    role: "Chef d'atelier",
    photo: achraf,
    bio: "Expert en savoir-faire artisanal, Amir supervise la fabrication avec rigueur et passion.",
  },
  {
    id: 3,
    name: "Mohamed Mourad",
    role: "Responsable Commerciale",
    photo: achraf,
    bio: "Mohamed accompagne nos clients avec écoute et professionnalisme pour répondre à leurs besoins.",
  },
];

export default function MeetTheTeam() {
  return (
    <section className="bg-white py-10 px-6 md:px-10 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#ddb859] mb-16">
        Rencontrez notre équipe
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
        {teamMembers.map(({ id, name, role, photo, bio }) => (
          <div
            key={id}
            className="bg-[#fefcf9] rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 duration-300 relative"
          >
            <div className="absolute top-0 left-0 w-16 h-1 rounded-tr-xl bg-[#ddb859]" />

            <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-[#ddb859] before:absolute before:inset-0 before:rounded-full before:bg-[#ddb859] before:opacity-10 before:-z-10">
              <Image
                src={photo}
                alt={name}
                fill
                sizes="(max-width: 768px) 10rem, 16rem"
                className="object-cover"
                priority
              />
            </div>

          

            <h3 className="text-2xl font-bold text-[#dbb350] mb-1">{name}</h3>
            <p className="text-sm text-gray-600 italic mb-4">{role}</p>
            <p className="text-gray-700 text-sm max-w-xs mb-5">{bio}</p>

            <div className="w-12 border-b-2 border-[#ddb859] mb-5" />

           
          </div>
        ))}
      </div>
    </section>
  );
}
