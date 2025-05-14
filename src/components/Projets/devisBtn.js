import React from 'react'
import { Link } from 'react-router-dom'

function DevisBtn() {
  return (
    <Link to="/devis" className="text-white font-light border rounded-full py-3 px-5 h-fit w-fit text-center">
        <i className='fas fa-download pr-3'/>
        Obtenir un devis
    </Link>
  )
}

export default DevisBtn