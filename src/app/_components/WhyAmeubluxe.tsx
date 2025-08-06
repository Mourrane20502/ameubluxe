import { Star, Award, Users, Palette, Clock, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Star className="w-6 h-6" style={{ color: '#ddb859' }} />,
    title: "Excellence Artisanale",
    desc: "Chaque pièce est conçue avec un savoir-faire exceptionnel, alliant tradition et innovation pour créer des meubles d'exception qui traversent les générations.",
    highlight: "15+ ans d'expertise"
  },
  {
    icon: <Palette className="w-6 h-6" style={{ color: '#ddb859' }} />,
    title: "Design Sur-Mesure",
    desc: "Nos designers créent des solutions personnalisées qui reflètent parfaitement votre style de vie et vos besoins, pour un intérieur unique et raffiné.",
    highlight: "100% personnalisé"
  },
  {
    icon: <Award className="w-6 h-6" style={{ color: '#ddb859' }} />,
    title: "Matériaux Premium",
    desc: "Nous sélectionnons rigoureusement les matériaux les plus nobles : bois massifs, tissus haute couture, finitions luxueuses pour une qualité irréprochable.",
    highlight: "Garantie qualité"
  },
  {
    icon: <Users className="w-6 h-6" style={{ color: '#ddb859' }} />,
    title: "Service Client d'Exception",
    desc: "Notre équipe dédiée vous accompagne à chaque étape, de la conception à la livraison, avec un service personnalisé et une attention particulière aux détails.",
    highlight: "Support 24/7"
  },
  {
    icon: <Clock className="w-6 h-6" style={{ color: '#ddb859' }} />,
    title: "Livraison Express",
    desc: "Respect des délais garantis avec notre réseau logistique optimisé. Installation professionnelle incluse pour une expérience client parfaite.",
    highlight: "Délais respectés"
  },
  {
    icon: <Shield className="w-6 h-6" style={{ color: '#ddb859' }} />,
    title: "Garantie Étendue",
    desc: "Tous nos créations bénéficient d'une garantie complète et d'un service après-vente exceptionnel pour votre tranquillité d'esprit totale.",
    highlight: "Garantie 10 ans"
  }
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }),
  hover: {
    scale: 1.05,
    boxShadow: "0 12px 40px rgba(221, 184, 89, 0.5)",
    transition: { duration: 0.3 }
  }
};

const WhyAmeubluxe = () => {
  return (
    <section
      className="py-24 px-4 md:px-6"
      id="pourquoi-nous"
     
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 px-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: 'rgba(221, 184, 89, 0.25)' }}
          >
            <Star className="w-4 h-4" style={{ color: '#ddb859' }} />
            <span style={{ color: '#3a3a3a' }} className="text-sm font-medium">
              Excellence & Innovation
            </span>
          </div>

          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
            style={{ color: '#3a3a3a' }}
          >
            Pourquoi choisir{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #ddb859 0%, #b28f1e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}
            >
              Ameubluxe
            </span>{' '}
            <span style={{ color: '#ddb859' }}>?</span>
          </h2>

          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#7a7a7a' }}
          >
            Chez{' '}
            <span style={{ fontWeight: 600, color: '#ddb859' }}>Ameubluxe</span>, nous
            transformons vos espaces en véritables œuvres d art avec passion,
            précision et un savoir-faire d exception. Découvrez ce qui nous
            distingue dans l univers du mobilier de luxe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl p-8 border overflow-hidden shadow transition-colors duration-300"
              style={{
                backgroundColor: '#f9f9f9',
                borderColor: 'rgba(211, 211, 211, 0.5)',
                boxShadow: '0 4px 10px rgba(221, 184, 89, 0.15)',
                cursor: 'pointer',
                zIndex: 0,
              }}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover="hover"
            >
              <div
                className="absolute top-0 right-0 rounded-full -translate-y-10 translate-x-10"
                style={{
                  width: '80px',
                  height: '80px',
                  background:
                    'linear-gradient(135deg, #ddb859 0%, #b28f1e 100%)',
                  opacity: 0.05,
                  zIndex: 0
                }}
              ></div>

              <div className="relative z-10 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm transition-transform duration-500"
                  style={{
                    background:
                      'linear-gradient(135deg, #fff8dc 0%, #f0e6a9 100%)',
                    boxShadow: '0 1px 4px rgba(221, 184, 89, 0.2)'
                  }}
                >
                  {feature.icon}
                </div>

                <div
                  className="inline-flex items-center gap-2 mt-4 px-4 py-1 rounded-full"
                  style={{ backgroundColor: '#fff8dc' }}
                >
                  <div
                    className="rounded-full"
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#ddb859',
                      animation: 'pulse 2s infinite'
                    }}
                  ></div>
                  <span style={{ color: '#3a3a3a' }} className="text-xs font-medium">
                    {feature.highlight}
                  </span>
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                <h3
                  className="text-xl font-bold transition-colors duration-300"
                  style={{ color: '#3a3a3a' }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: '#7a7a7a' }} className="text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              <motion.div
                className="absolute bottom-0 left-0 w-full h-1 origin-left"
                style={{
                  background:
                    'linear-gradient(135deg, #ddb859 0%, #b28f1e 100%)',
                  transformOrigin: 'left',
                }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-20 rounded-2xl p-8 border flex flex-col md:flex-row items-center gap-6"
          style={{
            backgroundColor: '#f9f9f9',
            borderColor: 'rgba(221, 184, 89, 0.15)',
            boxShadow: '0 8px 30px rgba(221, 184, 89, 0.3)'
          }}
        >
          <div className="flex-1 text-left">
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: '#3a3a3a' }}
            >
              Prêt à transformer votre espace ?
            </h3>
            <p style={{ color: '#7a7a7a' }}>
              Contactez nos experts pour un devis personnalisé gratuit
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="px-8 py-4 font-semibold rounded-xl shadow transition-transform duration-300 hover:scale-105"
              style={{
                background:
                  'linear-gradient(135deg, #ddb859 0%, #b28f1e 100%)',
                color: '#3a3a3a',
                boxShadow: '0 8px 30px rgba(221, 184, 89, 0.5)'
              }}
            >
              Devis Gratuit
            </button>
            <button
              className="px-8 py-4 font-semibold rounded-xl border-2 transition-colors duration-300 hover:text-[#3a3a3a] hover:bg-[#ddb859]"
              style={{
                borderColor: '#ddb859',
                color: '#ddb859',
                backgroundColor: 'transparent'
              }}
            >
              Voir Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAmeubluxe;
