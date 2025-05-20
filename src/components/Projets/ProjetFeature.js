import { useParams, Link } from 'react-router-dom';
import React, {use, useEffect, useState} from 'react';
import { projects } from '../bdProjet';
import FiltreProjet from '../Projets/filtreProjet';
import TopPortfolio from '../Projets/topPortfolio';
import { mainColors } from '../../styles/variables';
import DevisBtn from '../../components/devisBtn';
import { motion, AnimatePresence } from 'framer-motion';
import Devis from '../../views/Devis';

const ProjectDetails = () => {
  const [scale, setScale] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [showDevis, setShowDevis] = useState(false);
  const { id } = useParams();
  const project = projects.find((p) => p.titre.replace(/\s+/g, "") === id);
  // scrool detect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight/2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.0001; // Ajuste le facteur selon l'effet désiré
      setScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage à la destruction
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* boutton revenir a accueil */}
      <AnimatePresence mode="wait">
      {
        isVisible && (
        <motion.div className='fixed z-50 `h-[400px] top-1/2 transform -translate-y-1/2'
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          exit={{ x: -50 }}
          transition={{ duration: .8 , ease: "easeInOut" }}
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
        )
      }
      </AnimatePresence>
      <div className='relative h-screen  overflow-hidden'
        style={{
        backgroundImage: `url(${project.bannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        transform: `scale(${scale})`,
        transition: 'transform 0.1s linear',
      }}
      >
        <div className="relative px-6 md:px-20 py-10 h-screen z-40">   
          <TopPortfolio setShowDevis={setShowDevis}/>
          <div className='relative text-white h-full flex flex-col justify-end py-44'>
            <h2 className='text-white font-light text-2xl md:text-5xl' data-aos="fade-up">{project.titre}</h2>
            <p className='text-xl md:text-4xl font-thin' data-aos="fade-up" data-aos-delay="300">{project.type}</p>
          </div>
        </div>
        <div className="absolute z-20 bg-black bg-opacity-40 w-screen h-screen top-0"></div>
      </div>
      {/* Elements */}
      <div className="text-center py-10 md:py-20 px-6 md:px-20">
        <div className='grid md:grid-cols-2 grid-cols-1'
        >
          <h2 className='text-lg font-light flex justify-start  md:mb-0 mb-2 c' style={{color: mainColors.mainBrown}}>{project.titre}</h2>
          <div className='md:hidden col-span-1 md:col-span-3 h-[1px]'
            style = {{backgroundColor: mainColors.mainBrown}}
          ></div>
          <h2 className="text-lg font-light mb-2 justify-start hidden md:flex" style={{color: mainColors.mainBrown}}>ÉLEMENTS</h2>
          <div className='col-span-1 md:col-span-3 h-[1px] md:block hidden'
            style = {{backgroundColor: mainColors.mainBrown}}
          ></div>
              {/* Description */}
          <div className="text-justify text-gray-700 text-md leading-relaxed pr-16 pt-5 mb-4 md:mb-0">
            {project.description}
          </div>
          <h2 className="text-lg font-light mb-2 justify-start flex md:hidden" style={{color: mainColors.mainBrown}}>ÉLEMENTS</h2>
            <div className='md:hidden col-span-1 md:col-span-3 h-[1px]'
            style = {{backgroundColor: mainColors.mainBrown}}
          ></div>
          <ul className="flex flex-col gap-4 text-sm tracking-widest  mt-5  pb-10"
           style={{color: mainColors.mainBrown}}
          >
            {project.elements.map((item, index) => (
              <li key={index} className="text-left text-lg">{String(index + 1).padStart(2, '0')} - {item}</li>
            ))}
          </ul>
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
          <div className='flex items-center justify-between py-10 px-6 md:px-20 '>
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
        <div className="text-left mt-8 px-6 md:px-20 text-gray-700 text-lg">
          {project.ctaText}
        </div>
      )}
      {/* bouton pour devis */}
      <div className='px-6 md:px-20 py-10'>
          <DevisBtn />
      </div>
      
    <AnimatePresence mode="wait">
      {
        showDevis && (<Devis setShowDevis={setShowDevis}/>)
      } 
    </AnimatePresence>
    </div>
  );
};

export default ProjectDetails;

