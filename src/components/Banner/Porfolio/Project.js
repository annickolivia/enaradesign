import React from 'react'
import { Link } from 'react-router-dom';
import { mainColors } from '../../../styles/variables';import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Project({...projects}) {
return (
    <div className="swiper-slide">
        <div className="mil-portfolio-item mil-slider-item">
                <div className="mil-cover-frame mil-drag">
                    <div className="mil-cover" data-swiper-parallax-scale="1.3">
                        <img src={`${projects.srcImg}`} alt="cover" />
                    </div>
                </div>
            <div className="mil-descr px-10 md:px-0" >
                <div className="mil-descr-text" >
                    <div className="mil-labels mil-mb-15">
                        <div className="mil-label mil-upper mil-accent" style={{ color: mainColors.mainBrown }}>{projects.titre}</div>
                        <div className="mil-label mil-upper text-gray-800">{projects.date}</div>
                    </div>
                    <h5>{projects.categorie}</h5>
                </div>
                <div className="w-full md:w-2/5 flex flex-row justify-between" >
                    <Link to={projects.chemin} className="mil-button mil-arrow-place flex justify-between w-full md:w-3/3 px-1" style={{ backgroundColor: mainColors.mainBrown }}>
                        <span className='mr-9'>Voir le Projet</span>
                        <i className='fas fa-arrow-right p-4 bg-white rounded-full' />
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
}

export default Project;