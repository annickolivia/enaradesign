
import React from 'react';
import DevisBtn from '../devisBtn';


const HeroBanner = () => {
  return (
    <section className="relative text-white h-screen bg-cover" style={{backgroundImage: "url('/img/banner/bg-banner.png')"}}>
      <div className="relative pt-16 px-6 sm:px-10 md:px-20 xl:px-20 2xl:px-20 h-full">
        {/* Background Image */}
        {/* Gradient Overlay */}
        {/* <div className="absolute inset-0 z-20 bg-black bg-opacity-20"></div> */}
        <div className='xl:mt-96 z-30 '>
        <h3 className="text-white font-thin mb-10"><span className='font-bold'>Créer </span> des espaces <br></br> <span className='font-bold'>uniques</span> et inspirants</h3>
        <DevisBtn />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
