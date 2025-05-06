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

  const decouvrir = [
    {
      nom: "A propos de nous",
      chemin:"/aboutus"
    },
    {
      nom: "Nos Services",
      chemin:"/services"
    },
    {
      nom: "Articles",
      chemin:"/articles"
    },
    {
      nom: "Contact",
      chemin:"/contact"
    }
  ]

  return (
    <>
      <div className="h-56 pt-2 pb-3 space-y-1 px-16 flex flex-row justify-center items-inline transition duration-300 origin-left">
        <Link
          to="/"
          className="pages px-6 py-2 md:mr-0 rounded-md text-xl text-left font-medium text-white transition duration-300 w-[170px]"
        >
          Découvrir
        </Link>
        <ul className="text-gray-400 w-[130px]">
          {
            decouvrir.map((dec,index) => {
              return (
                <li key={index} className="py-2 hover:text-white duration-300 transition cursor-pointer">
                  <Link to={dec.chemin}>
                    {dec.nom}
                  </Link>
                </li>
              )
            })
          }
         
        </ul>
      </div>
      <div className="h-56 pt-2 pb-3 space-y-1 px-16 flex flex-row justify-center items-inline transition duration-300 origin-left">
        <Link
          to="/accueil"
          className="pages px-6 py-2 md:mr-0 rounded-md text-xl text-left font-medium text-white transition duration-300 w-[170px]"
        >
          Portfolio
        </Link>
        <ul className="text-gray-400 w-[130px]">
            {
              PortCateg.map((p,index) => {
                return(
                  <li key={index} className="py-2 hover:text-white transition duration-300">
                    <Link to="/projets">
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
