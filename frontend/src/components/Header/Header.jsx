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
          <a className='title' onClick={hideMenu} href="https://github.com/peteto1213" target="blank">Pete's Portfolio</a>
        </div>

        <div className="menu" onClick={handleShowMenu}>
          <FaThList className='icon'/>
        </div>
      </div>

      <div id='navbar' className={navbarClass ? "navbar active" : "navbar"}>
        <a href="#home" onClick={hideMenu}>Home</a>
        <a href="#about" onClick={hideMenu}>About</a>
        <a href="#skills" onClick={hideMenu}>Skills</a>
        <a href="#projects" onClick={hideMenu}>Projects</a>
        <a href="#" onClick={hideMenu}>Blogs</a>
        <a href="#contact" onClick={hideMenu}>Contact</a>
      </div>

    </header>
  )
}

export default Header
