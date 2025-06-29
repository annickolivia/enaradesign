import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from './projectCard';
import { mainColors } from '../../styles/variables';
import { Link } from 'react-router-dom';

function ProjetsCarousel({selectedProjet, handleCardClick}) {
  return (
    <div className='py-10 px-6 md:px-20'>
      <div className="w-full grid md:grid-cols-2 gap-16">
        {selectedProjet.map((project, index) => (
          <Link to ={`/projets/${project.titre.replace(/\s+/g, "")}`} key={index}>
            <ProjectCard
              bannerImage={project.bannerImage}
              title={project.titre}
              date={project.date}
              id={project.id}
              categorie={project.categorie}
              handleCardClick={handleCardClick}
            />
          </Link>
        ))}
    </div>
  </div>
  );
}

export default ProjetsCarousel;
