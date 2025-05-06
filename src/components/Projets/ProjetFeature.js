import React from 'react'
import { mainColors } from '../../styles/variables'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';


function ProjetFeature({activeProjet}) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 mt-16 gap-6 h-2/4 col-span-5">
         {/* <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="py-8"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} key={index} alt="projetImage"/>
          </SwiperSlide>
        ))}
      </Swiper> */}
        <img className='bg-green-600 h-full' alt="imgPrincipal" src={activeProjet.imgSrc}/>
        <div className="flex flex-col justify-between h-full">
            <div>
                <h4 className="h-[40px]" style={{color : mainColors.mainBrown }}>{activeProjet.titre}</h4>
                <p className="h-20">{activeProjet.desc}</p>
            </div>
            <button className="font-extralight" style={{backgroundColor : mainColors.mainBrown}} className="h-12 w-full mt-5 text-white font-bold">Voir d'autres images</button>
        </div>
    </div>
  )
}

export default ProjetFeature