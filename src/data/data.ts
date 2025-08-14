
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
import feateuillevert from "../assets/feauteille/vert/0bfbfba2-6200-4d9a-9d46-88f6325ab165.jpg"
import feateuillevert2 from "../assets/feauteille/vert/7ec58aea-1dca-4b69-8bc8-4011d1733356.jpg"
import feateuillevert3 from "../assets/feauteille/vert/7fc714f8-9837-415b-a3fc-f6a3423df69b.jpg"
import canapeOrange from "../assets/canape/orange/3bba2a3a-2903-4f7e-978a-8a46a41fadc1.jpg"
import canapeOrange2 from "../assets/canape/orange/6ca860aa-09ae-4c70-8972-d6e2111cb833 (1).jpg"
import canapeOrange3 from "../assets/canape/orange/73ae62d4-5c2f-42f6-bd95-76cd7b2e87cc.jpg"
import chaiseWhite from "../assets/chaise/white/8fcc2d4e-16b1-4146-913c-257aab1a4ccd.jpg"

import canapeGris from "../assets/canape/gray/005b7d87-3d80-420f-b03b-2879039ce26b.jpg"
import canapeGris2 from "../assets/canape/gray/1b293778-7bf6-476d-8dd6-5b4fe8c882c8.jpg"
import canapeGris3 from "../assets/canape/gray/1c6e8363-5a8a-4660-a829-ee00b23fedab.jpg"
import canapeGris4 from "../assets/canape/gray/3ec5e182-2f29-4d17-94d6-0b4f54a08013.jpg"
import canapeElegence from "../assets/canape/elegence/1f380c9f-2693-463d-a7e0-22dde2c30cdc.jpg"
import canapeElegence2 from "../assets/canape/elegence/3b17b696-aa80-46a4-90c4-f6f5161086f3 - Copie.jpg"
import canapeElegence3 from "../assets/canape/elegence/5ac759f5-a859-489f-8478-33ba505c07e0.jpg"
import canapeElegence4 from "../assets/canape/elegence/7b16f49b-7451-45f4-a137-3bdfdbf298e9.jpg"
import canapeElegence5 from "../assets/canape/elegence/7cd4a8cb-7cae-4229-9a74-4df2db60fdcb.jpg"
import canapeBleu from "../assets/canape/bleu/4e7897f4-6bb0-4f4a-b8cb-2e325b75fdbf.jpg"
import canapeBleu2 from "../assets/canape/bleu/4f3eaadc-bb19-4b37-be69-b975026ecc9a.jpg"
import canapeBleu3 from "../assets/canape/bleu/fd56c32b-948a-405f-8cea-545c964e06fd.jpg"
import canapeBleu4 from "../assets/canape/bleu/ff3a20f5-7343-41e0-8a13-a0cb8e954b27.jpg"
import canapeBeige from "../assets/canape/white/e074273e-f3e1-4768-9992-b9baed792648.jpg"
import canapeBeige2 from "../assets/canape/white/f5ca64c3-4cfe-4641-870b-fd607e0ed5ec.jpg"
import canapeBeige3 from "../assets/canape/white/f6e6ac3a-e88d-416b-9de2-dbec9fa942cc.jpg"
import canapeBeige4 from "../assets/canape/white/f8a590de-9c26-4e2b-acfe-f606fa38c9e6.jpg"
import chaiseMarron from "../assets/chaise/marron/f617d6b7-9e50-4652-82c6-c8a1765127fe.jpg"
import chaiseGold from "../assets/chaise/gold/d28fc85f-0ef9-4914-856a-56be0f4aa2d8.jpg"
import chaiseJaune from "../assets/chaise/yellow/88c115f0-89c6-4475-8d6d-ce49064e3706.jpg"
import canapeVert from "../assets/canape/green/0bfbfba2-6200-4d9a-9d46-88f6325ab165.jpg"
import canapeVert2 from "../assets/canape/green/7ec58aea-1dca-4b69-8bc8-4011d1733356.jpg"
import feautillewhite from "../assets/feauteille/white/1a8521d8-e415-43d5-a867-23131241b92b.jpg"
import feautillewhite2 from "../assets/feauteille/white/937cc9aa-5426-400b-a03e-e753d6b08ce8.jpg"
import feautillewhite3 from "../assets/feauteille/white/96bcac5b-a65a-4e28-80b7-36516de82695.jpg"
import litBleu from "../assets/lit/bleu/c50a6a00-fa97-4d3d-b4f1-b875ccddf302.jpg"
import litBleu2 from "../assets/lit/bleu/c58caa92-7355-41ac-bd34-4c92c2a26240.jpg"
import litBleu3 from "../assets/lit/bleu/e68cf78e-56cb-4392-890b-a098347d4bf3.jpg"
import litBleu4 from "../assets/lit/bleu/f3795e63-91c0-4c6b-9103-ecb8d121ff4e.jpg"
import litGris from "../assets/lit/gray/b53c66d4-8773-4ea9-9375-d90d310c3595.jpg"
import litGris2 from "../assets/lit/gray/c8a61818-8a93-4e67-b6a7-8d79f179f157.jpg"
import litGris3 from "../assets/lit/gray/e2596339-9c84-455f-a037-ead1d9b8ffc0.jpg"
import litGris4 from "../assets/lit/gray/f926d701-1309-4f29-849a-ad6f65e3ecfc.jpg"
import feautilleGris from "../assets/feauteille/gray/96bcac5b-a65a-4e28-80b7-36516de82695 - Copie.jpg"
import feautilleGris2 from "../assets/feauteille/gray/9e50e71d-ccfc-464e-a647-0d09fa0d344f - Copie.jpg"
import feautilleGris3 from "../assets/feauteille/gray/9ec00962-5ced-4b92-9dda-938f1fb67ab5 - Copie.jpg"
import canapeBleuCiel from "../assets/canape/blueciel/bf7c5f5d-8634-4c68-91f2-d03b9ce03f88.jpg"
import canapeBleuCiel2 from "../assets/canape/blueciel/bff8b36a-12ea-47ca-aafc-8f8ae565a56c.jpg"
import canapeBleuCiel3 from "../assets/canape/blueciel/c098091c-4067-454e-b7f9-c45eb4ce1500.jpg"
import canapeBleuCiel4 from "../assets/canape/blueciel/c5f13b3b-9c8d-41ce-ae89-5b8aa50d0cdb.jpg"



export const products: Product[] = [
  {
  id: "canapeOrange1",
  name: "Canapé Design Orange",
  description: `
Apportez chaleur et modernité à votre salon avec ce canapé au revêtement orange éclatant. Son tissu de qualité supérieure, doux et résistant, s’harmonise parfaitement avec un style contemporain. Grâce à son assise généreuse et ses coussins moelleux, il offre un confort optimal pour vos moments de détente en famille ou entre amis.
`,
  image: canapeOrange,
  productImages: [canapeOrange, canapeOrange2, canapeOrange3],
  price: 1999,
  stars: 4.5,
  category: "canape",
  caracteristiques: [
    "Tissu premium anti-taches",
    "Structure en bois massif",
    "Coussins déhoussables",
    "Assise haute densité",
    "Design moderne et lumineux",
    "Garantie 3 ans"
  ],
  specifications: {
    Longueur: "240 cm",
    Profondeur: "95 cm",
    Hauteur: "85 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Tissu polyester haut de gamme",
    Couleur: "Orange",
    Poids: "70 kg",
    Places: "3-4 personnes"
  }
}
,
 {
  id: "canapeGris1",
  name: "Canapé Moderne Gris",
  description: `
Un canapé élégant et intemporel pour sublimer votre salon. Sa teinte grise neutre s’adapte parfaitement à tous les styles de décoration, tandis que son revêtement en tissu doux et résistant assure un confort optimal. Idéal pour vos moments de détente, il combine design contemporain et assise moelleuse.
`,
  image: canapeGris,
  stars: 5,
  price: 1899,
  productImages: [canapeGris, canapeGris2, canapeGris3,canapeGris4],
  category: "canape",
  caracteristiques: [
    "Tissu premium anti-taches",
    "Structure en bois massif",
    "Coussins déhoussables",
    "Assise et dossier rembourrés haute densité",
    "Style moderne et minimaliste",
    "Garantie 3 ans"
  ],
  specifications: {
    Longueur: "250 cm",
    Profondeur: "95 cm",
    Hauteur: "85 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Tissu polyester haut de gamme",
    Couleur: "Gris clair",
    Poids: "75 kg",
    Places: "3-4 personnes"
  }
}
,
{
  id: "canapeGris2",
  name: "Canapé Élégance Gris Perle",
  description: `
Un canapé raffiné qui apporte une touche de modernité à votre salon. Sa couleur gris perle s’intègre parfaitement à tous les styles d’intérieur, tandis que son revêtement en tissu doux et résistant garantit un confort durable. Idéal pour se détendre, lire ou partager un moment convivial.
`,
  image: canapeElegence,
  stars: 5,
  price: 1899,
  productImages: [canapeElegence, canapeElegence2, canapeElegence3,canapeElegence4,canapeElegence5],
  category: "canape",
  caracteristiques: [
    "Tissu premium anti-taches",
    "Structure en bois massif",
    "Coussins déhoussables",
    "Assise et dossier rembourrés haute densité",
    "Design moderne et sobre",
    "Garantie 3 ans"
  ],
  specifications: {
    Longueur: "250 cm",
    Profondeur: "95 cm",
    Hauteur: "85 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Tissu polyester haut de gamme",
    Couleur: "Gris perle",
    Poids: "75 kg",
    Places: "3-4 personnes"
  }
}
,
{
  id: "canapeBleu1",
  name: "Canapé Confort Bleu Marine",
  description: `
Ajoutez une touche d’élégance et de fraîcheur à votre salon avec ce canapé bleu marine au style intemporel. Son revêtement en tissu de qualité supérieure, doux au toucher, apporte chaleur et modernité à votre intérieur. Conçu pour un confort optimal, il dispose d’une assise moelleuse et d’un dossier ergonomique.
`,
  image: canapeBleu,
  stars: 5,
  price: 2099,
  productImages: [canapeBleu, canapeBleu2, canapeBleu3,canapeBleu4],
  category: "canape",
  caracteristiques: [
    "Tissu premium anti-taches",
    "Structure en bois massif",
    "Coussins déhoussables",
    "Rembourrage haute densité",
    "Style élégant et contemporain",
    "Garantie 3 ans"
  ],
  specifications: {
    Longueur: "245 cm",
    Profondeur: "95 cm",
    Hauteur: "85 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Tissu polyester haut de gamme",
    Couleur: "Bleu marine",
    Poids: "72 kg",
    Places: "3-4 personnes"
  }
}
,
  {
  id: "canapeWhite2",
  name: "Canapé Prestige Blanc Neige",
  description: `
Un canapé lumineux et élégant qui apporte une touche de pureté à votre salon. Sa couleur blanc neige met en valeur la décoration de votre intérieur et crée une atmosphère raffinée. Son assise généreuse et son revêtement haut de gamme assurent confort et durabilité.
`,
  image: canapeBeige,
  stars: 5,
  price: 2199,
  productImages: [canapeBeige, canapeBeige2, canapeBeige3,canapeBeige4],
  category: "canape",
  caracteristiques: [
    "Revêtement en tissu anti-taches de qualité supérieure",
    "Structure en bois massif",
    "Coussins déhoussables",
    "Rembourrage haute densité",
    "Style moderne et épuré",
    "Garantie 3 ans"
  ],
  specifications: {
    Longueur: "250 cm",
    Profondeur: "95 cm",
    Hauteur: "85 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Tissu polyester haut de gamme",
    Couleur: "Blanc neige",
    Poids: "73 kg",
    Places: "3-4 personnes"
  }
},
{
  id: "canapeVert1",
  name: "Canapé Relax Vert Forêt",
  description: `
Apportez une touche naturelle et élégante à votre salon avec ce canapé vert forêt. Son tissu doux et résistant, associé à un design moderne, en fait la pièce parfaite pour créer une ambiance chaleureuse et accueillante. Idéal pour se détendre après une longue journée.
`,
  image: canapeVert,
  stars: 5,
  price: 2049,
  productImages: [canapeVert, canapeVert2],
  category: "canape",
  caracteristiques: [
    "Tissu premium anti-taches",
    "Structure en bois massif",
    "Coussins déhoussables",
    "Rembourrage haute densité",
    "Style contemporain et chaleureux",
    "Garantie 3 ans"
  ],
  specifications: {
    Longueur: "245 cm",
    Profondeur: "95 cm",
    Hauteur: "85 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Tissu polyester haut de gamme",
    Couleur: "Vert forêt",
    Poids: "72 kg",
    Places: "3-4 personnes"
  }
},
{
  id: "canapeBleu2",
  name: "Canapé Relax Bleu Marine",
  description: `
Apportez élégance et profondeur à votre salon avec ce canapé bleu marine. Son tissu résistant et son rembourrage confortable offrent un confort optimal pour se détendre, tandis que son design moderne s’intègre parfaitement dans tout type d’intérieur.
`,
  image: canapeBleuCiel,
  stars: 5,
  price: 2199,
  productImages: [canapeBleuCiel, canapeBleuCiel2, canapeBleuCiel3,canapeBleuCiel4],
  category: "canape",
  caracteristiques: [
    "Tissu premium anti-taches bleu marine",
    "Structure en bois massif",
    "Coussins déhoussables",
    "Rembourrage haute densité",
    "Design moderne et élégant",
    "Garantie 3 ans"
  ],
  specifications: {
    Longueur: "245 cm",
    Profondeur: "95 cm",
    Hauteur: "85 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Tissu polyester haut de gamme",
    Couleur: "Bleu marine",
    Poids: "72 kg",
    Places: "3-4 personnes"
  }
}


,

  {
  id: "fauteuilVert1",
  name: "Fauteuil Relax Vert Émeraude",
  description: `
Un fauteuil élégant et raffiné qui apporte une touche de fraîcheur à votre intérieur. Son revêtement en tissu vert émeraude, doux au toucher, s’associe parfaitement à un design moderne et confortable. Idéal pour un coin lecture ou un moment de détente, il offre un excellent soutien grâce à son assise moelleuse et sa structure robuste.
`,
  image: feateuillevert, 
  productImages: [feateuillevert, feateuillevert2, feateuillevert3],
  price: 899,
  stars: 5,
  category: "fauteuille",
  caracteristiques: [
    "Tissu haut de gamme, résistant et facile d’entretien",
    "Structure en bois massif",
    "Coussins déhoussables",
    "Assise haute densité",
    "Style moderne et intemporel",
    "Garantie 2 ans"
  ],
  specifications: {
    Largeur: "90 cm",
    Profondeur: "85 cm",
    Hauteur: "100 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Tissu polyester haut de gamme",
    Couleur: "Vert émeraude",
    Poids: "22 kg",
    Places: "1 personne"
  }
}
,
 {
  id: "fauteuilWhite1",
  name: "Fauteuil Confort Blanc Neige",
  description: `
Un fauteuil élégant et lumineux pour votre salon. Sa couleur blanc neige apporte pureté et modernité à votre intérieur. Son assise moelleuse et son dossier ergonomique offrent un confort optimal pour se détendre ou lire un livre.
`,
  image: feautillewhite,
  stars: 5,
  price: 799,
  productImages: [feautillewhite, feautillewhite2, feautillewhite3],
  category: "fauteuille",
  caracteristiques: [
    "Revêtement en tissu premium blanc facile à entretenir",
    "Structure en bois massif",
    "Coussins déhoussables",
    "Rembourrage haute densité",
    "Design moderne et élégant",
    "Garantie 3 ans"
  ],
  specifications: {
    Largeur: "90 cm",
    Profondeur: "90 cm",
    Hauteur: "95 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Tissu polyester haut de gamme",
    Couleur: "Blanc neige",
    Poids: "28 kg",
    Places: "1 personne"
  }
}
,
 {
  id: "fauteuilGris1",
  name: "Fauteuil Chic Gris Ardoise",
  description: `
Un fauteuil moderne et élégant pour votre salon. Son revêtement gris ardoise s’intègre facilement dans tous les styles d’intérieur, tandis que ses coussins rembourrés offrent un confort optimal pour se détendre après une longue journée.
`,
  image: feautilleGris,
  stars: 5,
  price: 849,
  productImages: [feautilleGris, feautilleGris2, feautilleGris3],
  category: "fauteuille",
  caracteristiques: [
    "Revêtement en tissu premium gris",
    "Structure en bois massif",
    "Coussins déhoussables",
    "Rembourrage haute densité",
    "Design moderne et élégant",
    "Garantie 3 ans"
  ],
  specifications: {
    Largeur: "90 cm",
    Profondeur: "90 cm",
    Hauteur: "95 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Tissu polyester haut de gamme",
    Couleur: "Gris ardoise",
    Poids: "28 kg",
    Places: "1 personne"
  }
}

,

  // Lits
{
  id: "litBleu1",
  name: "Lit Confort Bleu Océan",
  description: `
Un lit élégant et moderne pour votre chambre. Son revêtement bleu océan apporte calme et sérénité à votre espace. Fabriqué avec des matériaux de haute qualité, il offre un soutien optimal et un confort durable pour des nuits réparatrices.
`,
  image: litBleu,
  stars: 5,
  price: 1499,
  productImages: [litBleu, litBleu2, litBleu3,litBleu4],
  category: "lits",
  caracteristiques: [
    "Revêtement en tissu premium bleu",
    "Structure en bois massif",
    "Sommier inclus",
    "Confort optimal et durable",
    "Design moderne et élégant",
    "Garantie 5 ans"
  ],
  specifications: {
    Longueur: "200 cm",
    Largeur: "160 cm",
    Hauteur: "100 cm",
    Matériau: "Tissu polyester + bois massif",
    Couleur: "Bleu océan",
    Poids: "50 kg",
    Places: "2 personnes"
  }
},

 {
  id: "litGris1",
  name: "Lit Élégance Gris Perle",
  description: `
Apportez sobriété et modernité à votre chambre avec ce lit gris perle. Son revêtement en tissu doux et résistant assure un confort optimal, tandis que sa structure robuste garantit durabilité et stabilité pour des nuits paisibles.
`,
  image: litGris,
  stars: 5,
  price: 1499,
  productImages: [litGris, litGris2, litGris3,litGris4],
  category: "lits",
  caracteristiques: [
    "Revêtement en tissu premium gris",
    "Structure en bois massif",
    "Sommier inclus",
    "Confort durable et optimal",
    "Design moderne et élégant",
    "Garantie 5 ans"
  ],
  specifications: {
    Longueur: "200 cm",
    Largeur: "160 cm",
    Hauteur: "100 cm",
    Matériau: "Tissu polyester + bois massif",
    Couleur: "Gris perle",
    Poids: "52 kg",
    Places: "2 personnes"
  }
}
,

  // Chaises
{
  id: "chaiseWhite1",
  name: "Chaise de Salle à Manger Blanche",
  description: `
Apportez élégance et luminosité à votre salle à manger avec cette chaise blanche au design épuré. Fabriquée avec des matériaux de haute qualité, elle offre à la fois confort et robustesse. Son assise ergonomique et sa finition soignée en font un choix idéal pour des repas agréables en famille ou entre amis.
`,
  image: chaiseWhite,
  stars: 5,
  price: 149,
  productImages: [chaiseWhite, chaiseWhite, chaiseWhite],
  category: "chaise",
  caracteristiques: [
    "Revêtement en similicuir blanc facile à nettoyer",
    "Structure en bois massif",
    "Assise ergonomique",
    "Rembourrage en mousse haute densité",
    "Pieds en métal chromé",
    "Garantie 2 ans"
  ],
  specifications: {
    Largeur: "45 cm",
    Profondeur: "50 cm",
    Hauteur: "90 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Similicuir + métal",
    Couleur: "Blanc",
    Poids: "6 kg",
    Places: "1 personne"
  }
}
,
 {
  id: "chaiseMarron1",
  name: "Chaise de Salle à Manger Marron Café",
  description: `
Apportez chaleur et élégance à votre salle à manger avec cette chaise marron café au design moderne. Son assise confortable et son revêtement résistant en font un choix idéal pour un usage quotidien, tout en s’intégrant parfaitement dans un intérieur contemporain ou classique.
`,
  image: chaiseMarron,
  stars: 5,
  price: 159,
  productImages: [chaiseMarron, chaiseMarron, chaiseMarron],
  category: "chaise",
  caracteristiques: [
    "Revêtement en similicuir marron facile à entretenir",
    "Structure en bois massif",
    "Assise ergonomique rembourrée",
    "Pieds robustes en métal",
    "Style élégant et intemporel",
    "Garantie 2 ans"
  ],
  specifications: {
    Largeur: "45 cm",
    Profondeur: "50 cm",
    Hauteur: "90 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Similicuir + métal",
    Couleur: "Marron café",
    Poids: "6 kg",
    Places: "1 personne"
  }
}
,
{
  id: "chaiseJaune1",
  name: "Chaise de Salle à Manger Jaune Soleil",
  description: `
Illuminez votre salle à manger avec cette chaise jaune soleil au style dynamique et chaleureux. Parfaite pour apporter une touche de couleur à votre intérieur, elle combine confort et robustesse pour un usage quotidien.
`,
  image: chaiseJaune,
  stars: 5,
  price: 169,
  productImages: [chaiseJaune, chaiseJaune, chaiseJaune],
  category: "chaise",
  caracteristiques: [
    "Revêtement en tissu doux et résistant",
    "Structure en bois massif",
    "Assise ergonomique rembourrée",
    "Couleur vive et moderne",
    "Pieds robustes en métal",
    "Garantie 2 ans"
  ],
  specifications: {
    Largeur: "45 cm",
    Profondeur: "50 cm",
    Hauteur: "90 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Tissu polyester + métal",
    Couleur: "Jaune soleil",
    Poids: "6 kg",
    Places: "1 personne"
  }
},
{
  id: "chaiseGold1",
  name: "Chaise Élégance Or Champagne",
  description: `
Offrez une touche de luxe à votre salle à manger avec cette chaise dorée or champagne. Son revêtement raffiné et son design contemporain en font une pièce maîtresse pour un intérieur chic et sophistiqué.
`,
  image: chaiseGold,
  stars: 5,
  price: 189,
  productImages: [chaiseGold, chaiseGold, chaiseGold],
  category: "chaise",
  caracteristiques: [
    "Revêtement en tissu velours haut de gamme",
    "Structure en bois massif",
    "Assise ergonomique rembourrée",
    "Finition élégante et luxueuse",
    "Pieds métalliques robustes",
    "Garantie 2 ans"
  ],
  specifications: {
    Largeur: "45 cm",
    Profondeur: "50 cm",
    Hauteur: "90 cm",
    "Hauteur d'assise": "45 cm",
    Matériau: "Velours + métal",
    Couleur: "Or champagne",
    Poids: "6 kg",
    Places: "1 personne"
  }
}

];
