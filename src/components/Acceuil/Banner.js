
import React from 'react';
import DevisBtn from '../devisBtn';


const HeroBanner = () => {
  return (
    <section className="relative text-white h-screen bg-cover py-20 z-30" style={{backgroundImage: "url('/img/banner/bg-banner.png')", backgroundPosition: "center"}}>
      <div className="relative pt-16 px-6 sm:px-10 md:px-20 xl:px-20 2xl:px-20 h-full">
        {/* Background Image */}
        {/* Gradient Overlay */}
        
        <div className='z-50 flex flex-col justify-end h-full'>
          <h3 className="text-white font-thin mb-10 text-6xl"><span className='font-bold'>Créer </span> des espaces <br></br> <span className='font-bold'>uniques</span> et inspirants</h3>
          <DevisBtn />
        </div>
        
      </div>
      <div className="absolute inset-0 z-20 bg-black bg-opacity-20"></div>
    </section>
  );
};

export default HeroBanner;
