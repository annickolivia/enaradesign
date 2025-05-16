import React from 'react'
import { Link } from 'react-router-dom'

function DevisBtn({setShowDevis}) {
  return (
    <Link className="text-white font-light border rounded-full py-3 px-5 h-fit w-fit text-center"
    onClick= {() => setShowDevis(true)}
    >
        <i className='fas fa-download pr-3'/>
        Obtenir un devis
    </Link>
  )
}

export default DevisBtn