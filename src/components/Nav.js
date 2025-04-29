import React from 'react'
import { mainColors } from '../styles/variables';
import { Link } from 'react-router-dom';


function Nav({clicked, services, setClicked, PortCateg, articles}) {
  return (
    <div className="h-96 pt-2 pb-3 space-y-1 px-3 flex flex-col justify-center items-center transition duration-300 origin-left md:w-1/2">
          <Link
            to="/accueil"
            className="pages px-4 py-2 rounded-md text-4xl font-medium text-white transition duration-300"
            onClick={() =>{
              if (clicked === 'accueil') setClicked('')
              else setClicked('accueil');
            }}
          >
            Accueil
          </Link>

          <Link
            to="/portfolio"
            className="pages px-4 py-2 rounded-md text-4xl font-medium text-white transition duration-300"
            value='portfolio'
            onClick={() =>{
              if (clicked === 'portfolio') setClicked('')
              else setClicked('portfolio');
            }}
          >
            Portfolio
            <div className={` submenu
                absolute mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden
                transition-all duration-300 ease-in-out transform origin-top
                ${clicked.toLowerCase() === 'portfolio' ? 
                'opacity-100 translate-y-0 scale-y-100' : 
                'opacity-0 -translate-y-2 scale-y-95 pointer-events-none'
          }
              `}>
              <ul>
              {
                PortCateg.map((p, index) => {
                  return (
                    <li key={index} className='text-base text-left hover:bg-gray-100'>
                      <Link
                        to={`/${p.toLowerCase()}`}
                        className={`block px-4 py-2 text-lg`}
                        style={{color: mainColors.mainBrown}}
                      >
                        {p}
                      </Link>
                    </li>
                  )
                })
              }
              </ul>
            </div>
          </Link>

          <Link
            to="/services"
            className="pages px-4 py-2 rounded-md text-4xl font-medium text-white transition duration-300"
            onClick={() =>{
              if (clicked === 'services') setClicked('')
              else setClicked('services');
            }}
          >
            Services
            <div className={` submenu
                absolute mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden
                transition-all duration-300 ease-in-out transform origin-top
                ${clicked.toLowerCase() === 'services' ? 
                'opacity-100 translate-y-0 scale-y-100' : 
                'opacity-0 -translate-y-2 scale-y-95 pointer-events-none'
          }
              `}>
              <ul>
              {
                services.map((p, index) => {
                  return (
                    <li key={index} className='text-base text-left hover:bg-gray-100'>
                      <Link
                        to={`/${p.toLowerCase()}`}
                        className={`block px-4 py-2 text-lg`}
                        style={{color: mainColors.mainBrown}}
                      >
                        {p}
                      </Link>
                    </li>
                  )
                })
              }
              </ul>
            </div>
          </Link>

          <Link
            to="/articles"
            className="pages px-4 py-2 rounded-md text-4xl font-medium text-white transition duration-300"
            onClick={() =>{
              if (clicked === 'articles') setClicked('')
              else setClicked('articles');
            }}
          >
            Articles
            <div className={` submenu
                absolute mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden
                transition-all duration-300 ease-in-out transform origin-top 
                blur-none bg-white/80
                ${clicked.toLowerCase() === 'articles' ? 
                'opacity-100 -translate-y-0 scale-y-100' : 
                'opacity-0 -translate-y-2 scale-y-20 pointer-events-none'
          }
              `}>
              <ul>
              {
                articles.map((p, index) => {
                  return (
                    <li key={index} className='text-base text-left hover:bg-gray-100'>
                      <Link
                        to={`/${p.toLowerCase()}`}
                        className={`block px-4 py-2 text-lg`}
                        style={{color: mainColors.mainBrown}}
                      >
                        {p}
                      </Link>
                    </li>
                  )
                })
              }
              </ul>
            </div>
          </Link>

        </div>
  )
}

export default Nav