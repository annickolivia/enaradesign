import React from 'react'
import { Link } from 'react-router-dom'
import { mainColors } from '../styles/variables'

function DevisBtn() {
  return (
   <Link to="/devis" className='group flex w-[250px] justify-between items-center rounded-full pl-5 pr-2 py-2 group-hover:bg-white' style={{backgroundColor: mainColors.mainBrown}}>
    <p className={`transform transition-transform group-hover:translate-x-2 duration-700`}>OBTENEZ UN DEVIS</p>
    <i className="fas fa-arrow-right bg-white p-3 rounded-full transform transition-transform group-hover:scale-150 duration-700 group-hover:rotate-90" style={{color: mainColors.mainBrown}}></i>
   </Link>
  )
}

export default DevisBtn
