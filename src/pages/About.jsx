import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    const $ = window.jQuery;
    if (!$) return;

    // Arrivals Slider
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
            <h3>About Us</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
            </ul>
          </div>
        </div>
      </section>
      {/*================End Banner Area =================*/}

      {/*================Our Bakery Area =================*/}
      <section className="our_bakery_area" style={{ padding: '50px 0 20px 0' }}>
        <div className="container">
          <div className="our_bakery_text">
            <h2>About Us </h2>
            <h6>Dr-Yumd love for baking began at a young age. She would spend hours in the kitchen learning the secrets of creating the perfect cakes. After years of perfecting her craft,
              Yums decided to open her own bakery so she could share her delicious creations with the world.
            </h6>
            <p> We're passionate about crafting cakes, cupcakes, and other delights that tantalize your taste buds and bring joy to you and your special occasions.
              We believe that quality ingredients and meticulous attention to detail are essential for creating truly exceptional treats.  We believe that sharing sweet treats is a way to connect with loved ones, celebrate special occasions, and create lasting memories. We're passionate about being a part of your life's sweet moments, and we invite you to come visit us and experience the Treats by dr-yums difference. </p>
          </div>
          {/* <div className="row our_bakery_image">
            <div className="col-md-4 col-6">
              <img className="img-fluid" src="/p5.PNG" alt="" />
            </div>
            <div className="col-md-4 col-6">
              <img className="img-fluid" src="/p6.PNG" alt="" />
            </div>
            <div className="col-md-4 col-6">
              <img className="img-fluid" src="/p11.PNG" alt="" />
            </div>
          </div> */}
        </div>
      </section>
      {/*================End Our Bakery Area =================*/}

      {/*================Our Mission Area =================*/}
      {/* <section className="our_mission_area p_100">
        <div className="container">
          <div className="row our_mission_inner">
            <div className="col-lg-3">
              <div className="single_m_title">
                <h2>Our Mission</h2>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="mission_inner_text">
                <h6>At Dr-Yums, we believe that life’s sweetest moments deserve a touch of magic. We’re not just bakers; we’re creators of joy, crafting treats that spark smiles, fuel laughter, and make lasting memories.</h6><br />
                <p> At Dr-Yums, we believe that life’s sweetest moments deserve a little extra joy. Whether it’s a birthday cake with glowing candles or the joy of a warm croissant on a Sunday morning, we’re here to make every moment sweeter.<br /><br />
                Our bakery isn’t just a place; it’s a welcoming space where kindness and connection are shared. It’s where laughter and love come together over fresh, homemade treats.<br /><br />
                  We’re always looking for new ideas, experimenting with flavors and textures to bring you exciting new treats that will make your taste buds smile.<br /><br />
                  At Dr-Yums, we care about what we bake. We use the best local ingredients, taking care to treat them well and keep the planet and community in mind.<br /><br />
                 Dr-Yums isn’t just a bakery – it’s our promise to make your life a little sweeter, one delicious bite at a time. Come visit us and enjoy our handcrafted treats, and let us be part of your sweetest memories.</p>
                <ul className="nav">
                  <li><a>Custom cakes</a></li>
                  <li><a>Birthday cakes</a></li>
                  <li><a>Wedding cakes</a></li>
                  <li><a>Thank you Cakes </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*================End Our Mission Area =================*/}

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
                  <a href="#"></a>
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
                      <Link className="pest_btn" to="/cart">Add to cart</Link>
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
                      <Link className="pest_btn" to="/cart">Add to cart</Link>
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
                      <Link className="pest_btn" to="/cart">Add to cart</Link>
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
                      <Link className="pest_btn" to="/cart">Add to cart</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*================End New Arivals Area =================*/}

      {/*================Special Area =================*/}
      <section className="special_area" style={{ padding: '20px 0 100px 0' }}>
        <div className="container">
          {/* <div className="main_title">
            <h2>Treats by Mimi is now taking orders via WhatsApp. </h2>
            <h5>Send a message to [+234 8170245555].<br />
              Browse our menu or tell us your cravings.<br />
              Specify quantities, flavors, and any special requests.<br />
              Choose your preferred pick-up time or delivery option (if available).<br />
              We'll confirm your order and send you payment details.<br />
              Sit back, relax, and await your sweet treat! </h5>
          </div> */}
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
                    <h4>Our Baking Philosophy</h4>
                    <p>We believe that baking is an art form. Every cake, cookie, and pastry is crafted with precision, passion, and the finest ingredients. Our goal is not just to feed the body, but to delight the soul with every bite.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="specail_item">
              <div className="row">
                <div className="col-lg-6">
                  <div className="s_item_left">
                    <div className="main_title">
                      <h2>Why Choose Dr-Yums?</h2>
                    </div>
                    <ul className="list_style">
                      <li><a href="#">Fresh, locally sourced ingredients ensuring top quality.</a></li>
                      <li><a href="#">Custom designs tailored to your special occasions.</a></li>
                      <li><a href="#">A commitment to excellence and unforgettable taste.</a></li>
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

      {/*================Client Says Area =================*/}
      {/* <section className="client_says_area p_100">
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
      </section> */}
      {/*================End Client Says Area =================*/}
    </div>
  );
};

export default About;