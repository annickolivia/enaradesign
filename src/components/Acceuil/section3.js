import React from 'react'
import { mainColors } from '../../styles/variables';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from './projectCard';


 const projects = [
    {
      titre: "CHAMBRE A COUCHER",
      date:"mars 21 2025",
      categorie:"Design d'intérieur",
      srcImg:"/img/portfolio/projets/cozi_bedroom.jpg",
      chemin:"projets/chambre_a_couhcer",
      desc:"À la recherche d’un moment d’évasion, hors de la ville ? Nous avons aménagé ce charmant hôtel à Ampefy, écrin de douceur au cœur d’un décor tropical.  ... "
    },
    {
      titre: "PROJET ANAKAO TULEAR",
      date:"Décembre 15 2024",
      categorie:"Architecture",
      srcImg:"/img/portfolio/projets/anakao_ext1.jpg",
      chemin:"projets/projet_anakao_tulear",
      desc:"À la recherche d’un moment d’évasion, hors de la ville ? Nous avons aménagé ce charmant hôtel à Ampefy, écrin de douceur au cœur d’un décor tropical.  ... "
      
    },
    {
      titre: "BUNGALOW AMPEFY",
      date:"Janvier 12 2025",
      categorie:"Complexe Hotêlier",
      srcImg:"/img/portfolio/projets/ampefy_ext.jpg",
      chemin:"projets/bungalow_ampefy",
      desc:"À la recherche d’un moment d’évasion, hors de la ville ? Nous avons aménagé ce charmant hôtel à Ampefy, écrin de douceur au cœur d’un décor tropical.  ... "
    },
    {
      titre: "SEJOUR",
      date:"Février 05 2025",
      categorie:"Design d'Intérieur",
      srcImg:"/img/portfolio/projets/living_cozi.jpg",
      chemin:"projets/sejour",
      desc:"À la recherche d’un moment d’évasion, hors de la ville ? Nous avons aménagé ce charmant hôtel à Ampefy, écrin de douceur au cœur d’un décor tropical.  ... "
    },
    {
      titre: "SALLE DE BAIN",
      date:"Janvier 24 2025",
      categorie:"Design d'Intérieur",
      srcImg:"/img/portfolio/projets/bath_port.jpg",
      chemin:"projets/salle_de_bain",
      desc:"À la recherche d’un moment d’évasion, hors de la ville ? Nous avons aménagé ce charmant hôtel à Ampefy, écrin de douceur au cœur d’un décor tropical.  ... "
    }
  ];

function Section3() {
  return (
    <section className='px-20 py-10 h-[1200px]' style={{backgroundColor: mainColors.mainBrown}}>
        <h3 className='text-white font-extralight mb-10'>Projet de l'année</h3>
        <Swiper
             modules={[Navigation, Pagination, Mousewheel, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }}
              pagination={{ clickable: true }}
              mousewheel={{ forceToAxis: true }}  // <--- This is key!
              speed={800}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="justify-center flex"

        >
            {projects.map((projet, index) => {
                return (
                    <SwiperSlide key={index}>
                        <ProjectCard imgSrc={projet.srcImg} place="Madagascar" title={projet.titre} desc={projet.desc}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
        <img className="float-right" src="/img/about/numero.png" alt="numero"/>
        <video 
            src="/videos/mon_fichier.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-auto"
        />
    </section>
  )
}

export default Section3;
