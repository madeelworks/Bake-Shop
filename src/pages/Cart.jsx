import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      {/*================Banner Area =================*/}
      <section className="banner_area">
        <div className="container">
          <div className="banner_text">
            <h3>Place Order</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cart">Place Order</Link></li>
            </ul>
          </div>
        </div>
      </section>
      {/*================End Banner Area =================*/}

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

export default Cart;
