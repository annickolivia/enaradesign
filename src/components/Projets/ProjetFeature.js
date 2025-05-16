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
import { useParams, Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import { projects } from '../bdProjet';
import FiltreProjet from '../Projets/filtreProjet';
import TopPortfolio from '../Projets/topPortfolio';
import { mainColors } from '../../styles/variables';
import DevisBtn from '../../components/devisBtn';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectDetails = () => {

  const { id } = useParams();

  const project = projects.find((p) => p.titre.replace(/\s+/g, "") === id);
  
  // scrool detect
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage à la destruction
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* boutton revenir a accueil */}
      {
        isVisible && (
        <AnimatePresence mode="wait">
        <motion.div className='fixed z-50 `h-[400px] top-1/2 transform -translate-y-1/2 transition-all duration-500'
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          exit={{ x: -50 }}
          transition={{ duration: 0.4 }}
        >
        <Link 
          to="/"
          className='flex-col py-5 h-[200px] w-[50px] px-5 text-white flex items-center justify-between' 
          style={{backgroundColor: mainColors.mainBrown}}
        >
          <i className='fas fa-home'></i>
          <span style={{ writingMode: 'vertical-rl' }}>Revenir à l'accueil</span>
        </Link>
        <Link 
          to="/projets"
          className='flex-col py-5 h-[200px] w-[50px] px-5 bg-white flex items-center justify-between' 
          style={{color: mainColors.mainBrown}}
        >
          <i className='fas fa-diagram-project'></i>
          <span style={{ writingMode: 'vertical-rl' }}>Revenir au Portfolio</span>
        </Link>
      </motion.div>
      </AnimatePresence>

        )
      }

      <div className='relative h-screen'
       style={{backgroundImage: `url(${project.bannerImage})`, backgroundPosition: 'center', backgroundSize:'cover'}}
      >
        <div className="relative px-20 py-10 h-screen z-40">   
          <TopPortfolio />
          <div className='relative text-white h-full flex flex-col justify-end py-44'>
            <h2 className='text-white font-light'>{project.titre}</h2>
            <p className='text-4xl font-extralight'>{project.type}</p>
          </div>
        </div>
        <div className="absolute z-20 bg-black bg-opacity-40 w-screen h-screen top-0"></div>
      </div>
      {/* Elements */}
      <div className="text-center py-20 px-20">
        <div className='grid grid-cols-2'
        >
          <h2 className='text-lg font-light flex justify-start' style={{color: mainColors.mainBrown}}>{project.titre}</h2>
          <h2 className="text-lg font-light mb-2 flex justify-start" style={{color: mainColors.mainBrown}}>ÉLEMENTS</h2>
          <div className='col-span-3 h-[1px]'
            style = {{backgroundColor: mainColors.mainBrown}}
          ></div>
          <ul className="flex flex-col gap-4 text-sm tracking-widest col-start-2 mt-5 col-span-2 pb-10"
           style={{color: mainColors.mainBrown}}
          >
            {project.elements.map((item, index) => (
              <li key={index} className="text-left text-lg">{String(index + 1).padStart(2, '0')} - {item}</li>
            ))}
          </ul>
          {/* Description */}
          <div className="text-justify text-gray-700 text-2xl leading-relaxed col-span-2 ">
            {project.description}
          </div>
        </div>
      </div>

      {/* Architecture */}
      {project.architectureImages.length > 0 && (
        <section>
          <div className='flex items-center justify-between py-10 px-20 '>   
              <div className='h-[1px] w-4/5' style={{backgroundColor: mainColors.mainBrown}}></div>
              <h3 className="text-2xl font-normal" style={{color:mainColors.mainBrown}}>Architecture</h3>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {project.architectureImages.map((src, i) => (
              <img key={i} src={src} alt={`Architecture ${i}`} className="rounded-lg object-cover w-full h-screen" />
            ))}
          </div>
        </section>
      )}

      {/* Design intérieur */}
      {project.interiorImages.length > 0 && (
        <section className=''>
          <div className='flex items-center justify-between py-10 px-20 '>
              <h3 className="text-2xl font-normal" style={{color:mainColors.mainBrown}}>Design d’intérieur</h3>
              <div className='h-[1px] w-4/5' style={{backgroundColor: mainColors.mainBrown}}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.interiorImages.map((src, i) => (
              <img key={i} src={src} alt={`Design intérieur ${i}`} className="object-cover w-full h-96" />
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      {project.ctaText && (
        <div className="text-left mt-8 px-20 text-gray-700 text-lg">
          {project.ctaText}
        </div>
      )}
      {/* bouton pour devis */}
      <div className='px-20 py-10'>
          <DevisBtn />
      </div>
    </div>
  );
};

export default ProjectDetails;

