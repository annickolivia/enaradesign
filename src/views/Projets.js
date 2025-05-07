import React,{ useState, useEffect } from 'react'
import ProjetsCarousel from '../components/Projets/ProjetsCarousel'
import ProjetFeature from '../components/Projets/ProjetFeature'
import { mainColors } from '../styles/variables'
import { bdProjet } from '../components/bdProjet'

function Projets() {
  const [selectedCateg, setSelectedCateg ] = useState('tout');
  const [selectedProjet, setSelectedProjet ] = useState(bdProjet);
  const [activeProjetId, setActiveProjetId] = useState("");
  const [activeProjet, setActiveProjet] = useState(bdProjet[0]);

  const handleCardClick = (projetId) => {
    setActiveProjetId(projetId);
    console.log(activeProjetId)
  };

  useEffect(() => {
    const filtered = selectedCateg === 'tout'
      ? bdProjet
      : bdProjet.filter((projet) => projet.categorie === selectedCateg);
  
    setSelectedProjet(filtered);
  
    const found = bdProjet.find((projet) => projet.id === activeProjetId);
    if (found) {
      setActiveProjet(found);
    }
  
  }, [selectedCateg, activeProjetId]);

  return (
    <div className=" px-10 py-10
    md:px-40 md:py-20 h-fit">
        <div className="justify-center items-center md:w-full mb-10 hidden md:flex">
            <button className="rounded-md text-white text-sm px-3 md:px-5" onClick={() => setSelectedCateg('tout')}
            style={{backgroundColor: mainColors.mainBrown}}
            >Tout</button>
            <button className="text-sm px-3 md:px-5" onClick={() => setSelectedCateg('commercial')}>Commercial</button>
            <button className="text-sm px-3 md:px-5" onClick={() => setSelectedCateg('urbain')}>Urbain</button>
            <button className="text-sm px-3 md:px-5" onClick={() => setSelectedCateg('residentiel')}>Residentiel</button>
            <button className="text-sm px-3 md:px-5" onClick={() => setSelectedCateg('professionel')}>Professionel</button>
        </div>
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
        <ProjetsCarousel selectedProjet={selectedProjet} handleCardClick={handleCardClick}/>
        <ProjetFeature activeProjet={activeProjet}/>
    </div>
  )
}

export default Projets;