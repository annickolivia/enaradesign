import React, { useState } from 'react';
import '../styles/navbar.scss'
import { Link } from 'react-router-dom';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const Portfolio = [
    "Architecture", 
    "Design d'Interieur", 
    "Mobilier", 
    "2D Plan concept",
    "Animation architecturale",
    "Réalité Virtuel"
  ]

  const partenaires = [
    "Hay Tao Home",
    "Enara Construction",
    "Autres"
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${isOpen ? 'bg-black' : 'bg-transparent'} transition duration-600`}>
      <div className="max-w-full mx-5 px-10 sm:px-20">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold ${isOpen ? 'text-white':' text-gray-800'}`}>Enara.</span>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`flex flex-row bg-black items-center justify-center ${isOpen ? 'block' : 'hidden'} transition`}>

        <div className="pt-2 pb-3 pr-32 space-y-1 mr-28 px-3 h-screen flex flex-col justify-center items-center transition duration-300 origin-left  md:border-r-gray-900 md:border-r-2 
          
        ">
          <Link
            to="/accueil"
            className="pages px-4 py-2 rounded-md text-4xl font-medium text-white transition duration-300"
          >
            Accueil
          </Link>
          <Link
            to="/portfolio"
            className="pages px-4 py-2 rounded-md text-4xl font-medium text-white  transition duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="/services"
            className="pages px-4 py-2 rounded-md text-4xl font-medium text-white transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/articles"
            className="pages px-4 py-2 rounded-md text-4xl font-medium text-white transition duration-300"
          >
            Articles
          </Link>
        </div>
        {/* droiiteeee ---------------*/}
        <div className='flex-col droite h-screen justify-center align-items-center hidden md:flex'>
          <div className="droite-haut flex md:border-b-gray-800 md:border-b-2 md:py-10">
            {/* Portfolio */}
            <div>
              <h6 className="text-white">Porfolio</h6>
              {Portfolio.map((item, index) => {
                  return (
                    <Link
                      key={index}
                     to={`/${item.toLowerCase()}`}
                      className="block px-4 py-2 rounded-md text-4xl font-medium text-white transition duration-300 sous-link"
                    >
                      {item}
                    </Link>
                  );
              })}
            </div>
            <div>
              <h6 className="text-white">Nos Partenaires</h6>
                {partenaires.map((item, index) => {
                  return (
                    <Link
                      key={index}
                     to={`/${item.toLowerCase()}`}
                      className="block px-4 py-2 rounded-md text-4xl font-medium text-white transition duration-300 sous-link"
                    >
                      {item}
                    </Link>
                  );
                })}
            </div>
          </div>
          <div className='droite-bas flex sous-link mt-10'>
                <div>
                  <h6 className="text-white">Madagascar</h6>
                  <p>Lot Xxxxxxxx</p>
                  <p>Antsakaviro</p>
                  <p>Antananarivo</p>
                  <p>+261 32 05 802 56</p>
                </div>
                <div>
                  <h6 className='text-white'>International</h6>

                  <p>xxxxxxxxxxxxx</p>
                  <p>+31 174 705 811</p>
                </div>
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;