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
          <h3 className='title' onClick={hideMenu}>Pete's Portfolio</h3>
        </div>

        <div className="menu" onClick={handleShowMenu}>
          <FaThList className='icon'/>
        </div>
      </div>

      <div id='navbar' className={navbarClass ? "navbar active" : "navbar"}>
        <a href="#home" onClick={hideMenu}>Home</a>
        <a href="#" onClick={hideMenu}>About</a>
        <a href="#" onClick={hideMenu}>Skills</a>
        <a href="#" onClick={hideMenu}>Projects</a>
        <a href="#" onClick={hideMenu}>Blogs</a>
        <a href="#" onClick={hideMenu}>Contact</a>
      </div>

    </header>
  )
}

export default Header
