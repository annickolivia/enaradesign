import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ProjectCard from './projectCard';

function ProjetsCarousel({selectedProjet, handleCardClick}) {
  return (
    <div className="w-full grid xl:grid-cols-5 grid-cols-3 gap-1 md:grid-cols-3 md:gap-1 xl:gap-3">
      {selectedProjet.map((project, index) => (
        <ProjectCard
          key={index}
          imgPath={project.imgSrc}
          title={project.titre}
          date={project.date}
          id={project.id}
          handleCardClick={handleCardClick}
        />
      ))}
    </div>
  );
}

export default ProjetsCarousel;
