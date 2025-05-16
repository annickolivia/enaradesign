export const bdProjet = [
    {
        id: "projet1",
        titre: "Ampefy",
        desc:"Située sur une plage paradisiaque dans le sud de Madagascar, cette villa est une véritable invitation à la détente. Entre sable fin et horizonazur, chaque espace a été conçu pour offrir une harmonie parfaite entre confort et nature. L'architecture, épurée et élégante, joue avec la lumière naturelle pour créer une atmosphère douce et apaisante. Ici, le murmure des vagues et la brise marine accompagnent chaque instant, transformant ce lieu en un refuge exclusif.",
        imgSrc: "/img/Projets/projet1/1.jpg",
        categorie: "residentiel",
        date: "03 Dec 24"
    },
    {
        id: "projet2",
        titre: "The Beach House",
        desc:"Située sur une plage paradisiaque dans le sud de Madagascar, cette villa est une véritable invitation à la détente. Entre sable fin et horizonazur, chaque espace a été conçu pour offrir une harmonie parfaite entre confort et nature. L'architecture, épurée et élégante, joue avec la lumière naturelle pour créer une atmosphère douce et apaisante. Ici, le murmure des vagues et la brise marine accompagnent chaque instant, transformant ce lieu en un refuge exclusif.",
        imgSrc: "/img/Projets/projet2/1.jpg",
        categorie: "professionel",
        date: "21 Dec 24"
    },
    {
        id: "projet3",
        titre: "The Krasiv",
        desc:"Située sur une plage paradisiaque dans le sud de Madagascar, cette villa est une véritable invitation à la détente. Entre sable fin et horizonazur, chaque espace a été conçu pour offrir une harmonie parfaite entre confort et nature. L'architecture, épurée et élégante, joue avec la lumière naturelle pour créer une atmosphère douce et apaisante. Ici, le murmure des vagues et la brise marine accompagnent chaque instant, transformant ce lieu en un refuge exclusif.",
        imgSrc: "/img/Projets/projet3/1.jpg",
        categorie: "urbain",
        date: "15 Mar 24"
    },
    {
        id: "projet4",
        titre: "Ampefy",
        desc:"Située sur une plage paradisiaque dans le sud de Madagascar, cette villa est une véritable invitation à la détente. Entre sable fin et horizonazur, chaque espace a été conçu pour offrir une harmonie parfaite entre confort et nature. L'architecture, épurée et élégante, joue avec la lumière naturelle pour créer une atmosphère douce et apaisante. Ici, le murmure des vagues et la brise marine accompagnent chaque instant, transformant ce lieu en un refuge exclusif.",
        imgSrc: "/img/Projets/projet4/1.jpg",
        categorie: "commercial",
        date: "07 Jan 25"
    }
]

export const PortCateg = [
    {
    nom: "Professionnel",
    chemin:"projets/professionnel"
  },
  {
    nom: "Commercial",
    chemin:"projets/commercial"
  },
  {
    nom: "Residentiel",
    chemin:"projet/residentiel"
  },
  {
    nom: "Urbain",
    chemin:"projet/urbain"
  }
]

export const ServiceCateg = [
  {
  nom: "Design Plan 3D",
  chemin:"service/plan3D"
},
{
  nom: "Design Interieur",
  chemin:"service/designInterieur"
}

]

 export const projects = [
  {
    titre: "CHAMBRE A COUCHER",
    date: "mars 21 2025",
    type: "Design d'intérieur",
    chemin: "projets/chambre_a_couhcer",
    categorie: "professionel",
    bannerImage: "/img/portfolio/projets/cozi_bedroom.jpg",
    elements: ["Design d’intérieur", "Plan 3D", "Décoration"],
    description:
      "Dans un style doux et moderne, cette chambre a été conçue pour offrir une sensation de cocon et de sérénité. Chaque détail, du mobilier aux luminaires, a été pensé pour créer un espace propice au repos.",
    architectureImages: [],
    interiorImages: [
      "/img/Projets/projet1/1.jpg",
      "/img/Projets/projet1/2.jpg"
    ],
    ctaText: "Vous aimez ce style ? Contactez-nous pour créer votre propre chambre de rêve."
  },
  {
    titre: "PROJET ANAKAO TULEAR",
    date: "Décembre 15 2024",
    type: "Architecture",
    chemin: "projets/projet_anakao_tulear",
    categorie: "professionel",
    bannerImage: "/img/portfolio/projets/anakao_ext1.jpg",
    elements: ["Architecture", "Plan 3D", "Vue extérieure"],
    description:
      "Un projet architectural contemporain en bord de mer à Anakao, conçu pour maximiser la lumière naturelle et s’harmoniser avec l’environnement marin.",
    architectureImages: [
      "/img/Projets/projet2/1.jpg",
      "/img/Projets/projet2/2.jpg"
    ],
    interiorImages: [],
    ctaText: "Transformons ensemble votre terrain en un projet unique et innovant."
  },
  {
    titre: "BUNGALOW AMPEFY",
    date: "Janvier 12 2025",
    type: "Complexe Hôtelier",
    chemin: "projets/bungalow_ampefy",
    categorie: "professionel",
    bannerImage: "/img/portfolio/projets/ampefy_ext.jpg",
    elements: ["Architecture", "Design d’intérieur", "Plan 3D", "Documentation"],
    description:
      "Un complexe de bungalows pour les séjours au vert. Matériaux naturels, volumes simples, et un cadre reposant pour les voyageurs en quête de tranquillité.",
    architectureImages: [
     "/img/Projets/projet3/1.jpg",
      "/img/Projets/projet3/2.jpg"
    ],
    interiorImages: ["/img/portfolio/projets/ampefy_room.jpg"],
    ctaText: "Vous souhaitez développer un projet touristique ? Discutons-en !"
  },
  {
    titre: "SEJOUR",
    date: "Février 05 2025",
    type: "Design d'intérieur",
    chemin: "projets/sejour",
    categorie: "professionel",
    bannerImage: "/img/portfolio/projets/living_cozi.jpg",
    elements: ["Design d’intérieur", "Mobilier sur mesure", "Aménagement"],
    description:
      "Un salon élégant et fonctionnel, pensé pour accueillir et partager. Les matériaux nobles et les tons neutres créent une atmosphère conviviale et chic.",
    architectureImages: [],
    interiorImages: [
      "/img/Projets/projet4/1.jpg",
      "/img/Projets/projet4/2.jpg"
    ],
    ctaText: "Envie d’un séjour sur mesure ? Nous vous accompagnons de A à Z."
  },
  {
    titre: "SALLE DE BAIN",
    date: "Janvier 24 2025",
    type: "Design d'intérieur",
    chemin: "projets/salle_de_bain",
    categorie: "professionel",
    bannerImage: "/img/portfolio/projets/bath_port.jpg",
    elements: ["Design d’intérieur", "Décoration", "Optimisation d’espace"],
    description:
      "Salle de bain contemporaine et épurée. Les teintes naturelles et le bois apportent chaleur et modernité à cet espace bien-être.",
    architectureImages: [],
    interiorImages: [
     "/img/Projets/projet2/3.jpg",
      "/img/Projets/projet2/4.jpg"
    ],
    ctaText: "Un petit espace ? Nous optimisons chaque mètre carré avec style."
  }
];
