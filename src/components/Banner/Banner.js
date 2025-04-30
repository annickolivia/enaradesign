import React from 'react';
import { mainColors } from '../../styles/variables';

const HeroBanner = () => {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="relative pt-16 px-10 md:px-72">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="/img/bg_accueil.jpg" 
            alt="Founder" 
          />
        </div>

        {/* Animation Elements */}
        <div className="absolute inset-0 z-10">
          <div 
            className="absolute rounded-full bg-white opacity-10 w-64 h-64 -top-32 -left-32"
            style={{ transform: 'scale(7)' }}
          ></div>
          <div 
            className="absolute rounded-full bg-white opacity-10 w-64 h-64 bottom-0 right-0"
            style={{ transform: 'scale(4)' }}
          ></div>
          <div 
            className="absolute rounded-full bg-white opacity-10 w-32 h-32 top-1/2 left-1/2"
            style={{ transform: 'scale(1.2)' }}
          ></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-black bg-opacity-40"></div>

        {/* Content */}
        <div className="container mx-auto py-32 relative z-30">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-light mb-12 text-white">
              Créer <span className="font-thin">des Espaces </span><br/>
               Uniques <span className="font-thin">et Inspirants</span>
            </h1>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-full mb-12">
                <p className="text-lg mb-12 w-full">
                  Bienvenue dans notre univers où chaque espace devient une œuvre d'art. 
                  Ensemble, transformons vos idées uniques et inspirants, alliant élégance, 
                  fonctionnalité et créativité sans limites.
                </p>
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-center md:justify-center'>
              <div className="flex  flex-row items-center gap-6">
                <a 
                  href="/pages/services" 
                  className="flex items-center justify-between px-8 py-3 border border-none rounded-full hover:bg-white hover:text-gray-900 transition-colors duration-300"
                  style={{ backgroundColor: mainColors.mainBrown, color: 'white' }}
                >
                  <span>Nos services</span>
                  <svg
                    style={{ color: mainColors.mainBrown, backgroundColor: 'white', padding: '0.25em' }} 
                    className="w-6 h-6 ml-2 rounded-full" fill={mainColors.mainBrown} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a 
                  href="/pages/project" 
                  className="flex items-center text-white hover:underline border-white"
                >
                  <span>Voir nos projets</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Circle Text with Scroll Down Button */}
              <div className="relative h-24 mx-auto mt-32 md:mt-0">
                <svg 
                  className="absolute inset-0 w-full h-full animate-spin-slow" 
                  viewBox="0 0 300 300" 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none" />
                  <g>
                    <use xlinkHref="#circlePath" fill="none" />
                    <text style={{ letterSpacing: '6.5px' }}>
                      <textPath xlinkHref="#circlePath">Scroll down - Scroll down - </textPath>
                    </text>
                  </g>
                </svg>
                <a 
                  href="#about" 
                  className="absolute inset-0 flex items-center justify-center w-12 h-12 mx-auto my-6 rounded-full border border-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;