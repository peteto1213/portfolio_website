import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import icon from '../../resources/icon.png';

function Header() {

  const [headerClass, setHeaderClass] = useState('header')

  const handleScroll = () => {
    if(window.scrollY > 60){
      setHeaderClass('header active')
    }else{
      setHeaderClass('header')
    }
  }

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll)

    return() => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <header className={headerClass} >

      <div className="logo">
        <img src={icon} alt="icon" />
        <h3 className='title'>Pete's Portfolio</h3>
      </div>

      <ul className="navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Blogs</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

    </header>
  )
}

export default Header