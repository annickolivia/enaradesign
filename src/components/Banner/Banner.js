
import React from 'react';
import { mainColors } from '../../styles/variables';

const HeroBanner = () => {
  return (
    <section className="relative text-white overflow-hidden h-screen lg:h-[800px]">
      <div className="relative pt-16 px-6 sm:px-10 md:px-20 xl:px-32 2xl:px-40 h-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full">
          <img 
            className="w-full h-full object-cover" 
            src="/img/bg_accueil.jpg" 
            alt="Founder" 
          />
        </div>

        {/* Animation Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute rounded-full bg-white opacity-10 w-64 h-64 -top-32 -left-32 scale-[7]"></div>
          <div className="absolute rounded-full bg-white opacity-10 w-64 h-64 bottom-0 right-0 scale-[4]"></div>
          <div className="absolute rounded-full bg-white opacity-10 w-32 h-32 top-1/2 left-1/2 scale-[1.2]"></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-20 bg-black bg-opacity-0"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
