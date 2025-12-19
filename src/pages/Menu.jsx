import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  useEffect(() => {
    const $ = window.jQuery;
    if (!$) return;

    // Special Recipe Slider
    function recipe_slider() {
      if ($('.special_recipe_slider').length) {
        $('.special_recipe_slider').owlCarousel({
          loop: true,
          margin: 0,
          items: 1,
          nav: false,
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          responsiveClass: true,
        })
      }
    }
    recipe_slider();

    // Client Says Slider
    function client_say_slider() {
      if ($('.client_says_slider').length) {
        $('.client_says_slider').owlCarousel({
          loop: true,
          margin: 30,
          items: 1,
          nav: false,
          autoplay: true,
          smartSpeed: 1500,
          dots: false,
          responsiveClass: true,
        })
      }
    }
    client_say_slider();

  }, []);

  return (
    <div>
      {/*================Banner Area =================*/}
      <section className="banner_area">
        <div className="container">
          <div className="banner_text">
            <h3>Menu</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
            </ul>
          </div>
        </div>
      </section>
      {/*================End Banner Area =================*/}

      {/*================Recipe Menu list Area =================*/}
      <section className="price_list_area p_100">
        <div className="container">
          <div className="price_list_inner">
            <div className="single_pest_title">
              <h2>Our Price List</h2>
              <div className="col-lg-6">
                <div className="welcome_img">
                  <img className="img-fluid" src="/m1.PNG" alt="" />
                  <img className="img-fluid" src="/m2.PNG" alt="" />
                  <img className="img-fluid" src="/m3.PNG" alt="" />
                  <img className="img-fluid" src="/m4.PNG" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Recipe Menu list Area =================*/}

      {/*================Service Offer Area =================*/}
      <section className="service_offer_area p_100">
        <div className="container">
          <div className="main_title">
            <h2>What We Offer</h2>
            <p>crafting delectable treats that elevate any occasion and tantalize every taste bud. With a dedication to quality and a passion for innovation, we offer a curated selection of handcrafted goodness that promises pure indulgence and lasting memories. </p>
          </div>
          <div className="row service_main_item_inner">
            <div className="col-lg-4 col-sm-6">
              <div className="service_m_item">
                <div className="service_img_inner">
                  <div className="service_img">
                    <img className="rounded-circle" src="/img/service/service-3.png" alt="" />
                  </div>
                </div>
                <div className="service_text">
                  <Link to="#"><h4>Valentines Day Cakes</h4></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service_m_item">
                <div className="service_img_inner">
                  <div className="service_img">
                    <img className="rounded-circle" src="/img/service/service-2.png" alt="" />
                  </div>
                </div>
                <div className="service_text">
                  <Link to="#"><h4>Birthday  Cakes</h4></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service_m_item">
                <div className="service_img_inner">
                  <div className="service_img">
                    <img className="rounded-circle" src="/img/service/service-3.png" alt="" />
                  </div>
                </div>
                <div className="service_text">
                  <Link to="#"><h4> Anniversaries Cakes</h4></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service_m_item">
                <div className="service_img_inner">
                  <div className="service_img">
                    <img className="rounded-circle" src="/img/service/service-4.png" alt="" />
                  </div>
                </div>
                <div className="service_text">
                  <Link to="#"><h4>Graduations Cakes</h4></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service_m_item">
                <div className="service_img_inner">
                  <div className="service_img">
                    <img className="rounded-circle" src="/img/service/service-2.png" alt="" />
                  </div>
                </div>
                <div className="service_text">
                  <Link to="#"><h4> Just Because Days Cakes</h4></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="service_m_item">
                <div className="service_img_inner">
                  <div className="service_img">
                    <img className="rounded-circle" src="/img/service/service-1.png" alt="" />
                  </div>
                </div>
                <div className="service_text">
                  <Link to="#"><h4>Religious Holidays Cakes</h4></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Service Offer Area =================*/}

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
                    <p></p>
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
                      <li><Link to="#">
                        Tell us your preferred pick-up location (if applicable).<br />
                        Feel free to ask us any questions about our menu or ingredients.<br />
                        We're excited to make your dessert dreams a reality, one WhatsApp message at a time! </Link></li>
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

      {/*================Special Recipe Area =================*/}
      <section className="special_recipe_area">
        <div className="container">
          <div className="special_recipe_slider owl-carousel">
            <div className="item">
              <div className="media">
                <div className="d-flex">
                  <img src="/img/recipe/recipe-1.png" alt="" />
                </div>
                <div className="media-body">
                  <h4>Planning a party or event </h4>
                  <p> Ovenly Delights is your one-stop shop for delicious and stress-free catering. We offer a variety of catering packages to suit your needs, from intimate gatherings to large celebrations. We'll work with you to create a custom menu that will wow your guests and leave them wanting more.   </p>
                  <Link className="w_view_btn" to="/service">View Details</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="media">
                <div className="d-flex">
                  <img src="/img/recipe/recipe-1.png" alt="" />
                </div>
                <div className="media-body">
                  <h4>A Menu Made for Moments </h4>
                  <p> Our delectable menu goes beyond just cookies and cakes. We offer a variety of freshly baked breads, pastries, and savory treats perfect for any occasion. From flaky croissants and muffins for breakfast to quiche and tarts for lunch, we have something to tantalize your taste buds all day long. </p>
                  <Link className="w_view_btn" to="/service">View Details</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="media">
                <div className="d-flex">
                  <img src="/img/recipe/recipe-1.png" alt="" />
                </div>
                <div className="media-body">
                  <h4>Sweet Treats Delivered to Your Door  </h4>
                  <p> We offer convenient delivery right to your doorstep, so you can enjoy our treats fresh from the oven. Whether it's a surprise cookie box for a loved one or a full dessert spread for your next party, we'll make sure it arrives safely and deliciously.  </p>
                  <Link className="w_view_btn" to="/service">View Details</Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="media">
                <div className="d-flex">
                  <img src="/img/recipe/recipe-1.png" alt="" />
                </div>
                <div className="media-body">
                  <h4>Wedding Cakes: The Sweetest Start to Your Forever </h4>
                  <p>Your dream wedding cake awaits at Ovenly Delights! We work closely with you to design a cake that reflects your love story, from traditional tiered masterpieces to modern naked cakes adorned with fresh fruit. We also offer a variety of flavors, fillings, and frostings to ensure your cake is as delicious as it is beautiful.  </p>
                  <Link className="w_view_btn" to="/service">View Details</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Special Recipe Area =================*/}

      {/*================Client Says Area =================*/}
      <section className="client_says_area p_100">
        <div className="container">
          <div className="client_says_inner">
            <div className="c_says_title">
              <h2>What Our Client Says</h2>
            </div>
            <div className="client_says_slider owl-carousel">
              <div className="item">
                <div className="media">
                  <div className="d-flex">
                    <h3>“</h3>
                  </div>
                  <div className="media-body">
                    <p>So in love with the cupcakes the taste was really something to write home about .</p>
                    <h5>- Kelly </h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="d-flex">
                  </div>
                  <div className="media-body">
                    <p>They really came throuhg for my birthday party with the stawberry covered cake will mostly likely use them next year again .</p>
                    <h5>- Anna </h5>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="media">
                  <div className="d-flex">
                  </div>
                  <div className="media-body">
                    <p>My go to cake shop in abuja i stop through  for the donuts and browines </p>
                    <h5>- Ebuka </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*================End Client Says Area =================*/}
    </div>
  );
};

export default Menu;