import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-4xl font-bold text-gray-800">Logo</span>
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
      <div className={`${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-8 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 h-screen bg-black ">
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-4xl font-medium text-white hover:text-indigo-600 hover:bg-gray-100 transition duration-300"
          >
            Accueil
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-4xl font-medium text-white hover:text-indigo-600 hover:bg-gray-100 transition duration-300"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-4xl font-medium text-white hover:text-indigo-600 hover:bg-gray-100 transition duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="block px-3 py-2 rounded-md text-4xl font-medium text-white hover:text-indigo-600 hover:bg-gray-100 transition duration-300"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;