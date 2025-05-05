import React  from 'react'
import { Link } from 'react-router-dom';
export default function Nav() {

  const PortCateg = [
    {
    nom: "Professionnel",
    chemin:"projets/professionnel"
  },
  {
    nom: "Commercial",
    chemin:"projets/commercial"
  },
  {
    nom: "Residentiel",
    chemin:"projet/residentiel"
  },
  {
    nom: "Urbain",
    chemin:"projet/urbain"
  }
  ]

  return (
    <>
      <div className="h-56 pt-2 pb-3 space-y-1 px-16 flex flex-row justify-center items-inline transition duration-300 origin-left">
        <Link
          to="/accueil"
          className="pages px-4 py-2 rounded-md text-xl font-medium text-white transition duration-300"
        >
          Nous découvrir
        </Link>
        <ul className="text-gray-400 w-[100px]">
          <li className="py-2 hover:text-white transition duration-300 transition cursor-pointer">A propos de nous</li>
          <li className="py-2 hover:text-white transition duration-300 cursor-pointer">Nos Services</li>
          <li className="py-2 hover:text-white transition duration-300 cursor-pointer">Articles</li>
          <li className="py-2 hover:text-white transition duration-300 cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="h-56 pt-2 pb-3 space-y-1 px-16 flex flex-row justify-center items-inline transition duration-300 origin-left">
        <Link
          to="/accueil"
          className="pages px-4 py-2 rounded-md text-xl font-medium text-white transition duration-300"
        >
          Portfolio
        </Link>
        <ul className="text-white text-gray-400 w-[100px]">
            {
              PortCateg.map((p,index) => {
                return(
                  <li key={index} className="py-2 hover:text-white transition duration-300">
                    <Link to={p.chemin}>
                      {p.nom}
                    </Link>
                  </li>
                )
              })
            }
        </ul>
      </div>
    </>
    
  );
}
