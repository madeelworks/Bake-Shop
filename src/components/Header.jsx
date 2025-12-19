import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

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
                <li className={currentPath === '/' ? 'active' : ''}>
                  <Link to="/">Home</Link>
                </li>
                <li className={currentPath === '/about-us' ? 'active' : ''}>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className={currentPath === '/cake' ? 'active' : ''}>
                  <Link to="/cake">Cakes</Link>
                </li>
                <li className={currentPath === '/service' ? 'active' : ''}>
                  <Link to="/service">Services</Link>
                </li>
                <li className={currentPath === '/menu' ? 'active' : ''}>
                  <Link to="/menu">Menu</Link>
                </li>
                <li className={currentPath === '/cart' ? 'active' : ''}>
                  <Link to="/cart">Place Order</Link>
                </li>
                <li className={currentPath === '/contact' ? 'active' : ''}>
                  <Link to="/contact">Contact Us</Link>
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
