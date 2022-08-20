import React from 'react'
import { useState, useEffect } from 'react';
import { FaThList } from 'react-icons/fa'
import icon from '../../resources/icon.png';

function Header() {

  const [headerClass, setHeaderClass] = useState('header')
  const [navbarClass, setNavbarClass] = useState(false)

  const handleScroll = () => {
    if(window.scrollY > 60){
      setHeaderClass('header active')
    }else{
      setHeaderClass('header')
    }
  }

  const handleShowMenu = () => {
    setNavbarClass(!navbarClass)
  }

  const hideMenu = () => {
    setNavbarClass(false)
  }

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll)

    window.onscroll = () => {
      hideMenu()
    }

    return() => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <header className={headerClass} >

      <div className='top'>
        <div className="logo">
          <img src={icon} alt="icon" />
          <h3 className='title'>Pete's Portfolio</h3>
        </div>

        <div className="menu" onClick={handleShowMenu}>
          <FaThList className='icon'/>
        </div>
      </div>

      <ul className={navbarClass ? "navbar active" : "navbar"}>
        <li onClick={hideMenu}><a href="#">Home</a></li>
        <li onClick={hideMenu}><a href="#">About</a></li>
        <li onClick={hideMenu}><a href="#">Skills</a></li>
        <li onClick={hideMenu}><a href="#">Projects</a></li>
        <li onClick={hideMenu}><a href="#">Blogs</a></li>
        <li onClick={hideMenu}><a href="#">Contact</a></li>
      </ul>

    </header>
  )
}

export default Header
