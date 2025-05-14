import React from 'react'
import DevisBtn from './devisBtn';

function TopPortfolio() {
  return (
    <div className='grid grid-cols-3 items-center h-[60px] pb-24 mb-6 border-b-[1px] border-white relative'>
        <img className='w-20 h-20' src="/img/logo_blanc.png"/>
        <h4 className='text-white font-extralight tracking-[10px] text-center'>PORTFOLIO</h4>
        <div className="flex justify-end">
          <DevisBtn />
        </div>
    </div>
  )
}

export default TopPortfolio;