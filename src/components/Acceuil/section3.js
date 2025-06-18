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
    <section className='px-6 md:px-20 pt-10 h-fit md:h-[1075px]' style={{backgroundColor: mainColors.mainBrown}}>
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
              breakpoints={{
                0: {
                  slidesPerView: 1, // 👈 mobile (0px and up)
                },
                768: {
                  slidesPerView: 2, // 👈 tablets (optional)
                },
                1024: {
                  slidesPerView: 3, // 👈 desktops
                },
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
                      <Link to={`projets/${projet.titre.replace(/\s+/g, "")}`} className='h-[800px] hover:scale-125 transform transition-all duration-700'>
                        <ProjectCard imgSrc={projet.bannerImage} place="Madagascar" title={projet.titre}/>
                      </Link>
                    </SwiperSlide>
                )
            })}

            <style>
              {`
                .custom-swiper-button::after {
                  color: white !important;
                  font-size: 2rem !important;
                  font-weight: bold;
                  font-size: 40px
                }
              `}
            </style>

              <div className="swiper-button-prev text-6xl custom-swiper-button absolute left-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer hover:scale-125 transition-transform duration-300" />
              <div className="swiper-button-next text-6xl custom-swiper-button absolute right-0 top-1/2 z-10 -translate-y-1/2 cursor-pointer  hover:scale-125 transition-transform duration-300" />
        </Swiper>
        <img className="float-right w-14 md:w-auto" src="/img/about/numero.png" alt="numero"/>
    </section>
  )
}

export default Section3;
