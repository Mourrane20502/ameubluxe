import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "../../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-gray-800 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <Image
            src={logo}
            alt="Ameublux Logo"
            width={80}
            height={80}
            className="mb-4 rounded"
          />
          <p className="text-sm text-gray-600">
            Ameublux — votre partenaire de confiance pour la tapisserie sur
            mesure et le nettoyage professionnel au Maroc.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ddb859]">
            Liens rapides
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-[#ddb859]">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#tapisserie" className="hover:text-[#ddb859]">
                Tapisserie sur mesure
              </Link>
            </li>
            <li>
              <Link href="#nettoyage-service" className="hover:text-[#ddb859]">
                Nettoyage professionnel
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-[#ddb859]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#ddb859]">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +212 661-673158
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> contact@ameublux.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Casablanca, Maroc
            </li>
            <li className="flex gap-4 mt-2 text-lg">
              <a
                href="https://www.tiktok.com"
                target="_blank"
                className="hover:text-[#ddb859]"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="hover:text-[#ddb859]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="hover:text-[#ddb859]"
              >
                <FaFacebookF />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Ameublux. Tous droits réservés.
      </div>
    </footer>
  );
}
