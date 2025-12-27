import React, { useState, useEffect } from 'react'
import './Header.scss'
import logo from '../../assets/logo.svg'
import lockIcon from '../../assets/images/lock-alt.svg'
import arrowIcon from '../../assets/images/arrow-right.svg'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
        <div className='logo_section'>
            <img src={logo} alt="Logo" />
        </div>
        <ul className='nav_links'>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Benefits</a>
            </li>
            <li>
                <a href="#">Pricing</a>
            </li>
            <li>
                <a href="#">Help</a>
            </li>
        </ul>
        <div className='action_btns'>
            <button className='login_btn'>
                <img src={lockIcon} alt="Lock" />
                Login
            </button>
            <button className='signup_btn'>
                Signup
                <img src={arrowIcon} alt="Arrow" />
            </button>
        </div>
    </nav>
  )
}

export default Header
