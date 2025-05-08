import React from 'react'
import { mainColors } from '../../styles/variables'
import { Swiper, SwiperSlide } from "swiper/react"
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

function ProjetFeature({ activeProjet }) {
  const projectNumber = activeProjet.id.replace("projet", "");
  const img = Array.from({ length: 2 }, (_, i) => 
    `/img/Projets/projet${projectNumber}/${i + 1}.jpg`
  );

  return (
    <div className="grid grid-cols-1 grid-rows-1 mt-16 gap-6 h-2/4 col-span-5"> 
      <div className="flex flex-col justify-between h-[950px] md:h-full">
        <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1}        
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="py-8 w-full"
        data-aos="zoom-out"
      >
        {img.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="h-[500px] w-full  object-cover" src={image} alt={`projetImage-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
        {/* <img className="h-[500px] w-full  object-cover" src={activeProjet.imgSrc} alt="projet2"/> */}
        <div className="py-10">
          <h4 className="h-[40px]" data-aos="fade-up" style={{ color: mainColors.mainBrown }}>{activeProjet.titre}</h4>
          <p className="h-[200px]" data-aos="fade-up" data-aos-delay="200">{activeProjet.desc}</p>
        </div>
        <Link
        to="/"
        >
          <button
            className="h-12 w-full mt-5 text-white font-extralight"
            style={{ backgroundColor: mainColors.mainBrown }}
            data-aos="fade-down"
          >
            <i className='fas fa-arrow-left mr-10'/>
            Revenir à l'accueil
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProjetFeature;
