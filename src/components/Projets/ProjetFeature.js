// import React from 'react'
// import { mainColors } from '../../styles/variables'
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Link } from 'react-router-dom'
// import { Autoplay } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/autoplay'

// function ProjetFeature({ activeProjet }) {
//   const projectNumber = activeProjet.id.replace("projet", "");
//   const img = Array.from({ length: 2 }, (_, i) => 
//     `/img/Projets/projet${projectNumber}/${i + 1}.jpg`
//   );

//   return (
//     <div className="grid grid-cols-1 grid-rows-1 mt-16 gap-6 h-2/4 col-span-5"> 
//       <div className="flex flex-col justify-between h-[950px] md:h-full">
//         <Swiper
//         modules={[Autoplay]}
//         spaceBetween={16}
//         slidesPerView={1}        
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//         className="py-8 w-full"
//         data-aos="zoom-out"
//       >
//         {img.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img className="h-[500px] w-full  object-cover" src={image} alt={`projetImage-${index}`} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//         {/* <img className="h-[500px] w-full  object-cover" src={activeProjet.imgSrc} alt="projet2"/> */}
//         <div className="py-10">
//           <h4 className="h-[40px]" data-aos="fade-up" style={{ color: mainColors.mainBrown }}>{activeProjet.titre}</h4>
//           <p className="h-[200px]" data-aos="fade-up" data-aos-delay="200">{activeProjet.desc}</p>
//         </div>
//         <Link
//         to="/"
//         >
//           <button
//             className="h-12 w-full mt-5 text-white font-extralight"
//             style={{ backgroundColor: mainColors.mainBrown }}
//             data-aos="fade-down"
//           >
//             <i className='fas fa-arrow-left mr-10'/>
//             Revenir à l'accueil
//           </button>
//         </Link>
//       </div>
//     </div>
//   )
// }

// export default ProjetFeature;
import { useParams } from 'react-router-dom';
import React from 'react';
import { projects } from '../bdProjet';

const ProjectDetails = ({ 
  title, 
  location, 
  bannerImage, 
  elements = [], 
  description, 
  architectureImages = [], 
  interiorImages = [], 
  ctaText 
}) => {

  const id = useParams();

  const project = projects.find((p) => p.titre.replace(/\s+/g, "") === id);
  console.log('selected project is ',project)

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      {/* Banner Image */}
      <div className="w-full h-72 md:h-[500px] overflow-hidden rounded-xl">
        <img src={project.bannerImage} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Title & Location */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
        <p className="text-gray-500 text-sm mt-2">{project.location}</p>
      </div>

      {/* Elements */}
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-2">Éléments</h2>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {project.elements.map((item, index) => (
            <li key={index}>{String(index + 1).padStart(2, '0')} - {item}</li>
          ))}
        </ul>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto text-center text-gray-700 text-sm md:text-base leading-relaxed">
        {project.description}
      </div>

      {/* Architecture */}
      {project.architectureImages.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold mb-4">Architecture</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.architectureImages.map((src, i) => (
              <img key={i} src={src} alt={`Architecture ${i}`} className="rounded-lg object-cover w-full h-64" />
            ))}
          </div>
        </section>
      )}

      {/* Design intérieur */}
      {project.interiorImages.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold mb-4">Design d’intérieur</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.interiorImages.map((src, i) => (
              <img key={i} src={src} alt={`Design intérieur ${i}`} className="rounded-lg object-cover w-full h-64" />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      {project.ctaText && (
        <div className="text-center mt-8 text-gray-700 text-sm">
          {project.ctaText}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;

