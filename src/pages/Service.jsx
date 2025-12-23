import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Service = () => {
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

    // Arivals Slider
    function arivals_slider() {
      if ($('.arivals_slider').length) {
        $('.arivals_slider').owlCarousel({
          loop: true,
          margin: 30,
          items: 2,
          nav: false,
          autoplay: true,
          smartSpeed: 1500,
          dots: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
            },
            420: {
              items: 2,
            },
          }
        })
      }
    }
    arivals_slider();

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
            <h3>Services</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/service">Services</Link></li>
            </ul>
          </div>
        </div>
      </section>
      {/*================End Banner Area =================*/}

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

      {/*================Discover Menu Area =================*/}
      {/* <section className="discover_menu_area service_menu">
        <div className="discover_menu_inner">
          <div className="container">
            <div className="s_dis_title">
              <div className="float-left">
                <div className="main_title">
                  <h2>Various Flavors</h2>
                  <h5>You can also tell us what flavour you prefer </h5>
                </div>
              </div>
              <div className="float-right">
                <a className="pest_w_btn" href="https://www.instagram.com/p/CztD2gXItpu/?img_index=1 ">View Full Menu </a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="discover_item_inner">
                  <div className="discover_item">
                    <h4>Vanilla </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  <span>N18k -N100k </span></p>
                  </div>
                  <div className="discover_item">
                    <h4>Red Velvet </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  <span>N18k -N100k </span></p>
                  </div>
                  <div className="discover_item">
                    <h4> Nutmeg </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  <span>N18k -N100k </span></p>
                  </div>
                  <div className="discover_item">
                    <h4>Lemon </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  <span>N18k -N100k </span></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="discover_item_inner">
                  <div className="discover_item">
                    <h4>Orea</h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  <span>N18k -N100k </span></p>
                  </div>
                  <div className="discover_item">
                    <h4>Coffee</h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  <span>N18k -N100k </span></p>
                  </div>
                  <div className="discover_item">
                    <h4>Blueberry </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  <span>N18k -N100k </span></p>
                  </div>
                  <div className="discover_item">
                    <h4> Coconut </h4>
                    <p>4 feet tall , 6 feet tall ,8 feet tall , 10 feet tall  <span>N18k -N100k </span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*================End Discover Menu Area =================*/}

      {/*================New Arivals Area =================*/}
      {/* <section className="new_arivals_area p_100">
        <div className="container">
          <div className="single_pest_title">
            <h2> Christmas-themed flavored cakes </h2>
          </div>
          <div className="row arivals_inner">
            <div className="col-lg-6 col-sm-7">
              <div className="arivals_chocolate">
                <div className="arivals_pic">
                  <img className="img-fluid" src="/c3.PNG" alt="" />
                  <div className="price_text">
                    <h5>N73k</h5>
                  </div>
                </div>
                <div className="arivals_text">
                  <h4> Christmas cakes</h4>
                  <Link to="#"></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="arivals_slider owl-carousel">
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/c1.PNG" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>N67k </h4>
                      <h3> Christmas cakes</h3>
                      <Link className="pest_btn" to="#">Add to cart</Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/c2.PNG" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>N80k </h4>
                      <h3>Christmas cakes </h3>
                      <Link className="pest_btn" to="#">Add to cart</Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/c3.PNG" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>N260k</h4>
                      <h3>Christmas cakes </h3>
                      <Link className="pest_btn" to="#">Add to cart</Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="/c1.PNG" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>N67k </h4>
                      <h3> Christmas cakes </h3>
                      <Link className="pest_btn" to="#">Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*================End New Arivals Area =================*/}

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

export default Service;
