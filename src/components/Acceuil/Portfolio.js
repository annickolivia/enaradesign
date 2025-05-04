import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { mainColors } from '../../styles/variables';

const Portfolio = () => {
  const projects = [
    {
      titre: "CHAMBRE A COUCHER",
      date:"mars 21 2025",
      categorie:"Design d'intérieur",
      srcImg:"/img/portfolio/projets/cozi_bedroom.jpg",
      chemin:"projets/chambre_a_couhcer"
    },
    {
      titre: "PROJET ANAKAO TULEAR",
      date:"Décembre 15 2024",
      categorie:"Architecture",
      srcImg:"/img/portfolio/projets/anakao_ext1.jpg",
      chemin:"projets/projet_anakao_tulear"
    },
    {
      titre: "BUNGALOW AMPEFY",
      date:"Janvier 12 2025",
      categorie:"Complexe Hotêlier",
      srcImg:"/img/portfolio/projets/ampefy_ext.jpg",
      chemin:"projets/bungalow_ampefy"
    },
    {
      titre: "SEJOUR",
      date:"Février 05 2025",
      categorie:"Design d'Intérieur",
      srcImg:"/img/portfolio/projets/living_cozi.jpg",
      chemin:"projets/sejour"
    },
    {
      titre: "SALLE DE BAIN",
      date:"Janvier 24 2025",
      categorie:"Design d'Intérieur",
      srcImg:"/img/portfolio/projets/bath_port.jpg",
      chemin:"projets/salle_de_bain"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="py-10 pb-0 bg-white text-black relative">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center mb-6 md:px-72 px-6">
          <h2 className="text-3xl font-bold" style={{ color: mainColors.mainBrown }}>Nos Projets</h2>
        </div>

        <div className="flex flex-col gap-10 items-center">
          {/* /* Swiper for images only */}
          <div className="w-2/3">
            <Swiper
              modules={[Navigation, Pagination, Mousewheel]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }}
              pagination={{ clickable: true }}
              mousewheel
              speed={800}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-[500px] flex items-center justify-center">
                    <img src={project.srcImg} alt={project.titre} className="max-h-auto max-w-full" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* /* Fixed project info */ }
          <div className="w-full flex md:flex-row flex-col justify-arrow p-4 bg-gray-100 md:w-[800px] md:h-[175px]">
            <div className='flex justify-between flex-col md:flex-row w-full h-full items-center p-16'>
              <div>
                <div className='flex items-center justify-between'>
                  <div className="mb-2 text-lg font-semibold mr-8" style={{ color: mainColors.mainBrown }}>
                    {activeProject.titre}
                  </div>
                  <div className="text-sm text-gray-600 mb-1">{activeProject.date}</div>
                </div>
                <div className="text-lg font-semibold">{activeProject.categorie}</div>
              </div>
              <a
                href={activeProject.chemin}
                className="flex items-center justify-between w-full md:w-[200px] rounded-full px-4 h-[70px] md:px-8"
                style={{backgroundColor: mainColors.mainBrown}}
              >
                <span className='text-white'>Voir le Projet</span>
                <i className="fas fa-arrow-right rounded-full p-3 ml-2 bg-white font-thin" style={{color: mainColors.mainBrown}}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
