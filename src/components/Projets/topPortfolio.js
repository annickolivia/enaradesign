import React from 'react'
import DevisBtn from './devisBtn';

function TopPortfolio({setShowDevis}) {
  return (
    <div className='grid  grid-cols-[1fr_2fr_1fr] items-center  transform h-fit md:h-[60px] pb-3 md:pb-24 mb-6 border-b-[1px] border-white relative z-30'
      data-aos = "fade-up"
    >
        <img className='w-8 h-8 md:w-20 md:h-20' src="/img/logo_blanc.png"
          data-aos = "fade-right"
        />
        <h4 className='text-white font-extralight tracking-[10px] text-center text-xs md:text-3xl '
          data-aos = "fade-up"
        >PORTFOLIO</h4>
        <div className="flex justify-end"
          data-aos = "fade-left"
        >
          <DevisBtn setShowDevis={setShowDevis}/>
        </div>
    </div>
  )
}

export default TopPortfolio;