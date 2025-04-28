import React from 'react';

const Banner = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/img/bg_accueil.jpg"
          alt="Founder"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
      </div>

      {/* Animation Frames (fake placeholder for now) */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-32 h-32 bg-white/10 rounded-full animate-pulse absolute" style={{ top: '20%', left: '20%' }}></div>
        <div className="w-20 h-20 bg-white/10 rounded-full animate-ping absolute" style={{ top: '50%', left: '70%' }}></div>
        <div className="w-16 h-16 bg-white/10 rounded-full animate-bounce absolute" style={{ bottom: '10%', right: '20%' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-bold mb-10 leading-tight">
          Créer <span className="font-light">des Espaces</span> <br />
          Uniques <span className="font-light">et Inspirants</span>
        </h1>

        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-lg text-gray-300">
            Bienvenue dans notre univers où chaque espace devient une œuvre d'art. Ensemble, transformons vos idées uniques et inspirants, alliant élégance, fonctionnalité et créativité sans limites.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-16">
          <a href="/pages/services.php" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
            Nos services
          </a>
          <a href="/pages/project.php" className="text-blue-400 hover:underline font-medium py-3 px-6">
            Voir nos projets
          </a>
        </div>

        {/* Circle Text and Scroll Button */}
        <div className="relative flex justify-center items-center mt-10">
          <svg
            className="w-48 h-48 animate-spin-slow"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0 " />
            </defs>
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text className="fill-current text-white text-sm tracking-[6.5px]">
                <textPath href="#circlePath">
                  Scroll down - Scroll down - Scroll down -
                </textPath>
              </text>
            </g>
          </svg>
          <a
            href="#about"
            className="absolute w-16 h-16 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition"
          >
            ↓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
