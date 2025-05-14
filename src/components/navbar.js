import react, {useState} from 'react'
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { PortCateg, ServiceCateg } from './bdProjet';
import ProjectCard from './Acceuil/projectCard';
import { projects } from './bdProjet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { mainColors } from '../styles/variables';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/navbar.scss';
// import { mainColors } from '../../../styles/variables'

 function Navbar() {
  const [activeMenu, setActiveMenu] = useState('portfolio');
  const [activeSousMenu, setActiveSousMenu] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portfolio = [
    'A propos',
    'Services',
    'Portfolio',
    'Contact'
  ]

  const handleHoverChange = (choice) => {
    setActiveMenu(choice.toLowerCase())
    if (choice.toLowerCase() === 'portfolio') {
      setActiveSousMenu(PortCateg)
    }
    else if(choice.toLowerCase() === 'services') {
      setActiveSousMenu(ServiceCateg)
    }
    else {
      setActiveSousMenu([]);
    }
  }

  return (
    <>
    <div className={`absolute bg-white h-[800px] w-screen z-40
    transition-all transition-discrete duration-500 ease-in-out transform"
    ${isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-10 opacity-0'}`}
    onMouseOut={() => setIsMenuOpen(false)}
    onMouseOver={() => setIsMenuOpen(true)}
    > 
      <SousMenu activeSousMenu={activeSousMenu} activeMenu={activeMenu}/>
    </div>
    <nav className="absolute z-40 flex justify-between w-screen px-20 py-4 items-center">
      <Logo source={` ${isMenuOpen ? '/img/logo_beige.png' : '/img/logo_blanc.png'}`} className=" transition-all duration-500 transition-discrete"/>
      <div className={` absolute left-1/2 hover:scale-[1.3] transition duration-500 ${isMenuOpen ? 'block' : 'hidden'}`} onClick={() => setIsMenuOpen(false)}>
        <i className={`fas fa-xmark text-2xl font-light text-gray-600`}/>
      </div>
      <div className={`w-2/6 flex justify-between font-normal transition-all duration-500 transition-discrete
      ${isMenuOpen ? 'text-gray-600' : "text-white"}
      `} 
      >
        {
          portfolio.map((m, index) => {
            return (
              <Link 
              className="relative font-light after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                onMouseOver={() => {
                  setIsMenuOpen(true);
                  handleHoverChange(m)
                }}
                to={m} 
                key={index}
              >{m}</Link>
            )
          } )
        }
      </div>
    </nav>
    </>
  )
 }

 export default Navbar;


 function About() {
  return (
    <AnimatePresence mode="wait">
    <motion.div className="font-normal w-full flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
    >
      <h5 className="mb-4 text-4xl font-light" style={{color: mainColors.mainBrown}}>À PROPOS DE NOUS</h5>
      <p className="text-xl text-gray-600 w-2/3 text-left font-light">
        Nous sommes une équipe passionnée de design d'interieur 3D et designers...
      </p>
    </motion.div>
    </AnimatePresence>
  );
}

function Contact() {
  return (
    <AnimatePresence mode="wait">
    <motion.div className="text-4xl font-normal w-full flex flex-col"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      <h4 className="mb-4 text-4xl font-light" style={{color: mainColors.mainBrown}}>CONTACTEZ-NOUS</h4>
      <p className="text-xl text-gray-600 font-light"><i className='far fa-envelope pr-2' style={{color: mainColors.mainBrown}}/>  contact@exemple.com</p>
      <p className="text-xl text-gray-600 font-light"><i className='far fa-address-book pr-2' style={{color: mainColors.mainBrown}}/>  +261 34 00 000 00</p>
    </motion.div>
    </AnimatePresence>
  );
}

function SousMenu ({activeSousMenu, activeMenu}) {
  return (
    <div className='px-20 py-36 flex justify-between'>
    {activeMenu === "a propos" ? (
        <About />
      ) : activeMenu === "contact" ? (
        <Contact />
      ) : (
        <ul className="text-4xl font-normal flex flex-col items-start justify-start w-full">
          <AnimatePresence mode="wait">
            {activeSousMenu.map((a, index) => (
              <motion.li
                key={a.nom}
                className="py-2 hover:translate-x-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <Link to={a.chemin} className="text-left font-extralight">
                  {a.nom}
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

    <div className='w-2/3 border-l-2 pl-10'>
      <Swiper
             modules={[Navigation, Mousewheel, Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
              }}
              mousewheel={{ forceToAxis: true }}
              speed={800}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="w-full"
      >
            {projects.map((projet, index) => {
                return (
                    <SwiperSlide key={index}>
                        <ProjectCard imgSrc={projet.srcImg} place="Madagascar" title={projet.titre} h={150}/>
                    </SwiperSlide>
                )
            })}
      </Swiper>
    </div>
    </div>
  )
}
