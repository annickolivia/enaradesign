import React from 'react'
import Navbar from './navbar';

function Header({children}) {
  return (
    <header>
      <Navbar />
    </header>
  )
}

export default Header;