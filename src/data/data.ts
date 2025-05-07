export type Product = {
  id: string;
  name: string;
  description: string;
  image: string | StaticImageData;
  price: number;
  category: "canape" | "fauteuille" | "lits" | "chaise";
};
import { StaticImageData } from "next/image";
import lit from "../assets/40.jpg";
export const products: Product[] = [
  // Canapés
  {
    id: "canape1",
    name: "Canapé Classique",
    description: "Un canapé élégant pour votre salon.",
    image: lit,
    price: 4999,
    category: "canape",
  },
  {
    id: "canape2",
    name: "Canapé Moderne",
    description: "Design contemporain et confortable.",
    image: lit,
    price: 5499,
    category: "canape",
  },
  {
    id: "canape3",
    name: "Canapé d'Angle",
    description: "Parfait pour optimiser l’espace.",
    image: lit,
    price: 5999,
    category: "canape",
  },
  {
    id: "canape4",
    name: "Canapé Convertible",
    description: "Idéal pour les petits espaces.",
    image: lit,
    price: 6299,
    category: "canape",
  },
  {
    id: "canape5",
    name: "Canapé en Velours",
    description: "Confort et élégance réunis.",
    image: lit,
    price: 6799,
    category: "canape",
  },

  // Fauteuilles
  {
    id: "fauteuille1",
    name: "Fauteuille Relax",
    description: "Parfait pour un moment de détente.",
    image: lit,
    price: 2299,
    category: "fauteuille",
  },
  {
    id: "fauteuille2",
    name: "Fauteuille Design",
    description: "Un style unique pour votre intérieur.",
    image: lit,
    price: 2599,
    category: "fauteuille",
  },
  {
    id: "fauteuille3",
    name: "Fauteuille Pivotant",
    description: "Pratique et moderne.",
    image: lit,
    price: 2799,
    category: "fauteuille",
  },
  {
    id: "fauteuille4",
    name: "Fauteuille en Cuir",
    description: "Luxueux et résistant.",
    image: lit,
    price: 3499,
    category: "fauteuille",
  },
  {
    id: "fauteuille5",
    name: "Fauteuille Scandinave",
    description: "Design nordique et épuré.",
    image: lit,
    price: 3199,
    category: "fauteuille",
  },

  // Lits
  {
    id: "lit1",
    name: "Lit King Size",
    description: "Espace et confort maximal.",
    image: lit,
    price: 7999,
    category: "lits",
  },
  {
    id: "lit2",
    name: "Lit Double",
    description: "Confortable pour deux personnes.",
    image: lit,
    price: 6899,
    category: "lits",
  },
  {
    id: "lit3",
    name: "Lit Simple",
    description: "Idéal pour une chambre d’enfant.",
    image: lit,
    price: 4399,
    category: "lits",
  },
  {
    id: "lit4",
    name: "Lit Coffre",
    description: "Avec espace de rangement intégré.",
    image: lit,
    price: 7199,
    category: "lits",
  },
  {
    id: "lit5",
    name: "Lit en Bois",
    description: "Naturel et chaleureux.",
    image: lit,
    price: 6299,
    category: "lits",
  },

  // Chaises
  {
    id: "chaise1",
    name: "Chaise de Salle à Manger",
    description: "Confort et simplicité.",
    image: lit,
    price: 999,
    category: "chaise",
  },
  {
    id: "chaise2",
    name: "Chaise de Bureau",
    description: "Confortable pour travailler.",
    image: lit,
    price: 1499,
    category: "chaise",
  },
  {
    id: "chaise3",
    name: "Chaise Pliante",
    description: "Pratique et peu encombrante.",
    image: lit,
    price: 899,
    category: "chaise",
  },
  {
    id: "chaise4",
    name: "Chaise en Velours",
    description: "Élégance et douceur.",
    image: lit,
    price: 1299,
    category: "chaise",
  },
  {
    id: "chaise5",
    name: "Chaise Scandinave",
    description: "Design épuré et tendance.",
    image: lit,
    price: 1399,
    category: "chaise",
  },
];
