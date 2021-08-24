import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img 
            className='logo'
            src='/images/logo.jpg'
            />
            CarPro
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Početna
              </Link>
            </li>

            <li className='nav-item'>
              <a href='https://www.google.com/maps/dir/43.8199506,18.314444/43.847847,18.326483/@43.8359472,18.3022031,14z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0' className='nav-links' onClick={closeMobileMenu}>
                Lokacija
              </a>
            </li>

            <li className='nav-item'>
              <Link to='/contac' className='nav-links' onClick={closeMobileMenu}>
                Kontakt
              </Link>
            </li>

          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;
