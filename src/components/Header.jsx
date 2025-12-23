import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname, hash } = useLocation();

  const handleLinkClick = () => {
    const navbarCollapse = document.getElementById('navbarSupportedContent');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <header className="main_header_area five_header">
      
      <div className="main_menu_two">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center' }}>
              <img style={{ height: '1.5cm', width: '2.5cm', borderRadius: '50%', marginRight: '10px' }} src="/logo1111.png" alt="" />
              <span style={{ color: '#f195b2', fontSize: '24px', fontWeight: 'bold', fontFamily: '"Playfair Display", serif' }}>DR-Yums</span>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="my_toggle_menu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav justify-content-end">
                <li className={pathname === '/' && hash === '' ? 'active' : ''}>
                  <Link to="/" onClick={handleLinkClick}>Home</Link>
                </li>
                <li className={hash === '#about' ? 'active' : ''}>
                  <Link to="/#about" onClick={handleLinkClick}>About Us</Link>
                </li>
                <li className={hash === '#cake' ? 'active' : ''}>
                  <Link to="/#cake" onClick={handleLinkClick}>Cakes</Link>
                </li>

                <li className={pathname === '/menu' ? 'active' : ''}>
                  <Link to="/menu" onClick={handleLinkClick}>Menu</Link>
                </li>
                <li className={pathname === '/gallery' ? 'active' : ''}>
                  <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
                </li>
                <li className={pathname === '/contact' ? 'active' : ''}>
                  <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
                </li>
                <li className="align-self-center">
                  <a className="pink_btn" href="https://wa.me/923413663416" target="_blank" rel="noopener noreferrer" style={{ lineHeight: '45px', color: '#fff' }} onClick={handleLinkClick}>Order Now</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
