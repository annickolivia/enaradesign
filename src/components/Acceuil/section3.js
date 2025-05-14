import React from 'react'
import { mainColors } from '../../styles/variables';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from './projectCard';
import { projects } from '../bdProjet';

function Section3() {
  return (
    <section className='px-20 py-10 h-[1200px]' style={{backgroundColor: mainColors.mainBrown}}>
        <h3 className='text-white font-extralight mb-10'
          data-aos="fade-up"
        >Projets de l'année</h3>
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
                        <ProjectCard imgSrc={projet.srcImg} place="Madagascar" title={projet.titre} desc={projet.desc} h={800}/>
                    </SwiperSlide>
                )
            })}
        </Swiper>
        <img className="float-right" src="/img/about/numero.png" alt="numero"/>
    </section>
  )
}

export default Section3;
