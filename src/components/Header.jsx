import React from 'react'
import logo from '../assets/logo.svg'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className='absolute w-full px-6 pt-8 flex place-content-between '>
      <img src={logo} alt="" />
      <Navbar />
    </header>
  )
}

export default Header
