import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="footer_widgets">
        <div className="container">
          <div className="row footer_wd_inner">
            <div className="col-lg-3 col-6">
              <aside className="f_widget f_about_widget">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                  <img style={{ height: '1.5cm', width: '2.5cm', borderRadius: '50%', marginRight: '10px' }} src="/logo1111.png" alt="" />
                  <span style={{ color: '#f195b2', fontSize: '24px', fontWeight: 'bold', fontFamily: '"Playfair Display", serif' }}>DR-Yums</span>
                </div>
                <p> Come visit us today and let us treat you to something sweet and special. We can't wait to share our passion for baking with you </p>
                <ul className="nav">
                  <li><a href="https://www.instagram.com/dr.yums/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                  <li><a href="https://wa.me/923413663416" target="_blank" rel="noopener noreferrer"><i className="fa fa-whatsapp"></i></a></li>
                  <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=dryums.bakery@gmail.com&su=Dr-Yums%20Inquiry&body=Hello%20Team," target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope"></i></a></li>
                  <li><a href="https://maps.app.goo.gl/PwxahMQcZxNpsrd58" target="_blank" rel="noopener noreferrer"><i className="fa fa-map-marker"></i></a></li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-3 col-6">
              <aside className="f_widget f_link_widget">
                <div className="f_title">
                  <h3>Quick links</h3>
                </div>
                <ul className="list_style">
                  <li><Link to="/">Home </Link></li>
                  <li><Link to="/about-us">About</Link></li>
                  <li><Link to="/cake">Cakes </Link></li>
                  <li><Link to="/service">Services </Link></li>
                  <li><Link to="/cart">Place Order </Link></li>
                  <li><Link to="/contact">Contact </Link></li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-3 col-6">
              <aside className="f_widget f_link_widget">
                <div className="f_title">
                  <h3>Work Times</h3>
                </div>
                <ul className="list_style">
                  <li><a >Mon : Fri : 9 am - 10 pm</a></li>
                  <li><a >Sat : Sun:  9am - 11 pm</a></li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-3 col-6">
              <aside className="f_widget f_contact_widget">
                <div className="f_title">
                  <h3>Contact Info</h3>
                </div>
                <h4>+92 341 3663416 </h4>
                <h5 className="mt-20">dryums.bakery@gmail.com</h5>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="container">
          <div className="copyright_inner text-center">
            <span style={{ color: '#767676', fontSize: '14px', fontFamily: '"Open Sans", sans-serif' }}>
              &copy; 2026 Dr-Yums. All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
