import React from 'react'
import { Link } from 'react-router-dom'

function DevisBtn({setShowDevis}) {
  return (
    <Link className="text-white font-light border flex items-center justify-center rounded-full scale-75 md:py-3 px-5 h-fit w-fit text-center"
    onClick= {() => setShowDevis(true)}
    >
        <i className='fas fa-download pr-0 py-2 md:pr-3'/>
        <span className='hidden md:block'>Obtenir un devis</span>
    </Link>
  )
}

export default DevisBtn