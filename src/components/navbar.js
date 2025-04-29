import React, { useState } from 'react';
import '../styles/navbar.scss'
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { mainColors } from '../styles/variables';
import Nav from './Nav';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState('');
  const Portfolio = [
    "Architecture", 
    "Design d'Interieur", 
    "Mobilier", 
    "2D Plan concept",
    "Animation architecturale",
    "Réalité Virtuel"
  ]

  const PortCateg = [
    'Professionnel',
    'Commercial',
    'Residentiel',
    'Urbain'
  ]

  const partenaires = [
    "Hay Tao Home",
    "Enara Construction",
    "Autres"
  ]

  const services = [
    "Conception",
    "Construction"
  ]

  const articles = [
    "Blog",
    "Formation"
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="transition duration-600 absolute w-screen">
        <div className="flex justify-between items-center h-44 px-20 md:px-32 absolute w-screen z-50 bg-transparent">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo source={`${isOpen ? '/img/logo_blanc.png' : '/img/logo_beige.png'}`} size={12}/>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none max-w-28"
              aria-label="Toggle menu"
            >
              <svg
                className="md:w-10 md:h-10 w-8 h-8"
                fill="none"
                stroke={`${isOpen ? 'white' : mainColors.mainBrown }`}
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

      {/* Mobile Menu */}
      <div className={`
        flex flex-row items-center justify-center  md:h-screen pb-52 relative pt-64
        transition-all duration-300 ease-in-out transform dropmenu
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'}   
      `}
      >
        <Nav 
          articles={articles} 
          PortCateg={PortCateg} 
          services={services} 
          clicked={clicked} 
          setClicked={setClicked}
        />
        {/* droiiteeee ---------------*/}
        <div className='flex-col droite justify-center px-48 hidden md:flex w-1/2 md:border-l-white md:border-l-2'>
          <div className="droite-haut flex justify-between md:border-b-white md:border-b-2 md:pb-10">
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
          <div className='droite-bas flex justify-between mt-10'>
                <div className='mr-14'>
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