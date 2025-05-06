// import React, {useState, useEffect} from 'react'
// import { mainColors } from '../../styles/variables'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from 'swiper/modules';


// function ProjetFeature({activeProjet}) {
//   const [images, setImages] = useState([]);

//   const img = [
//     "/img/Projets/projet1/1.jpg",
//     "/img/Projets/projet1/2.jpg",
//     // "/img/Projets/projet2/3.jpg",
//     // "/img/Projets/projet2/4.jpg",
//     // "/img/Projets/projet2/5.jpg",
//     // "/img/Projets/projet2/6.jpg",
//   ]

//   useEffect(() => {

//   }, [activeProjet])

//   return (
//     <div className="grid grid-cols-1 grid-rows-1 mt-16 gap-6 h-2/4 col-span-5">
//         <Swiper
//         modules={[Navigation, Pagination]}
//         spaceBetween={16}
//         slidesPerView={1}
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 2,
//           },
//           1024: {
//             slidesPerView: 4,
//           },
//         }}
//         className="py-8"
//       >
//         {img.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img className="w-[400px]"src={image} key={index} alt="projetImage"/>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//         <div className="flex flex-col justify-between h-full">
//             <div>
//                 <h4 className="h-[40px]" style={{color : mainColors.mainBrown }}>{activeProjet.titre}</h4>
//                 <p className="h-20">{activeProjet.desc}</p>
//             </div>
//             <button className="font-extralight" style={{backgroundColor : mainColors.mainBrown}} className="h-12 w-full mt-5 text-white font-bold">Voir d'autres images</button>
//         </div>
//     </div>
//   )
// }

// export default ProjetFeature;

import React, { useState, useEffect } from 'react'
import { mainColors } from '../../styles/variables'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

function ProjetFeature({ activeProjet }) {
  const [images, setImages] = useState([])

  const img = [
    "/img/Projets/projet1/1.jpg",
    "/img/Projets/projet1/2.jpg",
    // "/img/Projets/projet1/3.jpg",
    // "/img/Projets/projet1/4.jpg",
    // "/img/Projets/projet1/5.jpg",
    // "/img/Projets/projet1/6.jpg",
  ]

  // useEffect(() => {
  //   // Placeholder: you could update the `img` list dynamically if needed
  // }, [activeProjet])

  return (
    <div className="grid grid-cols-1 grid-rows-1 mt-16 gap-6 h-2/4 col-span-5">
      {/* <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="py-8"
      >
        {img.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="w-[700px] max-w-[400px] h-[500px] mx-auto" src="/img/Projets/projet1/1.jpg" alt={`projetImage-${index}`} />
          </SwiperSlide>
        ))}
      </Swiper> */}
      <div className="flex flex-col justify-between h-full">
        <img className="h-[500px] w-full  object-cover" src={activeProjet.imgSrc} alt="projet2"/>
        <div className="py-10">
          <h4 className="h-[40px]" style={{ color: mainColors.mainBrown }}>{activeProjet.titre}</h4>
          <p className="h-20">{activeProjet.desc}</p>
        </div>
        <button
          className="h-12 w-full mt-5 text-white font-bold font-extralight"
          style={{ backgroundColor: mainColors.mainBrown }}
        >
          Voir d'autres images
        </button>
      </div>
    </div>
  )
}

export default ProjetFeature
