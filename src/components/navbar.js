import React, { useState } from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { PortCateg, ServiceCateg, projects } from './bdProjet';
import ProjectCard from './Acceuil/projectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { mainColors } from '../styles/variables';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/navbar.scss';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState('portfolio');
  const [activeSousMenu, setActiveSousMenu] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const menu = ['A propos', 'Services', 'Portfolio', 'Contact'];

  const handleHoverChange = (choice) => {
    setActiveMenu(choice.toLowerCase());
    if (choice.toLowerCase() === 'portfolio') setActiveSousMenu(PortCateg);
    else if (choice.toLowerCase() === 'services') setActiveSousMenu(ServiceCateg);
    else setActiveSousMenu([]);
  };

  return (
    <>
      <div
        className={`absolute bg-white h-[800px] w-screen z-40 transition-all duration-500 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-10 opacity-0'
        }`}
        onMouseOut={() => setIsMenuOpen(false)}
        onMouseOver={() => setIsMenuOpen(true)}
      >
        <SousMenu activeSousMenu={activeSousMenu} activeMenu={activeMenu}/>
      </div>
      
      {/* menu mobile */}
      <AnimatePresence>
          {isNavOpen && (
            <motion.div
              className="absolute w-screen h-screen flex z-40 bg-white"
              initial={{ y: -window.innerHeight }}
              animate={{ y: 0 }}
              exit={{ y: -window.innerHeight }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 0.5,
                duration: 1.5
              }}
            >
              <ul className="flex flex-col items-center justify-center w-full">
                {menu.map((m, index) => (
                  <li key={index} className='py-2'>
                    <Link to="/projets/" className="text-gray-900 text-center text-2xl font-light">
                      {m}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </AnimatePresence>

      <nav className="absolute z-40 flex justify-between w-screen px-6 md:px-20 py-10 items-center">
          <Logo
          source={isMenuOpen || isNavOpen ? '/img/logo_complete.png' : '/img/logo_complete_blanc.png'}
          className="translate-x-4 transition-all duration-500"
          />
        

        {/* Bouton de fermeture du menu */}
        <div
          className={`absolute left-1/2 hover:scale-125 transition duration-500 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <i className="fas fa-xmark text-2xl font-light text-gray-600" />
        </div>

        {/* Menu mobile */}
        <div className="flex items-center md:hidden" data-aos="fade-left">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="text-gray-700 focus:outline-none max-w-28 z-50"
            aria-label="Toggle menu"
          >
            <svg
              className={`md:w-10 md:h-10 w-8 h-8 transition-all duration-500 ${
                isNavOpen ? 'rotate-90' : 'rotate-0'
              }`}
              fill="none"
              stroke={`${isNavOpen ? "black" : "white"}`}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isNavOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu desktop */}
        <div
          className={`hidden w-2/6 md:flex justify-between font-normal transition-all duration-500 ${
            isMenuOpen ? 'text-gray-600' : 'text-white'
          }`}
        >
          {menu.map((m, index) => (
            <Link
              key={index}
              className="relative font-light after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
              onMouseOver={() => {
                setIsMenuOpen(true);
                handleHoverChange(m);
              }}
              onClick={() => {
                setIsMenuOpen(true);
                handleHoverChange(m);
              }}
            >
              {m}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// ---------------------------------------------
// COMPOSANTS INTERNES
// ---------------------------------------------

function About() {
  return (
    <AnimatePresence>
      <motion.div
        className="font-normal w-full mr-16 flex flex-col items-center mt-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        <h5 className="mb-4 text-2xl font-light" style={{ color: mainColors.mainBrown }}>
          À PROPOS DE NOUS
        </h5>
        <p className="text-base text-gray-600 w-5/6 xl:w-3/3 xl:mr-2 text-justify font-light">
          SENSO Design Agency est une agence d’aménagement
          d’intérieur basée à Madagascar, spécialisée également
          dans la sous-traitance de modélisation 3D et de
          visualisation architecturale. 
          <br></br> <br></br>
          Notre mission ? Donner vie à vos visions grâce à un
          mélange unique de créativité, d’expertise technique et
          de technologies de pointe. Nous menons vos projets
          vers l'élégance et l'innovation.  <br></br> <br></br>
          Que vous soyez un particulier, un professionnel ou un
          promoteur, nous transformons vos idées en réalités
          tangibles, alliant esthétique et fonctionnalité avec
          professionnalisme.
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

function Contact() {
  return (
    <AnimatePresence>
      <motion.div
        className="font-normal w-full flex flex-col mt-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
      >
        <h4 className="mb-4 text-2xl font-light" style={{ color: mainColors.mainBrown }}>
          CONTACTEZ-NOUS
        </h4>
        <p className="text-xl text-gray-600 font-light">
          <i className="far fa-envelope pr-2" style={{ color: mainColors.mainBrown }} /> project@senso-agency.com
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

function SousMenu({ activeSousMenu, activeMenu }) {
  return (
    <div className="px-20 py-36 flex justify-between">
      {activeMenu === 'a propos' ? (
        <About />
      ) : activeMenu === 'contact' ? (
        <Contact />
      ) : activeMenu === 'portfolio' ? (
        <ul className="text-2xl font-normal flex flex-col items-start justify-start w-full mt-10">
          <AnimatePresence>
            {activeSousMenu.map((a) => (
              <motion.li
                key={a.nom}
                className="py-2 hover:translate-x-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Link to="/projets" className="text-left font-extralight">
                  {a.nom}
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      ) : (
        <ul className="text-2xl font-normal flex flex-col items-start justify-start w-full mt-10">
          <AnimatePresence>
            {activeSousMenu.map((a) => (
              <motion.li
                key={a.nom}
                className="py-2 hover:translate-x-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-left font-extralight">
                  {a.nom}
                </span>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      <div className="w-2/3 border-l-2 pl-10">
        <Swiper
          modules={[Navigation, Mousewheel, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          mousewheel={{ forceToAxis: true }}
          speed={800}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full"
        >
          {projects.map((projet, index) => (
            <SwiperSlide key={index}>
              <Link to={`projets/${projet.titre.replace(/\s+/g, '')}`} className="h-[500px]">
                <ProjectCard imgSrc={projet.bannerImage} place="Madagascar" title={projet.titre} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
