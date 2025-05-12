import React from 'react'
import { Link } from 'react-router-dom'
import { mainColors } from '../styles/variables'

function DevisBtn() {
  return (
   <Link to="/devis" className='flex w-[250px] justify-between items-center rounded-full pl-5 pr-2 py-2' style={{backgroundColor: mainColors.mainBrown}}>
    <p>OBTENEZ UN DEVIS</p>
    <i className="fas fa-arrow-right bg-white p-3 rounded-full" style={{color: mainColors.mainBrown}}></i>
   </Link>
  )
}

export default DevisBtn
