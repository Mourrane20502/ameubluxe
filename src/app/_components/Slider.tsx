import { Star } from "lucide-react";
import nadiaImage from "../../assets/nadia.avif"
const testimonials = [
  {
    name: "Sophie Martin",
    role: "Propriétaire",
    content: "Ameubluxe a transformé notre salon avec des meubles sur mesure d'une qualité exceptionnelle. Le service client est remarquable.",
    rating: 5,
    image : nadiaImage
  },
  {
    name: "Ahmed Benali",
    role: "Architecte d'intérieur",
    content: "Je collabore régulièrement avec Ameubluxe pour mes projets. Leur expertise en tapisserie est inégalée au Maroc.",
    rating: 5,
        image : nadiaImage

  },
  {
    name: "Marie Dubois",
    role: "Cliente fidèle",
    content: "Trois ans après l'achat, nos fauteuils sont toujours comme neufs. La qualité des matériaux est exceptionnelle.",
    rating: 5,
        image : nadiaImage

  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#ddb859] mb-8 font-heading">
          Ce que disent nos clients
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
          La satisfaction de nos clients est notre plus belle récompense.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card p-8 shadow-sm rounded-2xl shadow-soft hover:shadow-luxury transition-all duration-300 text-left"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-[#ddb859] " color="[#ddb859] " />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                {testimonial.content}
              </p>
              <div>
                <h4 className="font-semibold text-card-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;