import React from 'react'
import { mainColors } from '../../styles/variables';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from './projectCard';
import { projects } from '../bdProjet';
import { Link } from 'react-router-dom';

function Section3() {
  return (
    <section className='px-20 py-10 h-[1200px]' style={{backgroundColor: mainColors.mainBrown}}>
        <h3 className='text-white font-extralight mb-10'
          data-aos="fade-up"
        >Projets de l'<span className="font-normal">année</span></h3>
        <Swiper
             modules={[Navigation, Mousewheel, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }}
              mousewheel={{ forceToAxis: true }}  // <--- This is key!
              speed={1000}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              className="justify-center flex"

        >
            {projects.map((projet, index) => {
                return (
                    <SwiperSlide key={index}>
                      <Link to={`projets/${projet.titre.replace(/\s+/g, "")}`} className='h-[800px]'>
                        <ProjectCard imgSrc={projet.bannerImage} place="Madagascar" title={projet.titre}/>
                      </Link>
                    </SwiperSlide>
                )
            })}

            <div className="swiper-button-prev text-white absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer">
            </div>
            <div className="swiper-button-next text-white absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer">
            </div>
        </Swiper>
        <img className="float-right" src="/img/about/numero.png" alt="numero"/>
    </section>
  )
}

export default Section3;
