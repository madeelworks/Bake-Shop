import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      {/*================Banner Area =================*/}
      <section className="banner_area">
        <div className="container">
          <div className="banner_text">
            <h3>Contact Us</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </section>
      {/*================End Banner Area =================*/}

      {/*================Contact Form Area =================*/}
      <section className="contact_form_area p_100">
        <div className="container">
          <div className="main_title">
            <h2>Get In Touch</h2>
            <h5>Do you have anything in mind to let us know? Kindly don't hesitate to connect to us by means of our contact form.</h5>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <form className="row contact_us_form" action=" https://formspree.io/f/moqgaqbp" method="POST" id="contactForm" noValidate>
                <input type="hidden" name="_formspree" value="YOUR_FORM_NAME" />
                <div className="form-group col-md-6">
                  <input type="text" className="form-control" id="name" name="name" placeholder="Your name" />
                </div>
                <div className="form-group col-md-6">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Email address" />
                </div>
                <div className="form-group col-md-12">
                  <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" />
                </div>
                <div className="form-group col-md-12">
                  <textarea className="form-control" name="message" id="message" rows="1" placeholder="Write message"></textarea>
                </div>
                <div className="form-group col-md-12">
                  <button type="submit" className="btn order_s_btn form-control">submit now</button>
                </div>
              </form>
            </div>
            <div className="col-lg-4 offset-md-1">
              <div className="contact_details">
                <div className="contact_d_item">
                  <h3>Address :</h3>
                  <p>28 Usuma Street Maitama Abuja Fct</p>
                </div>
                <div className="contact_d_item">
                  <h5>Phone : <a href="tel:+2348170245555">+2348170245555</a></h5>
                  <h5>Email : <a href="mailto:Treatsbyminibakery@gmail.com">Treatsbyminibakery@gmail.com</a></h5>
                </div>
                <div className="contact_d_item">
                  <h3>Opening Hours :</h3>
                  <p>10:00 AM – 8:00 PM</p>
                  <p>Monday – Sunday</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Contact Form Area =================*/}

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8617300655633!2d7.495566578401442!3d9.076358867747128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0a49a8364dad%3A0xeafd39deb67c0cad!2s28%20Usuma%20St%2C%20Maitama%2C%20Abuja%20904101%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1702674274782!5m2!1sen!2sng" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      {/*================Special Area =================*/}
      <section className="special_area p_100">
        <div className="container">
          <div className="main_title">
            <h2>Treats by Mimi is now taking orders via WhatsApp. </h2>
            <h5>Send a message to [+234 8170245555].<br />
              Browse our menu or tell us your cravings.<br />
              Specify quantities, flavors, and any special requests.<br />
              Choose your preferred pick-up time or delivery option (if available).<br />
              We'll confirm your order and send you payment details.<br />
              Sit back, relax, and await your sweet treat! </h5>
          </div>
          <div className="special_item_inner">
            <div className="specail_item">
              <div className="row">
                <div className="col-lg-4">
                  <div className="s_left_img">
                    <img className="img-fluid" src="/img/special/special-1.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="special_item_text">
                    <h4>Call Or A Send Message </h4>
                    <a className="pink_btn" href="https://wa.me/c/2348170245555 ">WhatsApp</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="specail_item">
              <div className="row">
                <div className="col-lg-6">
                  <div className="s_item_left">
                    <div className="main_title">
                      <h2>Don't forget to:</h2>
                    </div>
                    <ul className="list_style">
                      <li>
                        <Link to="#">
                          Tell us your preferred pick-up location (if applicable).<br />
                          Feel free to ask us any questions about our menu or ingredients.<br />
                          We're excited to make your dessert dreams a reality, one WhatsApp message at a time!
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="s_right_img">
                    <img className="img-fluid" src="/img/product/product-details-1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Special Area =================*/}
    </div>
  );
};

export default Contact;
