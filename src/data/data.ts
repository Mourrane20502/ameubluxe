export type Product = {
  id: string;
  name: string;
  description: string;
  image: string | StaticImageData;
  price: number;
    productImages: (string | StaticImageData)[];
    stars? : number;
  category: "canape" | "fauteuille" | "lits" | "chaise";
   caracteristiques?: string[]; 
  specifications?: { [key: string]: string }; 
};
import { StaticImageData } from "next/image";
import lit from "../assets/40.jpg";
export const products: Product[] = [
  {
    id: "canape1",
    name: "Canapé Classique",
    stars : 5,
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,
    image: lit,
       productImages: [lit, lit, lit],
    price: 4999,
    category: "canape",
    caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
  },
  {
    id: "canape2",
    name: "Canapé Moderne",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
    price: 5499,
       stars : 5,
       productImages: [lit, lit, lit],
    category: "canape",
    caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
  },
  {
    id: "canape3",
    name: "Canapé d'Angle",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
   stars : 5,
    price: 5999,
       productImages: [lit, lit, lit],
    category: "canape",
    caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
  },
  {
    id: "canape4",
    name: "Canapé Convertible",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
   stars : 5,
    price: 6299,
       productImages: [lit, lit, lit],
    category: "canape",
    caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
  },
  {
    id: "canape5",
    name: "Canapé en Velours",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
    price: 6799,
       stars : 5,
       productImages: [lit, lit, lit],
    category: "canape",
    caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
  },

  // Fauteuilles
  {
    id: "fauteuille1",
    name: "Fauteuille Relax",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
       productImages: [lit, lit, lit],
    price: 2299,
       stars : 5,
    category: "fauteuille",
    caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
  },
  {
    id: "fauteuille2",
    name: "Fauteuille Design",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
       productImages: [lit, lit, lit],
    price: 2599,
       stars : 5,
    category: "fauteuille",
    caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
  },
  {
    id: "fauteuille3",
    name: "Fauteuille Pivotant",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
       productImages: [lit, lit, lit],
    price: 2799,
       stars : 5,
    category: "fauteuille",
    caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
  },
  {
    id: "fauteuille4",
    name: "Fauteuille en Cuir",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
       productImages: [lit, lit, lit],
       caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
    price: 3499,
       stars : 5,
    category: "fauteuille",
  },
  {
    id: "fauteuille5",
    name: "Fauteuille Scandinave",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
    price: 3199,
       stars : 5,
       productImages: [lit, lit, lit],
       caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
    category: "fauteuille",
  },

  // Lits
  {
    id: "lit1",
    name: "Lit King Size",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
    price: 7999,
       stars : 5,
       productImages: [lit, lit, lit],
       caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
    category: "lits",
  },
  {
    id: "lit2",
    name: "Lit Double",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
    price: 6899,
       stars : 5,
       productImages: [lit, lit, lit],
       caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
    category: "lits",
  },
  {
    id: "lit3",
    name: "Lit Simple",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
    price: 4399,
       stars : 5,
       productImages: [lit, lit, lit],
       caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
    category: "lits",
  },
  {
    id: "lit4",
    name: "Lit Coffre",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
    price: 7199,
       productImages: [lit, lit, lit],
       caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
    category: "lits",
       stars : 5,
  },
  {
    id: "lit5",
    name: "Lit en Bois",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
   stars : 5,
    price: 6299,
       productImages: [lit, lit, lit],
       caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
    category: "lits",
  },

  // Chaises
  {
    id: "chaise1",
    name: "Chaise de Salle à Manger",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
   stars : 5,
    price: 999,
       productImages: [lit, lit, lit],
    category: "chaise",
    caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
  },
  {
    id: "chaise2",
    name: "Chaise de Bureau",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
   stars : 5,
    price: 1499,
       productImages: [lit, lit, lit],
       caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
    category: "chaise",
  },
  {
    id: "chaise3",
    name: "Chaise Pliante",
       stars : 5,
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
    price: 899,
       productImages: [lit, lit, lit],
       caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
    category: "chaise",
  },
  {
    id: "chaise4",
    name: "Chaise en Velours",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
    price: 1299,
       stars : 5,
       productImages: [lit, lit, lit],
       caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},

    category: "chaise",
  },
  {
    id: "chaise5",
    name: "Chaise Scandinave",
description: `
Un canapé élégant pour votre salon. Fabriqué avec des matériaux de haute qualité, ce canapé allie confort et durabilité. Son design intemporel s’intègre parfaitement dans tout type d’intérieur. Idéal pour accueillir famille et amis, il offre un excellent soutien grâce à ses coussins rembourrés et son assise profonde.
`,    image: lit,
    price: 1399,
       stars : 5,
       productImages: [lit, lit, lit],
       caracteristiques: [
  "Cuir véritable de haute qualité",
  "Structure en bois massif",
  "Coussins déhoussables",
  "Assise haute densité",
  "Design moderne et élégant",
  "Garantie 5 ans"
],
specifications: {
  Longueur: "280 cm",
  Profondeur: "180 cm",
  Hauteur: "85 cm",
  "Hauteur d'assise": "45 cm",
  Matériau: "Cuir véritable",
  Couleur: "Noir/Marron",
  Poids: "85 kg",
  Places: "5-6 personnes",
},
    category: "chaise",
  },
];
