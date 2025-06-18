import React from 'react'

const text = [
    {
        title: "Sketch du Design",
        img:'/img/serviceImg/1.jpg',
        desc: "Chaque projet démarre par une consultation créative, un moment d’échange pour poser les bases de votre univers. Ensemble, nous affinons le style, la vision et les objectifs, tout en abordant les aspects clés : budget, délais, dimensions, confidentialité et exigences techniques ou administratives. C’est le premier pas vers une collaboration sur-mesure, pensée pour donner vie à vos idées.",
    },
      {
        title: "Développement du Design",
        img:'/img/serviceImg/2.jpg',
        desc: "Nous transformons vos premières idées en plans 2D détaillés et en une modélisation 3D réaliste, pour donner vie à l’apparence et à l’agencement de votre espace. Chaque étape du design est pensée avec vous : choix des matériaux, organisation des volumes, agencement des menuiseries, circulation… Vous visualisez votre projet avec clarté, dans ses moindres détails."
    },
      {
        title: "Architecture",
        img:'/img/serviceImg/3.jpg',
        desc: "Tous les projets ne nécessitent pas une demande de permis auprès des autorités locales. Si le vôtre en a besoin, nous prenons le relais à cette étape. Notre équipe coordonne l’ensemble du processus : échanges avec les urbanistes, collecte des documents techniques, dépôt du dossier auprès de la mairie, et suivi des demandes complémentaires. Vous gagnez en sérénité, nous gérons pour vous."
    },
      {
        title: "Design d’intérieur",
        img:'/img/serviceImg/4.jpg',
        desc: "À cette étape, nous nous concentrons sur l’univers intérieur de votre projet. Notre équipe de design d’intérieur, impliquée dès les premières phases, s’assure d’une parfaite cohérence entre vos envies et la vision architecturale. Chaque espace est pensé pour allier fluidité, contraste et harmonie — des intérieurs sur-mesure, à votre image."
    },
      {
        title: "Documentation & Plans",
        img:'/img/serviceImg/5.jpg',
        desc: "Une fois les designs finalisés, nous réalisons les plans d’exécution détaillés et les documents techniques nécessaires à la mise en œuvre de votre projet. Ces supports servent de guide précis aux entreprises et artisans. Nous assurons la coordination avec toutes les parties prenantes pour que chaque élément soit parfaitement défini, intégré et communiqué."
    },
]

function Section4() {
  return (
    <section className='h-fit lg:h-[900px] px-6 md:px-20 pb-10 grid grid-cols-1 lg:grid-cols-2 xl:justify-center'>
      {
        text.map((m, index) => {
          return (
            <div key={index} className='group w-auto py-5  lg:py-0  lg:w-full text-justify xl:px-16 lg:px-6 lg:items-center lg:flex lg:flex-col' data-aos="fade-left"> 
              <h4 className='text-gray-600 mb-3'>{index + 1 }  { m.title}</h4>
            <img className="h-[0px] group-hover:h-[225px] md:group-hover:h-[300px] py-5 group transition-all duration-700 ease-in-out" src={m.img} alt="services images"/>
              <p>{m.desc}</p>
            </div>
          )
        })
      }
    </section>
  )
}

export default Section4
