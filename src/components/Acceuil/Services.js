import { mainColors } from "../../styles/variables";
import { Link } from "react-router-dom";

const services = [
    {
      title: "Architecture et Design d'Intérieur",
      description: "Concevez des espaces uniques alliant esthétique et fonctionnalité avec des rendus 3D réalistes et des plans détaillés.",
      link: "/services/architecture"
    },
    {
      title: "Urbanisme et Service public",
      description: "Optimisation des espaces urbains pour un développement durable et harmonieux, adapté aux besoins des collectivités.",
      link: "/services/urbain"
    },
    {
      title: "Construction et Rénovation",
      description: "De la conception à la réalisation, un accompagnement sur mesure pour bâtir ou transformer vos espaces avec expertise.",
      link: "/services/construction"
    },
    {
      title: "Conseil créatif et Développement",
      description: "Des idées innovantes et des stratégies adaptées pour concrétiser vos projets architecturaux et renforcer votre identité visuelle.",
      link: "/services/conseil"
    },
    // Other services...
  ];
  
  const Services = () => (
    <section className="h-[1400px] md:h-[500px] px-6" style={{ backgroundColor: mainColors.mainBrown }}>
      <div className="py-10">
        <h2 className="mil-h1 mil-muted mil-center">
          Des concepts <span className="mil-thin">Exclusifs</span>
        </h2>
        <div className="flex flex-col md:flex-row">
        {
          services.map((service, index) => {
            return (
              <Link to={service.link} key={index} className="mil-service-card-sm  flex flex-col justify-between h-[300px] md:h-[400px]">
                <h5 className="mil-muted mil-mb-30">{service.title}</h5>
                <p className="mil-light-soft mil-mb-30">{service.description}</p>
                <i className="fa-solid fa-arrow-right text-white"/>
              </Link>
            )
          })
        }
        </div>
      </div>
    </section>
  );

  export default Services;