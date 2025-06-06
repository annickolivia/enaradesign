
import React from 'react';
import DevisBtn from '../devisBtn';
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="relative text-white h-screen bg-cover py-20" style={{backgroundImage: "url('/img/banner/bg-banner.png')", backgroundPosition: "center"}}>
      <div className="relative pt-16 px-6  md:px-20 xl:px-20 2xl:px-20 h-full z-30">
        {/* Background Image */}
        {/* Gradient Overlay */}
        <div className=' flex flex-col justify-end h-full'>
          <motion.h3 className="text-white font-thin mb-10 sm:text-3xl md:text-6xl text-left"
          data-aos="fade-right"
          data-aos-delay="600"
          whileHover={{
            color: "#ffffff", // neon aqua
            textShadow: "0px 0px 8px #ffffff",
            transition: { duration: 0.3 }
          }}
          ><span className='font-bold'>Créer </span> des espaces <br></br> <span className='font-bold'>uniques</span> et inspirants
          </motion.h3>
          <div 
            data-aos="fade-up"
            data-aos-delay="800"
          >
           <DevisBtn />
          </div>
        </div>
        
      </div>
      <div className="absolute inset-0 z-20 bg-black bg-opacity-10"></div>
    </section>
  );
};

export default HeroBanner;
