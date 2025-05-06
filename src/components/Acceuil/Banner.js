
import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative text-white overflow-hidden h-screen ">
      <div className="relative pt-16 px-6 sm:px-10 md:px-20 xl:px-32 2xl:px-40 h-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full">
          <img 
            className="w-full h-full object-cover" 
            src="/img/bg_accueil.jpg" 
            alt="Founder" 
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-black bg-opacity-20"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
