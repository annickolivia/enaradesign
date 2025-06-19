import { useState, useEffect } from 'react'
import ProjetsCarousel from '../components/Projets/ProjetsCarousel'
import { projects } from '../components/bdProjet'
import FiltreProjet from '../components/Projets/filtreProjet'
import TopPortfolio from '../components/Projets/topPortfolio'
import { AnimatePresence, motion } from 'framer-motion'
import Devis from './Devis'
import { mainColors } from '../styles/variables'
import { Link } from 'react-router-dom'
import CustomCursor from '../components/cursorPerso'

function Projets() {
  const [selectedCateg, setSelectedCateg ] = useState('tout');
  const [selectedProjet, setSelectedProjet ] = useState(projects);
  const [activeProjetId, setActiveProjetId] = useState("");
  const [activeProjet, setActiveProjet] = useState(projects[0]);
  const [showDevis, setShowDevis] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleCardClick = (projetId) => {
    setActiveProjetId(projetId);
  };

   // scrool detect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight/2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Nettoyage à la destruction
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    const filtered = selectedCateg === 'tout'
      ? projects
      : projects.filter((projet) => projet.categorie === selectedCateg);
    setSelectedProjet(filtered);
    const found = projects.find((projet) => projet.id === activeProjetId);
    if (found) {
      setActiveProjet(found);
    }
  }, [selectedCateg, activeProjetId]);

  return (
    <div>
      <CustomCursor />
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
      </motion.div> )

      }
      </AnimatePresence>
      <div className=" px-6 py-10
      md:px-20 h-screen md:h-[600px]"
      style={{backgroundImage: "url('/img/portfolio/portfolioBg.jpg')", backgroundPosition: 'center', backgroundSize:'cover'}}
      >   
        <div className='relative z-40'><TopPortfolio setShowDevis={setShowDevis}/></div>
        <FiltreProjet setSelectedCateg={setSelectedCateg}/>
        <select 
          className="justify-center font-light items-center md:w-full mb-10 block md:hidden bg-transparent text-white text-2xl w-full"
          onChange={(e) => setSelectedCateg(e.target.value)}
          value={selectedCateg}
        >
          <option className="text-base text-gray-900" value="tout">Tout</option>
          <option className="text-base text-gray-900" value="commercial">Commercial</option>
          <option className="text-base text-gray-900" value="urbain">Urbain</option>
          <option className="text-base text-gray-900" value="residentiel">Residentiel</option>
          <option className="text-base text-gray-900" value="professionel">Professionel</option>
        </select>
          <h4  className="pb-10 font-light relative md:top-64 top-96 text-white text-3xl md:text-5xl">NOS PROJETS</h4>
        {/* <ProjetFeature activeProjet={activeProjet}/> */}
      </div>
    <ProjetsCarousel selectedProjet={selectedProjet} handleCardClick={handleCardClick}/>
    <AnimatePresence mode="wait">
      {
        showDevis && (<Devis setShowDevis={setShowDevis}/>)
      } 
    </AnimatePresence>
    </div>
  )
}
export default Projets;