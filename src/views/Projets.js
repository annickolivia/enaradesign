import { useState, useEffect } from 'react'
import ProjetsCarousel from '../components/Projets/ProjetsCarousel'
import { projects } from '../components/bdProjet'
import FiltreProjet from '../components/Projets/filtreProjet'
import TopPortfolio from '../components/Projets/topPortfolio'

function Projets() {
  const [selectedCateg, setSelectedCateg ] = useState('tout');
  const [selectedProjet, setSelectedProjet ] = useState(projects);
  const [activeProjetId, setActiveProjetId] = useState("");
  const [activeProjet, setActiveProjet] = useState(projects[0]);

  const handleCardClick = (projetId) => {
    setActiveProjetId(projetId);
  };

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
      <div className=" px-10 py-10
      md:px-20 h-[600px]"
      style={{backgroundImage: "url('/img/portfolio/portfolioBg.jpg')", backgroundPosition: 'center', backgroundSize:'cover'}}
      >   
        <TopPortfolio />
        <FiltreProjet setSelectedCateg={setSelectedCateg}/>
        <select 
          className="justify-center items-center md:w-full mb-10 block md:hidden text-2xl"
          onChange={(e) => setSelectedCateg(e.target.value)}
          value={selectedCateg}
        >
          <option className="text-base" value="tout">Tout</option>
          <option className="text-base" value="commercial">Commercial</option>
          <option className="text-base" value="urbain">Urbain</option>
          <option className="text-base" value="residentiel">Residentiel</option>
          <option className="text-base" value="professionel">Professionel</option>
        </select>
        {/* <ProjetFeature activeProjet={activeProjet}/> */}
      </div>
    <ProjetsCarousel selectedProjet={selectedProjet} handleCardClick={handleCardClick}/>
    </div>
  )
}

export default Projets;