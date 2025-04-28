import React from 'react'
import Navbar from './navbar';
import '../styles/header.scss';

function Header({children}) {
  return (
    <header>
      <Navbar />
    </header>
  )
}

export default Header;