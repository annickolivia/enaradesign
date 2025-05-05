import React, { useState } from 'react';
import '../styles/navbar.scss'
import Logo from './Logo';
import Nav from './Nav';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="transition duration-600 w-screen fixed h-32 top-0 z-40 " 
    >
      <div className="flex justify-between items-center h-44 px-20 md:px-32 absolute w-screen z-50 bg-transparent">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo source={`/img/logo_blanc.png`} size={12}/>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none max-w-28"
            aria-label="Toggle menu"
          >
            <svg
              className="md:w-10 md:h-10 w-8 h-8 animation-all"
              fill="none"
              stroke={`white`}
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
        flex flex-col md:flex-row items-center justify-center  md:h-screen pb-52 relative pt-64
        transition-all duration-300 ease-in-out transform dropmenu
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none -translate-y-full'}   
      `}
      >
        <Nav />
      </div>
    </nav>
  );
}

export default Navbar;