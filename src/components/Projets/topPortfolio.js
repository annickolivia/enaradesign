import React from 'react'
import DevisBtn from './devisBtn';

function TopPortfolio({setShowDevis}) {
  return (
    <div className='grid grid-cols-3 items-center h-[60px] pb-24 mb-6 border-b-[1px] border-white relative z-30'
      data-aos = "fade-up"
    >
        <img className='w-20 h-20' src="/img/logo_blanc.png"
          data-aos = "fade-right"
        />
        <h4 className='text-white font-extralight tracking-[10px] text-center'
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